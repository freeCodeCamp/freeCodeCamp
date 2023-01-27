---
id: a6b0bb188d873cb2c8729495
title: 转换 HTML 字符实体
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

请将字符串中的 `&`、`<`、`>`、`"`（双引号）和 `'`（单引号）转换为相应的 HTML 字符实体。

# --hints--

`convertHTML("Dolce & Gabbana")` 应返回 `Dolce &amp; Gabbana`。

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` 应返回 `Hamburgers &lt; Pizza &lt; Tacos`。

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` 应返回 `Sixty &gt; twelve`。

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` 应返回 `Stuff in &quot;quotation marks&quot;`。

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` 应返回 `Schindler&apos;s List`。

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` 应返回 `&lt;&gt;`。

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` 应该返回字符串 `abc`。

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
