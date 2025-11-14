header.innerHTML = `<div class="header">
        <div class="logo">
                <img src="images/logo.png" alt="Logo">
        </div>
        <div class="menu">
                <div>
                        <a href="index.html">Home</a>
                        <a href="prices.html">Prijzen</a>
                        <a href="about.html">Over mij</a>
                </div>
                <div class="menu-laser-bar">
                        <div class="menu-laser-white"></div>
                        <div class="menu-laser-red"></div>
                </div>
        </div>
</div>`;

// Laser fill effect logic
setTimeout(() => {
    const menu = document.querySelector('.menu div');
    const laserBar = document.querySelector('.menu-laser-bar');
    const whiteLaser = document.querySelector('.menu-laser-white');
    const redLaser = document.querySelector('.menu-laser-red');
    function setWhiteLaser() {
        whiteLaser.style.left = 0;
        whiteLaser.style.width = menu.offsetWidth + 'px';
    }
    setWhiteLaser();
    window.addEventListener('resize', setWhiteLaser);
    function moveLaserTo(el) {
        const menuRect = menu.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const left = elRect.left - menuRect.left;
        const width = elRect.width;
        redLaser.style.left = left + 'px';
        redLaser.style.width = width + 'px';
        redLaser.style.opacity = 1;
        redLaser.style.transform = 'scaleX(1)';
    }
    function hideLaser() {
        redLaser.style.opacity = 0;
        redLaser.style.transform = 'scaleX(0)';
    }
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let activeLink = null;

    menu.querySelectorAll('a').forEach(a => {
        // Check if this link is for the current page
        const linkHref = a.getAttribute('href');
        const isActive = linkHref === currentPage || 
                        (currentPage === '' && linkHref === 'index.html') ||
                        (currentPage === 'index.html' && linkHref === 'index.html');
        
        if (isActive) {
            activeLink = a;
            // Style the active link
            a.style.color = '#d10125';
            a.classList.add('active');
        }

        a.addEventListener('mouseenter', () => moveLaserTo(a));
        a.addEventListener('mouseleave', () => {
            if (activeLink) {
                moveLaserTo(activeLink); // Keep laser on active page
            } else {
                hideLaser();
            }
        });
        a.addEventListener('focus', () => moveLaserTo(a));
        a.addEventListener('blur', () => {
            if (activeLink) {
                moveLaserTo(activeLink); // Keep laser on active page
            } else {
                hideLaser();
            }
        });
    });

    // Set initial laser position to active page
    if (activeLink) {
        moveLaserTo(activeLink);
    } else {
        hideLaser();
    }
}, 0);

