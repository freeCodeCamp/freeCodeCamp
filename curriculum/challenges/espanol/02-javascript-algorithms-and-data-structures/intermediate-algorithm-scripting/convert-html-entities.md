---
id: a6b0bb188d873cb2c8729495
title: Convierte entidades HTML
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

Convierte los caracteres `&`, `<`, `>`, `"` (dobles comillas), y `'` (apóstrofo), en un cadena con su correspondiente entidad HTML.

# --hints--

`convertHTML("Dolce & Gabbana")` debe devolver la cadena `Dolce &amp; Gabbana`.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` debe devolver la cadena `Hamburgers &lt; Pizza &lt; Tacos`.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` debe devolver la cadena `Sixty &gt; twelve`.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` debe devolver la cadena `Stuff in &quot;quotation marks&quot;`.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` debe devolver la cadena `Schindler&apos;s List`.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` debe devolver la cadena `&lt;&gt;`.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` debe devolver la cadena `abc`.

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
