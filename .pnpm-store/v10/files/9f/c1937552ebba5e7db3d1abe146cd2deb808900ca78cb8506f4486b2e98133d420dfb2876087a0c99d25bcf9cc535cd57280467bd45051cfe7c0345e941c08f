# whatwg-url

whatwg-url is a full implementation of the WHATWG [URL Standard](https://url.spec.whatwg.org/). It can be used standalone, but it also exposes a lot of the internal algorithms that are useful for integrating a URL parser into a project like [jsdom](https://github.com/tmpvar/jsdom).

## Current Status

whatwg-url is currently up to date with the URL spec up to commit [a62223](https://github.com/whatwg/url/commit/a622235308342c9adc7fc2fd1659ff059f7d5e2a).

## API

### The `URL` Constructor

The main API is the [`URL`](https://url.spec.whatwg.org/#url) export, which follows the spec's behavior in all ways (including e.g. `USVString` conversion). Most consumers of this library will want to use this.

### Low-level URL Standard API

The following methods are exported for use by places like jsdom that need to implement things like [`HTMLHyperlinkElementUtils`](https://html.spec.whatwg.org/#htmlhyperlinkelementutils). They operate on or return an "internal URL" or ["URL record"](https://url.spec.whatwg.org/#concept-url) type.

- [URL parser](https://url.spec.whatwg.org/#concept-url-parser): `parseURL(input, { baseURL, encodingOverride })`
- [Basic URL parser](https://url.spec.whatwg.org/#concept-basic-url-parser): `basicURLParse(input, { baseURL, encodingOverride, url, stateOverride })`
- [URL serializer](https://url.spec.whatwg.org/#concept-url-serializer): `serializeURL(urlRecord, excludeFragment)`
- [Host serializer](https://url.spec.whatwg.org/#concept-host-serializer): `serializeHost(hostFromURLRecord)`
- [Serialize an integer](https://url.spec.whatwg.org/#serialize-an-integer): `serializeInteger(number)`
- [Origin](https://url.spec.whatwg.org/#concept-url-origin) [serializer](https://html.spec.whatwg.org/multipage/browsers.html#serialization-of-an-origin): `serializeURLOrigin(urlRecord)`
- [Set the username](https://url.spec.whatwg.org/#set-the-username): `setTheUsername(urlRecord, usernameString)`
- [Set the password](https://url.spec.whatwg.org/#set-the-password): `setThePassword(urlRecord, passwordString)`
- [Cannot have a username/password/port](https://url.spec.whatwg.org/#cannot-have-a-username-password-port): `cannotHaveAUsernamePasswordPort(urlRecord)`

The `stateOverride` parameter is one of the following strings:

- [`"scheme start"`](https://url.spec.whatwg.org/#scheme-start-state)
- [`"scheme"`](https://url.spec.whatwg.org/#scheme-state)
- [`"no scheme"`](https://url.spec.whatwg.org/#no-scheme-state)
- [`"special relative or authority"`](https://url.spec.whatwg.org/#special-relative-or-authority-state)
- [`"path or authority"`](https://url.spec.whatwg.org/#path-or-authority-state)
- [`"relative"`](https://url.spec.whatwg.org/#relative-state)
- [`"relative slash"`](https://url.spec.whatwg.org/#relative-slash-state)
- [`"special authority slashes"`](https://url.spec.whatwg.org/#special-authority-slashes-state)
- [`"special authority ignore slashes"`](https://url.spec.whatwg.org/#special-authority-ignore-slashes-state)
- [`"authority"`](https://url.spec.whatwg.org/#authority-state)
- [`"host"`](https://url.spec.whatwg.org/#host-state)
- [`"hostname"`](https://url.spec.whatwg.org/#hostname-state)
- [`"port"`](https://url.spec.whatwg.org/#port-state)
- [`"file"`](https://url.spec.whatwg.org/#file-state)
- [`"file slash"`](https://url.spec.whatwg.org/#file-slash-state)
- [`"file host"`](https://url.spec.whatwg.org/#file-host-state)
- [`"path start"`](https://url.spec.whatwg.org/#path-start-state)
- [`"path"`](https://url.spec.whatwg.org/#path-state)
- [`"cannot-be-a-base-URL path"`](https://url.spec.whatwg.org/#cannot-be-a-base-url-path-state)
- [`"query"`](https://url.spec.whatwg.org/#query-state)
- [`"fragment"`](https://url.spec.whatwg.org/#fragment-state)

The URL record type has the following API:

- [`scheme`](https://url.spec.whatwg.org/#concept-url-scheme)
- [`username`](https://url.spec.whatwg.org/#concept-url-username)
- [`password`](https://url.spec.whatwg.org/#concept-url-password)
- [`host`](https://url.spec.whatwg.org/#concept-url-host)
- [`port`](https://url.spec.whatwg.org/#concept-url-port)
- [`path`](https://url.spec.whatwg.org/#concept-url-path) (as an array)
- [`query`](https://url.spec.whatwg.org/#concept-url-query)
- [`fragment`](https://url.spec.whatwg.org/#concept-url-fragment)
- [`cannotBeABaseURL`](https://url.spec.whatwg.org/#url-cannot-be-a-base-url-flag) (as a boolean)

These properties should be treated with care, as in general changing them will cause the URL record to be in an inconsistent state until the appropriate invocation of `basicURLParse` is used to fix it up. You can see examples of this in the URL Standard, where there are many step sequences like "4. Set context object’s url’s fragment to the empty string. 5. Basic URL parse _input_ with context object’s url as _url_ and fragment state as _state override_." In between those two steps, a URL record is in an unusable state.

The return value of "failure" in the spec is represented by the string `"failure"`. That is, functions like `parseURL` and `basicURLParse` can return _either_ a URL record _or_ the string `"failure"`.
