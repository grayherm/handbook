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
	lastUpdated: true
    }
}
