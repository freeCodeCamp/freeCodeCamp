---
id: 5a23c84252665b21eecc7eb0
title: I 在 E 之前，除了 C 之后
challengeType: 1
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

**<a href="http://www.rosettacode.org/wiki/I_before_E_except_after_C" target="_blank" rel="noopener noreferrer nofollow">"I before E, except after C"</a>** is a general rule for English language spelling. If one is unsure whether a word is spelled with the digraph `ei` or `ie`, the rhyme suggests that the correct order is `ie` unless the preceding letter is `c`, in which case it may be `ei`.

使用所提供的词语，检查该短语的两个子条款是否分别合理:

<ol>
  <li>
    <i>"I before E when not preceded by C".</i>
  </li>
  <li>
    <i>"前面是C，E在I前"</i>
  </li>
</ol>

如果两个子短语都是合理的，则原始短语可以说是合理的。

# --instructions--

编写一个接受单词的函数，并检查单词是否遵循此规则。 如果接收到的词遵循规则，则该函数应返回true，否则返回false。

# --hints--

`IBeforeExceptC` 应该是一个函数。

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` 应该返回一个布尔值。

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` 应该返回 `true`。

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` 应该返回 `false`。

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` 应该返回 `true`。

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` 应该返回 `true`。

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` 应该返回 `false`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` 应该返回 `false`.

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
