module.exports = {
    title: 'UAG Handbook',
    description: 'A handy tome for the scholarly contractor',
    base: '/',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/uagLogo.png' }]
    ],
    serviceWorker: true,
    themeConfig: {
		sidebar: {
		  '/ch0/': [
			'',
			[ "getting-started", "Section 1: Getting Started" ],
			'reserves-system'
		  ]
		},
		sidebarDepth: 4,
		displayAllHeaders: false,
		activeHeaderLinks: false,
		lastUpdated: true,
		nav: [
			{
				text: 'Chapters',
			items: [
				{ text: 'Chapter 0: An Introduction', link: '/ch0/' },
				{ text: 'Chapter 1: The Basics', link: '/ch1/' },
				{ text: 'Chapter 2: Advanced Techniques', link: '/ch2/' },
				{ text: 'Chapter 3: Leadership', link: '/ch3/' }
			]
			}
		],
		serviceWorker: { 
			updatePopup: {
				message: 'This page just got updated!',
			buttonText: 'Refresh?'
			}
		},
		repo: 'https://gitlab.com/uag/handbook',
		repoLabel: 'Contribute!',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!'
    },
	markdown: {
		lineNumbers: true
	},
	plugins: [
		'flowchart'
	]
}
