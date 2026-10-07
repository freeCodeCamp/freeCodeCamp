import {
  LocalStorageCompat,
  StickyAssignmentsDocument,
  StickyAttributeKey,
} from "./types/growthbook";
import { toString } from "./util";
import { getStickyBucketAttributeKey } from "./core";

export interface CookieAttributes {
  expires?: number | Date | undefined;
  path?: string | undefined;
  domain?: string | undefined;
  secure?: boolean | undefined;
  sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
export interface JsCookiesCompat<T = string> {
  set(
    name: string,
    value: string | T,
    options?: CookieAttributes,
  ): string | undefined;
  get(name: string): string | T | undefined;
  get(): { [key: string]: string };
  remove(name: string, options?: CookieAttributes): void;
}

export interface IORedisCompat {
  mget(...keys: string[]): Promise<string[]>;
  set(key: string, value: string): Promise<string>;
}

export interface RequestCompat {
  cookies: Record<string, string>;
  [key: string]: unknown;
}
export interface ResponseCompat {
  cookie(
    name: string,
    value: string,
    options?: CookieAttributes,
  ): ResponseCompat;
  [key: string]: unknown;
}

/**
 * Responsible for reading and writing documents which describe sticky bucket assignments.
 */
export abstract class StickyBucketService {
  protected prefix: string;

  constructor(opts?: { prefix?: string }) {
    opts = opts || {};
    this.prefix = opts.prefix || "";
  }

  abstract getAssignments(
    attributeName: string,
    attributeValue: string,
  ): Promise<StickyAssignmentsDocument | null>;

  abstract saveAssignments(doc: StickyAssignmentsDocument): Promise<unknown>;

  /**
   * The SDK calls getAllAssignments to populate sticky buckets. This in turn will
   * typically loop through individual getAssignments calls. However, some StickyBucketService
   * instances (i.e. Redis) will instead perform a multi-query inside getAllAssignments instead.
   */
  async getAllAssignments(
    attributes: Record<string, string>,
  ): Promise<Record<StickyAttributeKey, StickyAssignmentsDocument>> {
    const docs: Record<string, StickyAssignmentsDocument> = {};
    (
      await Promise.all(
        Object.entries(attributes).map(([attributeName, attributeValue]) =>
          this.getAssignments(attributeName, attributeValue),
        ),
      )
    ).forEach((doc) => {
      if (doc) {
        const key = getStickyBucketAttributeKey(
          doc.attributeName,
          doc.attributeValue,
        );
        docs[key] = doc;
      }
    });
    return docs;
  }

  getKey(attributeName: string, attributeValue: string): string {
    return `${this.prefix}${attributeName}||${attributeValue}`;
  }
}

export abstract class StickyBucketServiceSync extends StickyBucketService {
  abstract getAssignmentsSync(
    attributeName: string,
    attributeValue: string,
  ): StickyAssignmentsDocument | null;

  abstract saveAssignmentsSync(doc: StickyAssignmentsDocument): void;

  async getAssignments(attributeName: string, attributeValue: string) {
    return this.getAssignmentsSync(attributeName, attributeValue);
  }

  async saveAssignments(doc: StickyAssignmentsDocument) {
    this.saveAssignmentsSync(doc);
  }

  getAllAssignmentsSync(
    attributes: Record<string, string>,
  ): Record<StickyAttributeKey, StickyAssignmentsDocument> {
    const docs: Record<string, StickyAssignmentsDocument> = {};
    Object.entries(attributes)
      .map(([attributeName, attributeValue]) =>
        this.getAssignmentsSync(attributeName, attributeValue),
      )
      .forEach((doc) => {
        if (doc) {
          const key = getStickyBucketAttributeKey(
            doc.attributeName,
            doc.attributeValue,
          );
          docs[key] = doc;
        }
      });
    return docs;
  }
}

export class LocalStorageStickyBucketService extends StickyBucketService {
  private localStorage: LocalStorageCompat | undefined;
  constructor(opts?: { prefix?: string; localStorage?: LocalStorageCompat }) {
    opts = opts || {};
    super();
    this.prefix = opts.prefix || "gbStickyBuckets__";
    try {
      this.localStorage = opts.localStorage || globalThis.localStorage;
    } catch (e) {
      // Ignore localStorage errors
    }
  }
  async getAssignments(attributeName: string, attributeValue: string) {
    const key = this.getKey(attributeName, attributeValue);
    let doc: StickyAssignmentsDocument | null = null;
    if (!this.localStorage) return doc;
    try {
      const raw = (await this.localStorage.getItem(key)) || "{}";
      const data = JSON.parse(raw);
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    return doc;
  }
  async saveAssignments(doc: StickyAssignmentsDocument) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.localStorage) return;
    try {
      await this.localStorage.setItem(key, JSON.stringify(doc));
    } catch (e) {
      // Ignore localStorage errors
    }
  }
}

export class ExpressCookieStickyBucketService extends StickyBucketServiceSync {
  /**
   * Intended to be used with cookieParser() middleware from npm: 'cookie-parser'.
   * Assumes:
   *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
   *  - writing a cookie name & value must be manually encoded via encodeURIComponent() or similar
   *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
   */
  private req: RequestCompat;
  private res: ResponseCompat;
  private cookieAttributes: CookieAttributes;
  constructor({
    prefix = "gbStickyBuckets__",
    req,
    res,
    cookieAttributes = { maxAge: 180 * 24 * 3600 * 1000 }, // 180 days
  }: {
    prefix?: string;
    req: RequestCompat;
    res: ResponseCompat;
    cookieAttributes?: CookieAttributes;
  }) {
    super();
    this.prefix = prefix;
    this.req = req;
    this.res = res;
    this.cookieAttributes = cookieAttributes;
  }
  getAssignmentsSync(attributeName: string, attributeValue: string) {
    const key = this.getKey(attributeName, attributeValue);
    let doc: StickyAssignmentsDocument | null = null;
    if (!this.req) return doc;
    try {
      const raw = this.req.cookies[key] || "{}";
      const data = JSON.parse(raw);
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore cookie errors
    }
    return doc;
  }
  saveAssignmentsSync(doc: StickyAssignmentsDocument) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.res) return;
    const str = JSON.stringify(doc);
    this.res.cookie(
      encodeURIComponent(key),
      encodeURIComponent(str),
      this.cookieAttributes,
    );
  }
}

export class BrowserCookieStickyBucketService extends StickyBucketServiceSync {
  /**
   * Intended to be used with npm: 'js-cookie'.
   * Assumes:
   *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
   *  - writing a cookie name & value is automatically encoded via encodeURIComponent() or similar
   *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
   */
  private jsCookie: JsCookiesCompat;
  private cookieAttributes: CookieAttributes;
  constructor({
    prefix = "gbStickyBuckets__",
    jsCookie,
    cookieAttributes = { expires: 180 }, // 180 days
  }: {
    prefix?: string;
    jsCookie: JsCookiesCompat;
    cookieAttributes?: CookieAttributes;
  }) {
    super();
    this.prefix = prefix;
    this.jsCookie = jsCookie;
    this.cookieAttributes = cookieAttributes;
  }
  getAssignmentsSync(attributeName: string, attributeValue: string) {
    const key = this.getKey(attributeName, attributeValue);
    let doc: StickyAssignmentsDocument | null = null;
    if (!this.jsCookie) return doc;
    try {
      const raw = this.jsCookie.get(key);
      const data = JSON.parse(raw || "{}");
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore cookie errors
    }
    return doc;
  }
  async saveAssignmentsSync(doc: StickyAssignmentsDocument) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.jsCookie) return;
    const str = JSON.stringify(doc);
    this.jsCookie.set(key, str, this.cookieAttributes);
  }
}

export class RedisStickyBucketService extends StickyBucketService {
  /** Intended to be used with npm: 'ioredis'. **/
  private redis: IORedisCompat | undefined;
  constructor({ redis }: { redis: IORedisCompat }) {
    super();
    this.redis = redis;
  }
  async getAllAssignments(
    attributes: Record<string, string>,
  ): Promise<Record<StickyAttributeKey, StickyAssignmentsDocument>> {
    const docs: Record<StickyAttributeKey, StickyAssignmentsDocument> = {};
    const keys = Object.entries(attributes).map(
      ([attributeName, attributeValue]) =>
        getStickyBucketAttributeKey(attributeName, attributeValue),
    );
    if (!this.redis) return docs;
    await this.redis.mget(...keys).then((values) => {
      values.forEach((raw) => {
        try {
          const data = JSON.parse(raw || "{}");
          if (
            data.attributeName &&
            "attributeValue" in data &&
            data.assignments
          ) {
            const key = getStickyBucketAttributeKey(
              data.attributeName,
              toString(data.attributeValue),
            );
            docs[key] = data;
          }
        } catch (e) {
          // ignore redis doc parse errors
        }
      });
    });
    return docs;
  }
  async getAssignments(_attributeName: string, _attributeValue: string) {
    // not implemented
    return null;
  }
  async saveAssignments(doc: StickyAssignmentsDocument) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.redis) return;
    await this.redis.set(key, JSON.stringify(doc));
  }
}
