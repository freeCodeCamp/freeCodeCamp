---
id: 5a23c84252665b21eecc8036
title: Strip control codes and extended characters from a string
challengeType: 5
isHidden: false
forumTopicId: 302327
---

## Description

<section id='description'>

The task is to strip control codes and extended characters from a string. The solution should demonstrate how to achieve each of the following results:
A string with control codes and extended characters stripped.
In ASCII, the control codes have decimal codes 0 through to 31 and 127. On an ASCII based system, if the control codes are stripped, the resultant string would have all of its characters within the range of 32 to 126 decimal on the ASCII table.
On a non-ASCII based system, we consider characters that do not have a corresponding glyph on the ASCII table (within the ASCII range of 32 to 126 decimal) to be an extended character for the purpose of this task.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>strip</code> should be a function.
    testString: assert(typeof strip == 'function');
  - text: <code>strip("abc")</code> should return a string.
    testString: assert(typeof strip("abc") == 'string');
  - text: <code>strip("\ba\x00b\n\rc\fd\xc3")</code> should return <code>"abcd"</code>.
    testString: assert.equal(strip("\ba\x00b\n\rc\fd\xc3"), "abcd");
  - text: <code>strip("\u0000\n abc\u00E9def\u007F")</code> should return <code>" abcdef"</code>.
    testString: assert.equal(strip("\u0000\n abc\u00E9def\u007F"), " abcdef");
  - text: <code>strip("a\n\tb\u2102d\u2147f")</code> should return <code>"abdf"</code>.
    testString: assert.equal(strip("a\n\tb\u2102d\u2147f"), "abdf");
  - text: <code>strip("Français.")</code> should return <code>"Franais."</code>.
    testString: assert.equal(strip("Français."), "Franais.");
  - text: <code>strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")</code> should return <code>"123abcDEF+-*/"</code>.
    testString: assert.equal(strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ"), "123abcDEF+-*/");
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function strip(s) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function strip(s) {
  return s
    .split('')
    .filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join('');
}
```

</section>
