---
id: 5a23c84252665b21eecc7eb0
title: I vor E außer nach C
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

If both sub-phrases are plausible then the original phrase can be said to be plausible.

# --instructions--

Write a function that accepts a word and check if the word follows this rule. Die Funktion sollte true zurückgeben, wenn das Wort der Regel folgt und false, wenn dies nicht der Fall ist.

# --hints--

`IBeforeExceptC` sollte eine Funktion sein.

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` sollte einen Boolean zurückgeben.

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` sollte `true` zurückgeben.

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` sollte `false` zurückgeben.

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` sollte `true` zurückgeben.

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` sollte `true` zurückgeben.

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` sollte `false` zurückgeben.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` sollte `false` zurückgeben.

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
