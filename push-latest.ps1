param(
    [string]$Message = "Update: latest changes"
)

# Try to find git executable
$gitCandidates = @("C:\Program Files\Git\cmd\git.exe","C:\Program Files\Git\bin\git.exe","C:\Program Files\Git\mingw64\bin\git.exe","git")
$git = $gitCandidates | Where-Object { Test-Path $_ -PathType Leaf -ErrorAction SilentlyContinue } | Select-Object -First 1
if (-not $git) {
    # if 'git' (in PATH) exists, Test-Path with "git" will fail — try running git --version
    try {
        & git --version > $null 2>&1
        $git = "git"
    } catch {
        Write-Error "Git executable not found. Please install Git or add it to PATH and re-run this script."
        exit 1
    }
}

Write-Host "Using git: $git" -ForegroundColor Cyan

# ensure script runs from repo root
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path $scriptDir

# show status
Write-Host "\n-- git status --" -ForegroundColor Yellow
& $git status

# fetch and rebase main
Write-Host "\n-- Fetching remote and rebasing main --" -ForegroundColor Yellow
& $git fetch origin
# ensure branch 'main' exists locally
try {
    & $git rev-parse --verify main > $null 2>&1
    & $git checkout main
} catch {
    # if main doesn't exist locally, create it from origin/main if available
    try { & $git checkout -b main origin/main } catch { Write-Host "No local or remote 'main' branch found. Continuing on current branch." }
}

# rebase
try {
    & $git pull --rebase origin main
} catch {
    Write-Host "Rebase failed or no remote main; continuing. Resolve conflicts manually if needed." -ForegroundColor Yellow
}

# stage all changes
Write-Host "\n-- Staging all changes --" -ForegroundColor Yellow
& $git add -A

# commit if there are changes
$status = & $git status --porcelain
if ($status) {
    Write-Host "Changes detected, creating commit with message: $Message" -ForegroundColor Green
    & $git commit -m $Message
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

# push
Write-Host "\n-- Pushing to origin main --" -ForegroundColor Yellow
try {
    & $git push origin main
    Write-Host "Push complete." -ForegroundColor Green
} catch {
    Write-Error "Push failed. Please check authentication or remote configuration. Error: $_"
}
