'use strict'

const path = require('node:path')

const fastify = require('fastify')({ logger: { level: 'trace' } })

const renderer = (dirs, files) => {
  return `
<html><body>
<ul>
${dirs.map(dir => `<li><a href="${dir.href}">${dir.name}</a></li>`).join('\n  ')}
</ul>
<ul>
${files.map(file => `<li><a href="${file.href}" target="_blank">${file.name}</a></li>`).join('\n  ')}
</ul>
</body></html>
`
}

fastify
  .register(require('..'), {
    // An absolute path containing static files to serve.
    root: path.join(__dirname, '/public'),
    // Do not append a trailing slash to prefixes.
    prefixAvoidTrailingSlash: true,
    // Return a directory listing with a handlebar template.
    list: {
      // html or json response? html requires a render method.
      format: 'html',
      // A list of filenames that trigger a directory list response.
      names: ['index', 'index.html', 'index.htm', '/'],
      // You can provide your own render method as needed.
      renderer
    }
  })
  .listen({ port: 3000 }, err => {
    if (err) throw err
  })
