linkify-it
==========

[![CI](https://github.com/markdown-it/linkify-it/actions/workflows/ci.yml/badge.svg)](https://github.com/markdown-it/linkify-it/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/linkify-it.svg?style=flat)](https://www.npmjs.org/package/linkify-it)
[![Coverage Status](https://img.shields.io/coveralls/markdown-it/linkify-it/master.svg?style=flat)](https://coveralls.io/r/markdown-it/linkify-it?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/markdown-it/linkify-it)

> Links recognition library with FULL unicode support.
> Focused on high quality link patterns detection in plain text.

__[Demo](http://markdown-it.github.io/linkify-it/)__

Why it's awesome:

- Full unicode support, _with astral characters_!
- International domains support.
- Allows rules extension & custom normalizers.


Install
-------

```bash
npm install linkify-it --save
```

Browserification is also supported.


Usage examples
--------------

##### Example 1

```js
import linkifyit from 'linkify-it';
const linkify = linkifyit();

// Reload full tlds list & add unofficial `.onion` domain.
linkify
  .tlds(require('tlds'))          // Reload with full tlds list
  .tlds('onion', true)            // Add unofficial `.onion` domain
  .add('git:', 'http:')           // Add `git:` protocol as "alias"
  .add('ftp:', null)              // Disable `ftp:` protocol
  .set({ fuzzyIP: true });        // Enable IPs in fuzzy links (without schema)

console.log(linkify.test('Site github.com!'));  // true

console.log(linkify.match('Site github.com!')); // [ {
                                                //   schema: "",
                                                //   index: 5,
                                                //   lastIndex: 15,
                                                //   raw: "github.com",
                                                //   text: "github.com",
                                                //   url: "http://github.com",
                                                // } ]
```

##### Example 2. Add twitter mentions handler

```js
linkify.add('@', {
  validate: function (text, pos, self) {
    const tail = text.slice(pos);

    if (!self.re.twitter) {
      self.re.twitter =  new RegExp(
        '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
      );
    }
    if (self.re.twitter.test(tail)) {
      // Linkifier allows punctuation chars before prefix,
      // but we additionally disable `@` ("@@mention" is invalid)
      if (pos >= 2 && tail[pos - 2] === '@') {
        return false;
      }
      return tail.match(self.re.twitter)[0].length;
    }
    return 0;
  },
  normalize: function (match) {
    match.url = 'https://twitter.com/' + match.url.replace(/^@/, '');
  }
});
```


API
---

__[API documentation](http://markdown-it.github.io/linkify-it/doc)__

### new LinkifyIt(schemas, options)

Creates new linkifier instance with optional additional schemas.
Can be called without `new` keyword for convenience.

By default understands:

- `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
- "fuzzy" links and emails (google.com, foo@bar.com).

`schemas` is an object, where each key/value describes protocol/rule:

- __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
  for example). `linkify-it` makes sure that prefix is not preceded with
  alphanumeric char.
- __value__ - rule to check tail after link prefix
  - _String_ - just alias to existing rule
  - _Object_
    - _validate_ - either a `RegExp` (start with `^`, and don't include the
      link prefix itself), or a validator function which, given arguments
      _text_, _pos_, and _self_, returns the length of a match in _text_
      starting at index _pos_.  _pos_ is the index right after the link prefix.
      _self_ can be used to access the linkify object to cache data.
    - _normalize_ - optional function to normalize text & url of matched result
      (for example, for twitter mentions).

`options`:

- __fuzzyLink__ - recognize URL-s without `http(s)://` head. Default `true`.
- __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
  like version numbers. Default `false`.
- __fuzzyEmail__ - recognize emails without `mailto:` prefix. Default `true`.
- __---__ - set `true` to terminate link with `---` (if it's considered as long dash).


### .test(text)

Searches linkifiable pattern and returns `true` on success or `false` on fail.


### .pretest(text)

Quick check if link MAY BE can exist. Can be used to optimize more expensive
`.test()` calls. Return `false` if link can not be found, `true` - if `.test()`
call needed to know exactly.


### .testSchemaAt(text, name, offset)

Similar to `.test()` but checks only specific protocol tail exactly at given
position. Returns length of found pattern (0 on fail).


### .match(text)

Returns `Array` of found link matches or null if nothing found.

Each match has:

- __schema__ - link schema, can be empty for fuzzy links, or `//` for
  protocol-neutral  links.
- __index__ - offset of matched text
- __lastIndex__ - index of next char after mathch end
- __raw__ - matched text
- __text__ - normalized text
- __url__ - link, generated from matched text


### .matchAtStart(text)

Checks if a match exists at the start of the string. Returns `Match`
(see docs for `match(text)`) or null if no URL is at the start.
Doesn't work with fuzzy links.


### .tlds(list[, keepOld])

Load (or merge) new tlds list. Those are needed for fuzzy links (without schema)
to avoid false positives. By default:

- 2-letter root zones are ok.
- biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф are ok.
- encoded (`xn--...`) root zones are ok.

If that's not enough, you can reload defaults with more detailed zones list.

### .add(key, value)

Add a new schema to the schemas object.  As described in the constructor
definition, `key` is a link prefix (`skype:`, for example), and `value`
is a String to alias to another schema, or an Object with `validate` and
optionally `normalize` definitions.  To disable an existing rule, use
`.add(key, null)`.


### .set(options)

Override default options. Missed properties will not be changed.


## License

[MIT](https://github.com/markdown-it/linkify-it/blob/master/LICENSE)
