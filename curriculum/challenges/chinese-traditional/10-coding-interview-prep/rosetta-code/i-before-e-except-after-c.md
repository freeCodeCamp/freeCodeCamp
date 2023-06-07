---
id: 5a23c84252665b21eecc7eb0
title: I 在 E 之前，除了 C 之後
challengeType: 1
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

**<a href="http://www.rosettacode.org/wiki/I_before_E_except_after_C" target="_blank" rel="noopener noreferrer nofollow">"I before E, except after C"</a>** is a general rule for English language spelling. If one is unsure whether a word is spelled with the digraph `ei` or `ie`, the rhyme suggests that the correct order is `ie` unless the preceding letter is `c`, in which case it may be `ei`.

Using the words provided, check if the two sub-clauses of the phrase are plausible individually:

<ol>
  <li>
    <i>"I before E when not preceded by C".</i>
  </li>
  <li>
    <i>"E before I when preceded by C".</i>
  </li>
</ol>

如果兩個子短語都是合理的，則原始短語可以說是合理的。

# --instructions--

Write a function that accepts a word and check if the word follows this rule. The function should return true if the word follows the rule and false if it does not.

# --hints--

`IBeforeExceptC` 應該是一個函數。

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` 應該返回一個布爾值。

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` 應該返回 `true`。

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` 應該返回 `false`。

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` 應該返回 `true`。

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` 應該返回 `true`。

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` 應該返回 `false`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` 應該返回 `false`.

```js
assert.equal(IBeforeExceptC('omniscient'), false);
```

# --seed--

## --seed-contents--

```js
function IBeforeExceptC(word) {

}
```

# --solutions--

```js
function IBeforeExceptC(word)
{
    if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
        return true;
    else if(word.indexOf("cei")!=-1)
        return true;
    return false;
}
```
