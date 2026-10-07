/// <reference types="node" />

import { Readable, ReadableOptions, Transform } from "stream";

import Mail = require("../mailer");

declare namespace MimeNode {
    interface Addresses {
        from?: string[] | undefined;
        sender?: string[] | undefined;
        "reply-to"?: string[] | undefined;
        to?: string[] | undefined;
        cc?: string[] | undefined;
        bcc?: string[] | undefined;
    }

    interface Envelope {
        /** includes an address object or is set to false */
        from: string | false;
        /** includes an array of address objects */
        to: string[];
    }

    interface Options {
        /** root node for this tree */
        rootNode?: MimeNode | undefined;

        /** immediate parent for this node */
        parentNode?: MimeNode | undefined;

        /** filename for an attachment node */
        filename?: string | undefined;

        /** Hostname for default message-id values */
        hostname?: string | undefined;

        /** shared part of the unique multipart boundary */
        baseBoundary?: string | undefined;

        /** If true, do not exclude Bcc from the generated headers */
        keepBcc?: boolean | undefined;

        /**
         * If set to 'win' then uses \r\n,
         * if 'linux' then \n.
         * If not set (or `raw` is used) then newlines are kept as is.
         */
        newline?: string | undefined;

        /** either 'Q' (the default) or 'B' */
        textEncoding?: "B" | "Q" | undefined;

        /** method to normalize header keys for custom caseing */
        normalizeHeaderKey?(key: string): string;

        /** undocumented */
        boundaryPrefix?: string | undefined;

        /** Undocumented */
        disableFileAccess?: boolean | undefined;

        /** Undocumented */
        disableUrlAccess?: boolean | undefined;
    }
}

/**
 * Creates a new mime tree node. Assumes 'multipart/*' as the content type
 * if it is a branch, anything else counts as leaf. If rootNode is missing from
 * the options, assumes this is the root.
 */
declare class MimeNode {
    constructor(contentType?: string, options?: MimeNode.Options);

    /** Creates and appends a child node.Arguments provided are passed to MimeNode constructor */
    createChild(contentType: string, options?: MimeNode.Options): MimeNode;

    /** Appends an existing node to the mime tree. Removes the node from an existing tree if needed */
    appendChild(childNode: MimeNode): MimeNode;

    /** Replaces current node with another node */
    replace(node: MimeNode): MimeNode;

    /** Removes current node from the mime tree */
    remove(): this;

    /**
     * Sets a header value. If the value for selected key exists, it is overwritten.
     * You can set multiple values as well by using [{key:'', value:''}] or
     * {key: 'value'} as the first argument.
     */
    setHeader(key: string, value: string | string[]): this;
    setHeader(headers: { [key: string]: string } | Array<{ key: string; value: string }>): this;

    /**
     * Adds a header value. If the value for selected key exists, the value is appended
     * as a new field and old one is not touched.
     * You can set multiple values as well by using [{key:'', value:''}] or
     * {key: 'value'} as the first argument.
     */
    addHeader(key: string, value: string): this;
    addHeader(headers: { [key: string]: string } | Array<{ key: string; value: string }>): this;

    /** Retrieves the first mathcing value of a selected key */
    getHeader(key: string): string;

    /**
     * Sets body content for current node. If the value is a string, charset is added automatically
     * to Content-Type (if it is text/*). If the value is a Buffer, you need to specify
     * the charset yourself
     */
    setContent(content: string | Buffer | Readable): this;

    /** Generate the message and return it with a callback or promise */
    build(callback: (err: Error | null, buf: Buffer) => void): void;
    build(): Promise<Buffer>;

    getTransferEncoding(): string;

    /** Builds the header block for the mime node. Append \r\n\r\n before writing the content */
    buildHeaders(): string;

    /**
     * Streams the rfc2822 message from the current node. If this is a root node,
     * mandatory header fields are set if missing (Date, Message-Id, MIME-Version)
     */
    createReadStream(options?: ReadableOptions): Readable;

    /**
     * Appends a transform stream object to the transforms list. Final output
     * is passed through this stream before exposing
     */
    transform(transform: Transform): void;

    /**
     * Appends a post process function. The functon is run after transforms and
     * uses the following syntax
     *
     *   processFunc(input) -> outputStream
     */
    processFunc(processFunc: (outputStream: Readable) => Readable): void;

    stream(outputStream: Readable, options: ReadableOptions, done: (err?: Error | null) => void): void;

    /** Sets envelope to be used instead of the generated one */
    setEnvelope(envelope: Mail.Envelope): this;

    /** Generates and returns an object with parsed address fields */
    getAddresses(): MimeNode.Addresses;

    /** Generates and returns SMTP envelope with the sender address and a list of recipients addresses */
    getEnvelope(): MimeNode.Envelope;

    /** Returns Message-Id value. If it does not exist, then creates one */
    messageId(): string;

    /** Sets pregenerated content that will be used as the output of this node */
    setRaw(raw: string | Buffer | Readable): this;

    /** shared part of the unique multipart boundary */
    baseBoundary: string;

    /** a multipart boundary value */
    boundary?: string | false | undefined;

    /** Undocumented */
    boundaryPrefix: string;

    /* An array for possible child nodes */
    childNodes: MimeNode[];

    /** body content for current node */
    content?: string | Buffer | Readable | undefined;

    /** Undocumented */
    contentType?: string | undefined;

    /**
     * If date headers is missing and current node is the root, this value is used instead
     */
    date: Date;

    /** Undocumented */
    disableFileAccess: boolean;

    /** Undocumented */
    disableUrlAccess: boolean;

    /** filename for an attachment node */
    filename?: string | undefined;

    /** Hostname for default message-id values */
    hostname?: string | undefined;

    /** If true, do not exclude Bcc from the generated headers */
    keepBcc: boolean;

    /** Undocumented */
    multipart?: boolean | undefined;

    /**
     * If set to 'win' then uses \r\n,
     * if 'linux' then \n.
     * If not set (or `raw` is used) then newlines are kept as is.
     */
    newline?: string | undefined;

    /** Undocumented */
    nodeCounter: number;

    /** method to normalize header keys for custom caseing */
    normalizeHeaderKey?: ((key: string) => string) | undefined;

    /* Immediate parent for this node (or undefined if not set) */
    parentNode?: MimeNode | undefined;

    /** root node for this tree */
    rootNode: MimeNode;

    /** either 'Q' (the default) or 'B' */
    textEncoding: "B" | "Q" | "";
}

export = MimeNode;
