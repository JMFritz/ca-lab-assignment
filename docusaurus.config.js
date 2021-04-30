/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cloud Academy Lab Submission',
  tagline: 'Jun Marcel Fritz',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'ca-lab-assignment', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Cloud Academy Lab Submission',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Start Lab',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
