---
id: a6b0bb188d873cb2c8729495
title: Converter entidades HTML
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

Converta os caracteres `&`, `<`, `>`, `"` (aspas duplas) e `'` (aspas simples), em uma string para suas entidades HTML correspondentes.

# --hints--

`convertHTML("Dolce & Gabbana")` deve retorna a string `Dolce &amp; Gabbana`.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` deve retornar a string `Hamburgers &lt; Pizza &lt; Tacos`.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` deve retornar a string `Sixty &gt; twelve`.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` deve retornar a string `Stuff in &quot;quotation marks&quot;`.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` deve retornar a string `Schindler&apos;s List`.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` deve retornar a string `&lt;&gt;`.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` deve retornar a string `abc`.

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
