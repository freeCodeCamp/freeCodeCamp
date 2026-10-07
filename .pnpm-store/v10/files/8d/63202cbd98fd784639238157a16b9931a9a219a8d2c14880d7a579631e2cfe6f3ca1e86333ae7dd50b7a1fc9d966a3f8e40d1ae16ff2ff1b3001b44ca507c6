/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var fs = require('fs');
var Url = require('url');
var spawn = require('child_process').spawn;

/**
 * Module exports.
 */

module.exports = XMLHttpRequest;

// backwards-compat
XMLHttpRequest.XMLHttpRequest = XMLHttpRequest;

/**
 * `XMLHttpRequest` constructor.
 *
 * Supported options for the `opts` object are:
 *
 *  - `agent`: An http.Agent instance; http.globalAgent may be used; if 'undefined', agent usage is disabled
 *
 * @param {Object} opts optional "options" object
 */

function XMLHttpRequest(opts) {
  "use strict";

  opts = opts || {};

  /**
   * Private variables
   */
  var self = this;
  var http = require('http');
  var https = require('https');

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*"
  };

  var headers = Object.assign({}, defaultHeaders);

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;
  var abortedFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = "";
  this.response = Buffer.alloc(0);
  this.status = null;
  this.statusText = null;

  /**
   * Private methods
   */

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;
    abortedFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw new Error("SecurityError: Request method not allowed");
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request.
   *
   * @param string header Header name
   * @param string value Header value
   * @return boolean Header added
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState != this.OPENED) {
      throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn('Refused to set unsafe header "' + header + '"');
      return false;
    }
    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send flag is true");
    }
    headers[header] = value;
    return true;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string"
      && this.readyState > this.OPENED
      && response.headers[header.toLowerCase()]
      && !errorFlag
    ) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    // @TODO Make this case insensitive
    if (typeof name === "string" && headers[name]) {
      return headers[name];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState != this.OPENED) {
      throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
    }

    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send has already been called");
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host;
    // Determine the server
    switch (url.protocol) {
      case 'https:':
        ssl = true;
        // SSL & non-SSL both need host, no break here.
      case 'http:':
        host = url.hostname;
        break;

      case 'file:':
        local = true;
        break;

      case undefined:
      case '':
        host = "localhost";
        break;

      default:
        throw new Error("Protocol not supported.");
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw new Error("XMLHttpRequest: Only GET method is supported");
      }

      if (settings.async) {
        fs.readFile(unescape(url.pathname), function(error, data) {
          if (error) {
            self.handleError(error, error.errno || -1);
          } else {
            self.status = 200;
            self.responseText = data.toString('utf8');
            self.response = data;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.response = fs.readFileSync(unescape(url.pathname));
          this.responseText = this.response.toString('utf8');
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e, e.errno || -1);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : '');

    // Set the Host header or the server may reject the request
    headers["Host"] = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers["Host"] += ':' + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password == "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers["Authorization"] = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      var headersKeys = Object.keys(headers);
      if (!headersKeys.some(function (h) { return h.toLowerCase() === 'content-type' })) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var agent = opts.agent || false;
    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: agent
    };

    if (ssl) {
      options.pfx = opts.pfx;
      options.key = opts.key;
      options.passphrase = opts.passphrase;
      options.cert = opts.cert;
      options.ca = opts.ca;
      options.ciphers = opts.ciphers;
      options.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
    }

    // Reset error flag
    errorFlag = false;
    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      var responseHandler = function(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? 'GET' : settings.method,
            headers: headers
          };

          if (ssl) {
            newOptions.pfx = opts.pfx;
            newOptions.key = opts.key;
            newOptions.passphrase = opts.passphrase;
            newOptions.cert = opts.cert;
            newOptions.ca = opts.ca;
            newOptions.ciphers = opts.ciphers;
            newOptions.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
          }

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on('error', errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on('data', function(chunk) {
          // Make sure there's some data
          if (chunk) {
            var data = Buffer.from(chunk);
            self.response = Buffer.concat([self.response, data]);
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on('end', function() {
          if (sendFlag) {
            // The sendFlag needs to be set before setState is called.  Otherwise if we are chaining callbacks
            // there can be a timing issue (the callback is called and a new call is made before the flag is reset).
            sendFlag = false;
            // Discard the 'end' event if the connection has been aborted
            setState(self.DONE);
            // Construct responseText from response
            self.responseText = self.response.toString('utf8');
          }
        });

        response.on('error', function(error) {
          self.handleError(error);
        });
      }

      // Error handler for the request
      var errorHandler = function(error) {
        // In the case of https://nodejs.org/api/http.html#requestreusedsocket triggering an ECONNRESET,
        // don't fail the xhr request, attempt again.
        if (request.reusedSocket && error.code === 'ECONNRESET')
          return doRequest(options, responseHandler).on('error', errorHandler);
        self.handleError(error);
      }

      // Create the request
      request = doRequest(options, responseHandler).on('error', errorHandler);

      if (opts.autoUnref) {
        request.on('socket', (socket) => {
          socket.unref();
        });
      }

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
        + "var options = " + JSON.stringify(options) + ";"
        + "var responseText = '';"
        + "var responseData = Buffer.alloc(0);"
        + "var req = doRequest(options, function(response) {"
        + "response.on('data', function(chunk) {"
        + "  var data = Buffer.from(chunk);"
        + "  responseText += data.toString('utf8');"
        + "  responseData = Buffer.concat([responseData, data]);"
        + "});"
        + "response.on('end', function() {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText, data: responseData.toString('base64')}}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "response.on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "}).on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
        + "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
      var statusText;
      while(fs.existsSync(syncFile)) {
        // Wait while the sync file is empty
      }
      self.responseText = fs.readFileSync(contentFile, 'utf8');
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);
      if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
        // If the file returned an error, handle it
        var errorObj = JSON.parse(self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, ""));
        self.handleError(errorObj, 503);
      } else {
        // If the file returned okay, parse its data and move to the DONE state
        self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
        var resp = JSON.parse(self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1"));
        response = {
          statusCode: self.status,
          headers: resp.data.headers
        };
        self.responseText = resp.data.text;
        self.response = Buffer.from(resp.data.data, 'base64');
        setState(self.DONE, true);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   * @param  status  {number}    HTTP status code to use rather than the default (0) for XHR errors.
   */
  this.handleError = function(error, status) {
    this.status = status || 0;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = Object.assign({}, defaultHeaders);
    this.responseText = "";
    this.responseXML = "";
    this.response = Buffer.alloc(0);

    errorFlag = abortedFlag = true
    if (this.readyState !== this.UNSENT
        && (this.readyState !== this.OPENED || sendFlag)
        && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function (event) {
    if (typeof self["on" + event] === "function") {
      if (this.readyState === this.DONE && settings.async)
        setTimeout(function() { self["on" + event]() }, 0)
      else
        self["on" + event]()
    }
    if (event in listeners) {
      for (let i = 0, len = listeners[event].length; i < len; i++) {
        if (this.readyState === this.DONE)
          setTimeout(function() { listeners[event][i].call(self) }, 0)
        else
          listeners[event][i].call(self)
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if ((self.readyState === state) || (self.readyState === self.UNSENT && abortedFlag))
      return

    self.readyState = state;

    if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
      self.dispatchEvent("readystatechange");
    }

    if (self.readyState === self.DONE) {
      let fire

      if (abortedFlag)
        fire = "abort"
      else if (errorFlag)
        fire = "error"
      else
        fire = "load"

      self.dispatchEvent(fire)

      // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
      self.dispatchEvent("loadend");
    }
  };
};
