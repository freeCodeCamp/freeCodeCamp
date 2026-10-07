'use strict';

const EventEmitter = require('events');
const packageData = require('../../package.json');
const shared = require('../shared');
const LeWindows = require('../mime-node/le-windows');

/**
 * Generates a Transport object for AWS SES
 *
 * Possible options can be the following:
 *
 *  * **sendingRate** optional Number specifying how many messages per second should be delivered to SES
 *  * **maxConnections** optional Number specifying max number of parallel connections to SES
 *
 * @constructor
 * @param {Object} optional config parameter
 */
class SESTransport extends EventEmitter {
    constructor(options) {
        super();
        options = options || {};

        this.options = options || {};
        this.ses = this.options.SES;

        this.name = 'SESTransport';
        this.version = packageData.version;

        this.logger = shared.getLogger(this.options, {
            component: this.options.component || 'ses-transport'
        });

        // parallel sending connections
        this.maxConnections = Number(this.options.maxConnections) || Infinity;
        this.connections = 0;

        // max messages per second
        this.sendingRate = Number(this.options.sendingRate) || Infinity;
        this.sendingRateTTL = null;
        this.rateInterval = 1000; // milliseconds
        this.rateMessages = [];

        this.pending = [];

        this.idling = true;

        setImmediate(() => {
            if (this.idling) {
                this.emit('idle');
            }
        });
    }

    /**
     * Schedules a sending of a message
     *
     * @param {Object} emailMessage MailComposer object
     * @param {Function} callback Callback function to run when the sending is completed
     */
    send(mail, callback) {
        if (this.connections >= this.maxConnections) {
            this.idling = false;
            return this.pending.push({
                mail,
                callback
            });
        }

        if (!this._checkSendingRate()) {
            this.idling = false;
            return this.pending.push({
                mail,
                callback
            });
        }

        this._send(mail, (...args) => {
            setImmediate(() => callback(...args));
            this._sent();
        });
    }

    _checkRatedQueue() {
        if (this.connections >= this.maxConnections || !this._checkSendingRate()) {
            return;
        }

        if (!this.pending.length) {
            if (!this.idling) {
                this.idling = true;
                this.emit('idle');
            }
            return;
        }

        let next = this.pending.shift();
        this._send(next.mail, (...args) => {
            setImmediate(() => next.callback(...args));
            this._sent();
        });
    }

    _checkSendingRate() {
        clearTimeout(this.sendingRateTTL);

        let now = Date.now();
        let oldest = false;
        // delete older messages
        for (let i = this.rateMessages.length - 1; i >= 0; i--) {
            if (this.rateMessages[i].ts >= now - this.rateInterval && (!oldest || this.rateMessages[i].ts < oldest)) {
                oldest = this.rateMessages[i].ts;
            }

            if (this.rateMessages[i].ts < now - this.rateInterval && !this.rateMessages[i].pending) {
                this.rateMessages.splice(i, 1);
            }
        }

        if (this.rateMessages.length < this.sendingRate) {
            return true;
        }

        let delay = Math.max(oldest + 1001, now + 20);
        this.sendingRateTTL = setTimeout(() => this._checkRatedQueue(), now - delay);

        try {
            this.sendingRateTTL.unref();
        } catch (E) {
            // Ignore. Happens on envs with non-node timer implementation
        }

        return false;
    }

    _sent() {
        this.connections--;
        this._checkRatedQueue();
    }

    /**
     * Returns true if there are free slots in the queue
     */
    isIdle() {
        return this.idling;
    }

    /**
     * Compiles a mailcomposer message and forwards it to SES
     *
     * @param {Object} emailMessage MailComposer object
     * @param {Function} callback Callback function to run when the sending is completed
     */
    _send(mail, callback) {
        let statObject = {
            ts: Date.now(),
            pending: true
        };
        this.connections++;
        this.rateMessages.push(statObject);

        let envelope = mail.data.envelope || mail.message.getEnvelope();
        let messageId = mail.message.messageId();

        let recipients = [].concat(envelope.to || []);
        if (recipients.length > 3) {
            recipients.push('...and ' + recipients.splice(2).length + ' more');
        }
        this.logger.info(
            {
                tnx: 'send',
                messageId
            },
            'Sending message %s to <%s>',
            messageId,
            recipients.join(', ')
        );

        let getRawMessage = next => {
            // do not use Message-ID and Date in DKIM signature
            if (!mail.data._dkim) {
                mail.data._dkim = {};
            }
            if (mail.data._dkim.skipFields && typeof mail.data._dkim.skipFields === 'string') {
                mail.data._dkim.skipFields += ':date:message-id';
            } else {
                mail.data._dkim.skipFields = 'date:message-id';
            }

            let sourceStream = mail.message.createReadStream();
            let stream = sourceStream.pipe(new LeWindows());
            let chunks = [];
            let chunklen = 0;

            stream.on('readable', () => {
                let chunk;
                while ((chunk = stream.read()) !== null) {
                    chunks.push(chunk);
                    chunklen += chunk.length;
                }
            });

            sourceStream.once('error', err => stream.emit('error', err));

            stream.once('error', err => {
                next(err);
            });

            stream.once('end', () => next(null, Buffer.concat(chunks, chunklen)));
        };

        setImmediate(() =>
            getRawMessage((err, raw) => {
                if (err) {
                    this.logger.error(
                        {
                            err,
                            tnx: 'send',
                            messageId
                        },
                        'Failed creating message for %s. %s',
                        messageId,
                        err.message
                    );
                    statObject.pending = false;
                    return callback(err);
                }

                let sesMessage = {
                    RawMessage: {
                        // required
                        Data: raw // required
                    },
                    Source: envelope.from,
                    Destinations: envelope.to
                };

                Object.keys(mail.data.ses || {}).forEach(key => {
                    sesMessage[key] = mail.data.ses[key];
                });

                let ses = (this.ses.aws ? this.ses.ses : this.ses) || {};
                let aws = this.ses.aws || {};

                let getRegion = cb => {
                    if (ses.config && typeof ses.config.region === 'function') {
                        // promise
                        return ses.config
                            .region()
                            .then(region => cb(null, region))
                            .catch(err => cb(err));
                    }
                    return cb(null, (ses.config && ses.config.region) || 'us-east-1');
                };

                getRegion((err, region) => {
                    if (err || !region) {
                        region = 'us-east-1';
                    }

                    let sendPromise;
                    if (typeof ses.send === 'function' && aws.SendRawEmailCommand) {
                        // v3 API
                        sendPromise = ses.send(new aws.SendRawEmailCommand(sesMessage));
                    } else {
                        // v2 API
                        sendPromise = ses.sendRawEmail(sesMessage).promise();
                    }

                    sendPromise
                        .then(data => {
                            if (region === 'us-east-1') {
                                region = 'email';
                            }

                            statObject.pending = false;
                            callback(null, {
                                envelope: {
                                    from: envelope.from,
                                    to: envelope.to
                                },
                                messageId: '<' + data.MessageId + (!/@/.test(data.MessageId) ? '@' + region + '.amazonses.com' : '') + '>',
                                response: data.MessageId,
                                raw
                            });
                        })
                        .catch(err => {
                            this.logger.error(
                                {
                                    err,
                                    tnx: 'send'
                                },
                                'Send error for %s: %s',
                                messageId,
                                err.message
                            );
                            statObject.pending = false;
                            callback(err);
                        });
                });
            })
        );
    }

    /**
     * Verifies SES configuration
     *
     * @param {Function} callback Callback function
     */
    verify(callback) {
        let promise;
        let ses = (this.ses.aws ? this.ses.ses : this.ses) || {};
        let aws = this.ses.aws || {};

        const sesMessage = {
            RawMessage: {
                // required
                Data: 'From: invalid@invalid\r\nTo: invalid@invalid\r\n Subject: Invalid\r\n\r\nInvalid'
            },
            Source: 'invalid@invalid',
            Destinations: ['invalid@invalid']
        };

        if (!callback) {
            promise = new Promise((resolve, reject) => {
                callback = shared.callbackPromise(resolve, reject);
            });
        }
        const cb = err => {
            if (err && (err.code || err.Code) !== 'InvalidParameterValue') {
                return callback(err);
            }
            return callback(null, true);
        };

        if (typeof ses.send === 'function' && aws.SendRawEmailCommand) {
            // v3 API
            sesMessage.RawMessage.Data = Buffer.from(sesMessage.RawMessage.Data);
            ses.send(new aws.SendRawEmailCommand(sesMessage), cb);
        } else {
            // v2 API
            ses.sendRawEmail(sesMessage, cb);
        }

        return promise;
    }
}

module.exports = SESTransport;
