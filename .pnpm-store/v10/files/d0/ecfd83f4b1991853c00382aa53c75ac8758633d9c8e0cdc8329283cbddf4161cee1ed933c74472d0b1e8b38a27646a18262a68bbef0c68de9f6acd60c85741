/// <reference types="node" />

import { PassThrough, Readable } from "stream";

declare namespace DKIM {
    interface OptionalOptions {
        /** optional location for cached messages. If not set then caching is not used. */
        cacheDir?: string | false | undefined;
        /** optional size in bytes, if message is larger than this treshold it gets cached to disk (assuming cacheDir is set and writable). Defaults to 131072 (128 kB). */
        cacheTreshold?: number | undefined;
        /** optional algorithm for the body hash, defaults to ‘sha256’ */
        hashAlgo?: string | undefined;
        /** an optional colon separated list of header keys to sign (eg. message-id:date:from:to...') */
        headerFieldNames?: string | undefined;
        /** optional colon separated list of header keys not to sign. This is useful if you want to sign all the relevant keys but your provider changes some values, ie Message-ID and Date. In this case you should use 'message-id:date' to prevent signing these values. */
        skipFields?: string | undefined;
    }

    interface SingleKeyOptions extends OptionalOptions {
        /** is the domain name to use in the signature */
        domainName: string;
        /** is the DKIM key selector */
        keySelector: string;
        /** is the private key for the selector in PEM format */
        privateKey: string | { key: string; passphrase: string };
    }

    interface MultipleKeysOptions extends OptionalOptions {
        /** is an optional array of key objects (domainName, keySelector, privateKey) if you want to add more than one signature to the message. If this value is set then the default key values are ignored */
        keys: SingleKeyOptions[];
    }

    type Options = SingleKeyOptions | MultipleKeysOptions;
}

declare class DKIM {
    options: DKIM.Options;
    keys: DKIM.SingleKeyOptions[];

    constructor(options?: DKIM.Options);

    sign(input: string | Buffer | Readable, extraOptions?: DKIM.Options): PassThrough;
}

export = DKIM;
