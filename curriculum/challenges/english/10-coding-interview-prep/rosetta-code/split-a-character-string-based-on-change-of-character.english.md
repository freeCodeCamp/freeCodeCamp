---
id: 5a23c84252665b21eecc801d
title: Split a character string based on change of character
challengeType: 5
forumTopicId: 302322
---

## Description

<section id='description'>

Split a (character) string into comma (plus a blank) delimited strings based on a change of character (left to right).
Blanks should be treated as any other character (except they are problematic to display clearly). The same applies to commas.
For instance, the string:

<pre>
"gHHH5YY++///\"
</pre>

should be split as:

<pre>
["g", "HHH", "5", "YY", "++", "///", "\" ];
</pre>
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>split</code> should be a function.
    testString: assert(typeof split == 'function');
  - text: <code>split("hello")</code> should return an array.
    testString: assert(Array.isArray(split("hello")));
  - text: <code>split("hello")</code> should return <code>["h", "e", "ll", "o"]</code>.
    testString: assert.deepEqual(split("hello"), ["h", "e", "ll", "o"]);
  - text: <code>split("commission")</code> should return <code>["c", "o", "mm", "i", "ss", "i", "o", "n"]</code>.
    testString: assert.deepEqual(split("commission"), ["c", "o", "mm", "i", "ss", "i", "o", "n"]);
  - text: <code>split("ssss----====llloooo")</code> should return <code>["ssss", "----", "====", "lll", "oooo"]</code>.
    testString: assert.deepEqual(split("ssss----====llloooo"), ["ssss", "----", "====", "lll", "oooo"]);
  - text: <code>split("sssmmmaaammmaaat")</code> should return <code>["sss", "mmm", "aaa", "mmm", "aaa", "t"]</code>.
    testString: assert.deepEqual(split("sssmmmaaammmaaat"), ["sss", "mmm", "aaa", "mmm", "aaa", "t"]);
  - text: <code>split("gHHH5YY++///\")</code> should return <code>["g", "HHH", "5", "YY", "++", "///", "\\"]</code>.
    testString: assert.deepEqual(split("gHHH5YY++///\\"), ["g", "HHH", "5", "YY", "++", "///", "\\"]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function split(str) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function split(str) {
  const concat = xs =>
    xs.length > 0
      ? (() => {
          const unit = typeof xs[0] === 'string' ? '' : [];
          return unit.concat.apply(unit, xs);
        })()
      : [];

  const group = xs => groupBy((a, b) => a === b, xs);

  const groupBy = (f, xs) => {
    const dct = xs.slice(1).reduce(
      (a, x) => {
        const h = a.active.length > 0 ? a.active[0] : undefined,
          blnGroup = h !== undefined && f(h, x);
        return {
          active: blnGroup ? a.active.concat([x]) : [x],
          sofar: blnGroup ? a.sofar : a.sofar.concat([a.active])
        };
      },
      {
        active: xs.length > 0 ? [xs[0]] : [],
        sofar: []
      }
    );
    return dct.sofar.concat(dct.active.length > 0 ? [dct.active] : []);
  };

  const map = (f, xs) => xs.map(f);

  const stringChars = s => s.split('');

  return map(concat, group(stringChars(str)));
}
```

</section>
