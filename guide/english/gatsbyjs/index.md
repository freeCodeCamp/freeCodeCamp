---
title: Gatsby.js
---

## Gatsby.js

[Gatsby](https://www.gatsbyjs.org) is a static site generator for [React](https://guide.freecodecamp.org/react), powered by [GraphQL](https://graphql.org/). 
Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.

The Gatsby environment provides several "starters" to help configure static sites quickly. Starters can be found here: [Starter Library](https://www.gatsbyjs.org/starters/).

### How Gatsby works
Gatsby builds sites with the data provided by developer, regardless of the source.

#### Data sources
Gatsby accepts the data behind the site in various formats, such as:

1. CMSs: Wordpress, Contenful, Drupal, etc.
2. Markdown: Documentation, posts, etc.
3. Data: APIs, Databasses, JSON, CSV, etc.

#### Build 
Gatsby's build is powered by GraphQL and rendered through HTML, CSS, and React.
Since Gatsby is built on React you straight away get all the things we love about React, like composability, one-way binding, resuability, great environment and allows you to query your data however you want!

#### Deploy 
Gatsby deploys the site on a static web host such as Amazon S3, Netlify, GitHub Pages, Surge.sh and many more.

### Installation and using the Gatsby CLI
* Node: `npm install --global gatsby-cli`
* Get started with the official Gatsby starter: `gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-default`
* After that change to the newly created directory `cd gatsby-site`
* `gatsby develop` starts a hot-reloading development server at `localhost:8000`. The site will reload when changes in `src/pages` will be saved.
* To generate the static HTML pages use `gatsby build`
* `gatsby serve` will start a local server that will present your built site.

### Querying data

You are accessing all data by writing GraphQL queries. GraphQL allows you to pull only the data you need into your components, unlike when fetching data from REST API. A detailed walktrough is available at https://www.gatsbyjs.org/tutorial/part-four/?no-cache=1#how-gatsbys-data-layer-uses-graphql-to-pull-data-into-components.

#### More Information:

For tutorials and more information check out the Gatsby.js official site: [Gatsby.js official site](https://www.gatsbyjs.org/tutorial/)
