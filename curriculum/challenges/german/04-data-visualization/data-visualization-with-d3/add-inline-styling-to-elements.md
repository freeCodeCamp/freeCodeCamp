---
id: 587d7fa7367417b2b2512bc6
title: Füge eine Inline-Gestaltung zu den Elementen hinzu
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 erlaubt es dir, Inline-CSS-Styles bei dynamischen Elementen mit der `style()`-Methode hinzuzufügen.

Die `style()`-Methode verwendet dafür ein durch Komma getrenntes Key-Value-Paar als Argument. Hier ist ein Beispiel, um die Textfarbe der Auswahl auf blau zu setzen:

```js
selection.style("color","blue");
```

# --instructions--

Füge die `style()`-Methode dem Code im Editor hinzu, damit der angezeigte Text eine `font-family` von `verdana` hat.

# --hints--

Deine `h2`-Elemente sollten eine `font-family` von `verdana` haben.

```js
assert($('h2').css('font-family') == 'verdana');
```

Dein Code sollte die `style()` Methode verwenden.

```js
assert(code.match(/\.style/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```
