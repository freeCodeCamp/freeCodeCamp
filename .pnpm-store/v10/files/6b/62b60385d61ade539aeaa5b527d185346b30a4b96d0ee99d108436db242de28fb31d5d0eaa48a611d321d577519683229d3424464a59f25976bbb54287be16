# node-XMLHttpRequest #

Fork of [node-XMLHttpRequest](https://github.com/driverdan/node-XMLHttpRequest) by [driverdan](http://driverdan.com). Forked and published to npm because a [pull request](https://github.com/rase-/node-XMLHttpRequest/commit/a6b6f296e0a8278165c2d0270d9840b54d5eeadd) is not being created and merged. Changes made by [rase-](https://github.com/rase-/node-XMLHttpRequest/tree/add/ssl-support) are needed for [engine.io-client](https://github.com/Automattic/engine.io-client).

## Usage ## 

Here's how to include the module in your project and use as the browser-based
XHR object.

	var XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;
	var xhr = new XMLHttpRequest();

Note: use the lowercase string "xmlhttprequest-ssl" in your require(). On
case-sensitive systems (eg Linux) using uppercase letters won't work.
# Original README #

## Usage ##

Here's how to include the module in your project and use as the browser-based
XHR object.

	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var xhr = new XMLHttpRequest();

Note: use the lowercase string "xmlhttprequest" in your require(). On
case-sensitive systems (eg Linux) using uppercase letters won't work.

## Versions ##

Version 2.0.0 introduces a potentially breaking change concerning local file system requests.
If these requests fail this library now returns the `errno` (or -1) as the response status code instead of
returning status code 0.

Prior to 1.4.0 version numbers were arbitrary. From 1.4.0 on they conform to
the standard major.minor.bugfix. 1.x shouldn't necessarily be considered
stable just because it's above 0.x.

Since the XMLHttpRequest API is stable this library's API is stable as
well. Major version numbers indicate significant core code changes.
Minor versions indicate minor core code changes or better conformity to
the W3C spec.

## License ##

MIT license. See LICENSE for full details.

## Supports ##

* Async and synchronous requests
* GET, POST, PUT, and DELETE requests
* All spec methods (open, send, abort, getRequestHeader,
  getAllRequestHeaders, event methods)
* Requests to all domains

## Known Issues / Missing Features ##

For a list of open issues or to report your own visit the [github issues
page](https://github.com/driverdan/node-XMLHttpRequest/issues).

* Local file access may have unexpected results for non-UTF8 files
* Synchronous requests don't set headers properly
* Synchronous requests freeze node while waiting for response (But that's what you want, right? Stick with async!).
* Some events are missing, such as abort
* getRequestHeader is case-sensitive
* Cookies aren't persisted between requests
* Missing XML support
* Missing basic auth
