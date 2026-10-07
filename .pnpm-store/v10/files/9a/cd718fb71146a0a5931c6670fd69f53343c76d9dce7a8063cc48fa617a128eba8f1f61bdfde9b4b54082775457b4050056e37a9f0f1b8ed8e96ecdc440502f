# gatsby-plugin-page-creator

Gatsby plugin that automatically creates pages from React components in specified directories. Gatsby
includes this plugin automatically in all sites for creating pages from components in `src/pages`. You can also leverage the [File System Route API](https://www.gatsbyjs.com/docs/file-system-route-api/) to programmatically create pages from your data.

You may include another instance of this plugin if you'd like to create additional "pages" directories or want to override the default usage.

With this plugin, _any_ file that lives in the specified pages folder (e.g. the default `src/pages`) or subfolders will be expected to export a React Component to generate a Page. The following files are automatically excluded:

- `template-*`
- `__tests__/*`
- `*.test.jsx?`
- `*.spec.jsx?`
- `*.d.tsx?`
- `*.json`
- `*.yaml`
- `_*`
- `.*`

To exclude custom patterns, see [Ignoring Specific Files](#ignoring-specific-files)

## Install

`npm install gatsby-plugin-page-creator`

## How to use

Add the plugin to your `gatsby-config.js`:

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    // You can have multiple instances of this plugin
    // to create pages from React components in different directories.
    //
    // The following sets up the pattern of having multiple
    // "pages" directories in your project
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/account/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/settings/pages`,
      },
    },
    // You can also overwrite the default behavior for src/pages
    // This changes the page-creator instance used by Gatsby
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`foo-bar.js`],
      },
    },
  ],
}
```

## Options

The plugin supports options to ignore files and to pass options to the [`slugify`](https://github.com/sindresorhus/slugify) instance that is used in the File System Route API to create slugs.

| Option  | Type                                                 | Description                                                                                                                                                  | Required |
| ------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| path    | `string`                                             | Any file that lives inside this directory will be expected to export a React component to generate a page                                                    | true     |
| ignore  | `IPathIgnoreOptions ∣ string ∣ Array<string> ∣ null` | Ignore certain files inside the directory specified with `path`                                                                                              | false    |
| slugify | `ISlugifyOptions`                                    | Pass [options](https://github.com/sindresorhus/slugify#options) to the `slugify` instance that is used inside the File System Route API to generate the slug | false    |

### Ignoring Specific Files

#### Shorthand

The following example will disable the `/blog` index page:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/indexes/pages`,
        ignore: [`blog.(js|ts)?(x)`],
        // See pattern syntax recognized by micromatch
        // https://www.npmjs.com/package/micromatch#matching-features
      },
    },
  ],
}
```

**NOTE**: The above code snippet will only stop the creation of the `/blog` page, which is defined as a React component.
This plugin does not affect programmatically generated pages from the [createPages](https://www.gatsbyjs.com/docs/node-apis#createPages) API.

#### Ignore Options

The following example will ignore pages using case-insensitive matching:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/examples/pages`,
        ignore: {
          // Example: Ignore `file.example.js`, `dir/s/file.example.tsx`
          patterns: [`**/*.example.(js|ts)?(x)`],
          // Example: Match both `file.example.js` and `file.EXAMPLE.js`
          options: { nocase: true },
          // See all available micromatch options
          // https://www.npmjs.com/package/micromatch#optionsnocase
        },
      },
    },
  ],
}
```
