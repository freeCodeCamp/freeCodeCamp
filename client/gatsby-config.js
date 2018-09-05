module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp',
    siteUrl: 'https://www.freecodecamp.org'
  },
  proxy: {
    prefix: '/internal',
    url: 'http://localhost:3000'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/certification/*'] }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'freeCodeCamp',
        short_name: 'fCC',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#006400',
        display: 'minimal-ui',
        icon: 'src/images/square_puck.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sitemap'
  ]
};
