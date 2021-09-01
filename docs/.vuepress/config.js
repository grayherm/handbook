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
        // getSidebar("1-infantryman-basics", "1: Infantryman Basics", [
        //   "1-the-section",
        //   "2-making-a-loadout",
        //   "3-movement-techniques",
        //   "4-situational-awareness",
        //   "5-orienteering",
        //   "6-basic-marksmanship",
        //   "7-grenades",
        //   "8-basic-medical-procedures",
        //   "9-communication",
        //   "10-basic-driving-skills",
        //   "11-military-operations-in-urban-terrain",
        //   "12-individual-initiative",
        //   "13-fighting-at-night",
        // ]),
        // getSidebar("2-infantryman-specialisations","2: Infantryman Specialisations", [
        //   "1-bitch boy",
        //   "2-pointman",
        //   "3-marksman",
        //   "4-autorifleman",
        //   "5-grenadier",
        //   "6-light anti-tank",
        //   "7-corpsman",
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
        // getSidebar("4-aviation","4: Aviation", [
        //   "1-something",
        // ]),
        // getSidebar("5-leadership","5: Leadership", [
        //   "1-unit-organisation",
        //   "2-fireteam-leader",
        //   "3-section-commander",
        //   "4-crossroads",
        //   "5-mission-preparation",
        //   "6-advanced-reporting",
        //   "7-firemission-coordination",
        //   "8-firefight-theory",
        //   "9-assault-theory",
        //   "10-defence-theory",
        //   "11-ambush-tactics",
        //   "12-combat-egress",
        //   "13-convoy-operations",
        //   "14-combined-arms",
        //   "15-common-leadership-problems",
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
