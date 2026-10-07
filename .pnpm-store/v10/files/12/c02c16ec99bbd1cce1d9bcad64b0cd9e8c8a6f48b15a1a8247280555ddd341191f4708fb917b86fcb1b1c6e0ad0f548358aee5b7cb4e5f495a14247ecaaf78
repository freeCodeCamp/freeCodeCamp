# tldts - Blazing Fast URL Parsing

`tldts` is a JavaScript library to extract hostnames, domains, public suffixes, top-level domains and subdomains from URLs.

**Features**:

1. Tuned for **performance** (order of 0.1 to 1 μs per input)
2. Handles both URLs and hostnames
3. Full Unicode/IDNA support
4. Support parsing email addresses
5. Detect IPv4 and IPv6 addresses
6. Continuously updated version of the public suffix list
7. **TypeScript**, ships with `umd`, `esm`, `cjs` bundles and _type definitions_
8. Small bundles and small memory footprint
9. Battle tested: full test coverage and production use

# Install

```bash
npm install --save tldts
```

# Usage

Using the command-line interface:

```js
$ npx tldts 'http://www.writethedocs.org/conf/eu/2017/'
{
  "domain": "writethedocs.org",
  "domainWithoutSuffix": "writethedocs",
  "hostname": "www.writethedocs.org",
  "isIcann": true,
  "isIp": false,
  "isPrivate": false,
  "publicSuffix": "org",
  "subdomain": "www"
}
```

Programmatically:

```js
const { parse } = require('tldts');

// Retrieving hostname related informations of a given URL
parse('http://www.writethedocs.org/conf/eu/2017/');
// { domain: 'writethedocs.org',
//   domainWithoutSuffix: 'writethedocs',
//   hostname: 'www.writethedocs.org',
//   isIcann: true,
//   isIp: false,
//   isPrivate: false,
//   publicSuffix: 'org',
//   subdomain: 'www' }
```

Modern _ES6 modules import_ is also supported:

```js
import { parse } from 'tldts';
```

Alternatively, you can try it _directly in your browser_ here: https://npm.runkit.com/tldts

# API

- `tldts.parse(url | hostname, options)`
- `tldts.getHostname(url | hostname, options)`
- `tldts.getDomain(url | hostname, options)`
- `tldts.getPublicSuffix(url | hostname, options)`
- `tldts.getSubdomain(url, | hostname, options)`
- `tldts.getDomainWithoutSuffix(url | hostname, options)`

The behavior of `tldts` can be customized using an `options` argument for all
the functions exposed as part of the public API. This is useful to both change
the behavior of the library as well as fine-tune the performance depending on
your inputs.

```js
{
  // Use suffixes from ICANN section (default: true)
  allowIcannDomains: boolean;
  // Use suffixes from Private section (default: false)
  allowPrivateDomains: boolean;
  // Extract and validate hostname (default: true)
  // When set to `false`, inputs will be considered valid hostnames.
  extractHostname: boolean;
  // Validate hostnames after parsing (default: true)
  // If a hostname is not valid, not further processing is performed. When set
  // to `false`, inputs to the library will be considered valid and parsing will
  // proceed regardless.
  validateHostname: boolean;
  // Perform IP address detection (default: true).
  detectIp: boolean;
  // Assume that both URLs and hostnames can be given as input (default: true)
  // If set to `false` we assume only URLs will be given as input, which
  // speed-ups processing.
  mixedInputs: boolean;
  // Specifies extra valid suffixes (default: null)
  validHosts: string[] | null;
}
```

The `parse` method returns handy **properties about a URL or a hostname**.

```js
const tldts = require('tldts');

tldts.parse('https://spark-public.s3.amazonaws.com/dataanalysis/loansData.csv');
// { domain: 'amazonaws.com',
//   domainWithoutSuffix: 'amazonaws',
//   hostname: 'spark-public.s3.amazonaws.com',
//   isIcann: true,
//   isIp: false,
//   isPrivate: false,
//   publicSuffix: 'com',
//   subdomain: 'spark-public.s3' }

tldts.parse(
  'https://spark-public.s3.amazonaws.com/dataanalysis/loansData.csv',
  { allowPrivateDomains: true },
);
// { domain: 'spark-public.s3.amazonaws.com',
//   domainWithoutSuffix: 'spark-public',
//   hostname: 'spark-public.s3.amazonaws.com',
//   isIcann: false,
//   isIp: false,
//   isPrivate: true,
//   publicSuffix: 's3.amazonaws.com',
//   subdomain: '' }

tldts.parse('gopher://domain.unknown/');
// { domain: 'domain.unknown',
//   domainWithoutSuffix: 'domain',
//   hostname: 'domain.unknown',
//   isIcann: false,
//   isIp: false,
//   isPrivate: true,
//   publicSuffix: 'unknown',
//   subdomain: '' }

tldts.parse('https://192.168.0.0'); // IPv4
// { domain: null,
//   domainWithoutSuffix: null,
//   hostname: '192.168.0.0',
//   isIcann: null,
//   isIp: true,
//   isPrivate: null,
//   publicSuffix: null,
//   subdomain: null }

tldts.parse('https://[::1]'); // IPv6
// { domain: null,
//   domainWithoutSuffix: null,
//   hostname: '::1',
//   isIcann: null,
//   isIp: true,
//   isPrivate: null,
//   publicSuffix: null,
//   subdomain: null }

tldts.parse('tldts@emailprovider.co.uk'); // email
// { domain: 'emailprovider.co.uk',
//   domainWithoutSuffix: 'emailprovider',
//   hostname: 'emailprovider.co.uk',
//   isIcann: true,
//   isIp: false,
//   isPrivate: false,
//   publicSuffix: 'co.uk',
//   subdomain: '' }
```

| Property Name         | Type   | Description                                     |
| :-------------------- | :----- | :---------------------------------------------- |
| `hostname`            | `str`  | `hostname` of the input extracted automatically |
| `domain`              | `str`  | Domain (tld + sld)                              |
| `domainWithoutSuffix` | `str`  | Domain without public suffix                    |
| `subdomain`           | `str`  | Sub domain (what comes after `domain`)          |
| `publicSuffix`        | `str`  | Public Suffix (tld) of `hostname`               |
| `isIcann`             | `bool` | Does TLD come from ICANN part of the list       |
| `isPrivate`           | `bool` | Does TLD come from Private part of the list     |
| `isIP`                | `bool` | Is `hostname` an IP address?                    |

## Single purpose methods

These methods are shorthands if you want to retrieve only a single value (and
will perform better than `parse` because less work will be needed).

### getHostname(url | hostname, options?)

Returns the hostname from a given string.

```javascript
const { getHostname } = require('tldts');

getHostname('google.com'); // returns `google.com`
getHostname('fr.google.com'); // returns `fr.google.com`
getHostname('fr.google.google'); // returns `fr.google.google`
getHostname('foo.google.co.uk'); // returns `foo.google.co.uk`
getHostname('t.co'); // returns `t.co`
getHostname('fr.t.co'); // returns `fr.t.co`
getHostname(
  'https://user:password@example.co.uk:8080/some/path?and&query#hash',
); // returns `example.co.uk`
```

### getDomain(url | hostname, options?)

Returns the fully qualified domain from a given string.

```javascript
const { getDomain } = require('tldts');

getDomain('google.com'); // returns `google.com`
getDomain('fr.google.com'); // returns `google.com`
getDomain('fr.google.google'); // returns `google.google`
getDomain('foo.google.co.uk'); // returns `google.co.uk`
getDomain('t.co'); // returns `t.co`
getDomain('fr.t.co'); // returns `t.co`
getDomain('https://user:password@example.co.uk:8080/some/path?and&query#hash'); // returns `example.co.uk`
```

### getDomainWithoutSuffix(url | hostname, options?)

Returns the domain (as returned by `getDomain(...)`) without the public suffix part.

```javascript
const { getDomainWithoutSuffix } = require('tldts');

getDomainWithoutSuffix('google.com'); // returns `google`
getDomainWithoutSuffix('fr.google.com'); // returns `google`
getDomainWithoutSuffix('fr.google.google'); // returns `google`
getDomainWithoutSuffix('foo.google.co.uk'); // returns `google`
getDomainWithoutSuffix('t.co'); // returns `t`
getDomainWithoutSuffix('fr.t.co'); // returns `t`
getDomainWithoutSuffix(
  'https://user:password@example.co.uk:8080/some/path?and&query#hash',
); // returns `example`
```

### getSubdomain(url | hostname, options?)

Returns the complete subdomain for a given string.

```javascript
const { getSubdomain } = require('tldts');

getSubdomain('google.com'); // returns ``
getSubdomain('fr.google.com'); // returns `fr`
getSubdomain('google.co.uk'); // returns ``
getSubdomain('foo.google.co.uk'); // returns `foo`
getSubdomain('moar.foo.google.co.uk'); // returns `moar.foo`
getSubdomain('t.co'); // returns ``
getSubdomain('fr.t.co'); // returns `fr`
getSubdomain(
  'https://user:password@secure.example.co.uk:443/some/path?and&query#hash',
); // returns `secure`
```

### getPublicSuffix(url | hostname, options?)

Returns the [public suffix][] for a given string.

```javascript
const { getPublicSuffix } = require('tldts');

getPublicSuffix('google.com'); // returns `com`
getPublicSuffix('fr.google.com'); // returns `com`
getPublicSuffix('google.co.uk'); // returns `co.uk`
getPublicSuffix('s3.amazonaws.com'); // returns `com`
getPublicSuffix('s3.amazonaws.com', { allowPrivateDomains: true }); // returns `s3.amazonaws.com`
getPublicSuffix('tld.is.unknown'); // returns `unknown`
```

# Troubleshooting

## Retrieving subdomain of `localhost` and custom hostnames

`tldts` methods `getDomain` and `getSubdomain` are designed to **work only with _known and valid_ TLDs**.
This way, you can trust what a domain is.

`localhost` is a valid hostname but not a TLD. You can pass additional options to each method exposed by `tldts`:

```js
const tldts = require('tldts');

tldts.getDomain('localhost'); // returns null
tldts.getSubdomain('vhost.localhost'); // returns null

tldts.getDomain('localhost', { validHosts: ['localhost'] }); // returns 'localhost'
tldts.getSubdomain('vhost.localhost', { validHosts: ['localhost'] }); // returns 'vhost'
```

## Updating the TLDs List

`tldts` made the opinionated choice of shipping with a list of suffixes directly
in its bundle. There is currently no mechanism to update the lists yourself, but
we make sure that the version shipped is always up-to-date.

If you keep `tldts` updated, the lists should be up-to-date as well!

# Performance

`tldts` is the _fastest JavaScript library_ available for parsing hostnames. It is able to parse _millions of inputs per second_ (typically 2-3M depending on your hardware and inputs). It also offers granular options to fine-tune the behavior and performance of the library depending on the kind of inputs you are dealing with (e.g.: if you know you only manipulate valid hostnames you can disable the hostname extraction step with `{ extractHostname: false }`).

Please see [this detailed comparison](./comparison/comparison.md) with other available libraries.

## Contributors

`tldts` is based upon the excellent `tld.js` library and would not exist without
the many contributors who worked on the project:
<a href="graphs/contributors"><img src="https://opencollective.com/tldjs/contributors.svg?width=890" /></a>

This project would not be possible without the amazing Mozilla's
[public suffix list][]. Thank you for your hard work!

# License

[MIT License](LICENSE).

[badge-ci]: https://secure.travis-ci.org/remusao/tldts.svg?branch=master
[badge-downloads]: https://img.shields.io/npm/dm/tldts.svg
[public suffix list]: https://publicsuffix.org/list/
[list the recent changes]: https://github.com/publicsuffix/list/commits/master
[changes Atom Feed]: https://github.com/publicsuffix/list/commits/master.atom
[public suffix]: https://publicsuffix.org/learn/
