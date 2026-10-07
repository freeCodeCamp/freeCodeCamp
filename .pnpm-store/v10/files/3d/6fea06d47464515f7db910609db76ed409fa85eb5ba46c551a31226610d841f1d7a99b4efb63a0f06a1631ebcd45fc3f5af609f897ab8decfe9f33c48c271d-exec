# URI.js

URI.js is an [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt) compliant, scheme extendable URI parsing/validating/resolving library for all JavaScript environments (browsers, Node.js, etc).
It is also compliant with the IRI ([RFC 3987](http://www.ietf.org/rfc/rfc3987.txt)), IDNA ([RFC 5890](http://www.ietf.org/rfc/rfc5890.txt)), IPv6 Address ([RFC 5952](http://www.ietf.org/rfc/rfc5952.txt)), IPv6 Zone Identifier ([RFC 6874](http://www.ietf.org/rfc/rfc6874.txt)) specifications.

URI.js has an extensive test suite, and works in all (Node.js, web) environments. It weighs in at 6.4kb (gzipped, 17kb deflated).

## API

### Parsing

	URI.parse("uri://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body");
	//returns:
	//{
	//  scheme : "uri",
	//  userinfo : "user:pass",
	//  host : "example.com",
	//  port : 123,
	//  path : "/one/two.three",
	//  query : "q1=a1&q2=a2",
	//  fragment : "body"
	//}

### Serializing

	URI.serialize({scheme : "http", host : "example.com", fragment : "footer"}) === "http://example.com/#footer"

### Resolving

	URI.resolve("uri://a/b/c/d?q", "../../g") === "uri://a/g"

### Normalizing

	URI.normalize("HTTP://ABC.com:80/%7Esmith/home.html") === "http://abc.com/~smith/home.html"

### Comparison

	URI.equal("example://a/b/c/%7Bfoo%7D", "eXAMPLE://a/./b/../b/%63/%7bfoo%7d") === true

### IP Support

	//IPv4 normalization
	URI.normalize("//192.068.001.000") === "//192.68.1.0"

	//IPv6 normalization
	URI.normalize("//[2001:0:0DB8::0:0001]") === "//[2001:0:db8::1]"

	//IPv6 zone identifier support
	URI.parse("//[2001:db8::7%25en1]");
	//returns:
	//{
	//  host : "2001:db8::7%en1"
	//}

### IRI Support

	//convert IRI to URI
	URI.serialize(URI.parse("http://examplé.org/rosé")) === "http://xn--exampl-gva.org/ros%C3%A9"
	//convert URI to IRI
	URI.serialize(URI.parse("http://xn--exampl-gva.org/ros%C3%A9"), {iri:true}) === "http://examplé.org/rosé"

### Options

All of the above functions can accept an additional options argument that is an object that can contain one or more of the following properties:

*	`scheme` (string)

	Indicates the scheme that the URI should be treated as, overriding the URI's normal scheme parsing behavior.

*	`reference` (string)

	If set to `"suffix"`, it indicates that the URI is in the suffix format, and the validator will use the option's `scheme` property to determine the URI's scheme.

*	`tolerant` (boolean, false)

	If set to `true`, the parser will relax URI resolving rules.

*	`absolutePath` (boolean, false)

	If set to `true`, the serializer will not resolve a relative `path` component.

*	`iri` (boolean, false)

	If set to `true`, the serializer will unescape non-ASCII characters as per [RFC 3987](http://www.ietf.org/rfc/rfc3987.txt).

*	`unicodeSupport` (boolean, false)

	If set to `true`, the parser will unescape non-ASCII characters in the parsed output as per [RFC 3987](http://www.ietf.org/rfc/rfc3987.txt).

*	`domainHost` (boolean, false)

	If set to `true`, the library will treat the `host` component as a domain name, and convert IDNs (International Domain Names) as per [RFC 5891](http://www.ietf.org/rfc/rfc5891.txt).

## Scheme Extendable

URI.js supports inserting custom [scheme](http://en.wikipedia.org/wiki/URI_scheme) dependent processing rules. Currently, URI.js has built in support for the following schemes:

*	http \[[RFC 2616](http://www.ietf.org/rfc/rfc2616.txt)\]
*	https \[[RFC 2818](http://www.ietf.org/rfc/rfc2818.txt)\]
*	ws \[[RFC 6455](http://www.ietf.org/rfc/rfc6455.txt)\]
*	wss \[[RFC 6455](http://www.ietf.org/rfc/rfc6455.txt)\]
*	mailto \[[RFC 6068](http://www.ietf.org/rfc/rfc6068.txt)\]
*	urn \[[RFC 2141](http://www.ietf.org/rfc/rfc2141.txt)\]
*	urn:uuid \[[RFC 4122](http://www.ietf.org/rfc/rfc4122.txt)\]

### HTTP/HTTPS Support

	URI.equal("HTTP://ABC.COM:80", "http://abc.com/") === true
	URI.equal("https://abc.com", "HTTPS://ABC.COM:443/") === true

### WS/WSS Support

	URI.parse("wss://example.com/foo?bar=baz");
	//returns:
	//{
	//	scheme : "wss",
	//	host: "example.com",
	//	resourceName: "/foo?bar=baz",
	//	secure: true,
	//}

	URI.equal("WS://ABC.COM:80/chat#one", "ws://abc.com/chat") === true

### Mailto Support

	URI.parse("mailto:alpha@example.com,bravo@example.com?subject=SUBSCRIBE&body=Sign%20me%20up!");
	//returns:
	//{
	//	scheme : "mailto",
	//	to : ["alpha@example.com", "bravo@example.com"],
	//	subject : "SUBSCRIBE",
	//	body : "Sign me up!"
	//}

	URI.serialize({
		scheme : "mailto",
		to : ["alpha@example.com"],
		subject : "REMOVE",
		body : "Please remove me",
		headers : {
			cc : "charlie@example.com"
		}
	}) === "mailto:alpha@example.com?cc=charlie@example.com&subject=REMOVE&body=Please%20remove%20me"

### URN Support

	URI.parse("urn:example:foo");
	//returns:
	//{
	//	scheme : "urn",
	//	nid : "example",
	//	nss : "foo",
	//}

#### URN UUID Support

	URI.parse("urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6");
	//returns:
	//{
	//	scheme : "urn",
	//	nid : "uuid",
	//	uuid : "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
	//}

## Usage

To load in a browser, use the following tag:

	<script type="text/javascript" src="uri-js/dist/es5/uri.all.min.js"></script>

To load in a CommonJS/Module environment, first install with npm/yarn by running on the command line:

	npm install uri-js
	# OR
	yarn add uri-js

Then, in your code, load it using:

	const URI = require("uri-js");

If you are writing your code in ES6+ (ESNEXT) or TypeScript, you would load it using:

	import * as URI from "uri-js";

Or you can load just what you need using named exports:

	import { parse, serialize, resolve, resolveComponents, normalize, equal, removeDotSegments, pctEncChar, pctDecChars, escapeComponent, unescapeComponent } from "uri-js";

## Breaking changes

### Breaking changes from 3.x

URN parsing has been completely changed to better align with the specification. Scheme is now always `urn`, but has two new properties: `nid` which contains the Namspace Identifier, and `nss` which contains the Namespace Specific String. The `nss` property will be removed by higher order scheme handlers, such as the UUID URN scheme handler.

The UUID of a URN can now be found in the `uuid` property.

### Breaking changes from 2.x

URI validation has been removed as it was slow, exposed a vulnerabilty, and was generally not useful.

### Breaking changes from 1.x

The `errors` array on parsed components is now an `error` string.
