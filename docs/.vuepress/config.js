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
        href: "/uagLogo.png"
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    sidebar: {
      "/ch0/": [
        "",
        "code-of-conduct",
        "getting-started",
        "reserves-system",
        "unit-organisation"
      ],
      "/ch1/": ["", "medical-procedures", "autorifleman-basics"],
      "/ch2/": ["", "reconnaissance-team", "uav-operator"]
    },
    sidebarDepth: 4,
    displayAllHeaders: false,
    activeHeaderLinks: false,
    lastUpdated: true,
    nav: [
      {
        text: "Chapters",
        items: [
          {
            text: "Chapter 0: An Introduction",
            link: "/ch0/"
          },
          {
            text: "Chapter 1: The Basics",
            link: "/ch1/"
          },
          {
            text: "Chapter 2: Advanced Techniques",
            link: "/ch2/"
          },
          {
            text: "Chapter 3: Leadership",
            link: "/ch3/"
          }
        ]
      }
    ],
    serviceWorker: {
      updatePopup: {
        message: "This page just got updated!",
        buttonText: "Refresh?"
      }
    },
    repo: "https://gitlab.com/uag/handbook",
    repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    algolia: {
      apiKey: "ad618428dcffec7d35c9f77b544b1d9a",
      indexName: "uagpmc"
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ["flowchart"]
};
