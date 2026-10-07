# gatsby-plugin-react-helmet

Provides drop-in support for server rendering data added with
[React Helmet](https://github.com/nfl/react-helmet).

React Helmet is a component which lets you control your document head using
their React component.

With this plugin, attributes you add in their component, e.g. title, meta
attributes, etc. will get added to the static HTML pages Gatsby builds.

This is important not just for site viewers, but also for SEO -- title and description metadata stored in the document head is a key component used by Google in determining placement in search results.

## ⚠️ This package will be deprecated

The `gatsby-plugin-react-helmet` package will be deprecated in the future. The new [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) is easier to use, more performant, has a smaller bundle size, and supports the latest React features. Update to `gatsby@^4.19.0` to use it.

## Install

```shell
npm install gatsby-plugin-react-helmet react-helmet
```

## How to use

Just add the plugin to the plugins array in your `gatsby-config.js`

```javascript
plugins: [`gatsby-plugin-react-helmet`]
```

## Titles don't appear when opening in the background, while using `gatsby-plugin-offline`

If you're using `gatsby-plugin-offline`, you might notice that when opening a link in the background, the title doesn't appear in the tab bar until switching to that tab. This is an [upstream issue with React Helmet](https://github.com/nfl/react-helmet/issues/315); however, it can be worked around by passing the `defer={false}` prop into your `Helmet` component. For example:

```jsx
<Helmet title="foo bar" defer={false} />
```

## Compatibility with React 16.8 useEffect hook

If you are using this plugin with React hooks, you may notice some errors like `maximum call stack size exceeded`. To ensure everything is running smoothly when using these technologies together, make sure to validate the following:

- You have updated to the latest version of `gatsby-plugin-react-helmet`
- You are using version 6.0.0-beta or later of `react-helmet`
- You are importing React Helmet using `import { Helmet } from 'react-helmet'` rather than the old `import Helmet from 'react-helmet'`
