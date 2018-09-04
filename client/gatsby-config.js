module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sitemap'
  ]
};
