# CookieJar

[![NPM version](http://img.shields.io/npm/v/cookiejar.svg)](https://www.npmjs.org/package/cookiejar)
[![devDependency Status](https://david-dm.org/bmeck/node-cookiejar/dev-status.svg)](https://david-dm.org/bmeck/node-cookiejar?type=dev)

Simple robust cookie library

## Exports

### CookieAccessInfo(domain,path,secure,script)

class to determine matching qualities of a cookie

##### Properties

* String domain - domain to match
* String path - path to match
* Boolean secure - access is secure (ssl generally)
* Boolean script - access is from a script


### Cookie(cookiestr_or_cookie, request_domain, request_path)

It turns input into a Cookie (singleton if given a Cookie),
the `request_domain` argument is used to default the domain if it is not explicit in the cookie string,
the `request_path` argument is used to set the path if it is not explicit in a cookie String.

Explicit domains/paths will cascade, implied domains/paths must *exactly* match (see http://en.wikipedia.org/wiki/HTTP_cookie#Domain_and_Pat).

##### Properties

* String name - name of the cookie
* String value - string associated with the cookie
* String domain - domain to match (on a cookie a '.' at the start means a wildcard matching anything ending in the rest)
* Boolean explicit_domain - if the domain was explicitly set via the cookie string
* String path - base path to match (matches any path starting with this '/' is root)
* Boolean explicit_path - if the path was explicitly set via the cookie string
* Boolean noscript - if it should be kept from scripts
* Boolean secure - should it only be transmitted over secure means
* Number expiration_date - number of millis since 1970 at which this should be removed

##### Methods

* `String toString()` - the __set-cookie:__ string for this cookie
* `String toValueString()` - the __cookie:__ string for this cookie
* `Cookie parse(cookiestr, request_domain, request_path)` - parses the string onto this cookie or a new one if called directly
* `Boolean matches(access_info)` - returns true if the access_info allows retrieval of this cookie
* `Boolean collidesWith(cookie)` - returns true if the cookies cannot exist in the same space (domain and path match)


### CookieJar()

class to hold numerous cookies from multiple domains correctly

##### Methods

* `Cookie setCookie(cookie, request_domain, request_path)` - modify (or add if not already-existing) a cookie to the jar
* `Cookie[] setCookies(cookiestr_or_list, request_domain, request_path)` - modify (or add if not already-existing) a large number of cookies to the jar
* `Cookie getCookie(cookie_name,access_info)` - get a cookie with the name and access_info matching
* `Cookie[] getCookies(access_info)` - grab all cookies matching this access_info
