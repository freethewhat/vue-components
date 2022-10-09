import DefaultTheme from 'vitepress/theme';
export default {
  ...DefaultTheme,
  layout: {
    siteTitle: 'testing',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Components', link: '/components' },
      { text: 'About', link: '/about' },
    ],
  },
};
