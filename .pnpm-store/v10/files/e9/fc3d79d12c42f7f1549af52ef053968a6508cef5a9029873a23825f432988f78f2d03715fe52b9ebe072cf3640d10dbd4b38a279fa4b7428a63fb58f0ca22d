<div align="center">
	<br>
	<br>
	<img width="360" src="media/logo.svg" alt="Got">
	<br>
	<br>
	<br>
	<p>
		<p>
			<sup>
				Sindre's open source work is supported by the community.<br>Special thanks to:
			</sup>
		</p>
		<br>
		<a href="https://retool.com/?utm_campaign=sindresorhus">
			<img src="https://sindresorhus.com/assets/thanks/retool-logo.svg" width="210">
		</a>
		<br>
		<br>
		<a href="https://strapi.io/?ref=sindresorhus">
			<div>
				<img src="https://sindresorhus.com/assets/thanks/strapi-logo-white-bg.png" width="200" alt="Strapi">
			</div>
			<b>Strapi is the leading open-source headless CMS.</b>
			<div>
				<sup>It’s 100% JavaScript, fully customizable, and developer-first.</sup>
			</div>
		</a>
		<br>
		<br>
		<br>
		<a href="https://serpapi.com#gh-light-mode-only">
			<div>
				<img src="https://sindresorhus.com/assets/thanks/serpapi-logo-light.svg" width="130" alt="SerpApi">
			</div>
			<b>API to get search engine results with ease.</b>
		</a>
		<a href="https://serpapi.com#gh-dark-mode-only">
			<div>
				<img src="https://sindresorhus.com/assets/thanks/serpapi-logo-dark.svg" width="120" alt="SerpApi">
			</div>
			<b>API to get search engine results with ease.</b>
		</a>
		<br>
		<br>
		<br>
		<br>
		<a href="https://dutchis.net/?ref=sindresorhus#gh-light-mode-only">
			<div>
				<img src="https://sindresorhus.com/assets/thanks/dutchis-logo-light.png" width="200" alt="DutchIS">
			</div>
			<br>
			<b>VPS hosting with taste 😛</b>
		</a>
		<a href="https://dutchis.net/?ref=sindresorhus#gh-dark-mode-only">
			<div>
				<img src="https://sindresorhus.com/assets/thanks/dutchis-logo-dark.png" width="200" alt="DutchIS">
			</div>
			<br>
			<b>VPS hosting with taste 😛</b>
		</a>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</p>
	<br>
	<br>
</div>

> Human-friendly and powerful HTTP request library for Node.js

<!-- [![Coverage Status](https://codecov.io/gh/sindresorhus/got/branch/main/graph/badge.svg)](https://codecov.io/gh/sindresorhus/got/branch/main) -->
[![Downloads](https://img.shields.io/npm/dm/got.svg)](https://npmjs.com/got)
[![Install size](https://packagephobia.com/badge?p=got)](https://packagephobia.com/result?p=got)

[See how Got compares to other HTTP libraries](#comparison)

---

For browser usage, we recommend [Ky](https://github.com/sindresorhus/ky) by the same people.

---

**Support questions should be asked [here](https://github.com/sindresorhus/got/discussions).**

## Install

```sh
npm install got
```

**Warning:** This package is native [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and no longer provides a CommonJS export. If your project uses CommonJS, you will have to [convert to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) or use the [dynamic `import()`](https://v8.dev/features/dynamic-import) function. Please don't open issues for questions regarding CommonJS / ESM.

**Got v11 (the previous major version) is no longer maintained and we will not accept any backport requests.**

## Take a peek

**A [quick start](documentation/quick-start.md) guide is available.**

### JSON mode

Got has a dedicated option for handling JSON payload.\
Furthermore, the promise exposes a `.json<T>()` function that returns `Promise<T>`.

```js
import got from 'got';

const {data} = await got.post('https://httpbin.org/anything', {
	json: {
		hello: 'world'
	}
}).json();

console.log(data);
//=> {"hello": "world"}
```

For advanced JSON usage, check out the [`parseJson`](documentation/2-options.md#parsejson) and [`stringifyJson`](documentation/2-options.md#stringifyjson) options.

**For more useful tips like this, visit the [Tips](documentation/tips.md) page.**

## Highlights

- [Used by 8K+ packages and 4M+ repos](https://github.com/sindresorhus/got/network/dependents)
- [Actively maintained](https://github.com/sindresorhus/got/graphs/contributors)
- [Trusted by many companies](#widely-used)

## Documentation

By default, Got will retry on failure. To disable this option, set [`options.retry.limit`](documentation/7-retry.md#retry) to 0.

#### Main API

- [x] [Promise API](documentation/1-promise.md)
- [x] [Options](documentation/2-options.md)
- [x] [Stream API](documentation/3-streams.md)
- [x] [Pagination API](documentation/4-pagination.md)
- [x] [Advanced HTTPS API](documentation/5-https.md)
- [x] [HTTP/2 support](documentation/2-options.md#http2)
- [x] [`Response` class](documentation/3-streams.md#response-2)

#### Timeouts and retries

- [x] [Advanced timeout handling](documentation/6-timeout.md)
- [x] [Retries on failure](documentation/7-retry.md)
- [x] [Errors with metadata](documentation/8-errors.md)

#### Advanced creation

- [x] [Hooks](documentation/9-hooks.md)
- [x] [Instances](documentation/10-instances.md)
- [x] [Progress events & other events](documentation/3-streams.md#events)
- [x] [Plugins](documentation/lets-make-a-plugin.md)
- [x] [Compose](documentation/examples/advanced-creation.js)

#### Cache, Proxy and UNIX sockets

- [x] [RFC compliant caching](documentation/cache.md)
- [x] [Proxy support](documentation/tips.md#proxying)
- [x] [Unix Domain Sockets](documentation/2-options.md#enableunixsockets)

#### Integration

- [x] [TypeScript support](documentation/typescript.md)
- [x] [AWS](documentation/tips.md#aws)
- [x] [Testing](documentation/tips.md#testing)

---

### Migration guides

- [Request migration guide](documentation/migration-guides/request.md)
  - [*(Note that Request is unmaintained)*](https://github.com/request/request/issues/3142)
- [Axios](documentation/migration-guides/axios.md)
- [Node.js](documentation/migration-guides/nodejs.md)

## Got plugins

- [`got4aws`](https://github.com/SamVerschueren/got4aws) - Got convenience wrapper to interact with AWS v4 signed APIs
- [`gh-got`](https://github.com/sindresorhus/gh-got) - Got convenience wrapper to interact with the GitHub API
- [`gl-got`](https://github.com/singapore/gl-got) - Got convenience wrapper to interact with the GitLab API
- [`gotql`](https://github.com/khaosdoctor/gotql) - Got convenience wrapper to interact with GraphQL using JSON-parsed queries instead of strings
- [`got-fetch`](https://github.com/alexghr/got-fetch) - Got with a [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) interface
- [`got-scraping`](https://github.com/apify/got-scraping) - Got wrapper specifically designed for web scraping purposes
- [`got-ssrf`](https://github.com/JaneJeon/got-ssrf) - Got wrapper to protect server-side requests against SSRF attacks

### Legacy

- [travis-got](https://github.com/samverschueren/travis-got) - Got convenience wrapper to interact with the Travis API
- [graphql-got](https://github.com/kevva/graphql-got) - Got convenience wrapper to interact with GraphQL

## Comparison

|                       | `got`               | [`node-fetch`][n0]   | [`ky`][k0]               | [`axios`][a0]      | [`superagent`][s0]     |
|-----------------------|:-------------------:|:--------------------:|:------------------------:|:------------------:|:----------------------:|
| HTTP/2 support        | :heavy_check_mark:¹ | :x:                  | :x:                      | :x:                | :heavy_check_mark:\*\* |
| Browser support       | :x:                 | :heavy_check_mark:\* | :heavy_check_mark:       | :heavy_check_mark: | :heavy_check_mark:     |
| Promise API           | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:       | :heavy_check_mark: | :heavy_check_mark:     |
| Stream API            | :heavy_check_mark:  | Node.js only         | :x:                      | :x:                | :heavy_check_mark:     |
| Pagination API        | :heavy_check_mark:  | :x:                  | :x:                      | :x:                | :x:                    |
| Request cancelation   | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:       | :heavy_check_mark: | :heavy_check_mark:     |
| RFC compliant caching | :heavy_check_mark:  | :x:                  | :x:                      | :x:                | :x:                    |
| Cookies (out-of-box)  | :heavy_check_mark:  | :x:                  | :x:                      | :x:                | :x:                    |
| Follows redirects     | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:       | :heavy_check_mark: | :heavy_check_mark:     |
| Retries on failure    | :heavy_check_mark:  | :x:                  | :heavy_check_mark:       | :x:                | :heavy_check_mark:     |
| Progress events       | :heavy_check_mark:  | :x:                  | :heavy_check_mark:\*\*\* | Browser only       | :heavy_check_mark:     |
| Handles gzip/deflate  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:       | :heavy_check_mark: | :heavy_check_mark:     |
| Advanced timeouts     | :heavy_check_mark:  | :x:                  | :x:                      | :x:                | :x:                    |
| Timings               | :heavy_check_mark:  | :x:                  | :x:                      | :x:                | :x:                    |
| Errors with metadata  | :heavy_check_mark:  | :x:                  | :heavy_check_mark:       | :heavy_check_mark: | :x:                    |
| JSON mode             | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:       | :heavy_check_mark: | :heavy_check_mark:     |
| Custom defaults       | :heavy_check_mark:  | :x:                  | :heavy_check_mark:       | :heavy_check_mark: | :x:                    |
| Composable            | :heavy_check_mark:  | :x:                  | :x:                      | :x:                | :heavy_check_mark:     |
| Hooks                 | :heavy_check_mark:  | :x:                  | :heavy_check_mark:       | :heavy_check_mark: | :x:                    |
| Issues open           | [![][gio]][g1]      | [![][nio]][n1]       | [![][kio]][k1]           | [![][aio]][a1]     | [![][sio]][s1]         |
| Issues closed         | [![][gic]][g2]      | [![][nic]][n2]       | [![][kic]][k2]           | [![][aic]][a2]     | [![][sic]][s2]         |
| Downloads             | [![][gd]][g3]       | [![][nd]][n3]        | [![][kd]][k3]            | [![][ad]][a3]      | [![][sd]][s3]          |
| Coverage              | TBD                 | [![][nc]][n4]        | [![][kc]][k4]            | [![][ac]][a4]      | [![][sc]][s4]          |
| Build                 | [![][gb]][g5]       | [![][nb]][n5]        | [![][kb]][k5]            | [![][ab]][a5]      | [![][sb]][s5]          |
| Bugs                  | [![][gbg]][g6]      | [![][nbg]][n6]       | [![][kbg]][k6]           | [![][abg]][a6]     | [![][sbg]][s6]         |
| Dependents            | [![][gdp]][g7]      | [![][ndp]][n7]       | [![][kdp]][k7]           | [![][adp]][a7]     | [![][sdp]][s7]         |
| Install size          | [![][gis]][g8]      | [![][nis]][n8]       | [![][kis]][k8]           | [![][ais]][a8]     | [![][sis]][s8]         |
| GitHub stars          | [![][gs]][g9]       | [![][ns]][n9]        | [![][ks]][k9]            | [![][as]][a9]      | [![][ss]][s9]          |
| TypeScript support    | [![][gts]][g10]     | [![][nts]][n10]      | [![][kts]][k10]          | [![][ats]][a10]    | [![][sts]][s11]        |
| Last commit           | [![][glc]][g11]     | [![][nlc]][n11]      | [![][klc]][k11]          | [![][alc]][a11]    | [![][slc]][s11]        |

\* It's almost API compatible with the browser `fetch` API.\
\*\* Need to switch the protocol manually. Doesn't accept PUSH streams and doesn't reuse HTTP/2 sessions.\
\*\*\* Currently, only `DownloadProgress` event is supported, `UploadProgress` event is not supported.\
¹ Requires Node.js 15.10.0 or above.\
:sparkle: Almost-stable feature, but the API may change. Don't hesitate to try it out!\
:grey_question: Feature in early stage of development. Very experimental.

<!-- GITHUB -->
[k0]: https://github.com/sindresorhus/ky
[n0]: https://github.com/node-fetch/node-fetch
[a0]: https://github.com/axios/axios
[s0]: https://github.com/visionmedia/superagent

<!-- ISSUES OPEN -->
[gio]: https://img.shields.io/github/issues-raw/sindresorhus/got?color=gray&label
[kio]: https://img.shields.io/github/issues-raw/sindresorhus/ky?color=gray&label
[nio]: https://img.shields.io/github/issues-raw/bitinn/node-fetch?color=gray&label
[aio]: https://img.shields.io/github/issues-raw/axios/axios?color=gray&label
[sio]: https://img.shields.io/github/issues-raw/visionmedia/superagent?color=gray&label

[g1]: https://github.com/sindresorhus/got/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[k1]: https://github.com/sindresorhus/ky/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[n1]: https://github.com/bitinn/node-fetch/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[a1]: https://github.com/axios/axios/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[s1]: https://github.com/visionmedia/superagent/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc

<!-- ISSUES CLOSED -->
[gic]: https://img.shields.io/github/issues-closed-raw/sindresorhus/got?color=blue&label
[kic]: https://img.shields.io/github/issues-closed-raw/sindresorhus/ky?color=blue&label
[nic]: https://img.shields.io/github/issues-closed-raw/bitinn/node-fetch?color=blue&label
[aic]: https://img.shields.io/github/issues-closed-raw/axios/axios?color=blue&label
[sic]: https://img.shields.io/github/issues-closed-raw/visionmedia/superagent?color=blue&label

[g2]: https://github.com/sindresorhus/got/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc
[k2]: https://github.com/sindresorhus/ky/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc
[n2]: https://github.com/bitinn/node-fetch/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc
[a2]: https://github.com/axios/axios/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc
[s2]: https://github.com/visionmedia/superagent/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc

<!-- DOWNLOADS -->
[gd]: https://img.shields.io/npm/dm/got?color=darkgreen&label
[kd]: https://img.shields.io/npm/dm/ky?color=darkgreen&label
[nd]: https://img.shields.io/npm/dm/node-fetch?color=darkgreen&label
[ad]: https://img.shields.io/npm/dm/axios?color=darkgreen&label
[sd]: https://img.shields.io/npm/dm/superagent?color=darkgreen&label

[g3]: https://www.npmjs.com/package/got
[k3]: https://www.npmjs.com/package/ky
[n3]: https://www.npmjs.com/package/node-fetch
[a3]: https://www.npmjs.com/package/axios
[s3]: https://www.npmjs.com/package/superagent

<!-- COVERAGE -->
[gc]: https://img.shields.io/coveralls/github/sindresorhus/got?color=0b9062&label
[kc]: https://img.shields.io/codecov/c/github/sindresorhus/ky?color=0b9062&label
[nc]: https://img.shields.io/coveralls/github/bitinn/node-fetch?color=0b9062&label
[ac]: https://img.shields.io/coveralls/github/mzabriskie/axios?color=0b9062&label
[sc]: https://img.shields.io/codecov/c/github/visionmedia/superagent?color=0b9062&label

[g4]: https://coveralls.io/github/sindresorhus/got
[k4]: https://codecov.io/gh/sindresorhus/ky
[n4]: https://coveralls.io/github/bitinn/node-fetch
[a4]: https://coveralls.io/github/mzabriskie/axios
[s4]: https://codecov.io/gh/visionmedia/superagent

<!-- BUILD -->
[gb]: https://github.com/sindresorhus/got/actions/workflows/main.yml/badge.svg
[kb]: https://github.com/sindresorhus/ky/actions/workflows/main.yml/badge.svg
[nb]: https://img.shields.io/travis/bitinn/node-fetch?label
[ab]: https://img.shields.io/travis/axios/axios?label
[sb]: https://img.shields.io/travis/visionmedia/superagent?label

[g5]: https://github.com/sindresorhus/got/actions/workflows/main.yml
[k5]: https://github.com/sindresorhus/ky/actions/workflows/main.yml
[n5]: https://travis-ci.org/github/bitinn/node-fetch
[a5]: https://travis-ci.org/github/axios/axios
[s5]: https://travis-ci.org/github/visionmedia/superagent

<!-- BUGS -->
[gbg]: https://img.shields.io/github/issues-raw/sindresorhus/got/bug?color=darkred&label
[kbg]: https://img.shields.io/github/issues-raw/sindresorhus/ky/bug?color=darkred&label
[nbg]: https://img.shields.io/github/issues-raw/bitinn/node-fetch/bug?color=darkred&label
[abg]: https://img.shields.io/github/issues-raw/axios/axios/bug-fix?color=darkred&label
[sbg]: https://img.shields.io/github/issues-raw/visionmedia/superagent/Bug?color=darkred&label

[g6]: https://github.com/sindresorhus/got/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Abug
[k6]: https://github.com/sindresorhus/ky/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Abug
[n6]: https://github.com/bitinn/node-fetch/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Abug
[a6]: https://github.com/axios/axios/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22bug-fix%22
[s6]: https://github.com/visionmedia/superagent/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3ABug

<!-- DEPENDENTS -->
[gdp]: https://badgen.net/npm/dependents/got?color=orange&label
[kdp]: https://badgen.net/npm/dependents/ky?color=orange&label
[ndp]: https://badgen.net/npm/dependents/node-fetch?color=orange&label
[adp]: https://badgen.net/npm/dependents/axios?color=orange&label
[sdp]: https://badgen.net/npm/dependents/superagent?color=orange&label

[g7]: https://www.npmjs.com/package/got?activeTab=dependents
[k7]: https://www.npmjs.com/package/ky?activeTab=dependents
[n7]: https://www.npmjs.com/package/node-fetch?activeTab=dependents
[a7]: https://www.npmjs.com/package/axios?activeTab=dependents
[s7]: https://www.npmjs.com/package/visionmedia?activeTab=dependents

<!-- INSTALL SIZE -->
[gis]: https://badgen.net/packagephobia/install/got?color=blue&label
[kis]: https://badgen.net/packagephobia/install/ky?color=blue&label
[nis]: https://badgen.net/packagephobia/install/node-fetch?color=blue&label
[ais]: https://badgen.net/packagephobia/install/axios?color=blue&label
[sis]: https://badgen.net/packagephobia/install/superagent?color=blue&label

[g8]: https://packagephobia.com/result?p=got
[k8]: https://packagephobia.com/result?p=ky
[n8]: https://packagephobia.com/result?p=node-fetch
[a8]: https://packagephobia.com/result?p=axios
[s8]: https://packagephobia.com/result?p=superagent

<!-- GITHUB STARS -->
[gs]: https://img.shields.io/github/stars/sindresorhus/got?color=white&label
[ks]: https://img.shields.io/github/stars/sindresorhus/ky?color=white&label
[ns]: https://img.shields.io/github/stars/bitinn/node-fetch?color=white&label
[as]: https://img.shields.io/github/stars/axios/axios?color=white&label
[ss]: https://img.shields.io/github/stars/visionmedia/superagent?color=white&label

[g9]: https://github.com/sindresorhus/got
[k9]: https://github.com/sindresorhus/ky
[n9]: https://github.com/node-fetch/node-fetch
[a9]: https://github.com/axios/axios
[s9]: https://github.com/visionmedia/superagent

<!-- TYPESCRIPT SUPPORT -->
[gts]: https://badgen.net/npm/types/got?label
[kts]: https://badgen.net/npm/types/ky?label
[nts]: https://badgen.net/npm/types/node-fetch?label
[ats]: https://badgen.net/npm/types/axios?label
[sts]: https://badgen.net/npm/types/superagent?label

[g10]: https://github.com/sindresorhus/got
[k10]: https://github.com/sindresorhus/ky
[n10]: https://github.com/node-fetch/node-fetch
[a10]: https://github.com/axios/axios
[s10]: https://github.com/visionmedia/superagent

<!-- LAST COMMIT -->
[glc]: https://img.shields.io/github/last-commit/sindresorhus/got?color=gray&label
[klc]: https://img.shields.io/github/last-commit/sindresorhus/ky?color=gray&label
[nlc]: https://img.shields.io/github/last-commit/bitinn/node-fetch?color=gray&label
[alc]: https://img.shields.io/github/last-commit/axios/axios?color=gray&label
[slc]: https://img.shields.io/github/last-commit/visionmedia/superagent?color=gray&label

[g11]: https://github.com/sindresorhus/got/commits
[k11]: https://github.com/sindresorhus/ky/commits
[n11]: https://github.com/node-fetch/node-fetch/commits
[a11]: https://github.com/axios/axios/commits
[s11]: https://github.com/visionmedia/superagent/commits

[Click here][InstallSizeOfTheDependencies] to see the install size of the Got dependencies.

[InstallSizeOfTheDependencies]: https://packagephobia.com/result?p=@sindresorhus/is@4.0.1,@szmarczak/http-timer@4.0.5,@types/cacheable-request@6.0.1,@types/responselike@1.0.0,cacheable-lookup@6.0.0,cacheable-request@7.0.2,decompress-response@6.0.0,get-stream@6.0.1,http2-wrapper@2.0.5,lowercase-keys@2.0.0,p-cancelable@2.1.1,responselike@2.0.0

## Maintainers

[![Sindre Sorhus](https://github.com/sindresorhus.png?size=100)](https://sindresorhus.com) | [![Szymon Marczak](https://github.com/szmarczak.png?size=100)](https://github.com/szmarczak)
---|---
[Sindre Sorhus](https://sindresorhus.com) | [Szymon Marczak](https://github.com/szmarczak)

###### Former

- [Vsevolod Strukchinsky](https://github.com/floatdrop)
- [Alexander Tesfamichael](https://github.com/alextes)
- [Brandon Smith](https://github.com/brandon93s)
- [Luke Childs](https://github.com/lukechilds)
- [Giovanni Minotti](https://github.com/Giotino)

<a name="widely-used"></a>
## These amazing companies are using Got

<table>
<tbody>
	<tr>
		<td align="center">
			<a href="https://segment.com">
				<img width="90" valign="middle" src="https://user-images.githubusercontent.com/697676/47693700-ddb62500-dbb7-11e8-8332-716a91010c2d.png">
			</a>
		</td>
		<td align="center">
			<a href="https://antora.org">
				<img width="100" valign="middle" src="https://user-images.githubusercontent.com/79351/47706840-d874cc80-dbef-11e8-87c6-5f0c60cbf5dc.png">
			</a>
		</td>
		<td align="center">
			<a href="https://getvoip.com">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/10832620/47869404-429e9480-dddd-11e8-8a7a-ca43d7f06020.png">
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/exoframejs/exoframe">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/365944/47791460-11a95b80-dd1a-11e8-9070-e8f2a215e03a.png">
			</a>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="http://karaokes.moe">
				<img width="140" valign="middle" src="https://camo.githubusercontent.com/6860e5fa4684c14d8e1aa65df0aba4e6808ea1a9/687474703a2f2f6b6172616f6b65732e6d6f652f6173736574732f696d616765732f696e6465782e706e67">
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/renovatebot/renovate">
				<img width="150" valign="middle" src="https://camo.githubusercontent.com/206d470ac709b9a702a97b0c08d6f389a086793d/68747470733a2f2f72656e6f76617465626f742e636f6d2f696d616765732f6c6f676f2e737667">
			</a>
		</td>
		<td align="center">
			<a href="https://resist.bot">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/3322287/51992724-28736180-2473-11e9-9764-599cfda4b012.png">
			</a>
		</td>
		<td align="center">
			<a href="https://www.naturalcycles.com">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/170270/92244143-d0a8a200-eec2-11ea-9fc0-1c07f90b2113.png">
			</a>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="https://microlink.io">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/36894700/91992974-1cc5dc00-ed35-11ea-9d04-f58b42ce6a5e.png">
			</a>
		</td>
		<td align="center">
			<a href="https://radity.com">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/29518613/91814036-97fb9500-ec44-11ea-8c6c-d198cc23ca29.png">
			</a>
		</td>
		<td align="center">
			<a href="https://apify.com">
				<img width="150" valign="middle" src="https://user-images.githubusercontent.com/23726914/128673143-958b5930-b677-40ef-8087-5698a0c29c45.png">
			</a>
		</td>
	</tr>
</tbody>
</table>

<!-- <br> -->

<!-- *Creating an awesome product? Open an issue to get listed here.* -->

<br>

> Segment is a happy user of Got! Got powers the main backend API that our app talks to. It's used by our in-house RPC client that we use to communicate with all microservices.
>
> — <a href="https://github.com/vadimdemedes">Vadim Demedes</a>

> Antora, a static site generator for creating documentation sites, uses Got to download the UI bundle. In Antora, the UI bundle (aka theme) is maintained as a separate project. That project exports the UI as a zip file we call the UI bundle. The main site generator downloads that UI from a URL using Got and streams it to vinyl-zip to extract the files. Those files go on to be used to create the HTML pages and supporting assets.
>
> — <a href="https://github.com/mojavelinux">Dan Allen</a>

> GetVoIP is happily using Got in production. One of the unique capabilities of Got is the ability to handle Unix sockets which enables us to build a full control interfaces for our docker stack.
>
> — <a href="https://github.com/danielkalen">Daniel Kalen</a>

> We're using Got inside of Exoframe to handle all the communication between CLI and server. Exoframe is a self-hosted tool that allows simple one-command deployments using Docker.
>
> — <a href="https://github.com/yamalight">Tim Ermilov</a>

> Karaoke Mugen uses Got to fetch content updates from its online server.
>
> — <a href="https://github.com/AxelTerizaki">Axel Terizaki</a>

> Renovate uses Got, gh-got and gl-got to send millions of queries per day to GitHub, GitLab, npmjs, PyPi, Packagist, Docker Hub, Terraform, CircleCI, and more.
>
> — <a href="https://github.com/rarkins">Rhys Arkins</a>

> Resistbot uses Got to communicate from the API frontend where all correspondence ingresses to the officials lookup database in back.
>
> — <a href="https://github.com/chris-erickson">Chris Erickson</a>

> Natural Cycles is using Got to communicate with all kinds of 3rd-party REST APIs (over 9000!).
>
> — <a href="https://github.com/kirillgroshkov">Kirill Groshkov</a>

> Microlink is a cloud browser as an API service that uses Got widely as the main HTTP client, serving ~22M requests a month, every time a network call needs to be performed.
>
> — <a href="https://github.com/Kikobeats">Kiko Beats</a>

> We’re using Got at Radity. Thanks for such an amazing work!
>
> — <a href="https://github.com/MirzayevFarid">Mirzayev Farid</a>

> Got has been a crucial component of Apify's scraping for years. We use it to extract data from billions of web pages every month, and we really appreciate the powerful API and extensibility, which allowed us to build our own specialized HTTP client on top of Got. The support has always been stellar too.
>
> — <a href="https://github.com/mnmkng">Ondra Urban</a>

## For enterprise

Available as part of the Tidelift Subscription.

The maintainers of `got` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-got?utm_source=npm-got&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
