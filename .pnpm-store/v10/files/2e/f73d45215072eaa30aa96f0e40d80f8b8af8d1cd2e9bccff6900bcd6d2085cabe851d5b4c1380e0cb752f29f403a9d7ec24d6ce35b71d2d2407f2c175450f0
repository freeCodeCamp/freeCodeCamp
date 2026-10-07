'use strict'

const serialize = require('./serialize')

function swaggerInitializer (opts) {
  const hasLogo = opts.logo && opts.logo.content !== undefined
  const logoBase64 = hasLogo && Buffer.from(opts.logo.content).toString('base64')
  const logoData = hasLogo && `data:${opts.logo.type};base64,${logoBase64}`
  const logoHref = hasLogo && opts.logo.href
  const logoTarget = hasLogo && opts.logo.target

  return `window.onload = function () {
    function waitForElement(selector) {
      return new Promise(resolve => {
          if (document.querySelector(selector)) {
              return resolve(document.querySelector(selector));
          }

          const observer = new MutationObserver(mutations => {
              if (document.querySelector(selector)) {
                  observer.disconnect();
                  resolve(document.querySelector(selector));
              }
          });

          // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
          observer.observe(document.body, {
              childList: true,
              subtree: true
          });
      });
    }
    function resolveUrl(url) {
      let currentHref = window.location.href;
      currentHref = currentHref.split('#', 1)[0];
      currentHref = currentHref.endsWith('/') ? currentHref : currentHref + '/';
      const anchor = document.createElement('a');
      anchor.href = currentHref + url;
      return anchor.href
    }

    const config = ${serialize(opts.uiConfig)}
    const resConfig = Object.assign({}, {
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout",
      validatorUrl: ${serialize(opts.validatorUrl || null)},
    }, config, {
      url: resolveUrl('./json'),
      oauth2RedirectUrl: resolveUrl('./static/oauth2-redirect.html')
    });

    const ui = SwaggerUIBundle(resConfig)

    ${logoData
? `
    if (resConfig.layout === 'StandaloneLayout') {
      // Replace the logo
      waitForElement('#swagger-ui > section > div.topbar > div > div > a').then((link) => {
        const img = document.createElement('img')
        img.height = 40
        img.src = '${logoData}'
        ${logoHref ? `img.href = '${logoHref}'` : 'img.href = resolveUrl(\'/\')'}
        ${logoTarget ? `img.target = '${logoTarget}'` : ''}
        link.innerHTML = ''
        link.appendChild(img)
      })
    }`
: ''}

    ui.initOAuth(${serialize(opts.initOAuth)})
  }`
}

module.exports = swaggerInitializer
