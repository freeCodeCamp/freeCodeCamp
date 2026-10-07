/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
/**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */
export declare class SecurityDetails {
    #private;
    /**
     * @internal
     */
    constructor(securityPayload: Protocol.Network.SecurityDetails);
    /**
     * The name of the issuer of the certificate.
     */
    issuer(): string;
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */
    validFrom(): number;
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */
    validTo(): number;
    /**
     * The security protocol being used, e.g. "TLS 1.2".
     */
    protocol(): string;
    /**
     * The name of the subject to which the certificate was issued.
     */
    subjectName(): string;
    /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */
    subjectAlternativeNames(): string[];
}
//# sourceMappingURL=SecurityDetails.d.ts.map