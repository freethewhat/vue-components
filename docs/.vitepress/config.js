export default {
  title: 'aww yea',
  description: 'just playing around',
  themeConfig: {
    siteTitle: 'Vue Components Library',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Components', link: '/components/' },
      { text: 'About', link: '/about' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
          ],
        },
        {
          text: 'Components',
          items: [
            { text: 'Icons', link: '/components/icon' },
            { text: 'Cards', link: '/components/card' },
          ],
        },
      ],
    },
  },
};
