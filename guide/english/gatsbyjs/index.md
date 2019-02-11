---
title: Gatsby.js
---

## Gatsby.js

Gatsby is a static site generator for [React](https://guide.freecodecamp.org/react), powered by [GraphQL](https://graphql.org/). 

The Gatsby environment provides several "starters" to help configure static sites quickly. Starters can be found here: [Starter Library](https://www.gatsbyjs.org/starters/).

### Installation and using the Gatsby CLI

* Node: `npm install --global gatsby-cli`
* Get started with the official Gatsby starter: `gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-default`
* After that change to the newly created directory `cd gatsby-site`
* `gatsby develop` starts a hot-reloading development server. The site will reload when changes in `src/pages` will be saved.
* To generate the static HTML pages use `gatsby build`
* `gatsby serve` will start a local server that will present your built site.

### Querying data

You are accessing all data by writing GraphQL queries. GraphQL allows you to pull only the data you need into your components, unlike when fetching data from REST API. A detailed walktrough is available at https://www.gatsbyjs.org/tutorial/part-four/?no-cache=1#how-gatsbys-data-layer-uses-graphql-to-pull-data-into-components.

#### More Information:
For tutorials and more information check out the Gatsby.js official site: [Gatsby.js official site](https://www.gatsbyjs.org/tutorial/)
