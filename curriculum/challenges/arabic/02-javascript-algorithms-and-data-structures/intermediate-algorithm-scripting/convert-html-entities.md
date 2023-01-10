---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

قم بتحويل الأحرف `&`, `<`, `>`, `"` (علامات اقتباس ازدواجية) و `'` (الفاصلة العليا) ، في string لكيانات الـ HTML المقابلة لها.

# --hints--

`convertHTML("Dolce & Gabbana")` يجب أن يعيد السلسلة `Dolce &amp; Gabbana`.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` يجب أن يعيد السلسلة `Hamburgers &lt; Pizza &lt; Tacos`.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` يجب أن يعيد السلسلة `Sixty &gt; twelve`.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` يجب أن يعيد السلسلة `Stuff in &quot;quotation marks&quot;`.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` يجب أن يعيد السلسلة `Schindler&apos;s List`.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` يجب أن يعيد السلسلة `&lt;&gt;`.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` يجب أن يعيد السلسلة `abc`.

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
