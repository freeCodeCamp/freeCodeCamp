---
id: 5a23c84252665b21eecc7eb0
title: 我在E之前除了C之后
challengeType: 5
videoUrl: ''
dashedName: i-before-e-except-after-c
---

# --description--

短语[“我在E之前，除了C之后”](<https://en.wikipedia.org/wiki/I before E except after C>)是一个广为人知的助记符，它应该有助于拼写英语单词。使用提供的单词，检查短语的两个子句是否合理：

1.  *“我在E之前没有前面的C”。*
2.  *“在我之前的C之前是C”。*

如果两个子短语都是合理的，则原始短语可以说是合理的。编写一个接受单词的函数，并检查单词是否遵循此规则。如果该函数遵循规则，则该函数应返回true，否则返回false。

# --hints--

`IBeforeExceptC`应该是一个函数。

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")`应该返回一个布尔值。

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")`应该返回`true` 。

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")`应该返回`false` 。

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")`应该返回`true` 。

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")`应该返回`true` 。

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")`应返回`false` 。

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")`应该返回`false` 。

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
