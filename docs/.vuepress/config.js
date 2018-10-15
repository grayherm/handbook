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
	sidebar: 'auto',
	displayAllHeaders: false,
	activeHeaderLinks: false,
	lastUpdated: true,
	nav: [
	    {
	        text: 'Chapters',
		items: [
		    { text: 'Chapter 0: An Introduction', link: '/ch0/' },
		    { text: 'Chapter 1: The Basics', link: '#' },
		    { text: 'Chapter 2: Advanced Techniques', link: '#' },
		    { text: 'Chapter 4: Leadership', link: '#' }
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
    }
}
