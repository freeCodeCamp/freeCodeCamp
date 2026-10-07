const path = require(`path`)

module.exports = (expressApp, { graphqlEndpoint, getFragments }) => {
  const bundleUrlHandler = path.posix.join(graphqlEndpoint, `app.js`)
  const fragmentsUrlHandler = path.posix.join(graphqlEndpoint, `fragments`)

  expressApp.get(bundleUrlHandler, (_req, res) => {
    res.set(`Cache-Control`, `public, max-age=31557600`)
    res.sendFile(path.join(__dirname, `dist/app.js`))
  })

  expressApp.get(graphqlEndpoint, (_req, res) => {
    res.sendFile(path.join(__dirname, `dist/index.html`))
  })

  expressApp.get(fragmentsUrlHandler, (_req, res) => {
    res.json(getFragments())
  })
}
