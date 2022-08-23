---
id: a6b0bb188d873cb2c8729495
title: HTML-Entitäten konvertieren
challengeType: 1
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

Konvertiere die Zeichen `&`, `<`, `>`, `"` (Anführungszeichen) und `'` (Apostroph) in einem String in ihre entsprechenden HTML-Entitäten.

# --hints--

`convertHTML("Dolce & Gabbana")` sollte den String `Dolce &amp; Gabbana` zurückgeben.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` sollte den String `Hamburgers &lt; Pizza &lt; Tacos` zurückgeben.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` sollte den String `Sixty &gt; twelve` zurückgeben.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` sollte den String `Stuff in &quot;quotation marks&quot;` zurückgeben.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` sollte den String `Schindler&apos;s List` zurückgeben.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` sollte den String `&lt;&gt;` zurückgeben.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` sollte den String `abc` zurückgeben.

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
