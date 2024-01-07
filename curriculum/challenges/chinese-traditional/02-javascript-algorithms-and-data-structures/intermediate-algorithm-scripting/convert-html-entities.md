---
id: a6b0bb188d873cb2c8729495
title: 轉換 HTML 字符實體
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

請將字符串中的 `&`、`<`、`>`、`"`（雙引號）和 `'`（單引號）轉換爲相應的 HTML 字符實體。

# --hints--

`convertHTML("Dolce & Gabbana")` 應返回 `Dolce &amp; Gabbana`。

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` 應返回 `Hamburgers &lt; Pizza &lt; Tacos`。

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` 應返回 `Sixty &gt; twelve`。

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` 應返回 `Stuff in &quot;quotation marks&quot;`。

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` 應返回 `Schindler&apos;s List`。

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` 應返回 `&lt;&gt;`。

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` 應該返回字符串 `abc`。

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
