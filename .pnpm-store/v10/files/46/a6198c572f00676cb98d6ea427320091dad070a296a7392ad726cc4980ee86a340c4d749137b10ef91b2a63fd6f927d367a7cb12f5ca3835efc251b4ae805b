/// <reference types="node" />

import { EventEmitter } from "events";

import { Transport, TransportOptions } from "../..";
import * as shared from "../shared";

import Mail = require("../mailer");
import MailMessage = require("../mailer/mail-message");
import MimeNode = require("../mime-node");
import SMTPConnection = require("../smtp-connection");

declare namespace SMTPPool {
    interface MailOptions extends Mail.Options {
        auth?: SMTPConnection.AuthenticationType | undefined;
        dsn?: SMTPConnection.DSNOptions | undefined;
    }

    interface Options extends MailOptions, TransportOptions, SMTPConnection.Options {
        /** set to true to use pooled connections (defaults to false) instead of creating a new connection for every email */
        pool: true;
        service?: string | undefined;
        getSocket?(options: Options, callback: (err: Error | null, socketOptions: any) => void): void; // TODO http.ClientRequest?
        url?: string | undefined;
        /** the count of maximum simultaneous connections to make against the SMTP server (defaults to 5) */
        maxConnections?: number | undefined;
        /** limits the message count to be sent using a single connection (defaults to 100). After maxMessages is reached the connection is dropped and a new one is created for the following messages */
        maxMessages?: number | undefined;
        /** defines the time measuring period in milliseconds (defaults to 1000, ie. to 1 second) for rate limiting */
        rateDelta?: number | undefined;
        /** limits the message count to be sent in rateDelta time. Once rateLimit is reached, sending is paused until the end of the measuring period. This limit is shared between connections, so if one connection uses up the limit, then other connections are paused as well. If rateLimit is not set then sending rate is not limited */
        rateLimit?: number | undefined;
    }

    interface SentMessageInfo extends SMTPConnection.SentMessageInfo {
        /** includes the envelope object for the message */
        envelope: MimeNode.Envelope;
        /** most transports should return the final Message-Id value used with this property */
        messageId: string;
    }
}

/**
 * Creates a SMTP pool transport object for Nodemailer
 */
declare class SMTPPool extends EventEmitter implements Transport<SMTPPool.SentMessageInfo> {
    options: SMTPPool.Options;

    mailer: Mail<SMTPPool.SentMessageInfo>;
    logger: shared.Logger;

    name: string;
    version: string;

    idling: boolean;

    constructor(options?: SMTPPool.Options | string);

    /** Placeholder function for creating proxy sockets. This method immediatelly returns without a socket */
    getSocket(options: SMTPPool.Options, callback: (err: Error | null, socketOptions: any) => void): void;

    /** Sends an e-mail using the selected settings */
    send(
        mail: MailMessage<SMTPPool.SentMessageInfo>,
        callback: (err: Error | null, info: SMTPPool.SentMessageInfo) => void,
    ): void;

    /** Closes all connections in the pool. If there is a message being sent, the connection is closed later */
    close(): void;

    /** Returns true if there are free slots in the queue */
    isIdle(): boolean;

    /** Verifies SMTP configuration */
    verify(callback: (err: Error | null, success: true) => void): void;
    verify(): Promise<true>;

    addListener(event: "idle", listener: () => void): this;

    emit(event: "idle"): boolean;

    on(event: "idle", listener: () => void): this;

    once(event: "idle", listener: () => void): this;

    prependListener(event: "idle", listener: () => void): this;

    prependOnceListener(event: "idle", listener: () => void): this;

    listeners(event: "idle"): Array<() => void>;
}

export = SMTPPool;
