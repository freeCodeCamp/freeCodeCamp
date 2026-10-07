# Tough Cookie &middot; [![RFC6265][rfc6265-badge]][rfc6265-tracker] [![RFC6265bis][rfc6265bis-badge]][rfc6265bis-tracker] [![npm version][npm-badge]][npm-repo] [![CI on Github Actions: salesforce/tough-cookie][ci-badge]][ci-url] ![PRs Welcome][prs-welcome-badge]

A Node.js implementation of [RFC6265][rfc6265-tracker] for cookie parsing, storage, and retrieval.

## Getting Started

Install Tough Cookie using [`npm`][npm-repo]:

```shell
npm install tough-cookie
```

or [`yarn`][yarn-repo]:

```shell
yarn add tough-cookie
```

## Usage

```typescript
import { Cookie, CookieJar } from 'tough-cookie'

// parse a `Cookie` request header
const reqCookies = 'ID=298zf09hf012fh2; csrf=u32t4o3tb3gg43; _gat=1'
  .split(';')
  .map(Cookie.parse)
// generate a `Cookie` request header
const cookieHeader = reqCookies.map((cookie) => cookie.cookieString()).join(';')

// parse a Set-Cookie response header
const resCookie = Cookie.parse(
  'foo=bar; Domain=example.com; Path=/; Expires=Tue, 21 Oct 2025 00:00:00 GMT',
)
// generate a Set-Cookie response header
const setCookieHeader = cookie.toString()

// store and retrieve cookies
const cookieJar = new CookieJar() // uses the in-memory store by default
await cookieJar.setCookie(resCookie, 'https://example.com/')
const matchingCookies = await cookieJar.getCookies('https://example.com/')
```

> [!IMPORTANT]
> For more detailed usage information, refer to the [API docs](./api/docs/tough-cookie.md).

## RFC6265bis

Support for [RFC6265bis][rfc6265bis-tracker] is being developed. As these revisions to [RFC6252][rfc6265-tracker] are
still in `Active Internet-Draft` state, the areas of support that follow are subject to change.

### SameSite Cookies

This change makes it possible for servers, and supporting clients, to mitigate certain types of CSRF
attacks by disallowing `SameSite` cookies from being sent cross-origin.

#### Example

```typescript
import { CookieJar } from 'tough-cookie'

const cookieJar = new CookieJar() // uses the in-memory store by default

// storing cookies with various SameSite attributes
await cookieJar.setCookie(
  'strict=authorized; SameSite=strict',
  'http://example.com/index.html',
)
await cookieJar.setCookie(
  'lax=okay; SameSite=lax',
  'http://example.com/index.html',
)
await cookieJar.setCookie('normal=whatever', 'http://example.com/index.html')

// retrieving cookies using a SameSite context
const laxCookies = await cookieJar.getCookies('http://example.com/index.html', {
  // the first cookie (strict=authorized) will not be returned if the context is 'lax'
  // but the other two cookies will be returned
  sameSiteContext: 'lax',
})
```

> [!NOTE]
> It is highly recommended that you read [RFC6265bis - Section 8.8][samesite-implementation] for more details on SameSite cookies, security considerations, and defense in depth.

### Cookie Prefixes

Cookie prefixes are a way to indicate that a given cookie was set with a set of attributes simply by
inspecting the first few characters of the cookie's name.

Two prefixes are defined:

- `"__Secure-"`

  If a cookie's name begins with a case-sensitive match for the string `__Secure-`, then the cookie was set with a "Secure" attribute.

- `"__Host-"`

  If a cookie's name begins with a case-sensitive match for the string `__Host-`, then the cookie was set with a "Secure" attribute, a "Path" attribute with a value of "/", and no "Domain" attribute.

If `prefixSecurity` is enabled for `CookieJar`, then cookies that match the prefixes defined above but do
not obey the attribute restrictions are not added.

You can define this functionality by passing in the `prefixSecurity` option to `CookieJar`. It can be one of 3 values:

1. `silent`: (**default**) Enable cookie prefix checking but silently fail to add the cookie if conditions are not met.
2. `strict`: Enable cookie prefix checking and error out if conditions are not met.
3. `unsafe-disabled`: Disable cookie prefix checking.

> If `ignoreError` is passed in as `true` when setting a cookie then the error is silent regardless of the `prefixSecurity` option (assuming it's enabled).

#### Example

```typescript
import { CookieJar, MemoryCookieStore } from 'tough-cookie'

const cookieJar = new CookieJar(new MemoryCookieStore(), {
  prefixSecurity: 'silent',
})

// this cookie will be silently ignored since the url is insecure (http)
await cookieJar.setCookie(
  '__Secure-SID=12345; Domain=example.com; Secure;',
  'http://example.com',
)

// this cookie will be stored since the url is secure (https)
await cookieJar.setCookie(
  '__Secure-SID=12345; Domain=example.com; Secure;',
  'https://example.com',
)
```

> [!NOTE]
> It is highly recommended that you read [RFC6265bis - Section 4.1.3][cookie-prefixes-implementation] for more details on Cookie Prefixes.

### Potentially Trustworthy Origins are considered "Secure"

The definition of a "Secure" connection is not explicitly defined by [RFC6265bis][rfc6265bis-tracker] but the following text is
provided in [RFC6265bis - Section 5.8.3][secure-connection-note]:

> [!NOTE]
> Typically, user agents consider a connection secure if the connection makes use of transport-layer security, such as
> SSL or TLS, or if the host is trusted. For example, most user agents consider "https" to be a scheme that denotes a
> secure protocol and "localhost" to be trusted host.

As well as a note to [Appendix A. Changes from RFC6265][secure-connection-appendix-a] which refers to **"potentially trustworthy
origins"** which are defined in the [Secure Contexts - W3C Candidate Recommendation Draft][potentially-trustworthy-origin]:

> [!Note]
> Considers potentially trustworthy origins as "secure".

Since most web browsers treat `localhost` as a trustworthy origin, by default, so does `tough-cookie`. To disable this
behavior, the `CookieStore` must be configured with:

```typescript
import { CookieJar, MemoryCookieStore } from 'tough-cookie'

const cookieJar = new CookieJar(new MemoryCookieStore(), {
  // add configuration so localhost will not be considered trustworthy
  // (fyi - this doesn't apply to https cookies on localhost as those use a secure protocol)
  allowSecureOnLocal: false,
})

// this cookie will be persisted to storage
await cookieJar.setCookie(
  'SID=12345; Domain=localhost; Secure;',
  'http://localhost',
)

// but, on retrieval, it will not be returned
await cookieJar.getCookiesSync('http://localhost')
```

## Node.js Version Support

We follow the [Node.js release schedule](https://github.com/nodejs/Release#release-schedule) and support
all versions that are in Active LTS or Maintenance. We will always do a major release when dropping support
for older versions of node, and we will do so in consultation with our community.

[npm-badge]: https://img.shields.io/npm/v/tough-cookie.svg?style=flat
[npm-repo]: https://www.npmjs.com/package/tough-cookie
[ci-badge]: https://github.com/salesforce/tough-cookie/actions/workflows/ci.yaml/badge.svg
[ci-url]: https://github.com/salesforce/tough-cookie/actions/workflows/ci.yaml
[rfc6265-badge]: https://img.shields.io/badge/RFC-6265-flat?labelColor=000000&color=666666
[rfc6265-tracker]: https://datatracker.ietf.org/doc/rfc6265/
[rfc6265bis-badge]: https://img.shields.io/badge/RFC-6265bis-flat?labelColor=000000&color=666666
[rfc6265bis-tracker]: https://datatracker.ietf.org/doc/draft-ietf-httpbis-rfc6265bis/
[samesite-implementation]: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-02#section-8.8
[cookie-prefixes-implementation]: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-02#section-4.1.3
[secure-connection-note]: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-19#section-5.8.3-2.1.2.3.1
[secure-connection-appendix-a]: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-19#appendix-A-1.7.1
[potentially-trustworthy-origin]: https://www.w3.org/TR/secure-contexts/#is-origin-trustworthy
[prs-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[yarn-repo]: https://yarnpkg.com/package?name=tough-cookie
