var net = require('net'),
    crypto = require('crypto'),
    format = require('util').format,
    fs = require('fs');

var nl = '\r\n';

/**
 * Create a new GNTP request of the given `type`.
 *
 * @param {String} type either NOTIFY or REGISTER
 * @api private
 */

function GNTP(type, opts) {
    opts = opts || {};
    this.type = type;
    this.host = opts.host || 'localhost';
    this.port = opts.port || 23053;
    this.request = 'GNTP/1.0 ' + type + ' NONE' + nl;
    this.resources = [];
    this.attempts = 0;
    this.maxAttempts = 5;
}

/**
 * Build a response object from the given `resp` response string.
 *
 * The response object has a key/value pair for every header in the response, and 
 * a `.state` property equal to either OK, ERROR, or CALLBACK.
 *
 * An example GNTP response:
 *
 *     GNTP/1.0 -OK NONE\r\n
 *     Response-Action: REGISTER\r\n
 *     \r\n
 *
 *  Which would parse to:
 *      
 *      { state: 'OK', 'Response-Action': 'REGISTER' }
 *
 * @param {String} resp
 * @return {Object}
 * @api private
 */

GNTP.prototype.parseResp = function(resp) {
    var parsed = {}, head, body;
    resp = resp.slice(0, resp.indexOf(nl + nl)).split(nl);
    head = resp[0];
    body = resp.slice(1);

    parsed.state = head.match(/-(OK|ERROR|CALLBACK)/)[0].slice(1);
    body.forEach(function(ln) {
        ln = ln.split(': ');
        parsed[ln[0]] = ln[1];
    });

    return parsed;
};

/**
 * Call `GNTP.send()` with the given arguments after a certain delay.
 *
 * @api private
 */

GNTP.prototype.retry = function() {
    var self = this, 
        args = arguments;
    setTimeout(function() {
        self.send.apply(self, args);
    }, 750);
};


/**
 * Add a resource to the GNTP request.
 *
 * @param {Buffer} file
 * @return {String}
 * @api private
 */

GNTP.prototype.addResource = function(file) {
    var id = crypto.createHash('md5').update(file).digest('hex'),
        header = 'Identifier: ' + id + nl + 'Length: ' + file.length + nl + nl;
    this.resources.push({ header: header, file: file });
    return 'x-growl-resource://' + id;
};

/**
 * Append another header `name` with a value of `val` to the request. If `val` is
 * undefined, the header will be left out.
 *
 * @param {String} name
 * @param {String} val
 * @api public
 */

GNTP.prototype.add = function(name, val) {
    if (val === undefined) 
        return;

    /* Handle icon files when they're image paths or Buffers. */
    if (/-Icon/.test(name) && !/^https?:\/\//.test(val) ) {
        if (/\.(png|gif|jpe?g)$/.test(val))
            val = this.addResource(fs.readFileSync(val));
        else if (val instanceof Buffer)
            val = this.addResource(val);
    }

    this.request += name + ': ' + val + nl;
};

/**
 * Append a newline to the request.
 *
 * @api public
 */

GNTP.prototype.newline = function() {
    this.request += nl;
};

/**
 * Send the GNTP request, calling `callback` after successfully sending the 
 * request.
 *
 * An example GNTP request:
 *
 *     GNTP/1.0 REGISTER NONE\r\n
 *     Application-Name: Growly.js\r\n
 *     Notifications-Count: 1\r\n
 *     \r\n
 *     Notification-Name: default\r\n
 *     Notification-Display-Name: Default Notification\r\n
 *     Notification-Enabled: True\r\n
 *     \r\n
 * 
 * @param {Function} callback which will be passed the parsed response
 * @api public
 */

GNTP.prototype.send = function(callback) {
    var self = this,
        socket = net.connect(this.port, this.host),
        resp = '';

    callback = callback || function() {};

    this.attempts += 1;

    socket.on('connect', function() {
        socket.write(self.request);

        self.resources.forEach(function(res) {
            socket.write(res.header);
            socket.write(res.file);
            socket.write(nl + nl);
        });
    });

    socket.on('data', function(data) {
        resp += data.toString();

        /* Wait until we have a complete response which is signaled by two CRLF's. */
        if (resp.slice(resp.length - 4) !== (nl + nl)) return; 

        resp = self.parseResp(resp); 

        /* We have to manually close the connection for certain responses; otherwise,
           reset `resp` to prepare for the next response chunk.  */
        if (resp.state === 'ERROR' || resp.state === 'CALLBACK')
            socket.end();
        else
            resp = '';
    });

    socket.on('end', function() {
        /* Retry on 200 (timed out), 401 (unknown app), or 402 (unknown notification). */
        if (['200', '401', '402'].indexOf(resp['Error-Code']) >= 0) {
            if (self.attempts <= self.maxAttempts) {
                self.retry(callback);
            } else {
                var msg = 'GNTP request to "%s:%d" failed with error code %s (%s)';
                callback(new Error(format(msg, self.host, self.port, resp['Error-Code'], resp['Error-Description'])));
            }
        } else {
            callback(undefined, resp);
        }
    });

    socket.on('error', function() {
        callback(new Error(format('Error while sending GNTP request to "%s:%d"', self.host, self.port)));
        socket.destroy();
    });
};

module.exports = GNTP;
