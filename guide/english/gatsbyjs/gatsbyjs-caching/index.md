---
title: Gatsby.js Caching
---

## Gatsby.js Caching Static Sites

An important part of creating a very fast website is setting up proper HTTP caching. HTTP caching allows browsers to cache resources from a website so that when the user returns to a site, very few parts of the website have to be downloaded. Gatsby does this job automatically for you through Webpack.

HTML files should never be cached while all files in `public/static/` should be cached forever. Also, other files e.g. JavaScript files should also be cached forever.

## Cache Controls Headers

HTML - The `cache-control` header should be `cache-control: public, max-age=0, must-revalidate`  
Static Files (`/public/static`) - The `cache-control` header should be `cache-control: public,max-age=31536000,immutable`  
JavaScript - The `cache-control` header should be `cache-control: public, max-age=31536000,immutable`  

## Plugins

[Gatsby Plugin Netlify](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/) was created for automating caching when hosting your site at [Netlify](www.netlify.com).

### More Information:
Check out the Gatsby.js official docs for caching at [Gatsby Caching](https://www.gatsbyjs.org/docs/caching). For more information and learn more, visit: [Gatsby.js official site](https://www.gatsbyjs.org/tutorial/)
