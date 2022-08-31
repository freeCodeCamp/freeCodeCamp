---
id: 587d7fa7367417b2b2512bc8
title: Füge Klassen mit D3 hinzu
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

Die Verwendung einer Vielzahl von Inline-Styles für HTML-Elemente ist selbst für kleinere Anwendungen schwer zu handhaben. Es ist einfacher, eine Klasse mit CSS-Regeln zu Elementen und Stilen hinzuzufügen. D3 verfügt über die `attr()`-Methode, um einem Element ein beliebiges HTML-Attribut hinzuzufügen, einschließlich eines Klassennamens.

Die `attr()`Methode funktioniert genauso wie `style()`. Es verwendet kommagetrennte Werte und kann eine Callback-Funktion verwenden. Hier ist ein Beispiel, um eine Klasse von `container` einer Auswahl hinzuzufügen:

```js
selection.attr("class", "container");
```

Beachte, dass der `class`-Parameter gleich bleiben wird, wenn du eine Klasse hinzufügen musst und nur der `container`-Parameter wird sich ändern.

# --instructions--

Füge die `attr()`-Methode zu dem Code im Editor hinzu und setze die Klasse von `bar` auf die `div`-Elemente.

# --hints--

Deine `div`-Elemente sollten eine Klasse von `bar` haben.

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

Dein Code sollte die `attr()`-Methode verwenden.

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
