/// <reference types="node" />

import { EventEmitter } from "events";
import stream = require("stream");

import { Transport, TransportOptions } from "../..";
import * as shared from "../shared";

import Mail = require("../mailer");
import MailMessage = require("../mailer/mail-message");
import MimeNode = require("../mime-node");
import SMTPConnection = require("../smtp-connection");
import XOAuth2 = require("../xoauth2");

declare namespace SMTPTransport {
    interface AuthenticationTypeCustom extends SMTPConnection.Credentials {
        type: "CUSTOM";
        method: string;
    }

    interface AuthenticationTypeLogin {
        type: "LOGIN";
        user: string;
        credentials: SMTPConnection.Credentials;
        method: string | false;
    }

    interface AuthenticationTypeOAuth2 {
        type: "OAUTH2";
        user: string;
        oauth2: XOAuth2;
        method: "XOAUTH2";
    }

    type AuthenticationType = AuthenticationTypeLogin | AuthenticationTypeOAuth2;

    interface MailOptions extends Mail.Options {
        auth?: SMTPConnection.AuthenticationType | undefined;
        dsn?: SMTPConnection.DSNOptions | undefined;
    }

    interface Options extends MailOptions, TransportOptions, SMTPConnection.Options {
        service?: string | undefined;
        getSocket?(options: Options, callback: (err: Error | null, socketOptions: any) => void): void; // TODO http.ClientRequest?
        url?: string | undefined;
    }

    interface SentMessageInfo {
        /** includes the envelope object for the message */
        envelope: MimeNode.Envelope;
        /** most transports should return the final Message-Id value used with this property */
        messageId: string;
        accepted: Array<string | Mail.Address>;
        rejected: Array<string | Mail.Address>;
        pending: Array<string | Mail.Address>;
        response: string;
    }
}

declare class SMTPTransport extends EventEmitter implements Transport<SMTPTransport.SentMessageInfo> {
    options: SMTPTransport.Options;

    mailer: Mail<SMTPTransport.SentMessageInfo>;
    logger: shared.Logger;

    name: string;
    version: string;

    auth: SMTPTransport.AuthenticationType;

    constructor(options: SMTPTransport.Options | string);

    /** Placeholder function for creating proxy sockets. This method immediatelly returns without a socket */
    getSocket(options: SMTPTransport.Options, callback: (err: Error | null, socketOptions: object) => void): void;

    getAuth(
        authOpts: SMTPConnection.AuthenticationTypeLogin | SMTPConnection.AuthenticationTypeOAuth2,
    ): SMTPTransport.AuthenticationType;

    /** Sends an e-mail using the selected settings */
    send(
        mail: MailMessage<SMTPTransport.SentMessageInfo>,
        callback: (err: Error | null, info: SMTPTransport.SentMessageInfo) => void,
    ): void;

    /** Verifies SMTP configuration */
    verify(callback: (err: Error | null, success: true) => void): void;
    verify(): Promise<true>;

    /** Releases resources */
    close(): void;

    addListener(event: "close", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;

    emit(event: "close"): boolean;
    emit(event: "error", error: Error): boolean;

    on(event: "close", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;

    once(event: "close", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;

    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;

    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;

    listeners(event: "close"): Array<() => void>;
    listeners(event: "error"): Array<(err: Error) => void>;
}

export = SMTPTransport;
