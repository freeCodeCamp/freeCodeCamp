/// <reference types="node" />

import * as Hoek from '@hapi/hoek';


export namespace domain {

    /**
     * Analyzes a string to verify it is a valid domain name.
     * 
     * @param domain - the domain name to validate.
     * @param options - optional settings.
     * 
     * @return - undefined when valid, otherwise an object with single error key with a string message value.
     */
    function analyze(domain: string, options?: Options): Analysis | null;

    /**
     * Analyzes a string to verify it is a valid domain name.
     * 
     * @param domain - the domain name to validate.
     * @param options - optional settings.
     * 
     * @return - true when valid, otherwise false.
     */
    function isValid(domain: string, options?: Options): boolean;

    interface Options {

        /**
         * Determines whether Unicode characters are allowed.
         * 
         * @default true
         */
        readonly allowUnicode?: boolean;

        /**
         * The minimum number of domain segments (e.g. `x.y.z` has 3 segments) required.
         * 
         * @default 2
         */
        readonly minDomainSegments?: number;

        /**
         * Top-level-domain options
         * 
         * @default true
         */
        readonly tlds?: Tlds.Allow | Tlds.Deny | boolean;
    }

    namespace Tlds {

        interface Allow {

            readonly allow: Set<string> | true;
        }

        interface Deny {

            readonly deny: Set<string>;
        }
    }
}


export namespace email {

    /**
     * Analyzes a string to verify it is a valid email address.
     * 
     * @param email - the email address to validate.
     * @param options - optional settings.
     * 
     * @return - undefined when valid, otherwise an object with single error key with a string message value.
     */
    function analyze(email: string, options?: Options): Analysis | null;

    /**
     * Analyzes a string to verify it is a valid email address.
     * 
     * @param email - the email address to validate.
     * @param options - optional settings.
     * 
     * @return - true when valid, otherwise false.
     */
    function isValid(email: string, options?: Options): boolean;

    interface Options extends domain.Options {

        /**
         * Determines whether to ignore the standards maximum email length limit.
         * 
         * @default false
         */
        readonly ignoreLength?: boolean;
    }
}


export interface Analysis {

    /**
     * The reason validation failed.
     */
    error: string;

    /**
     * The error code.
     */
    code: string;
}


export const errors: Record<string, string>;


export namespace ip {

    /**
     * Generates a regular expression used to validate IP addresses.
     * 
     * @param options - optional settings.
     * 
     * @returns an object with the regular expression and meta data.
     */
    function regex(options?: Options): Expression;

    interface Options {

        /**
         * The required CIDR mode.
         * 
         * @default 'optional'
         */
        readonly cidr?: Cidr;

        /**
         * The allowed versions.
         * 
         * @default ['ipv4', 'ipv6', 'ipvfuture']
         */
        readonly version?: Version | Version[];
    }

    type Cidr = 'optional' | 'required' | 'forbidden';
    type Version = 'ipv4' | 'ipv6' | 'ipvfuture';

    interface Expression {

        /**
         * The CIDR mode.
         */
        cidr: Cidr;

        /**
         * The raw regular expression string.
         */
        raw: string;

        /**
         * The regular expression.
         */
        regex: RegExp;

        /**
         * The array of versions allowed.
         */
        versions: Version[];
    }
}


export namespace uri {

    /**
     * Faster version of decodeURIComponent() that does not throw.
     * 
     * @param string - the URL string to decode.
     * 
     * @returns the decoded string or null if invalid.
     */
    function decode(string: string): string | null;

    /**
     * Generates a regular expression used to validate URI addresses.
     *
     * @param options - optional settings.
     *
     * @returns an object with the regular expression and meta data.
     */
    function regex(options?: Options): Expression;

    type Options = Hoek.ts.XOR<Options.Options, Options.Relative>;

    namespace Options {

        interface Query {

            /**
             * Allow the use of [] in query parameters.
             * 
             * @default false
             */
            readonly allowQuerySquareBrackets?: boolean;
        }

        interface Relative extends Query {

            /**
             * Requires the URI to be relative.
             * 
             * @default false
             */
            readonly relativeOnly?: boolean;
        }

        interface Options extends Query {

            /**
             * Allow relative URIs.
             * 
             * @default false
             */
            readonly allowRelative?: boolean;

            /**
             * Capture domain segment ($1).
             * 
             * @default false
             */
            readonly domain?: boolean;

            /**
             * The allowed URI schemes.
             */
            readonly scheme?: Scheme | Scheme[];
        }

        type Scheme = string | RegExp;
    }

    interface Expression {

        /**
         * The raw regular expression string.
         */
        raw: string;

        /**
         * The regular expression.
         */
        regex: RegExp;
    }
}
