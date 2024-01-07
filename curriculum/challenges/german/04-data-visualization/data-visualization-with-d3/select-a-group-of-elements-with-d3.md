---
id: 587d7fa6367417b2b2512bc3
title: Eine Elementgruppe mit D3 auswählen
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

D3 verfügt zudem über die `selectAll()`-Methode, um eine Gruppe von Elementen auszuwählen. Sie gibt ein Array mit HTML-Knoten für alle Elemente im Dokument zurück, die zu dem Eingabestring passen. Hier ist ein Beispiel, um alle Anker-Tags in einem Dokument auszuwählen:

```js
const anchors = d3.selectAll("a");
```

Wie die `select()`-Methode unterstützt auch `selectAll()` die Aneinanderreihung von Methoden – du kannst sie gemeinsam mit anderen Methoden verwenden.

# --instructions--

Wähle alle `li`-Tags im Dokument aus und setze deren Text auf `list item`, indem du `.text()` anreihst.

# --hints--

Die Seite sollte über 3 `li`-Elemente verfügen und der Text eines jeden solchen Elements sollte `list item` sein. Die Groß- und Kleinschreibung und die Abstände sollten genau übereinstimmen.

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

Dein Code sollte auf das `d3`-Objekt zugreifen.

```js
assert(code.match(/d3/g));
```

Dein Code sollte die `selectAll`-Methode verwenden.

```js
assert(code.match(/\.selectAll/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item")
  </script>
</body>
```
