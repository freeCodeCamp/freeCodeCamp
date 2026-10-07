// Type definitions for body-parser 1.19
// Project: https://github.com/expressjs/body-parser
// Definitions by: Santi Albo <https://github.com/santialbo>
//                 Vilic Vane <https://github.com/vilic>
//                 Jonathan Häberle <https://github.com/dreampulse>
//                 Gevik Babakhani <https://github.com/blendsdk>
//                 Tomasz Łaziuk <https://github.com/tlaziuk>
//                 Jason Walton <https://github.com/jwalton>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { NextHandleFunction } from "connect";
import * as http from "http";

// for docs go to https://github.com/expressjs/body-parser/tree/1.19.0#body-parser

declare namespace bodyParser {
    interface BodyParser {
        /**
         * @deprecated  use individual json/urlencoded middlewares
         */
        (options?: OptionsJson & OptionsText & OptionsUrlencoded): NextHandleFunction;
        /**
         * Returns middleware that only parses json and only looks at requests
         * where the Content-Type header matches the type option.
         */
        json(options?: OptionsJson): NextHandleFunction;
        /**
         * Returns middleware that parses all bodies as a Buffer and only looks at requests
         * where the Content-Type header matches the type option.
         */
        raw(options?: Options): NextHandleFunction;

        /**
         * Returns middleware that parses all bodies as a string and only looks at requests
         * where the Content-Type header matches the type option.
         */
        text(options?: OptionsText): NextHandleFunction;
        /**
         * Returns middleware that only parses urlencoded bodies and only looks at requests
         * where the Content-Type header matches the type option
         */
        urlencoded(options?: OptionsUrlencoded): NextHandleFunction;
    }

    interface Options {
        /** When set to true, then deflated (compressed) bodies will be inflated; when false, deflated bodies are rejected. Defaults to true. */
        inflate?: boolean | undefined;
        /**
         * Controls the maximum request body size. If this is a number,
         * then the value specifies the number of bytes; if it is a string,
         * the value is passed to the bytes library for parsing. Defaults to '100kb'.
         */
        limit?: number | string | undefined;
        /**
         * The type option is used to determine what media type the middleware will parse
         */
        type?: string | string[] | ((req: http.IncomingMessage) => any) | undefined;
        /**
         * The verify option, if supplied, is called as verify(req, res, buf, encoding),
         * where buf is a Buffer of the raw request body and encoding is the encoding of the request.
         */
        verify?(req: http.IncomingMessage, res: http.ServerResponse, buf: Buffer, encoding: string): void;
    }

    interface OptionsJson extends Options {
        /**
         * The reviver option is passed directly to JSON.parse as the second argument.
         */
        reviver?(key: string, value: any): any;
        /**
         * When set to `true`, will only accept arrays and objects;
         * when `false` will accept anything JSON.parse accepts. Defaults to `true`.
         */
        strict?: boolean | undefined;
    }

    interface OptionsText extends Options {
        /**
         * Specify the default character set for the text content if the charset
         * is not specified in the Content-Type header of the request.
         * Defaults to `utf-8`.
         */
        defaultCharset?: string | undefined;
    }

    interface OptionsUrlencoded extends Options {
        /**
         * The extended option allows to choose between parsing the URL-encoded data
         * with the querystring library (when `false`) or the qs library (when `true`).
         */
        extended?: boolean | undefined;
        /**
         * The parameterLimit option controls the maximum number of parameters
         * that are allowed in the URL-encoded data. If a request contains more parameters than this value,
         * a 413 will be returned to the client. Defaults to 1000.
         */
        parameterLimit?: number | undefined;
    }
}

declare const bodyParser: bodyParser.BodyParser;

export = bodyParser;
