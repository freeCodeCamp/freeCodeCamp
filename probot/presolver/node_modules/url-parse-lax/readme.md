# url-parse-lax [![Build Status](https://travis-ci.org/sindresorhus/url-parse-lax.svg?branch=master)](https://travis-ci.org/sindresorhus/url-parse-lax)

> [`url.parse()`](https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost) with support for protocol-less URLs & IPs


## Install

```
$ npm install --save url-parse-lax
```


## Usage

```js
var urlParseLax = require('url-parse-lax');

urlParseLax('sindresorhus.com');
/*
{
	protocol: null,
	slashes: true,
	auth: null,
	host: 'sindresorhus.com',
	port: null,
	hostname: 'sindresorhus.com',
	hash: null,
	search: null,
	query: null,
	pathname: '/',
	path: '/',
	href: 'http://sindresorhus.com/'
}
*/

urlParseLax('[2001:db8::]:8000');
/*
{
	protocol: null,
	slashes: true,
	auth: null,
	host: '[2001:db8::]:8000',
	port: '8000',
	hostname: '2001:db8::',
	hash: null,
	search: null,
	query: null,
	pathname: '/',
	path: '/',
	href: 'http://[2001:db8::]:8000/'
}
*/
```

And with the built-in `url.parse()`:

```js
var url = require('url');

url.parse('sindresorhus.com');
/*
{
	protocol: null,
	slashes: null,
	auth: null,
	host: null,
	port: null,
	hostname: null,
	hash: null,
	search: null,
	query: null,
	pathname: 'sindresorhus',
	path: 'sindresorhus',
	href: 'sindresorhus'
}
*/

url.parse('[2001:db8::]:8000');
/*
{
	protocol: null,
	slashes: null,
	auth: null,
	host: null,
	port: null,
	hostname: null,
	hash: null,
	search: null,
	query: null,
	pathname: '[2001:db8::]:8000',
	path: '[2001:db8::]:8000',
	href: '[2001:db8::]:8000'
}
*/
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
