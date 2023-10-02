---
id: a6b0bb188d873cb2c8729495
title: HTML エンティティに変換する
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

文字列中の文字 `&`、`<`、`>`、`"` (二重引用符)、`'` (アポストロフィー) を、それぞれ対応する HTML エンティティに変換してください。

# --hints--

`convertHTML("Dolce & Gabbana")` は、文字列 `Dolce &amp; Gabbana` を返す必要があります。

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` は、文字列 `Hamburgers &lt; Pizza &lt; Tacos` を返す必要があります。

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` は、文字列 `Sixty &gt; twelve` を返す必要があります。

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` は、文字列 `Stuff in &quot;quotation marks&quot;` を返す必要があります。

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` は、文字列 `Schindler&apos;s List` を返す必要があります。

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` は、文字列 `&lt;&gt;` を返す必要があります。

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` は、文字列 `abc` を返す必要があります。

```js
assert.strictEqual(convertHTML('abc'), 'abc');
```

# --seed--

## --seed-contents--

```js
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
```

# --solutions--

```js
var MAP = { '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(c) {
    return MAP[c];
  });
}
```
