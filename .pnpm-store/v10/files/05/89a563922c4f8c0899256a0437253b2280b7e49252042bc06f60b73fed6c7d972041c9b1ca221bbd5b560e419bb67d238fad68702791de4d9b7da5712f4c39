URI validation functions
==
[![Build Status](https://travis-ci.org/ogt/valid-url.png)](https://travis-ci.org/ogt/valid-url)

## Synopsis

Common url validation methods 
```
    var validUrl = require('valid-url');
  
    if (validUrl.isUri(suspect)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }
```

Replicates the functionality of Richard Sonnen <sonnen@richardsonnen.com> perl module :
http://search.cpan.org/~sonnen/Data-Validate-URI-0.01/lib/Data/Validate/URI.pm [full code here](http://anonscm.debian.org/gitweb/?p=users/dom/libdata-validate-uri-perl.git)
into a nodejs module. Translated practically line by line from perl. 
It passes all the original tests.

## Description

(copied from original perl module)

> This module collects common URI validation routines to make input validation, and untainting easier and more readable.
> All functions return an untainted value if the test passes, and undef if it fails. This means that you should always check for a defined status explicitly. Don't assume the return will be true.
> The value to test is always the first (and often only) argument.
> There are a number of other URI validation modules out there as well (see below.) This one focuses on being fast, lightweight, and relatively 'real-world'. i.e. it's good if you want to check user input, and don't need to parse out the URI/URL into chunks.
> Right now the module focuses on HTTP URIs, since they're arguably the most common. If you have a specialized scheme you'd like to have supported, let me know.

## Installation 

```
    npm install valid-url
```

## Methods
```javascript
/*
 * @Function isUri(value)
 *
 * @Synopsis  is the value a well-formed uri?
 * @Description  
        Returns the untainted URI if the test value appears to be well-formed.  Note that
        you may really want one of the more practical methods like is_http_uri or is_https_uri,
        since the URI standard (RFC 3986) allows a lot of things you probably don't want.
 * @Arguments 
 *   value  The potential URI to test.
 *
 * @Returns The untainted RFC 3986 URI on success, undefined on failure.
 * @Notes 
        This function does not make any attempt to check whether the URI is accessible
        or 'makes sense' in any meaningful way.  It just checks that it is formatted
        correctly.
 *
 */


/*
 * @Function isHttpUri(value)
 * @Synopsis   is the value a well-formed HTTP uri?
 * @Description  
        Specialized version of isUri() that only likes http:// urls.  As a result, it can
        also do a much more thorough job validating.  Also, unlike isUri() it is more
        concerned with only allowing real-world URIs through.  Things like relative
        hostnames are allowed by the standards, but probably aren't wise.  Conversely,
        null paths aren't allowed per RFC 2616 (should be '/' instead), but are allowed
        by this function.
        
        This function only works for fully-qualified URIs.  /bob.html won't work.  
        See RFC 3986 for the appropriate method to turn a relative URI into an absolute 
        one given its context.
        
        Returns the untainted URI if the test value appears to be well-formed.
        
        Note that you probably want to either call this in combo with is_https_uri(). i.e.
        
        if(isHttpUri(uri) || isHttpsUri(uri)) console.log('Good');
        
        or use the convenience method isWebUri which is equivalent.

 * @Arguments 
 *   value  The potential URI to test.
 *
 * @Returns The untainted RFC 3986 URI on success, undefined on failure.
 * @Notes 
        This function does not make any attempt to check whether the URI is accessible
        or 'makes sense' in any meaningful way.  It just checks that it is formatted
        correctly.
 */
 


/*
 * @Function isHttpsUri(value)
 * @Synopsis   is the value a well-formed HTTPS uri?
 * @Description  
        See is_http_uri() for details.  This version only likes the https URI scheme.
        Otherwise it's identical to is_http_uri()
 * @Arguments 
 *   value  The potential URI to test.
 *
 * @Returns The untainted RFC 3986 URI on success, undefined on failure.
 * @Notes 
        This function does not make any attempt to check whether the URI is accessible
        or 'makes sense' in any meaningful way.  It just checks that it is formatted
        correctly.
 */
 
 
 /*
 * @Function isWebUri(value)
 * @Synopsis   is the value a well-formed HTTP or HTTPS uri?
 * @Description  
        This is just a convenience method that combines isHttpUri and isHttpsUri
        to accept most common real-world URLs.
 * @Arguments 
 *   value  The potential URI to test.
 *
 * @Returns The untainted RFC 3986 URI on success, undefined on failure.
 * @Notes 
        This function does not make any attempt to check whether the URI is accessible
        or 'makes sense' in any meaningful way.  It just checks that it is formatted
        correctly.
 */
 
```

## See also 

RFC 3986, RFC 3966, RFC 4694, RFC 4759, RFC 4904

