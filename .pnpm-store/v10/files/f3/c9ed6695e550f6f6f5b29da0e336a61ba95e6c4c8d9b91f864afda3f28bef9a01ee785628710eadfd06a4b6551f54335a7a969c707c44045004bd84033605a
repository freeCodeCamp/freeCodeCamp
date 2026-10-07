/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

/**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */
export class SecurityDetails {
  #subjectName: string;
  #issuer: string;
  #validFrom: number;
  #validTo: number;
  #protocol: string;
  #sanList: string[];

  /**
   * @internal
   */
  constructor(securityPayload: Protocol.Network.SecurityDetails) {
    this.#subjectName = securityPayload.subjectName;
    this.#issuer = securityPayload.issuer;
    this.#validFrom = securityPayload.validFrom;
    this.#validTo = securityPayload.validTo;
    this.#protocol = securityPayload.protocol;
    this.#sanList = securityPayload.sanList;
  }

  /**
   * The name of the issuer of the certificate.
   */
  issuer(): string {
    return this.#issuer;
  }

  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the start of the certificate's validity.
   */
  validFrom(): number {
    return this.#validFrom;
  }

  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the end of the certificate's validity.
   */
  validTo(): number {
    return this.#validTo;
  }

  /**
   * The security protocol being used, e.g. "TLS 1.2".
   */
  protocol(): string {
    return this.#protocol;
  }

  /**
   * The name of the subject to which the certificate was issued.
   */
  subjectName(): string {
    return this.#subjectName;
  }

  /**
   * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
   */
  subjectAlternativeNames(): string[] {
    return this.#sanList;
  }
}
