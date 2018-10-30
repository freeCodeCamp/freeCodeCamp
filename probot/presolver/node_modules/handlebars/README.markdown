[![Travis Build Status](https://img.shields.io/travis/wycats/handlebars.js/master.svg)](https://travis-ci.org/wycats/handlebars.js)
[![Selenium Test Status](https://saucelabs.com/buildstatus/handlebars)](https://saucelabs.com/u/handlebars)

Handlebars.js
=============

Handlebars.js is an extension to the [Mustache templating
language](http://mustache.github.com/) created by Chris Wanstrath.
Handlebars.js and Mustache are both logicless templating languages that
keep the view and the code separated like we all know they should be.

Checkout the official Handlebars docs site at
[http://www.handlebarsjs.com](http://www.handlebarsjs.com) and the live demo at [http://tryhandlebarsjs.com/](http://tryhandlebarsjs.com/).

Installing
----------

See our [installation documentation](http://handlebarsjs.com/installation.html).

Usage
-----
In general, the syntax of Handlebars.js templates is a superset
of Mustache templates. For basic syntax, check out the [Mustache
manpage](http://mustache.github.com/mustache.5.html).

Once you have a template, use the `Handlebars.compile` method to compile
the template into a function. The generated function takes a context
argument, which will be used to render the template.

```js
var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);

// Would render:
// <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>
// <ul>
//   <li>Jimmy is 12</li>
//   <li>Sally is 4</li>
// </ul>
```

Full documentation and more examples are at [handlebarsjs.com](http://handlebarsjs.com/).

Precompiling Templates
----------------------

Handlebars allows templates to be precompiled and included as javascript code rather than the handlebars template allowing for faster startup time. Full details are located [here](http://handlebarsjs.com/precompilation.html).

Differences Between Handlebars.js and Mustache
----------------------------------------------
Handlebars.js adds a couple of additional features to make writing
templates easier and also changes a tiny detail of how partials work.

- [Nested Paths](http://handlebarsjs.com/#paths)
- [Helpers](http://handlebarsjs.com/#helpers)
- [Block Expressions](http://handlebarsjs.com/#block-expressions)
- [Literal Values](http://handlebarsjs.com/#literals)
- [Delimited Comments](http://handlebarsjs.com/#comments)

Block expressions have the same syntax as mustache sections but should not be confused with one another. Sections are akin to an implicit `each` or `with` statement depending on the input data and helpers are explicit pieces of code that are free to implement whatever behavior they like. The [mustache spec](http://mustache.github.io/mustache.5.html) defines the exact behavior of sections. In the case of name conflicts, helpers are given priority.

### Compatibility

There are a few Mustache behaviors that Handlebars does not implement.
- Handlebars deviates from Mustache slightly in that it does not perform recursive lookup by default. The compile time `compat` flag must be set to enable this functionality. Users should note that there is a performance cost for enabling this flag. The exact cost varies by template, but it's recommended that performance sensitive operations should avoid this mode and instead opt for explicit path references.
- The optional Mustache-style lambdas are not supported. Instead Handlebars provides its own lambda resolution that follows the behaviors of helpers.
- Alternative delimiters are not supported.


Supported Environments
----------------------

Handlebars has been designed to work in any ECMAScript 3 environment. This includes

- Node.js
- Chrome
- Firefox
- Safari 5+
- Opera 11+
- IE 6+

Older versions and other runtimes are likely to work but have not been formally
tested. The compiler requires `JSON.stringify` to be implemented natively or via a polyfill. If using the precompiler this is not necessary.

[![Selenium Test Status](https://saucelabs.com/browser-matrix/handlebars.svg)](https://saucelabs.com/u/handlebars)

Performance
-----------

In a rough performance test, precompiled Handlebars.js templates (in
the original version of Handlebars.js) rendered in about half the
time of Mustache templates. It would be a shame if it were any other
way, since they were precompiled, but the difference in architecture
does have some big performance advantages. Justin Marney, a.k.a.
[gotascii](http://github.com/gotascii), confirmed that with an
[independent test](http://sorescode.com/2010/09/12/benchmarks.html). The
rewritten Handlebars (current version) is faster than the old version,
with many [performance tests](https://travis-ci.org/wycats/handlebars.js/builds/33392182#L538) being 5 to 7 times faster than the Mustache equivalent.


Upgrading
---------

See [release-notes.md](https://github.com/wycats/handlebars.js/blob/master/release-notes.md) for upgrade notes.

Known Issues
------------

See [FAQ.md](https://github.com/wycats/handlebars.js/blob/master/FAQ.md) for known issues and common pitfalls.


Handlebars in the Wild
----------------------

* [Assemble](http://assemble.io), by [@jonschlinkert](https://github.com/jonschlinkert)
  and [@doowb](https://github.com/doowb), is a static site generator that uses Handlebars.js
  as its template engine.
* [CoSchedule](http://coschedule.com) An editorial calendar for WordPress that uses Handlebars.js
* [dashbars](https://github.com/pismute/dashbars) A modern helper library for Handlebars.js.
* [Ember.js](http://www.emberjs.com) makes Handlebars.js the primary way to
  structure your views, also with automatic data binding support.
* [Ghost](https://ghost.org/) Just a blogging platform.
* [handlebars_assets](http://github.com/leshill/handlebars_assets): A Rails Asset Pipeline gem
  from Les Hill (@leshill).
* [handlebars-helpers](https://github.com/assemble/handlebars-helpers) is an extensive library
  with 100+ handlebars helpers.
* [handlebars-layouts](https://github.com/shannonmoeller/handlebars-layouts) is a set of helpers which implement extendible and embeddable layout blocks as seen in other popular templating languages.
* [hbs](http://github.com/donpark/hbs): An Express.js view engine adapter for Handlebars.js,
  from Don Park.
* [koa-hbs](https://github.com/jwilm/koa-hbs): [koa](https://github.com/koajs/koa) generator based
  renderer for Handlebars.js.
* [jblotus](http://github.com/jblotus) created [http://tryhandlebarsjs.com](http://tryhandlebarsjs.com)
  for anyone who would like to try out Handlebars.js in their browser.
* [jQuery plugin](http://71104.github.io/jquery-handlebars/): allows you to use
  Handlebars.js with [jQuery](http://jquery.com/).
* [Lumbar](http://walmartlabs.github.io/lumbar) provides easy module-based template management for
  handlebars projects.
* [Marionette.Handlebars](https://github.com/hashchange/marionette.handlebars) adds support for Handlebars and Mustache templates to Marionette.
* [sammy.js](http://github.com/quirkey/sammy) by Aaron Quint, a.k.a. quirkey,
  supports Handlebars.js as one of its template plugins.
* [SproutCore](http://www.sproutcore.com) uses Handlebars.js as its main
  templating engine, extending it with automatic data binding support.
* [YUI](http://yuilibrary.com/yui/docs/handlebars/) implements a port of handlebars
* [Swag](https://github.com/elving/swag) by [@elving](https://github.com/elving) is a growing collection of helpers for handlebars.js. Give your handlebars.js templates some swag son!
* [DOMBars](https://github.com/blakeembrey/dombars) is a DOM-based templating engine built on the Handlebars parser and runtime **DEPRECATED**
* [promised-handlebars](https://github.com/nknapp/promised-handlebars) is a wrapper for Handlebars that allows helpers to return Promises.

External Resources
------------------

* [Gist about Synchronous and asynchronous loading of external handlebars templates](https://gist.github.com/2287070)

Have a project using Handlebars? Send us a [pull request][pull-request]!

License
-------
Handlebars.js is released under the MIT license.

[pull-request]: https://github.com/wycats/handlebars.js/pull/new/master
