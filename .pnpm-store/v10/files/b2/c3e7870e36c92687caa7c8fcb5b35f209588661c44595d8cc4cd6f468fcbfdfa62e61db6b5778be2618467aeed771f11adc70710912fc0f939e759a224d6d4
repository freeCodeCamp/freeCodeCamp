/// <reference types="node" />

import { Readable } from "stream";

import Mail = require(".");
import MimeNode = require("../mime-node");

declare class MailMessage<T = any> {
    mailer: Mail<T>;
    data: Mail.Options;
    message: MimeNode;

    constructor(mailer: Mail<T>, data: Mail.Options);

    resolveContent(
        data: object | any[],
        key: string | number,
        callback: (err: Error | null, value?: any) => any,
    ): Promise<any>;

    resolveAll(callback: (err?: Error | null, data?: Mail.Options) => void): void;

    normalize(callback: (err?: Error | null, data?: Mail.Options) => void): void;

    setMailerHeader(): void;

    setPriorityHeaders(): void;

    setListHeaders(): void;
}

export = MailMessage;
