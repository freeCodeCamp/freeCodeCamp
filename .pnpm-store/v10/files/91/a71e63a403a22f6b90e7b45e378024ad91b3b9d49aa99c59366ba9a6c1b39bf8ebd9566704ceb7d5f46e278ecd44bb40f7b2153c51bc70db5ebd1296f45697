'use strict';

const SMTPConnection = require('../smtp-connection');
const assign = require('../shared').assign;
const XOAuth2 = require('../xoauth2');
const EventEmitter = require('events');

/**
 * Creates an element for the pool
 *
 * @constructor
 * @param {Object} options SMTPPool instance
 */
class PoolResource extends EventEmitter {
    constructor(pool) {
        super();

        this.pool = pool;
        this.options = pool.options;
        this.logger = this.pool.logger;

        if (this.options.auth) {
            switch ((this.options.auth.type || '').toString().toUpperCase()) {
                case 'OAUTH2': {
                    let oauth2 = new XOAuth2(this.options.auth, this.logger);
                    oauth2.provisionCallback = (this.pool.mailer && this.pool.mailer.get('oauth2_provision_cb')) || oauth2.provisionCallback;
                    this.auth = {
                        type: 'OAUTH2',
                        user: this.options.auth.user,
                        oauth2,
                        method: 'XOAUTH2'
                    };
                    oauth2.on('token', token => this.pool.mailer.emit('token', token));
                    oauth2.on('error', err => this.emit('error', err));
                    break;
                }
                default:
                    if (!this.options.auth.user && !this.options.auth.pass) {
                        break;
                    }
                    this.auth = {
                        type: (this.options.auth.type || '').toString().toUpperCase() || 'LOGIN',
                        user: this.options.auth.user,
                        credentials: {
                            user: this.options.auth.user || '',
                            pass: this.options.auth.pass,
                            options: this.options.auth.options
                        },
                        method: (this.options.auth.method || '').trim().toUpperCase() || this.options.authMethod || false
                    };
            }
        }

        this._connection = false;
        this._connected = false;

        this.messages = 0;
        this.available = true;
    }

    /**
     * Initiates a connection to the SMTP server
     *
     * @param {Function} callback Callback function to run once the connection is established or failed
     */
    connect(callback) {
        this.pool.getSocket(this.options, (err, socketOptions) => {
            if (err) {
                return callback(err);
            }

            let returned = false;
            let options = this.options;
            if (socketOptions && socketOptions.connection) {
                this.logger.info(
                    {
                        tnx: 'proxy',
                        remoteAddress: socketOptions.connection.remoteAddress,
                        remotePort: socketOptions.connection.remotePort,
                        destHost: options.host || '',
                        destPort: options.port || '',
                        action: 'connected'
                    },
                    'Using proxied socket from %s:%s to %s:%s',
                    socketOptions.connection.remoteAddress,
                    socketOptions.connection.remotePort,
                    options.host || '',
                    options.port || ''
                );

                options = assign(false, options);
                Object.keys(socketOptions).forEach(key => {
                    options[key] = socketOptions[key];
                });
            }

            this.connection = new SMTPConnection(options);

            this.connection.once('error', err => {
                this.emit('error', err);
                if (returned) {
                    return;
                }
                returned = true;
                return callback(err);
            });

            this.connection.once('end', () => {
                this.close();
                if (returned) {
                    return;
                }
                returned = true;

                let timer = setTimeout(() => {
                    if (returned) {
                        return;
                    }
                    // still have not returned, this means we have an unexpected connection close
                    let err = new Error('Unexpected socket close');
                    if (this.connection && this.connection._socket && this.connection._socket.upgrading) {
                        // starttls connection errors
                        err.code = 'ETLS';
                    }
                    callback(err);
                }, 1000);

                try {
                    timer.unref();
                } catch (E) {
                    // Ignore. Happens on envs with non-node timer implementation
                }
            });

            this.connection.connect(() => {
                if (returned) {
                    return;
                }

                if (this.auth && (this.connection.allowsAuth || options.forceAuth)) {
                    this.connection.login(this.auth, err => {
                        if (returned) {
                            return;
                        }
                        returned = true;

                        if (err) {
                            this.connection.close();
                            this.emit('error', err);
                            return callback(err);
                        }

                        this._connected = true;
                        callback(null, true);
                    });
                } else {
                    returned = true;
                    this._connected = true;
                    return callback(null, true);
                }
            });
        });
    }

    /**
     * Sends an e-mail to be sent using the selected settings
     *
     * @param {Object} mail Mail object
     * @param {Function} callback Callback function
     */
    send(mail, callback) {
        if (!this._connected) {
            return this.connect(err => {
                if (err) {
                    return callback(err);
                }
                return this.send(mail, callback);
            });
        }

        let envelope = mail.message.getEnvelope();
        let messageId = mail.message.messageId();

        let recipients = [].concat(envelope.to || []);
        if (recipients.length > 3) {
            recipients.push('...and ' + recipients.splice(2).length + ' more');
        }
        this.logger.info(
            {
                tnx: 'send',
                messageId,
                cid: this.id
            },
            'Sending message %s using #%s to <%s>',
            messageId,
            this.id,
            recipients.join(', ')
        );

        if (mail.data.dsn) {
            envelope.dsn = mail.data.dsn;
        }

        this.connection.send(envelope, mail.message.createReadStream(), (err, info) => {
            this.messages++;

            if (err) {
                this.connection.close();
                this.emit('error', err);
                return callback(err);
            }

            info.envelope = {
                from: envelope.from,
                to: envelope.to
            };
            info.messageId = messageId;

            setImmediate(() => {
                let err;
                if (this.messages >= this.options.maxMessages) {
                    err = new Error('Resource exhausted');
                    err.code = 'EMAXLIMIT';
                    this.connection.close();
                    this.emit('error', err);
                } else {
                    this.pool._checkRateLimit(() => {
                        this.available = true;
                        this.emit('available');
                    });
                }
            });

            callback(null, info);
        });
    }

    /**
     * Closes the connection
     */
    close() {
        this._connected = false;
        if (this.auth && this.auth.oauth2) {
            this.auth.oauth2.removeAllListeners();
        }
        if (this.connection) {
            this.connection.close();
        }
        this.emit('close');
    }
}

module.exports = PoolResource;
