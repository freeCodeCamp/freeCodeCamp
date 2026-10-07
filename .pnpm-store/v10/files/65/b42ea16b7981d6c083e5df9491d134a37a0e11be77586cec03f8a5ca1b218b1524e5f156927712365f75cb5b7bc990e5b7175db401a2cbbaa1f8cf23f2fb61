## Hogan.js - A mustache compiler. [![Build Status](https://secure.travis-ci.org/twitter/hogan.js.png)](http://travis-ci.org/twitter/hogan.js)

[Hogan.js](http://twitter.github.io/hogan.js/) is a compiler for the
[Mustache](http://mustache.github.io/) templating language. For information
on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and
the [spec](https://github.com/mustache/spec).

## Basics

Hogan compiles templates to HoganTemplate objects, which have a render method.

```js
var data = {
  screenName: "dhg",
};

var template = Hogan.compile("Follow @{{screenName}}.");
var output = template.render(data);

// prints "Follow @dhg."
console.log(output);
```

## Features

Hogan is fast--try it on your workload.

Hogan has separate scanning, parsing and code generation phases. This way it's
possible to add new features without touching the scanner at all, and many
different code generation techniques can be tried without changing the parser.

Hogan exposes scan and parse methods. These can be useful for
pre-processing templates on the server.

```js
var text = "{{^check}}{{#i18n}}No{{/i18n}}{{/check}}";
text +=  "{{#check}}{{#i18n}}Yes{{/i18n}}{{/check}}";
var tree = Hogan.parse(Hogan.scan(text));

// outputs "# check"
console.log(tree[0].tag + " " + tree[0].name);

// outputs "Yes"
console.log(tree[1].nodes[0].nodes[0]);
```

It's also possible to use HoganTemplate objects without the Hogan compiler
present. That means you can pre-compile your templates on the server, and
avoid shipping the compiler. However, the optional lambda features from the
Mustache spec require the compiler and the original template source to be present.

Hogan also supports [template inheritance](https://github.com/mustache/spec/pull/75),
and maintains compatibility with other implementations like [mustache.java](https://github.com/spullara/mustache.java),
[mustache.php](https://github.com/bobthecow/mustache.php), and [GRMustache](https://github.com/groue/GRMustache)

## Why Hogan.js?

Why another templating library?

Hogan.js was written to meet three templating library requirements: good
performance, standalone template objects, and a parser API.

## Install

# Node.js

```
npm install hogan.js
```

# component

```
component install twitter/hogan.js
```

## Compilation options

The second argument to Hogan.compile is an options hash.

```js
var text = "my <%example%> template."
Hogan.compile(text, {delimiters: '<% %>'});
```

There are currently four valid options.

asString: return the compiled template as a string. This feature is used
by hulk to produce strings containing pre-compiled templates.

sectionTags: allow custom tags that require opening and closing tags, and
treat them as though they were section tags.

```js
var text = "my {{_foo}}example{{/foo}} template."
Hogan.compile(text, { sectionTags: [{o: '_foo', c: 'foo'}]});
```

The value is an array of object with o and c fields that indicate names
for custom section tags. The example above allows parsing of {{_foo}}{{/foo}}.

delimiters: A string that overrides the default delimiters. Example: "<% %>".

disableLambda: disables the higher-order sections / lambda-replace features of Mustache.

## Issues

Have a bug? Please create an issue here on GitHub!

https://github.com/twitter/hogan.js/issues

## Versioning

For transparency and insight into our release cycle, releases will be numbered with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

## Testing

To run the tests you first need to update all git submodules.

    $ git submodule init
    $ git submodule update

Unit tests are written using [QUnit](http://qunitjs.com/). To run them, open `test/index.html`
in a browser.

Use [node](http://nodejs.org/) to run all tests from the
[mustache spec](https://github.com/mustache/spec).

    $ node test/spec.js

## Authors

**Robert Sayre**

+ http://github.com/sayrer

**Jacob Thornton**

+ http://github.com/fat

## License

Copyright 2011 Twitter, Inc.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
