'use strict'

var fs = require('fs')
var qs = require('querystring')
var validate = require('har-validator')
var extend = require('extend')

function Har (request) {
  this.request = request
}

Har.prototype.reducer = function (obj, pair) {
  // new property ?
  if (obj[pair.name] === undefined) {
    obj[pair.name] = pair.value
    return obj
  }

  // existing? convert to array
  var arr = [
    obj[pair.name],
    pair.value
  ]

  obj[pair.name] = arr

  return obj
}

Har.prototype.prep = function (data) {
  // construct utility properties
  data.queryObj = {}
  data.headersObj = {}
  data.postData.jsonObj = false
  data.postData.paramsObj = false

  // construct query objects
  if (data.queryString && data.queryString.length) {
    data.queryObj = data.queryString.reduce(this.reducer, {})
  }

  // construct headers objects
  if (data.headers && data.headers.length) {
    // loweCase header keys
    data.headersObj = data.headers.reduceRight(function (headers, header) {
      headers[header.name] = header.value
      return headers
    }, {})
  }

  // construct Cookie header
  if (data.cookies && data.cookies.length) {
    var cookies = data.cookies.map(function (cookie) {
      return cookie.name + '=' + cookie.value
    })

    if (cookies.length) {
      data.headersObj.cookie = cookies.join('; ')
    }
  }

  // prep body
  function some (arr) {
    return arr.some(function (type) {
      return data.postData.mimeType.indexOf(type) === 0
    })
  }

  if (some([
    'multipart/mixed',
    'multipart/related',
    'multipart/form-data',
    'multipart/alternative'])) {
    // reset values
    data.postData.mimeType = 'multipart/form-data'
  } else if (some([
    'application/x-www-form-urlencoded'])) {
    if (!data.postData.params) {
      data.postData.text = ''
    } else {
      data.postData.paramsObj = data.postData.params.reduce(this.reducer, {})

      // always overwrite
      data.postData.text = qs.stringify(data.postData.paramsObj)
    }
  } else if (some([
    'text/json',
    'text/x-json',
    'application/json',
    'application/x-json'])) {
    data.postData.mimeType = 'application/json'

    if (data.postData.text) {
      try {
        data.postData.jsonObj = JSON.parse(data.postData.text)
      } catch (e) {
        this.request.debug(e)

        // force back to text/plain
        data.postData.mimeType = 'text/plain'
      }
    }
  }

  return data
}

Har.prototype.options = function (options) {
  // skip if no har property defined
  if (!options.har) {
    return options
  }

  var har = {}
  extend(har, options.har)

  // only process the first entry
  if (har.log && har.log.entries) {
    har = har.log.entries[0]
  }

  // add optional properties to make validation successful
  har.url = har.url || options.url || options.uri || options.baseUrl || '/'
  har.httpVersion = har.httpVersion || 'HTTP/1.1'
  har.queryString = har.queryString || []
  har.headers = har.headers || []
  har.cookies = har.cookies || []
  har.postData = har.postData || {}
  har.postData.mimeType = har.postData.mimeType || 'application/octet-stream'

  har.bodySize = 0
  har.headersSize = 0
  har.postData.size = 0

  if (!validate.request(har)) {
    return options
  }

  // clean up and get some utility properties
  var req = this.prep(har)

  // construct new options
  if (req.url) {
    options.url = req.url
  }

  if (req.method) {
    options.method = req.method
  }

  if (Object.keys(req.queryObj).length) {
    options.qs = req.queryObj
  }

  if (Object.keys(req.headersObj).length) {
    options.headers = req.headersObj
  }

  function test (type) {
    return req.postData.mimeType.indexOf(type) === 0
  }
  if (test('application/x-www-form-urlencoded')) {
    options.form = req.postData.paramsObj
  } else if (test('application/json')) {
    if (req.postData.jsonObj) {
      options.body = req.postData.jsonObj
      options.json = true
    }
  } else if (test('multipart/form-data')) {
    options.formData = {}

    req.postData.params.forEach(function (param) {
      var attachment = {}

      if (!param.fileName && !param.fileName && !param.contentType) {
        options.formData[param.name] = param.value
        return
      }

      // attempt to read from disk!
      if (param.fileName && !param.value) {
        attachment.value = fs.createReadStream(param.fileName)
      } else if (param.value) {
        attachment.value = param.value
      }

      if (param.fileName) {
        attachment.options = {
          filename: param.fileName,
          contentType: param.contentType ? param.contentType : null
        }
      }

      options.formData[param.name] = attachment
    })
  } else {
    if (req.postData.text) {
      options.body = req.postData.text
    }
  }

  return options
}

exports.Har = Har
