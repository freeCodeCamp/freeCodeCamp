/// <reference types="node" />

import * as http from "http";
import { Readable, Stream } from "stream";

import * as shared from "../shared";

type ms = number;
type s = number;

declare namespace XOAuth2 {
    interface Options {
        /** User e-mail address */
        user?: string | undefined;
        /** Client ID value */
        clientId?: string | undefined;
        /** Client secret value */
        clientSecret?: string | undefined;
        /** Refresh token for an user */
        refreshToken?: string | undefined;
        /** Endpoint for token generation, defaults to 'https://accounts.google.com/o/oauth2/token' */
        accessUrl?: string | undefined;
        /** An existing valid accessToken */
        accessToken?: string | undefined;
        /** Private key for JSW */
        privateKey?: string | { key: string; passphrase: string } | undefined;
        /** Optional Access Token expire time in ms */
        expires?: ms | undefined;
        /** Optional TTL for Access Token in seconds */
        timeout?: s | undefined;
        /** Function to run when a new access token is required */
        provisionCallback?(
            user: string,
            renew: boolean,
            callback: (err: Error | null, accessToken: string, expires: number) => void,
        ): void;
        serviceClient?: string | undefined;
    }

    interface Token {
        user: string;
        accessToken: string;
        expires: number;
    }

    interface RequestParams {
        customHeaders?: http.OutgoingHttpHeaders | undefined;
    }
}

declare class XOAuth2 extends Stream {
    options: XOAuth2.Options;
    logger: shared.Logger;
    accessToken: string | false;
    expires: number;

    constructor(options?: XOAuth2.Options, logger?: shared.Logger);

    /** Returns or generates (if previous has expired) a XOAuth2 token */
    getToken(renew: boolean, callback: (err: Error | null, accessToken: string) => void): void;

    /** Updates token values */
    updateToken(accessToken: string, timeout: s): XOAuth2.Token;

    /** Generates a new XOAuth2 token with the credentials provided at initialization */
    generateToken(callback: (err: Error | null, accessToken: string) => void): void;

    /** Converts an access_token and user id into a base64 encoded XOAuth2 token */
    buildXOAuth2Token(accessToken: string): string;

    /**
     * Custom POST request handler.
     * This is only needed to keep paths short in Windows – usually this module
     * is a dependency of a dependency and if it tries to require something
     * like the request module the paths get way too long to handle for Windows.
     * As we do only a simple POST request we do not actually require complicated
     * logic support (no redirects, no nothing) anyway.
     */
    postRequest(
        url: string,
        payload: string | Buffer | Readable | { [key: string]: string },
        params: XOAuth2.RequestParams,
        callback: (err: Error | null, buf: Buffer) => void,
    ): void;

    /** Encodes a buffer or a string into Base64url format */
    toBase64URL(data: Buffer | string): string;

    /** Creates a JSON Web Token signed with RS256 (SHA256 + RSA) */
    jwtSignRS256(payload: object): string;

    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "token", listener: (token: XOAuth2.Token) => void): this;

    emit(event: "error", error: Error): boolean;
    emit(event: "token", token: XOAuth2.Token): boolean;

    on(event: "error", listener: (err: Error) => void): this;
    on(event: "token", listener: (token: XOAuth2.Token) => void): this;

    once(event: "error", listener: (err: Error) => void): this;
    once(event: "token", listener: (token: XOAuth2.Token) => void): this;

    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "end", listener: (token: XOAuth2.Token) => void): this;

    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "end", listener: (token: XOAuth2.Token) => void): this;

    listeners(event: "error"): Array<(err: Error) => void>;
    listeners(event: "end"): Array<(token: XOAuth2.Token) => void>;
}

export = XOAuth2;
