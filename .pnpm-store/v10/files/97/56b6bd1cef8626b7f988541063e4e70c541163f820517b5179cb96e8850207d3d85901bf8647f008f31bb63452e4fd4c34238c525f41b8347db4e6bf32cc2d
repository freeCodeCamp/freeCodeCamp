// @ts-check

/**
 * List of adapters that should be automatically installed if not present already.
 * The first item which test function returns `true` will be used.
 * 
 * If you're the author of an adapter and want to add it to this list, please open a PR!
 * If you want to create an adapter, please see: http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/creating-an-adapter/
 * 
 * @type {Array<import("./src/utils/adapter/types").IAdapterManifestEntry>}
 * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/zero-configuration-deployments/
 */
const adaptersManifest = [
    {
    name: `Netlify`,
    module: `gatsby-adapter-netlify`,
    test: () => !!process.env.NETLIFY || !!process.env.NETLIFY_LOCAL,
    versions: [
      {
        gatsbyVersion: `^5.12.10`,
        moduleVersion: `^1.2.1`,
      },
      {
        gatsbyVersion: `>=5.0.0 <5.12.10`,
        moduleVersion: `>=1.0.0 <=1.0.3`,
      }
    ],
  }
]

module.exports = adaptersManifest
