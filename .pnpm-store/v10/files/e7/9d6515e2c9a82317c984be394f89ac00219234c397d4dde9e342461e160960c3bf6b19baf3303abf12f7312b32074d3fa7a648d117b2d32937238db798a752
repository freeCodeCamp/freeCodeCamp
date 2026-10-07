const fs = require('fs')
const JSON5 = require('./')

// eslint-disable-next-line node/no-deprecated-api
require.extensions['.json5'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf8')
    try {
        module.exports = JSON5.parse(content)
    } catch (err) {
        err.message = filename + ': ' + err.message
        throw err
    }
}
