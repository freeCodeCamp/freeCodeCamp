var GNTP = require('./gntp.js');

/**
 * Interface for registering Growl applications and sending Growl notifications.
 *
 * @api private
 */

function Growly() {
    this.appname = 'Growly';
    this.notifications = undefined;
    this.labels = undefined;
    this.count = 0;
    this.registered = false;
    this.host = undefined;
    this.port = undefined;
}

/**
 * Returns an array of label strings extracted from each notification object in
 * `Growly.notifications`.
 *
 * @param {Array} notifications
 * @return {Array} notification labels
 * @api private
 */

Growly.prototype.getLabels = function() {
    return this.notifications.map(function(notif) {
        return notif.label;
    });
};

/**
 * Set the host to be used by GNTP requests.
 *
 * @param {String} host
 * @param {Number} port
 * @api public
 */

Growly.prototype.setHost = function(host, port) {
    this.host = host;
    this.port = port;
};

/**
 * Register an application with the name `appname` (required), icon `appicon`, and
 * a list of notification types `notifications`. If provided, `callback` will be
 * called when the request completes with the first argument being an `err` error
 * object if the request failed.
 *
 * Each object in the `notifications` array defines a type of notification the
 * application will have with the following properties:
 *
 *  - `.label` name used to identify the type of notification being used (required)
 *  - `.dispname` name users will see in Growl's preference panel (defaults to `.label`)
 *  - `.enabled` whether or not notifications of this type are enabled (defaults to true)
 *  - `.icon` default icon notifications of this type should use (url, file path, or Buffer object)
 *
 *  Example registration:
 *
 *      growl.register('My Application', 'path/to/icon.png', [
 *          { label: 'success', dispname: 'Success', icon: 'path/to/success.png' },
 *          { label: 'warning', dispname: 'Warning', icon: 'path/to/warning.png', enabled: false }
 *      ], function(err) { console.log(err || 'Registration successful!'); });
 *
 * @param {String} appname
 * @param {String|Buffer} appicon
 * @param {Array} notifications
 * @param {Function} callback
 * @api public
 */

Growly.prototype.register = function(appname, appicon, notifications, callback) {
    var gntp;

    if (typeof appicon === 'object') {
        notifications = appicon;
        appicon = undefined;
    }

    if (notifications === undefined || !notifications.length) {
        notifications = [{ label: 'default', dispname: 'Default Notification', enabled: true }];
    }

    if (typeof arguments[arguments.length - 1] === 'function') {
        callback = arguments[arguments.length - 1];
    } else {
        callback = function() {};
    }

    this.appname = appname;
    this.notifications = notifications;
    this.labels = this.getLabels();
    this.registered = true;

    gntp = new GNTP('REGISTER', { host: this.host, port: this.port });
    gntp.add('Application-Name', appname);
    gntp.add('Application-Icon', appicon);
    gntp.add('Notifications-Count', notifications.length);
    gntp.newline();

    notifications.forEach(function(notif) {
        if (notif.enabled === undefined) notif.enabled = true;
        gntp.add('Notification-Name', notif.label);
        gntp.add('Notification-Display-Name', notif.dispname);
        gntp.add('Notification-Enabled', notif.enabled ? 'True' : 'False');
        gntp.add('Notification-Icon', notif.icon);
        gntp.newline();
    });

    gntp.send(callback);
};

/**
 * Send a notification with `text` content. Growly will lazily register itself
 * if the user hasn't already before sending the notification.
 *
 * A notification can have the following `opts` options:
 *
 *  - `.label` type of notification to use (defaults to the first registered type)
 *  - `.title` title of the notification
 *  - `.icon` url, file path, or Buffer instance for the notification's icon.
 *  - `.sticky` whether or not to sticky the notification (defaults to false)
 *  - `.priority` the priority of the notification from lowest (-2) to highest (2)
 *  - `.coalescingId` replace/update the matching previous notification. May be ignored.
 *
 * If provided, `callback` will be called when the user interacts with the notification.
 * The first argument will be an `err` error object, and the second argument an `action`
 * string equal to either 'clicked' or 'closed' (whichever action the user took.)
 *
 * Example notification:
 *
 *     growl.notify('Stuffs broken!', { label: 'warning' }, function(err, action) {
 *         console.log('Action:', action);
 *     });
 *
 * @param {String} text
 * @param {Object} opts
 * @param {Function} callback
 * @api public
 */

Growly.prototype.notify = function(text, opts, callback) {
    var self = this,
        gntp;

    /* Lazy registration. */
    if (!this.registered) {
        this.register(this.appname, function(err) {
            if (err) console.log(err);
            self.notify.call(self, text, opts, callback);
        });
        return;
    }

    opts = opts || {};

    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    gntp = new GNTP('NOTIFY', { host: this.host, port: this.port });
    gntp.add('Application-Name', this.appname);
    gntp.add('Notification-Name', opts.label || this.labels[0]);
    gntp.add('Notification-ID', ++this.count);
    gntp.add('Notification-Title', opts.title);
    gntp.add('Notification-Text', text);
    gntp.add('Notification-Sticky', opts.sticky ? 'True' : 'False');
    gntp.add('Notification-Priority', opts.priority);
    gntp.add('Notification-Icon', opts.icon);
    gntp.add('Notification-Coalescing-ID', opts.coalescingId || undefined);
    gntp.add('Notification-Callback-Context', callback ? 'context' : undefined);
    gntp.add('Notification-Callback-Context-Type', callback ? 'string' : undefined);
    gntp.add('Notification-Callback-Target', undefined);
    gntp.newline();

    gntp.send(function(err, resp) {
        if (callback && err) {
            callback(err);
        } else if (callback && resp.state === 'CALLBACK') {
            callback(undefined, resp['Notification-Callback-Result'].toLowerCase());
        }
    });
};

/**
 * Expose an instance of the Growly object.
 */

module.exports = new Growly();
