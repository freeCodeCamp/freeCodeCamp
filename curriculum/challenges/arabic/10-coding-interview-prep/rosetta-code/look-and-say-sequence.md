---
id: 5e6dd14797f5ce267c2f19d0
title: Look-and-say sequence
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

The Look and say sequence is a recursively defined sequence of numbers.

Sequence Definition

<ul><li>Take a decimal number</li>
<li><span>Look</span> at the number, visually grouping consecutive runs of the same digit.</li>
<li><span>Say</span> the number, from left to right, group by group; as how many of that digit there are - followed by the digit grouped.</li></ul><span> This becomes the next number of the sequence.</span>

An example:

<ul><li>Starting with the number 1, you have <span>one</span> 1 which produces 11</li>
<li>Starting with 11, you have <span>two</span> 1's. I.E.: 21</li>
<li>Starting with 21, you have <span>one</span> 2, then <span>one</span> 1. I.E.: (12)(11) which becomes 1211</li>
<li>Starting with 1211, you have <span>one</span> 1, <span>one</span> 2, then <span>two</span> 1's. I.E.: (11)(12)(21) which becomes 111221</li></ul>

# --instructions--

Write a function that accepts a string as a parameter, processes it, and returns the resultant string.

# --hints--

`lookAndSay` should be a function.

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` should return a string.

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` should return `"11"`.

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` should return `"21"`.

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` should return `"1211"`.

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` should return `"111221"`.

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` should return `"13151412"`.

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```
