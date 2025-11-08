// Package object structure: {type, length, description, points, size, price, quality}

const pakketten = [
    // === INTERIOR BOOST ===
    {
        type: "Interior",
        length: "2 tot 3 uur",
        description: "Voor interieur dat niet extreem vervuild is, maar wel een frisse, schone uitstraling moet krijgen. Een grondige detail-opfrisbeurt waarbij stof, zand en zichtbaar vuil professioneel worden verwijderd.",
        points: "* Diepte-reiniging met stofzuiger + luchtcompressor\n* Reiniging van vloeren en matten\n* Stoelen oppervlakkig reinigen\n* Deurpanelen, dashboard & middenconsole reinigen\n* Kofferbak stofzuigen en afwerken",
        size: "Klein",
        price: 79,
        quality: "Interior Boost"
    },
    {
        type: "Interior",
        length: "2 tot 3 uur",
        description: "Voor interieur dat niet extreem vervuild is, maar wel een frisse, schone uitstraling moet krijgen. Een grondige detail-opfrisbeurt waarbij stof, zand en zichtbaar vuil professioneel worden verwijderd.",
        points: "* Diepte-reiniging met stofzuiger + luchtcompressor\n* Reiniging van vloeren en matten\n* Stoelen oppervlakkig reinigen\n* Deurpanelen, dashboard & middenconsole reinigen\n* Kofferbak stofzuigen en afwerken",
        size: "Middel",
        price: 95,
        quality: "Interior Boost"
    },
    {
        type: "Interior",
        length: "2 tot 3 uur",
        description: "Voor interieur dat niet extreem vervuild is, maar wel een frisse, schone uitstraling moet krijgen. Een grondige detail-opfrisbeurt waarbij stof, zand en zichtbaar vuil professioneel worden verwijderd.",
        points: "* Diepte-reiniging met stofzuiger + luchtcompressor\n* Reiniging van vloeren en matten\n* Stoelen oppervlakkig reinigen\n* Deurpanelen, dashboard & middenconsole reinigen\n* Kofferbak stofzuigen en afwerken",
        size: "Groot",
        price: 109,
        quality: "Interior Boost"
    },

    // === ULTIMATE CLEAN ===
    {
        type: "Interior",
        length: "3 tot 4 uur",
        description: "Voor interieurs met hardnekkige vervuiling of vlekken in stoelen en matten. Stoffen oppervlakken worden stoomgereinigd en diep geëxtraheerd voor een zichtbaar schoon en fris interieur.",
        points: "* Stoomreiniging + dieptereiniging met extractor (stoelen & matten)\n* Diepte-stofzuigen + uitblazen met luchtcompressor\n* Reiniging van vloeren en matten\n* Deurpanelen, dashboard & middenconsole reinigen\n* Kofferbak stofzuigen en afwerken",
        size: "Klein",
        price: 109,
        quality: "Ultimate Clean"
    },
    {
        type: "Interior",
        length: "3 tot 4 uur",
        description: "Voor interieurs met hardnekkige vervuiling of vlekken in stoelen en matten. Stoffen oppervlakken worden stoomgereinigd en diep geëxtraheerd voor een zichtbaar schoon en fris interieur.",
        points: "* Stoomreiniging + dieptereiniging met extractor (stoelen & matten)\n* Diepte-stofzuigen + uitblazen met luchtcompressor\n* Reiniging van vloeren en matten\n* Deurpanelen, dashboard & middenconsole reinigen\n* Kofferbak stofzuigen en afwerken",
        size: "Middel",
        price: 129,
        quality: "Ultimate Clean"
    },
    {
        type: "Interior",
        length: "3 tot 4 uur",
        description: "Voor interieurs met hardnekkige vervuiling of vlekken in stoelen en matten. Stoffen oppervlakken worden stoomgereinigd en diep geëxtraheerd voor een zichtbaar schoon en fris interieur.",
        points: "* Stoomreiniging + dieptereiniging met extractor (stoelen & matten)\n* Diepte-stofzuigen + uitblazen met luchtcompressor\n* Reiniging van vloeren en matten\n* Deurpanelen, dashboard & middenconsole reinigen\n* Kofferbak stofzuigen en afwerken",
        size: "Groot",
        price: 149,
        quality: "Ultimate Clean"
    },

    // === SHINE BOOST ===
    {
        type: "Exterior",
        length: "1 tot 2 uur",
        description: "Voor auto's die een grondige, lakveilige wasbeurt verdienen. Ik werk met de 2-emmermethode en hoogwaardige detailproducten om krasvrij en streeploos resultaat te garanderen. Dankzij de ceramische shampoo krijgt de lak direct weer glans én een water- en vuilafstotende beschermlaag.",
        points: "* Voorwas met Snow Foam\n* Handwas met Ceramic Shampoo\n* Velgen & banden grondig reinigen\n* Afspoelen met hogedrukreiniger\n* Drogen met zachte microvezeldoeken",
        size: "Klein",
        price: 59,
        quality: "Shine Boost"
    },
    {
        type: "Exterior",
        length: "1 tot 2 uur",
        description: "Voor auto's die een grondige, lakveilige wasbeurt verdienen. Ik werk met de 2-emmermethode en hoogwaardige detailproducten om krasvrij en streeploos resultaat te garanderen. Dankzij de ceramische shampoo krijgt de lak direct weer glans én een water- en vuilafstotende beschermlaag.",
        points: "* Voorwas met Snow Foam\n* Handwas met Ceramic Shampoo\n* Velgen & banden grondig reinigen\n* Afspoelen met hogedrukreiniger\n* Drogen met zachte microvezeldoeken",
        size: "Middel",
        price: 69,
        quality: "Shine Boost"
    },
    {
        type: "Exterior",
        length: "1 tot 2 uur",
        description: "Voor auto's die een grondige, lakveilige wasbeurt verdienen. Ik werk met de 2-emmermethode en hoogwaardige detailproducten om krasvrij en streeploos resultaat te garanderen. Dankzij de ceramische shampoo krijgt de lak direct weer glans én een water- en vuilafstotende beschermlaag.",
        points: "* Voorwas met Snow Foam\n* Handwas met Ceramic Shampoo\n* Velgen & banden grondig reinigen\n* Afspoelen met hogedrukreiniger\n* Drogen met zachte microvezeldoeken",
        size: "Groot",
        price: 79,
        quality: "Shine Boost"
    },

    // === SHINE & PROTECT ===
    {
        type: "Exterior",
        length: "3 tot 4 uur",
        description: "Ideaal voor lak die ruw of dof aanvoelt. De auto wordt diep gereinigd, gekleid en professioneel beschermd met een keramische sealant voor een gladde, diepe glans en waterafstotende lak – zichtbaar verschil direct na afloop.",
        points: "* Snowfoam voorwas\n* Handwas met Ceramic Shampoo\n* Drogen met microvezel droogdoek\n* Lak decontaminatie met professionele Clay Mitt + lubricant\n* Aanbrengen met Ceramic Seal\n* Ramen reinigen\n* Velgen reinigen",
        size: "Klein",
        price: 119,
        quality: "Shine & Protect"
    },
    {
        type: "Exterior",
        length: "3 tot 4 uur",
        description: "Ideaal voor lak die ruw of dof aanvoelt. De auto wordt diep gereinigd, gekleid en professioneel beschermd met een keramische sealant voor een gladde, diepe glans en waterafstotende lak – zichtbaar verschil direct na afloop.",
        points: "* Snowfoam voorwas\n* Handwas met Ceramic Shampoo\n* Drogen met microvezel droogdoek\n* Lak decontaminatie met professionele Clay Mitt + lubricant\n* Aanbrengen met Ceramic Seal\n* Ramen reinigen\n* Velgen reinigen",
        size: "Middel",
        price: 139,
        quality: "Shine & Protect"
    },
    {
        type: "Exterior",
        length: "3 tot 4 uur",
        description: "Ideaal voor lak die ruw of dof aanvoelt. De auto wordt diep gereinigd, gekleid en professioneel beschermd met een keramische sealant voor een gladde, diepe glans en waterafstotende lak – zichtbaar verschil direct na afloop.",
        points: "* Snowfoam voorwas\n* Handwas met Ceramic Shampoo\n* Drogen met microvezel droogdoek\n* Lak decontaminatie met professionele Clay Mitt + lubricant\n* Aanbrengen met Ceramic Seal\n* Ramen reinigen\n* Velgen reinigen",
        size: "Groot",
        price: 159,
        quality: "Shine & Protect"
    }
];

// Make pakketten available globally for browser use
window.pakketten = pakketten;

// Export the packages array for use in other files (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pakketten;
}