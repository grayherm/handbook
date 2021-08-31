const fs = require("fs");

module.exports = {
  title: "UAG Handbook",
  description: "A handy tome for the scholarly contractor",
  base: "/",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/uagLogo.png",
      },
    ],
  ],
  serviceWorker: true,
  themeConfig: {
    sidebar: {
      "/": [
        getSidebar("0-fundamentals", "0: Fundamentals", [
          "0-using-this-handbook",
          "1-about-the-unit",
          "2-code-of-conduct",
          "3-first-time-setup",
        ]),
        // getSidebar("infantryman-basics", "1: Infantryman Basics", [
        //   "the-section",
        //   "making-a-loadout",
        //   "movement-techniques",
        //   "situational-awareness",
        //   "orienteering",
        //   "basic-marksmanship",
        //   "grenades",
        //   "basic-medical-procedures",
        //   "communication",
        //   "basic-driving-skills",
        //   "military-operations-in-urban-terrain",
        //   "individual-initiative",
        //   "fighting-at-night",
        // ]),
        // getSidebar("infantryman-specialisations","2: Infantryman Specialisations", [
        //   "bitch boy",
        //   "pointman",
        //   "marksman",
        //   "autorifleman",
        //   "grenadier",
        //   "light anti-tank",
        //   "corpsman",
        // ]),
        getSidebar("3-advanced-techniques", "3: Advanced Techniques", [
          //   "1-machinegun-specialist",
          //   "2-anti-tank-specialist",
          //   "3-anti-air-specialist",
          //   "4-advanced-medical-procedures",
          //   "5-armoured-combat",
          //   "6-crew-served-weapons",
          //   "7-engineers",
          //   "8-airborne-infantry",
          "9-uav-operator",
          //   "10reconnaissance",
          //   "11-artillery",
          //   "12-survival-evasion-resistance-escape",
          //   "13-special-operations",
          //   "14-guerilla-warfare",
          //   "15-marine-operations",
          //   "16-divers",
        ]),
        // getSidebar("aviation","4: Aviation", [
        //   "text",
        // ]),
        // getSidebar("leadership","5: Leadership", [
        //   "unit-organisation",
        //   "fireteam-leader",
        //   "section-commander",
        //   "crossroads",
        //   "mission-preparation",
        //   "advanced-reporting",
        //   "firemission-coordination",
        //   "firefight-theory",
        //   "assault-theory",
        //   "defence-theory",
        //   "ambush-tactics",
        //   "combat-egress",
        //   "convoy-operations",
        //   "combined-arms",
        //   "common-leadership-problems",
        // ]),
        // getSidebar("staff","6: Staff"),
        getSidebar("resources", "Resources", ["orbats"]),
      ],
    },
    sidebarDepth: 2,
    displayAllHeaders: false,
    activeHeaderLinks: true,
    lastUpdated: true,
    nav: [
      {
        text: "Important Links",
        items: [
          {
            text: "Code of Conduct",
            link: "/0-fundamentals/2-code-of-conduct",
          },
          {
            text: "First Time Setup",
            link: "/0-fundamentals/3-first-time-setup",
          },
          {
            text: "ORBATs",
            link: "/resources/orbats",
          },
        ],
      },
    ],
    serviceWorker: {
      updatePopup: {
        message: "This page just got updated!",
        buttonText: "Refresh?",
      },
    },
    repo: "https://github.com/uagpmc/handbook",
    repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    // algolia: {
    //   apiKey: "ad618428dcffec7d35c9f77b544b1d9a",
    //   indexName: "uagpmc",
    // },
    searchPlaceholder: "Search...",
  },
  markdown: {
    toc: { includeLevel: [1, 2] },
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"), { enabled: true });
    },
  },
  plugins: [
    "@vuepress/nprogress",
    "@vuepress/back-to-top",
    require("./darkreader.js"),
  ],
};

function getSidebar(directory, title, order) {
  let _fileScan = fs.readdirSync(__dirname + "/../" + directory);

  if (order) {
    order.reverse();
    for (let i = 0; i < order.length; i++) {
      _fileScan.unshift(order[i] + ".md");

      //create temporary var to swap indexes 0 and 1, why isn't there just a swap() method?
      let temp = _fileScan[1];
      _fileScan[1] = _fileScan[0];
      _fileScan[0] = temp;
    }
    //fancy new ES6 thing, map all elements of _fileScan to a new "set" which is an array without duplicates!
    _fileScan = [...new Set(_fileScan)];
  }

  let _children = _fileScan.map(function (_x) {
    let returned = directory + "/" + _x.replace(".md", "");

    if (returned.includes("README")) {
      returned = returned.replace("README", "");
    }

    return "/" + returned;
  });
  let _sidebarConfig = {
    title: title,
    collapsable: true,
    children: _children,
  };
  return _sidebarConfig;
}
