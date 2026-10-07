/// <reference types="node" />

import { EventEmitter } from "events";

import MailMessage = require("../mailer/mail-message");
import * as shared from "../shared";

import SMTPPool = require(".");

/**
 * Creates an element for the pool
 */
declare class PoolResource extends EventEmitter {
    pool: SMTPPool;
    options: SMTPPool.Options;
    logger: shared.Logger;

    messages: number;
    available: boolean;

    constructor(pool: SMTPPool);

    /** Initiates a connection to the SMTP server */
    connect(callback: (err: Error | null, established: boolean) => void): void;
    /** Sends an e-mail to be sent using the selected settings */
    send(mail: MailMessage, callback: (err: Error | null, info: SMTPPool.SentMessageInfo) => void): void;
    /** Closes the connection */
    close(): void;

    addListener(event: "available", listener: () => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "available"): boolean;
    emit(event: "close"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "available", listener: () => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "available", listener: () => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "available", listener: () => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "available", listener: () => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "available", listener: () => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = PoolResource;
