---
id: 5a23c84252665b21eecc7eb0
title: I before E except after C
challengeType: 5
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

["I before E, except after C"](https://en.wikipedia.org/wiki/I before E except after C) は広く知られているニーモニック (覚え歌) で、英単語を綴る場合に役立つものです。

与えられた単語を使用して、フレーズの2つの従属節がそれぞれ妥当かどうかを確認します。

<ol>
  <li>
    <i>「I before E when not before preceded by C」</i>
  </li>
  <li>
    <i>「E before I when preceded by C」</i>
  </li>
</ol>

両方の従属節が妥当である場合は、元のフレーズは妥当であると言うことができます。

# --instructions--

単語を受け取り、その単語がルールに従っているかを確認する関数を記述してください。 この関数は、単語がルールに従っていれば true を、そうでない場合は false を返します。

# --hints--

`IBeforeExceptC` は関数とします。

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` はブール値を返す必要があります。

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` は`true`を返す必要があります。

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` は`false`を返す必要があります。

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` は `true`を返す必要があります。

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` は`true`を返す必要があります。

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` は`false`を返す必要があります。

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` は`false`を返す必要があります。

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
