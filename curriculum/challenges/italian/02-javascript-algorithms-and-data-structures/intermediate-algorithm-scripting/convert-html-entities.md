---
id: a6b0bb188d873cb2c8729495
title: Convertire entità HTML
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

Converti i caratteri `&`, `<`, `>`, `"` (virgolette doppie), e `'` (apostrofo), in una stringa nelle corrispondenti entità HTML.

# --hints--

`convertHTML("Dolce & Gabbana")` dovrebbe restituire la stringa `Dolce &amp; Gabbana`.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` dovrebbe restituire la stringa `Hamburgers &lt; Pizza &lt; Tacos`.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` dovrebbe restituire la stringa `Sixty &gt; twelve`.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` dovrebbe restituire la stringa `Stuff in &quot;quotation marks&quot;`.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` dovrebbe restituire la stringa `Schindler&apos;s List`.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` dovrebbe restituire la stringa `&lt;&gt;`.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` dovrebbe restituire la stringa `abc`.

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
