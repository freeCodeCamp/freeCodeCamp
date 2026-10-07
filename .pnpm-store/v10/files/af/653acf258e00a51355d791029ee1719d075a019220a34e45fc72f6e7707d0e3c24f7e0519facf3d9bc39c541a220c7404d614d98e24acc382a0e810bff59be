# DOMPurify

[![npm](https://badge.fury.io/js/dompurify.svg)](http://badge.fury.io/js/dompurify) ![Tests](https://github.com/cure53/DOMPurify/workflows/Build%20and%20Test/badge.svg) [![Downloads](https://img.shields.io/npm/dm/dompurify.svg)](https://www.npmjs.com/package/dompurify) ![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/dompurify?color=%233C1&label=minified) [![dependents](https://badgen.net/github/dependents-repo/cure53/dompurify?color=green&label=dependents)](https://github.com/cure53/DOMPurify/network/dependents) [![Build Status](https://app.cloudback.it/badge/cure53/DOMPurify)](https://cloudback.it)

DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.

It's also very simple to use and get started with. DOMPurify was [started in February 2014](https://github.com/cure53/DOMPurify/commit/a630922616927373485e0e787ab19e73e3691b2b) and, meanwhile, has reached version **v3.2.7**.

DOMPurify is written in JavaScript and works in all modern browsers (Safari (10+), Opera (15+), Edge, Firefox and Chrome - as well as almost anything else using Blink, Gecko or WebKit). It doesn't break on MSIE or other legacy browsers. It simply does nothing.

**Note that [DOMPurify v2.5.8](https://github.com/cure53/DOMPurify/releases/tag/2.5.8) is the latest version supporting MSIE. For important security updates compatible with MSIE, please use the [2.x branch](https://github.com/cure53/DOMPurify/tree/2.x).**

Our automated tests cover [28 different browsers](https://github.com/cure53/DOMPurify/blob/main/test/karma.custom-launchers.config.js#L5) right now, more to come. We also cover Node.js v18.x, v19.x, v20.x, v21.x, v22.x and v23.x, running DOMPurify on [jsdom](https://github.com/jsdom/jsdom). Older Node versions are known to work as well, but hey... no guarantees.

DOMPurify is written by security people who have vast background in web attacks and XSS. Fear not. For more details please also read about our [Security Goals & Threat Model](https://github.com/cure53/DOMPurify/wiki/Security-Goals-&-Threat-Model). Please, read it. Like, really.

## What does it do?

DOMPurify sanitizes HTML and prevents XSS attacks. You can feed DOMPurify with string full of dirty HTML and it will return a string (unless configured otherwise) with clean HTML. DOMPurify will strip out everything that contains dangerous HTML and thereby prevent XSS attacks and other nastiness. It's also damn bloody fast. We use the technologies the browser provides and turn them into an XSS filter. The faster your browser, the faster DOMPurify will be.

## How do I use it?

It's easy. Just include DOMPurify on your website.

### Using the unminified version (source-map available)

```html
<script type="text/javascript" src="dist/purify.js"></script>
```

### Using the minified and tested production version (source-map available)

```html
<script type="text/javascript" src="dist/purify.min.js"></script>
```

Afterwards you can sanitize strings by executing the following code:

```js
const clean = DOMPurify.sanitize(dirty);
```

Or maybe this, if you love working with Angular or alike:

```js
import DOMPurify from 'dompurify';

const clean = DOMPurify.sanitize('<b>hello there</b>');
```

The resulting HTML can be written into a DOM element using `innerHTML` or the DOM using `document.write()`. That is fully up to you.
Note that by default, we permit HTML, SVG **and** MathML. If you only need HTML, which might be a very common use-case, you can easily set that up as well:

```js
const clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });
```

### Is there any foot-gun potential?

Well, please note, if you _first_ sanitize HTML and then modify it _afterwards_, you might easily **void the effects of sanitization**. If you feed the sanitized markup to another library _after_ sanitization, please be certain that the library doesn't mess around with the HTML on its own.

### Okay, makes sense, let's move on

After sanitizing your markup, you can also have a look at the property `DOMPurify.removed` and find out, what elements and attributes were thrown out. Please **do not use** this property for making any security critical decisions. This is just a little helper for curious minds.

### Running DOMPurify on the server

DOMPurify technically also works server-side with Node.js. Our support strives to follow the [Node.js release cycle](https://nodejs.org/en/about/releases/).

Running DOMPurify on the server requires a DOM to be present, which is probably no surprise. Usually, [jsdom](https://github.com/jsdom/jsdom) is the tool of choice and we **strongly recommend** to use the latest version of _jsdom_.

Why? Because older versions of _jsdom_ are known to be buggy in ways that result in XSS _even if_ DOMPurify does everything 100% correctly. There are **known attack vectors** in, e.g. _jsdom v19.0.0_ that are fixed in _jsdom v20.0.0_ - and we really recommend to keep _jsdom_ up to date because of that.

Please also be aware that tools like [happy-dom](https://github.com/capricorn86/happy-dom) exist but **are not considered safe** at this point. Combining DOMPurify with _happy-dom_ is currently not recommended and will likely lead to XSS.

Other than that, you are fine to use DOMPurify on the server. Probably. This really depends on _jsdom_ or whatever DOM you utilize server-side. If you can live with that, this is how you get it to work:

```bash
npm install dompurify
npm install jsdom
```

For _jsdom_ (please use an up-to-date version), this should do the trick:

```js
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const clean = DOMPurify.sanitize('<b>hello there</b>');
```

Or even this, if you prefer working with imports:

```js
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const window = new JSDOM('').window;
const purify = DOMPurify(window);
const clean = purify.sanitize('<b>hello there</b>');
```

If you have problems making it work in your specific setup, consider looking at the amazing [isomorphic-dompurify](https://github.com/kkomelin/isomorphic-dompurify) project which solves lots of problems people might run into.

```bash
npm install isomorphic-dompurify
```

```js
import DOMPurify from 'isomorphic-dompurify';

const clean = DOMPurify.sanitize('<s>hello</s>');
```

## Is there a demo?

Of course there is a demo! [Play with DOMPurify](https://cure53.de/purify)

## What if I find a _security_ bug?

First of all, please immediately contact us via [email](mailto:mario@cure53.de) so we can work on a fix. [PGP key](https://keyserver.ubuntu.com/pks/lookup?op=vindex&search=0xC26C858090F70ADA)

Also, you probably qualify for a bug bounty! The fine folks over at [Fastmail](https://www.fastmail.com/) use DOMPurify for their services and added our library to their bug bounty scope. So, if you find a way to bypass or weaken DOMPurify, please also have a look at their website and the [bug bounty info](https://www.fastmail.com/about/bugbounty/).

## Some purification samples please?

How does purified markup look like? Well, [the demo](https://cure53.de/purify) shows it for a big bunch of nasty elements. But let's also show some smaller examples!

```js
DOMPurify.sanitize('<img src=x onerror=alert(1)//>'); // becomes <img src="x">
DOMPurify.sanitize('<svg><g/onload=alert(2)//<p>'); // becomes <svg><g></g></svg>
DOMPurify.sanitize('<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'); // becomes <p>abc</p>
DOMPurify.sanitize('<math><mi//xlink:href="data:x,<script>alert(4)</script>">'); // becomes <math><mi></mi></math>
DOMPurify.sanitize('<TABLE><tr><td>HELLO</tr></TABL>'); // becomes <table><tbody><tr><td>HELLO</td></tr></tbody></table>
DOMPurify.sanitize('<UL><li><A HREF=//google.com>click</UL>'); // becomes <ul><li><a href="//google.com">click</a></li></ul>
```

## What is supported?

DOMPurify currently supports HTML5, SVG and MathML. DOMPurify per default allows CSS, HTML custom data attributes. DOMPurify also supports the Shadow DOM - and sanitizes DOM templates recursively. DOMPurify also allows you to sanitize HTML for being used with the jQuery `$()` and `elm.html()` API without any known problems.

## What about legacy browsers like Internet Explorer?

DOMPurify does nothing at all. It simply returns exactly the string that you fed it. DOMPurify exposes a property called `isSupported`, which tells you whether it will be able to do its job, so you can come up with your own backup plan.

## What about DOMPurify and Trusted Types?

In version 1.0.9, support for [Trusted Types API](https://github.com/w3c/webappsec-trusted-types) was added to DOMPurify.
In version 2.0.0, a config flag was added to control DOMPurify's behavior regarding this.

When `DOMPurify.sanitize` is used in an environment where the Trusted Types API is available and `RETURN_TRUSTED_TYPE` is set to `true`, it tries to return a `TrustedHTML` value instead of a string (the behavior for `RETURN_DOM` and `RETURN_DOM_FRAGMENT` config options does not change).

Note that in order to create a policy in `trustedTypes` using DOMPurify, `RETURN_TRUSTED_TYPE: false` is required, as `createHTML` expects a normal string, not `TrustedHTML`. The example below shows this.

```js
window.trustedTypes!.createPolicy('default', {
  createHTML: (to_escape) =>
    DOMPurify.sanitize(to_escape, { RETURN_TRUSTED_TYPE: false }),
});
```

## Can I configure DOMPurify?

Yes. The included default configuration values are pretty good already - but you can of course override them. Check out the [`/demos`](https://github.com/cure53/DOMPurify/tree/main/demos) folder to see a bunch of examples on how you can [customize DOMPurify](https://github.com/cure53/DOMPurify/tree/main/demos#what-is-this).

### General settings
```js
// strip {{ ... }}, ${ ... } and <% ... %> to make output safe for template systems
// be careful please, this mode is not recommended for production usage.
// allowing template parsing in user-controlled HTML is not advised at all.
// only use this mode if there is really no alternative.
const clean = DOMPurify.sanitize(dirty, {SAFE_FOR_TEMPLATES: true});


// change how e.g. comments containing risky HTML characters are treated.
// be very careful, this setting should only be set to `false` if you really only handle 
// HTML and nothing else, no SVG, MathML or the like. 
// Otherwise, changing from `true` to `false` will lead to XSS in this or some other way.
const clean = DOMPurify.sanitize(dirty, {SAFE_FOR_XML: false});
```

### Control our allow-lists and block-lists
```js
// allow only <b> elements, very strict
const clean = DOMPurify.sanitize(dirty, {ALLOWED_TAGS: ['b']});

// allow only <b> and <q> with style attributes
const clean = DOMPurify.sanitize(dirty, {ALLOWED_TAGS: ['b', 'q'], ALLOWED_ATTR: ['style']});

// allow all safe HTML elements but neither SVG nor MathML
// note that the USE_PROFILES setting will override the ALLOWED_TAGS setting
// so don't use them together
const clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {html: true}});

// allow all safe SVG elements and SVG Filters, no HTML or MathML
const clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {svg: true, svgFilters: true}});

// allow all safe MathML elements and SVG, but no SVG Filters
const clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {mathMl: true, svg: true}});

// change the default namespace from HTML to something different
const clean = DOMPurify.sanitize(dirty, {NAMESPACE: 'http://www.w3.org/2000/svg'});

// leave all safe HTML as it is and add <style> elements to block-list
const clean = DOMPurify.sanitize(dirty, {FORBID_TAGS: ['style']});

// leave all safe HTML as it is and add style attributes to block-list
const clean = DOMPurify.sanitize(dirty, {FORBID_ATTR: ['style']});

// extend the existing array of allowed tags and add <my-tag> to allow-list
const clean = DOMPurify.sanitize(dirty, {ADD_TAGS: ['my-tag']});

// extend the existing array of allowed attributes and add my-attr to allow-list
const clean = DOMPurify.sanitize(dirty, {ADD_ATTR: ['my-attr']});

// prohibit ARIA attributes, leave other safe HTML as is (default is true)
const clean = DOMPurify.sanitize(dirty, {ALLOW_ARIA_ATTR: false});

// prohibit HTML5 data attributes, leave other safe HTML as is (default is true)
const clean = DOMPurify.sanitize(dirty, {ALLOW_DATA_ATTR: false});
```

### Control behavior relating to Custom Elements
```js
// DOMPurify allows to define rules for Custom Elements. When using the CUSTOM_ELEMENT_HANDLING
// literal, it is possible to define exactly what elements you wish to allow (by default, none are allowed).
//
// The same goes for their attributes. By default, the built-in or configured allow.list is used.
//
// You can use a RegExp literal to specify what is allowed or a predicate, examples for both can be seen below.
// When using a predicate function for attributeNameCheck, it can optionally receive the tagName as a second parameter
// for more granular control over which attributes are allowed for specific elements.
// The default values are very restrictive to prevent accidental XSS bypasses. Handle with great care!

const clean = DOMPurify.sanitize(
    '<foo-bar baz="foobar" forbidden="true"></foo-bar><div is="foo-baz"></div>',
    {
        CUSTOM_ELEMENT_HANDLING: {
            tagNameCheck: null, // no custom elements are allowed
            attributeNameCheck: null, // default / standard attribute allow-list is used
            allowCustomizedBuiltInElements: false, // no customized built-ins allowed
        },
    }
); // <div is=""></div>

const clean = DOMPurify.sanitize(
    '<foo-bar baz="foobar" forbidden="true"></foo-bar><div is="foo-baz"></div>',
    {
        CUSTOM_ELEMENT_HANDLING: {
            tagNameCheck: /^foo-/, // allow all tags starting with "foo-"
            attributeNameCheck: /baz/, // allow all attributes containing "baz"
            allowCustomizedBuiltInElements: true, // customized built-ins are allowed
        },
    }
); // <foo-bar baz="foobar"></foo-bar><div is="foo-baz"></div>

const clean = DOMPurify.sanitize(
    '<foo-bar baz="foobar" forbidden="true"></foo-bar><div is="foo-baz"></div>',
    {
        CUSTOM_ELEMENT_HANDLING: {
            tagNameCheck: (tagName) => tagName.match(/^foo-/), // allow all tags starting with "foo-"
            attributeNameCheck: (attr) => attr.match(/baz/), // allow all containing "baz"
            allowCustomizedBuiltInElements: true, // allow customized built-ins
        },
    }
); // <foo-bar baz="foobar"></foo-bar><div is="foo-baz"></div>

// Example with attributeNameCheck receiving tagName as a second parameter
const clean = DOMPurify.sanitize(
    '<element-one attribute-one="1" attribute-two="2"></element-one><element-two attribute-one="1" attribute-two="2"></element-two>',
    {
        CUSTOM_ELEMENT_HANDLING: {
            tagNameCheck: (tagName) => tagName.match(/^element-(one|two)$/),
            attributeNameCheck: (attr, tagName) => {
                if (tagName === 'element-one') {
                    return ['attribute-one'].includes(attr);
                } else if (tagName === 'element-two') {
                    return ['attribute-two'].includes(attr);
                } else {
                    return false;
                }
            },
            allowCustomizedBuiltInElements: false,
        },
    }
); // <element-one attribute-one="1"></element-one><element-two attribute-two="2"></element-two>
```
### Control behavior relating to URI values
```js
// extend the existing array of elements that can use Data URIs
const clean = DOMPurify.sanitize(dirty, {ADD_DATA_URI_TAGS: ['a', 'area']});

// extend the existing array of elements that are safe for URI-like values (be careful, XSS risk)
const clean = DOMPurify.sanitize(dirty, {ADD_URI_SAFE_ATTR: ['my-attr']});

```
### Control permitted attribute values
```js
// allow external protocol handlers in URL attributes (default is false, be careful, XSS risk)
// by default only http, https, ftp, ftps, tel, mailto, callto, sms, cid and xmpp are allowed.
const clean = DOMPurify.sanitize(dirty, {ALLOW_UNKNOWN_PROTOCOLS: true});

// allow specific protocols handlers in URL attributes via regex (default is false, be careful, XSS risk)
// by default only http, https, ftp, ftps, tel, mailto, callto, sms, cid and xmpp are allowed.
// Default RegExp: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
const clean = DOMPurify.sanitize(dirty, {ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|xxx):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i});

```
### Influence the return-type
```js
// return a DOM HTMLBodyElement instead of an HTML string (default is false)
const clean = DOMPurify.sanitize(dirty, {RETURN_DOM: true});

// return a DOM DocumentFragment instead of an HTML string (default is false)
const clean = DOMPurify.sanitize(dirty, {RETURN_DOM_FRAGMENT: true});

// use the RETURN_TRUSTED_TYPE flag to turn on Trusted Types support if available
const clean = DOMPurify.sanitize(dirty, {RETURN_TRUSTED_TYPE: true}); // will return a TrustedHTML object instead of a string if possible

// use a provided Trusted Types policy
const clean = DOMPurify.sanitize(dirty, {
    // supplied policy must define createHTML and createScriptURL
    TRUSTED_TYPES_POLICY: trustedTypes.createPolicy({
        createHTML(s) { return s},
        createScriptURL(s) { return s},
    })
});
```
### Influence how we sanitize
```js
// return entire document including <html> tags (default is false)
const clean = DOMPurify.sanitize(dirty, {WHOLE_DOCUMENT: true});

// disable DOM Clobbering protection on output (default is true, handle with care, minor XSS risks here)
const clean = DOMPurify.sanitize(dirty, {SANITIZE_DOM: false});

// enforce strict DOM Clobbering protection via namespace isolation (default is false)
// when enabled, isolates the namespace of named properties (i.e., `id` and `name` attributes)
// from JS variables by prefixing them with the string `user-content-`
const clean = DOMPurify.sanitize(dirty, {SANITIZE_NAMED_PROPS: true});

// keep an element's content when the element is removed (default is true)
const clean = DOMPurify.sanitize(dirty, {KEEP_CONTENT: false});

// glue elements like style, script or others to document.body and prevent unintuitive browser behavior in several edge-cases (default is false)
const clean = DOMPurify.sanitize(dirty, {FORCE_BODY: true});

// remove all <a> elements under <p> elements that are removed
const clean = DOMPurify.sanitize(dirty, {FORBID_CONTENTS: ['a'], FORBID_TAGS: ['p']});

// change the parser type so sanitized data is treated as XML and not as HTML, which is the default
const clean = DOMPurify.sanitize(dirty, {PARSER_MEDIA_TYPE: 'application/xhtml+xml'});
```
### Influence where we sanitize
```js
// use the IN_PLACE mode to sanitize a node "in place", which is much faster depending on how you use DOMPurify
const dirty = document.createElement('a');
dirty.setAttribute('href', 'javascript:alert(1)');

const clean = DOMPurify.sanitize(dirty, {IN_PLACE: true}); // see https://github.com/cure53/DOMPurify/issues/288 for more info
```

There is even [more examples here](https://github.com/cure53/DOMPurify/tree/main/demos#what-is-this), showing how you can run, customize and configure DOMPurify to fit your needs.

## Persistent Configuration

Instead of repeatedly passing the same configuration to `DOMPurify.sanitize`, you can use the `DOMPurify.setConfig` method. Your configuration will persist until your next call to `DOMPurify.setConfig`, or until you invoke `DOMPurify.clearConfig` to reset it. Remember that there is only one active configuration, which means once it is set, all extra configuration parameters passed to `DOMPurify.sanitize` are ignored.

## Hooks

DOMPurify allows you to augment its functionality by attaching one or more functions with the `DOMPurify.addHook` method to one of the following hooks:

- `beforeSanitizeElements`
- `uponSanitizeElement` (No 's' - called for every element)
- `afterSanitizeElements`
- `beforeSanitizeAttributes`
- `uponSanitizeAttribute`
- `afterSanitizeAttributes`
- `beforeSanitizeShadowDOM`
- `uponSanitizeShadowNode`
- `afterSanitizeShadowDOM`

It passes the currently processed DOM node, when needed a literal with verified node and attribute data and the DOMPurify configuration to the callback. Check out the [MentalJS hook demo](https://github.com/cure53/DOMPurify/blob/main/demos/hooks-mentaljs-demo.html) to see how the API can be used nicely.

_Example_:

```js
DOMPurify.addHook(
  'uponSanitizeAttribute',
  function (currentNode, hookEvent, config) {
    // Do something with the current node
    // You can also mutate hookEvent for current node (i.e. set hookEvent.forceKeepAttr = true)
    // For other than 'uponSanitizeAttribute' hook types hookEvent equals to null
  }
);
```

## Removed Configuration

| Option          | Since | Note                     |
|-----------------|-------|--------------------------|
| SAFE_FOR_JQUERY | 2.1.0 | No replacement required. |

## Continuous Integration

We are currently using Github Actions in combination with BrowserStack. This gives us the possibility to confirm for each and every commit that all is going according to plan in all supported browsers. Check out the build logs here: https://github.com/cure53/DOMPurify/actions

You can further run local tests by executing `npm run test`.

All relevant commits will be signed with the key `0x24BB6BF4` for additional security (since 8th of April 2016).

### Development and contributing

#### Installation (`npm i`)

We support `npm` officially. GitHub Actions workflow is configured to install dependencies using `npm`. When using deprecated version of `npm` we can not fully ensure the versions of installed dependencies which might lead to unanticipated problems.

#### Scripts

We rely on npm run-scripts for integrating with our tooling infrastructure. We use ESLint as a pre-commit hook to ensure code consistency. Moreover, to ease formatting we use [prettier](https://github.com/prettier/prettier) while building the `/dist` assets happens through `rollup`.

These are our npm scripts:

- `npm run dev` to start building while watching sources for changes
- `npm run test` to run our test suite via jsdom and karma
  - `test:jsdom` to only run tests through jsdom
  - `test:karma` to only run tests through karma
- `npm run lint` to lint the sources using ESLint (via xo)
- `npm run format` to format our sources using prettier to ease to pass ESLint
- `npm run build` to build our distribution assets minified and unminified as a UMD module
  - `npm run build:umd` to only build an unminified UMD module
  - `npm run build:umd:min` to only build a minified UMD module

Note: all run scripts triggered via `npm run <script>`.

There are more npm scripts but they are mainly to integrate with CI or are meant to be "private" for instance to amend build distribution files with every commit.

## Security Mailing List

We maintain a mailing list that notifies whenever a security-critical release of DOMPurify was published. This means, if someone found a bypass and we fixed it with a release (which always happens when a bypass was found) a mail will go out to that list. This usually happens within minutes or few hours after learning about a bypass. The list can be subscribed to here:

[https://lists.ruhr-uni-bochum.de/mailman/listinfo/dompurify-security](https://lists.ruhr-uni-bochum.de/mailman/listinfo/dompurify-security)

Feature releases will not be announced to this list.

## Who contributed?

Many people helped and help DOMPurify become what it is and need to be acknowledged here!

[Cybozu 💛💸](https://github.com/cybozu), [hata6502 💸](https://github.com/hata6502), [intra-mart-dh 💸](https://github.com/intra-mart-dh), [hash_kitten ❤️](https://twitter.com/hash_kitten), [kevin_mizu ❤️](https://twitter.com/kevin_mizu), [icesfont ❤️](https://github.com/icesfont), [reduckted ❤️](https://github.com/reduckted), [dcramer 💸](https://github.com/dcramer), [JGraph 💸](https://github.com/jgraph), [baekilda 💸](https://github.com/baekilda), [Healthchecks 💸](https://github.com/healthchecks), [Sentry 💸](https://github.com/getsentry), [jarrodldavis 💸](https://github.com/jarrodldavis), [CynegeticIO](https://github.com/CynegeticIO), [ssi02014 ❤️](https://github.com/ssi02014), [GrantGryczan](https://github.com/GrantGryczan), [Lowdefy](https://twitter.com/lowdefy), [granlem](https://twitter.com/MaximeVeit), [oreoshake](https://github.com/oreoshake), [tdeekens ❤️](https://github.com/tdeekens), [peernohell ❤️](https://github.com/peernohell), [is2ei](https://github.com/is2ei), [SoheilKhodayari](https://github.com/SoheilKhodayari), [franktopel](https://github.com/franktopel), [NateScarlet](https://github.com/NateScarlet), [neilj](https://github.com/neilj), [fhemberger](https://github.com/fhemberger), [Joris-van-der-Wel](https://github.com/Joris-van-der-Wel), [ydaniv](https://github.com/ydaniv), [terjanq](https://twitter.com/terjanq), [filedescriptor](https://github.com/filedescriptor), [ConradIrwin](https://github.com/ConradIrwin), [gibson042](https://github.com/gibson042), [choumx](https://github.com/choumx), [0xSobky](https://github.com/0xSobky), [styfle](https://github.com/styfle), [koto](https://github.com/koto), [tlau88](https://github.com/tlau88), [strugee](https://github.com/strugee), [oparoz](https://github.com/oparoz), [mathiasbynens](https://github.com/mathiasbynens), [edg2s](https://github.com/edg2s), [dnkolegov](https://github.com/dnkolegov), [dhardtke](https://github.com/dhardtke), [wirehead](https://github.com/wirehead), [thorn0](https://github.com/thorn0), [styu](https://github.com/styu), [mozfreddyb](https://github.com/mozfreddyb), [mikesamuel](https://github.com/mikesamuel), [jorangreef](https://github.com/jorangreef), [jimmyhchan](https://github.com/jimmyhchan), [jameydeorio](https://github.com/jameydeorio), [jameskraus](https://github.com/jameskraus), [hyderali](https://github.com/hyderali), [hansottowirtz](https://github.com/hansottowirtz), [hackvertor](https://github.com/hackvertor), [freddyb](https://github.com/freddyb), [flavorjones](https://github.com/flavorjones), [djfarrelly](https://github.com/djfarrelly), [devd](https://github.com/devd), [camerondunford](https://github.com/camerondunford), [buu700](https://github.com/buu700), [buildog](https://github.com/buildog), [alabiaga](https://github.com/alabiaga), [Vector919](https://github.com/Vector919), [Robbert](https://github.com/Robbert), [GreLI](https://github.com/GreLI), [FuzzySockets](https://github.com/FuzzySockets), [ArtemBernatskyy](https://github.com/ArtemBernatskyy), [@garethheyes](https://twitter.com/garethheyes), [@shafigullin](https://twitter.com/shafigullin), [@mmrupp](https://twitter.com/mmrupp), [@irsdl](https://twitter.com/irsdl),[ShikariSenpai](https://github.com/ShikariSenpai), [ansjdnakjdnajkd](https://github.com/ansjdnakjdnajkd), [@asutherland](https://twitter.com/asutherland), [@mathias](https://twitter.com/mathias), [@cgvwzq](https://twitter.com/cgvwzq), [@robbertatwork](https://twitter.com/robbertatwork), [@giutro](https://twitter.com/giutro), [@CmdEngineer\_](https://twitter.com/CmdEngineer_), [@avr4mit](https://twitter.com/avr4mit), [davecardwell](https://github.com/davecardwell) and especially [@securitymb ❤️](https://twitter.com/securitymb) & [@masatokinugawa ❤️](https://twitter.com/masatokinugawa)

## Testing powered by

<a target="_blank" href="https://www.browserstack.com/"><img width="200" src="https://github.com/cure53/DOMPurify/assets/6709482/f70be7eb-8fc4-41ea-9653-9d359235328f"></a><br>

And last but not least, thanks to [BrowserStack Open-Source Program](https://www.browserstack.com/open-source) for supporting this project with their services for free and delivering excellent, dedicated and very professional support on top of that.
