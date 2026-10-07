import DKIM = require(".");
import MessageParser = require("./message-parser");

/** Returns DKIM signature header line */
declare function relaxedHeaders(
    headers: MessageParser.Header[],
    hashAlgo: string,
    bodyHash: string,
    options?: DKIM.SingleKeyOptions,
): string;

declare namespace relaxedHeaders {
    function relaxedHeaders(
        headers: MessageParser.Header[],
        hashAlgo: string,
        bodyHash: string,
        options?: DKIM.SingleKeyOptions,
    ): string;
}

export = relaxedHeaders;
