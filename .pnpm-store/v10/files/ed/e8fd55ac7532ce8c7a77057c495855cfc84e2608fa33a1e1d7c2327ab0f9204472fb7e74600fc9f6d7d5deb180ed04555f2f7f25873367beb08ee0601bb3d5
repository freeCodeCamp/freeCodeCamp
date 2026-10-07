/// <reference types="node" />

import { EventEmitter } from "events";
import { Socket } from "net";
import { Readable } from "stream";
import { Url } from "url";

import { Transport, TransportOptions } from "../..";
import * as shared from "../shared";

import DKIM = require("../dkim");
import MailMessage = require("./mail-message");
import MimeNode = require("../mime-node");
import SMTPConnection = require("../smtp-connection");
import XOAuth2 = require("../xoauth2");

declare namespace Mail {
    type Headers =
        | { [key: string]: string | string[] | { prepared: boolean; value: string } }
        | Array<{ key: string; value: string }>;

    type ListHeader = string | { url: string; comment: string };

    interface ListHeaders {
        [key: string]: ListHeader | ListHeader[] | ListHeader[][];
    }

    type TextEncoding = "quoted-printable" | "base64";

    interface Address {
        name: string;
        address: string;
    }

    interface AttachmentLike {
        /** String, Buffer or a Stream contents for the attachment */
        content?: string | Buffer | Readable | undefined;
        /** path to a file or an URL (data uris are allowed as well) if you want to stream the file instead of including it (better for larger attachments) */
        path?: string | Url | undefined;
    }

    interface Attachment extends AttachmentLike {
        /** filename to be reported as the name of the attached file, use of unicode is allowed. If you do not want to use a filename, set this value as false, otherwise a filename is generated automatically */
        filename?: string | false | undefined;
        /** optional content id for using inline images in HTML message source. Using cid sets the default contentDisposition to 'inline' and moves the attachment into a multipart/related mime node, so use it only if you actually want to use this attachment as an embedded image */
        cid?: string | undefined;
        /** If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: base64, hex, binary etc. Useful if you want to use binary attachments in a JSON formatted e-mail object */
        encoding?: string | undefined;
        /** optional content type for the attachment, if not set will be derived from the filename property */
        contentType?: string | undefined;
        /** optional transfer encoding for the attachment, if not set it will be derived from the contentType property. Example values: quoted-printable, base64. If it is unset then base64 encoding is used for the attachment. If it is set to false then previous default applies (base64 for most, 7bit for text). */
        contentTransferEncoding?: "7bit" | "base64" | "quoted-printable" | false | undefined;
        /** optional content disposition type for the attachment, defaults to ‘attachment’ */
        contentDisposition?: "attachment" | "inline" | undefined;
        /** is an object of additional headers */
        headers?: Headers | undefined;
        /** an optional value that overrides entire node content in the mime message. If used then all other options set for this node are ignored. */
        raw?: string | Buffer | Readable | AttachmentLike | undefined;
    }

    interface AmpAttachment extends AttachmentLike {
        /** is an alternative for content to load the AMP4EMAIL data from an URL */
        href?: string | undefined;
        /** defines optional content encoding, eg. ‘base64’ or ‘hex’. This only applies if the content is a string. By default an unicode string is assumed. */
        encoding?: string | undefined;
        /** optional content type for the attachment, if not set will be derived from the filename property */
        contentType?: string | undefined;
        /** an optional value that overrides entire node content in the mime message. If used then all other options set for this node are ignored. */
        raw?: string | Buffer | Readable | AttachmentLike | undefined;
    }

    interface IcalAttachment extends AttachmentLike {
        /** optional method, case insensitive, defaults to ‘publish’. Other possible values would be ‘request’, ‘reply’, ‘cancel’ or any other valid calendar method listed in RFC5546. This should match the METHOD: value in calendar event file. */
        method?: string | undefined;
        /** optional filename, defaults to ‘invite.ics’ */
        filename?: string | false | undefined;
        /** is an alternative for content to load the calendar data from an URL */
        href?: string | undefined;
        /** defines optional content encoding, eg. ‘base64’ or ‘hex’. This only applies if the content is a string. By default an unicode string is assumed. */
        encoding?: string | undefined;
    }

    interface Connection {
        connection: Socket;
    }

    interface Envelope {
        /** the first address gets used as MAIL FROM address in SMTP */
        from?: string | undefined;
        /** addresses from this value get added to RCPT TO list */
        to?: string | undefined;
        /** addresses from this value get added to RCPT TO list */
        cc?: string | undefined;
        /** addresses from this value get added to RCPT TO list */
        bcc?: string | undefined;
    }

    interface Options {
        /** The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>' */
        from?: string | Address | undefined;
        /** An e-mail address that will appear on the Sender: field */
        sender?: string | Address | undefined;
        /** Comma separated list or an array of recipients e-mail addresses that will appear on the To: field */
        to?: string | Address | Array<string | Address> | undefined;
        /** Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field */
        cc?: string | Address | Array<string | Address> | undefined;
        /** Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field */
        bcc?: string | Address | Array<string | Address> | undefined;
        /** Comma separated list or an array of e-mail addresses that will appear on the Reply-To: field */
        replyTo?: string | Address | Array<string | Address> | undefined;
        /** The message-id this message is replying */
        inReplyTo?: string | Address | undefined;
        /** Message-id list (an array or space separated string) */
        references?: string | string[] | undefined;
        /** The subject of the e-mail */
        subject?: string | undefined;
        /** The plaintext version of the message */
        text?: string | Buffer | Readable | AttachmentLike | undefined;
        /** The HTML version of the message */
        html?: string | Buffer | Readable | AttachmentLike | undefined;
        /** Apple Watch specific HTML version of the message, same usage as with text and html */
        watchHtml?: string | Buffer | Readable | AttachmentLike | undefined;
        /** AMP4EMAIL specific HTML version of the message, same usage as with text and html. Make sure it is a full and valid AMP4EMAIL document, otherwise the displaying email client falls back to html and ignores the amp part */
        amp?: string | Buffer | Readable | AmpAttachment | undefined;
        /** iCalendar event, same usage as with text and html. Event method attribute defaults to ‘PUBLISH’ or define it yourself: {method: 'REQUEST', content: iCalString}. This value is added as an additional alternative to html or text. Only utf-8 content is allowed */
        icalEvent?: string | Buffer | Readable | IcalAttachment | undefined;
        /** An object or array of additional header fields */
        headers?: Headers | undefined;
        /** An object where key names are converted into list headers. List key help becomes List-Help header etc. */
        list?: ListHeaders | undefined;
        /** An array of attachment objects */
        attachments?: Attachment[] | undefined;
        /** An array of alternative text contents (in addition to text and html parts) */
        alternatives?: Attachment[] | undefined;
        /** optional SMTP envelope, if auto generated envelope is not suitable */
        envelope?: Envelope | MimeNode.Envelope | undefined;
        /** optional Message-Id value, random value will be generated if not set */
        messageId?: string | undefined;
        /** optional Date value, current UTC string will be used if not set */
        date?: Date | string | undefined;
        /** optional transfer encoding for the textual parts */
        encoding?: string | undefined;
        /** if set then overwrites entire message output with this value. The value is not parsed, so you should still set address headers or the envelope value for the message to work */
        raw?: string | Buffer | Readable | AttachmentLike | undefined;
        /** set explicitly which encoding to use for text parts (quoted-printable or base64). If not set then encoding is detected from text content (mostly ascii means quoted-printable, otherwise base64) */
        textEncoding?: TextEncoding | undefined;
        /** if set to true then fails with an error when a node tries to load content from URL */
        disableUrlAccess?: boolean | undefined;
        /** if set to true then fails with an error when a node tries to load content from a file */
        disableFileAccess?: boolean | undefined;
        /** is an object with DKIM options */
        dkim?: DKIM.Options | undefined;
        /** method to normalize header keys for custom caseing */
        normalizeHeaderKey?(key: string): string;
        priority?: "high" | "normal" | "low" | undefined;
        /** if set to true then converts data:images in the HTML content of message to embedded attachments */
        attachDataUrls?: boolean | undefined;
        /**
         * if set to false then removes x-mailer header, otherwise replaces the default x-mailer header value
         */
        xMailer?: false | string;
    }

    type PluginFunction<T = any> = (mail: MailMessage<T>, callback: (err?: Error | null) => void) => void;
}

/** Creates an object for exposing the Mail API */
declare class Mail<T = any, DefaultTransportOptions = TransportOptions> extends EventEmitter {
    options: Mail.Options;
    meta: Map<string, any>;
    dkim: DKIM;
    transporter: Transport<T>;
    logger: shared.Logger;

    /** Usage: typeof transporter.MailMessage */
    MailMessage: MailMessage<T>;

    _defaults: DefaultTransportOptions;

    constructor(transporter: Transport<T>, options?: TransportOptions, defaults?: DefaultTransportOptions);

    /** Closes all connections in the pool. If there is a message being sent, the connection is closed later */
    close(): void;

    /** Returns true if there are free slots in the queue */
    isIdle(): boolean;

    /** Verifies SMTP configuration */
    verify(callback: (err: Error | null, success: true) => void): void;
    verify(): Promise<true>;

    use(step: string, plugin: Mail.PluginFunction<T>): this;

    /** Sends an email using the preselected transport object */
    sendMail(
        mailOptions: Mail.Options & Partial<DefaultTransportOptions>,
        callback: (err: Error | null, info: T) => void,
    ): void;
    sendMail(mailOptions: Mail.Options, callback: (err: Error | null, info: T) => void): void;
    sendMail(mailOptions: Mail.Options & Partial<DefaultTransportOptions>): Promise<T>;
    sendMail(mailOptions: Mail.Options): Promise<T>;

    getVersionString(): string;

    /** Sets up proxy handler for a Nodemailer object */
    setupProxy(proxyUrl: string): void;

    set(
        key: "oauth2_provision_cb",
        value: (
            user: string,
            renew: boolean,
            callback: (err: Error | null, accessToken?: string, expires?: number) => void,
        ) => void,
    ): Map<string, any>;
    set(
        key:
            | "proxy_handler_http"
            | "proxy_handler_https"
            | "proxy_handler_socks"
            | "proxy_handler_socks5"
            | "proxy_handler_socks4"
            | "proxy_handler_socks4a",
        value: (
            proxy: Url,
            options: TransportOptions,
            callback: (err: Error | null, socketOptions?: { connection: Socket }) => void,
        ) => void,
    ): Map<string, any>;
    set(key: string, value: any): Map<string, any>;

    get(
        key: "oauth2_provision_cb",
    ): (
        user: string,
        renew: boolean,
        callback: (err: Error | null, accessToken: string, expires: number) => void,
    ) => void;
    get(
        key:
            | "proxy_handler_http"
            | "proxy_handler_https"
            | "proxy_handler_socks"
            | "proxy_handler_socks5"
            | "proxy_handler_socks4"
            | "proxy_handler_socks4a",
    ): (
        proxy: Url,
        options: TransportOptions,
        callback: (err: Error | null, socketOptions: { connection: Socket }) => void,
    ) => void;
    get(key: string): any;

    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "idle", listener: () => void): this;
    addListener(event: "token", listener: (token: XOAuth2.Token) => void): this;

    emit(event: "error", error: Error): boolean;
    emit(event: "idle"): boolean;
    emit(event: "token", token: XOAuth2.Token): boolean;

    on(event: "error", listener: (err: Error) => void): this;
    on(event: "idle", listener: () => void): this;
    on(event: "token", listener: (token: XOAuth2.Token) => void): this;

    once(event: "error", listener: (err: Error) => void): this;
    once(event: "idle", listener: () => void): this;
    once(event: "token", listener: (token: XOAuth2.Token) => void): this;

    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "idle", listener: () => void): this;
    prependListener(event: "end", listener: (token: XOAuth2.Token) => void): this;

    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "idle", listener: () => void): this;
    prependOnceListener(event: "end", listener: (token: XOAuth2.Token) => void): this;

    listeners(event: "error"): Array<(err: Error) => void>;
    listeners(event: "idle"): Array<() => void>;
    listeners(event: "end"): Array<(token: XOAuth2.Token) => void>;
}

export = Mail;
