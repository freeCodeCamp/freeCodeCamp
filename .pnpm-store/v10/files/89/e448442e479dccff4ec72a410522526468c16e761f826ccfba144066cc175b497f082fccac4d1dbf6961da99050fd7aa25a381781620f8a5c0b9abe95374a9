import { MongoDriverError } from '../../../error';
import type { IdPInfo, OIDCResponse } from '../mongodb_oidc';

class MongoOIDCError extends MongoDriverError {}

/** @internal */
export class TokenCache {
  private accessToken?: string;
  private refreshToken?: string;
  private idpInfo?: IdPInfo;
  private expiresInSeconds?: number;

  get hasAccessToken(): boolean {
    return !!this.accessToken;
  }

  get hasRefreshToken(): boolean {
    return !!this.refreshToken;
  }

  get hasIdpInfo(): boolean {
    return !!this.idpInfo;
  }

  getAccessToken(): string {
    if (!this.accessToken) {
      throw new MongoOIDCError('Attempted to get an access token when none exists.');
    }
    return this.accessToken;
  }

  getRefreshToken(): string {
    if (!this.refreshToken) {
      throw new MongoOIDCError('Attempted to get a refresh token when none exists.');
    }
    return this.refreshToken;
  }

  getIdpInfo(): IdPInfo {
    if (!this.idpInfo) {
      throw new MongoOIDCError('Attempted to get IDP information when none exists.');
    }
    return this.idpInfo;
  }

  put(response: OIDCResponse, idpInfo?: IdPInfo) {
    this.accessToken = response.accessToken;
    this.refreshToken = response.refreshToken;
    this.expiresInSeconds = response.expiresInSeconds;
    if (idpInfo) {
      this.idpInfo = idpInfo;
    }
  }

  removeAccessToken() {
    this.accessToken = undefined;
  }

  removeRefreshToken() {
    this.refreshToken = undefined;
  }
}
