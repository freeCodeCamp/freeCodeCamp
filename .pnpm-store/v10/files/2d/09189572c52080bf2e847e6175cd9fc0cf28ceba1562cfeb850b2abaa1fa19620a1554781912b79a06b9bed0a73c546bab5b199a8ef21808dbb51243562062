/// <reference types="node" />

import { EventEmitter } from "node:events";

import { Transport, TransportOptions } from "../..";
import * as shared from "../shared";
import Mail = require("../mailer");
import MailMessage = require("../mailer/mail-message");
import MimeNode = require("../mime-node");

declare namespace SESTransport {
    /**
     * Minimal structural shape of SES SendEmail input.
     * This is intentionally structural so @types/nodemailer does not require
     * installing @aws-sdk/client-ses.
     *
     * If you want the full, exact type, install @aws-sdk/client-ses in your
     * app and use its types directly in your own code.
     */
    interface SendEmailRequestLike {
        Source?: string;
        Destination?: {
            ToAddresses?: string[];
            CcAddresses?: string[];
            BccAddresses?: string[];
        };
        Message?: unknown;
        ReplyToAddresses?: string[];
        ReturnPath?: string;
        SourceArn?: string;
        ReturnPathArn?: string;
        Tags?: Array<{ Name?: string; Value?: string }>;
        ConfigurationSetName?: string;
        // Allow extra fields without forcing the SDK type package
        [key: string]: unknown;
    }

    /** Structural type matching SES client from @aws-sdk/client-ses */
    interface SESClientLike {
        /** Used with v3 low-level client + SendRawEmailCommand */
        send?(command: unknown): Promise<{ MessageId?: string }>;
        /** Used with v3 high-level SES class or v2 SDK */
        sendRawEmail?(params: unknown, options?: unknown): Promise<{ MessageId?: string }>;
        config?: {
            region?: string | (() => Promise<string>);
        };
    }

    /** Structural type matching the aws module shape */
    interface AwsModuleLike {
        SendRawEmailCommand?: unknown;
        [key: string]: unknown;
    }

    interface MailOptions extends Mail.Options {
        /** list of keys that SendRawEmail method can take */
        ses?: MailSesOptions | undefined;
    }

    // Keep it as an interface for backward-compatibility
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface MailSesOptions extends Partial<SendEmailRequestLike> {}

    interface Options extends MailOptions, TransportOptions {
        /** An option that expects an instantiated aws.SES object */
        SES:
            | {
                ses: SESClientLike;
                aws: AwsModuleLike;
            }
            | SESClientLike;
        /** How many messages per second is allowed to be delivered to SES */
        maxConnections?: number | undefined;
        /** How many parallel connections to allow towards SES */
        sendingRate?: number | undefined;
    }

    interface SentMessageInfo {
        /** an envelope object {from:'address', to:['address']} */
        envelope: MimeNode.Envelope;
        /** the Message-ID header value. This value is derived from the response of SES API, so it differs from the Message-ID values used in logging. */
        messageId: string;
        response: string;
        accepted: Array<string | Mail.Address>;
        rejected: Array<string | Mail.Address>;
        pending: Array<string | Mail.Address>;
        raw: Buffer;
    }
}

declare class SESTransport extends EventEmitter implements Transport<SESTransport.SentMessageInfo> {
    options: SESTransport.Options;

    logger: shared.Logger;
    mailer: Mail<SESTransport.SentMessageInfo>;

    name: string;
    version: string;

    ses: SESTransport.Options["SES"];

    maxConnections: number;
    connections: number;
    sendingRate: number;
    sendingRateTTL: number | null;
    rateInterval: number;
    rateMessages: Array<{ ts: number; pending: boolean }>;
    pending: Array<
        {
            mail: Mail<SESTransport.SentMessageInfo>;
            callback(err: Error | null, info: SESTransport.SentMessageInfo): void;
        }
    >;
    idling: boolean;

    constructor(options: SESTransport.Options);

    /** Schedules a sending of a message */
    send(
        mail: MailMessage<SESTransport.SentMessageInfo>,
        callback: (err: Error | null, info: SESTransport.SentMessageInfo) => void,
    ): void;

    /** Returns true if there are free slots in the queue */
    isIdle(): boolean;

    /** Verifies SES configuration */
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

export = SESTransport;
