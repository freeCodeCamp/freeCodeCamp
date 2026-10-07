/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";

import { Transport, TransportOptions } from "../..";

import * as shared from "../shared";

import Mail = require("../mailer");
import MailMessage = require("../mailer/mail-message");
import MimeNode = require("../mime-node");

declare namespace StreamTransport {
    type MailOptions = Mail.Options;

    interface Options extends MailOptions, TransportOptions {
        streamTransport: true;
        /** if true, then returns the message as a Buffer object instead of a stream */
        buffer?: boolean | undefined;
        /** either ‘windows’ or ‘unix’ (default). Forces all newlines in the output to either use Windows syntax <CR><LF> or Unix syntax <LF> */
        newline?: string | undefined;
    }

    interface SentMessageInfo {
        /** an envelope object {from:‘address’, to:[‘address’]} */
        envelope: MimeNode.Envelope;
        /** the Message-ID header value */
        messageId: string;
        /** either stream (default) of buffer depending on the options */
        message: Buffer | Readable;
        accepted: Array<string | Mail.Address>;
        rejected: Array<string | Mail.Address>;
        pending: Array<string | Mail.Address>;
        response: string;
    }
}

declare class StreamTransport implements Transport<StreamTransport.SentMessageInfo> {
    options: StreamTransport.Options;

    logger: shared.Logger;
    mailer: Mail<StreamTransport.SentMessageInfo>;

    name: string;
    version: string;

    winbreak: boolean;

    constructor(options: StreamTransport.Options);

    /** Compiles a mailcomposer message and forwards it to handler that sends it */
    send(
        mail: MailMessage<StreamTransport.SentMessageInfo>,
        callback: (err: Error | null, info: StreamTransport.SentMessageInfo) => void,
    ): void;
}

export = StreamTransport;
