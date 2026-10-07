# css-select [![NPM version](http://img.shields.io/npm/v/css-select.svg)](https://npmjs.org/package/css-select) [![Build Status](https://travis-ci.com/fb55/css-select.svg?branch=master)](http://travis-ci.com/fb55/css-select) [![Downloads](https://img.shields.io/npm/dm/css-select.svg)](https://npmjs.org/package/css-select) [![Coverage](https://coveralls.io/repos/fb55/css-select/badge.svg?branch=master)](https://coveralls.io/r/fb55/css-select)

A CSS selector compiler and engine

## What?

As a **compiler**, css-select turns CSS selectors into functions that tests if
elements match them.

As an **engine**, css-select looks through a DOM tree, searching for elements.
Elements are tested "from the top", similar to how browsers execute CSS
selectors.

In its default configuration, css-select queries the DOM structure of the
[`domhandler`](https://github.com/fb55/domhandler) module (also known as
htmlparser2 DOM). To query alternative DOM structures, see [`Options`](#options)
below.

**Features:**

-   🔬 Full implementation of CSS3 selectors, as well as most CSS4 selectors
-   🧪 Partial implementation of jQuery/Sizzle extensions (see
    [cheerio-select](https://github.com/cheeriojs/cheerio-select) for the
    remaining selectors)
-   🧑‍🔬 High test coverage, including the full test suites from Sizzle, Qwery and
    NWMatcher.
-   🥼 Reliably great performance

## Why?

Most CSS engines written in JavaScript execute selectors left-to-right. That
means thet execute every component of the selector in order, from left to right
_(duh)_. As an example: For the selector `a b`, these engines will first query
for `a` elements, then search these for `b` elements. (That's the approach of
eg. [`Sizzle`](https://github.com/jquery/sizzle),
[`nwmatcher`](https://github.com/dperini/nwmatcher/) and
[`qwery`](https://github.com/ded/qwery).)

While this works, it has some downsides: Children of `a`s will be checked
multiple times; first, to check if they are also `a`s, then, for every superior
`a` once, if they are `b`s. Using
[Big O notation](http://en.wikipedia.org/wiki/Big_O_notation), that would be
`O(n^(k+1))`, where `k` is the number of descendant selectors (that's the space
in the example above).

The far more efficient approach is to first look for `b` elements, then check if
they have superior `a` elements: Using big O notation again, that would be
`O(n)`. That's called right-to-left execution.

And that's what css-select does – and why it's quite performant.

## How does it work?

By building a stack of functions.

_Wait, what?_

Okay, so let's suppose we want to compile the selector `a b`, for right-to-left
execution. We start by _parsing_ the selector. This turns the selector into an
array of the building blocks. That's what the
[`css-what`](https://github.com/fb55/css-what) module is for, if you want to
have a look.

Anyway, after parsing, we end up with an array like this one:

```js
[
    { type: "tag", name: "a" },
    { type: "descendant" },
    { type: "tag", name: "b" },
];
```

(Actually, this array is wrapped in another array, but that's another story,
involving commas in selectors.)

Now that we know the meaning of every part of the selector, we can compile it.
That is where things become interesting.

The basic idea is to turn every part of the selector into a function, which
takes an element as its only argument. The function checks whether a passed
element matches its part of the selector: If it does, the element is passed to
the next function representing the next part of the selector. That function does
the same. If an element is accepted by all parts of the selector, it _matches_
the selector and double rainbow ALL THE WAY.

As said before, we want to do right-to-left execution with all the big O
improvements. That means elements are passed from the rightmost part of the
selector (`b` in our example) to the leftmost (~~which would be `c`~~ of course
`a`).

For traversals, such as the _descendant_ operating the space between `a` and
`b`, we walk up the DOM tree, starting from the element passed as argument.

_//TODO: More in-depth description. Implementation details. Build a spaceship._

## API

```js
const CSSselect = require("css-select");
```

**Note:** css-select throws errors when invalid selectors are passed to it.This
is done to aid with writing css selectors, but can be unexpected when processing
arbitrary strings.

#### `CSSselect.selectAll(query, elems, options)`

Queries `elems`, returns an array containing all matches.

-   `query` can be either a CSS selector or a function.
-   `elems` can be either an array of elements, or a single element. If it is an
    element, its children will be queried.
-   `options` is described below.

Aliases: `default` export, `CSSselect.iterate(query, elems)`.

#### `CSSselect.compile(query, options)`

Compiles the query, returns a function.

#### `CSSselect.is(elem, query, options)`

Tests whether or not an element is matched by `query`. `query` can be either a
CSS selector or a function.

#### `CSSselect.selectOne(query, elems, options)`

Arguments are the same as for `CSSselect.selectAll(query, elems)`. Only returns
the first match, or `null` if there was no match.

### Options

All options are optional.

-   `xmlMode`: When enabled, tag names will be case-sensitive. Default: `false`.
-   `rootFunc`: The last function in the stack, will be called with the last
    element that's looked at.
-   `adapter`: The adapter to use when interacting with the backing DOM
    structure. By default it uses the `domutils` module.
-   `context`: The context of the current query. Used to limit the scope of
    searches. Can be matched directly using the `:scope` pseudo-selector.
-   `cacheResults`: Allow css-select to cache results for some selectors,
    sometimes greatly improving querying performance. Disable this if your
    document can change in between queries with the same compiled selector.
    Default: `true`.

#### Custom Adapters

A custom adapter must match the interface described
[here](https://github.com/fb55/css-select/blob/1aa44bdd64aaf2ebdfd7f338e2e76bed36521957/src/types.ts#L6-L96).

You may want to have a look at [`domutils`](https://github.com/fb55/domutils) to
see the default implementation, or at
[`css-select-browser-adapter`](https://github.com/nrkn/css-select-browser-adapter/blob/master/index.js)
for an implementation backed by the DOM.

## Supported selectors

_As defined by CSS 4 and / or jQuery._

-   [Selector lists](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list)
    (`,`)
-   [Universal](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)
    (`*`)
-   [Type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)
    (`<tagname>`)
-   [Descendant](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)
    (` `)
-   [Child](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)
    (`>`)
-   Parent (`<`)
-   [Adjacent sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
    (`+`)
-   [General sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)
    (`~`)
-   [Attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
    (`[attr=foo]`), with supported comparisons:
    -   `[attr]` (existential)
    -   `=`
    -   `~=`
    -   `|=`
    -   `*=`
    -   `^=`
    -   `$=`
    -   `!=`
    -   `i` and `s` can be added after the comparison to make the comparison
        case-insensitive or case-sensitive (eg. `[attr=foo i]`). If neither is
        supplied, css-select will follow the HTML spec's
        [case-sensitivity rules](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors).
-   Pseudos:
    -   [`:not`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
    -   [`:contains`](https://api.jquery.com/contains-selector)
    -   `:icontains` (case-insensitive version of `:contains`)
    -   [`:has`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
    -   [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
    -   [`:empty`](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)
    -   [`:parent`](https://api.jquery.com/parent-selector)
    -   [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child),
        [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child),
        [`:first-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type),
        [`:last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type)
    -   [`:only-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type),
        [`:only-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)
    -   [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child),
        [`:nth-last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child),
        [`:nth-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type),
        [`:nth-last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type),
    -   [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link),
        [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link)
    -   [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited),
        [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover),
        [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
        (these depend on optional `Adapter` methods, so these will only match
        elements if implemented in `Adapter`)
    -   [`:selected`](https://api.jquery.com/selected-selector),
        [`:checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
    -   [`:enabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled),
        [`:disabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
    -   [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required),
        [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional)
    -   [`:header`](https://api.jquery.com/header-selector),
        [`:button`](https://api.jquery.com/button-selector),
        [`:input`](https://api.jquery.com/input-selector),
        [`:text`](https://api.jquery.com/text-selector),
        [`:checkbox`](https://api.jquery.com/checkbox-selector),
        [`:file`](https://api.jquery.com/file-selector),
        [`:password`](https://api.jquery.com/password-selector),
        [`:reset`](https://api.jquery.com/reset-selector),
        [`:radio`](https://api.jquery.com/radio-selector) etc.
    -   [`:is`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is), plus its
        legacy alias `:matches`
    -   [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope)
        (uses the context from the passed options)

---

License: BSD-2-Clause

## Security contact information

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security). Tidelift will
coordinate the fix and disclosure.

## `css-select` for enterprise

Available as part of the Tidelift Subscription

The maintainers of `css-select` and thousands of other packages are working with
Tidelift to deliver commercial support and maintenance for the open source
dependencies you use to build your applications. Save time, reduce risk, and
improve code health, while paying the maintainers of the exact dependencies you
use.
[Learn more.](https://tidelift.com/subscription/pkg/npm-css-select?utm_source=npm-css-select&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
