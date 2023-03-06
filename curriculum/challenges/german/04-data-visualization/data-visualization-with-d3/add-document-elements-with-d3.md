---
id: 587d7fa6367417b2b2512bc2
title: Dokumentelemente mit D3 hinzufügen
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 verfügt über mehrere Methoden, mit denen du Elemente in deinem Dokument hinzufügen und ändern kannst.

Die `select()`-Methode wählt ein Element aus dem Dokument aus. Sie nimmt ein Argument für den Namen des gewünschten Elements entgegen und gibt einen HTML-Knoten für das erste Element im Dokument zurück, das dem Namen entspricht. Hier ist ein Beispiel:

```js
const anchor = d3.select("a");
```

Im obigen Beispiel wird das erste Anker-Tag auf der Seite gefunden und ein HTML-Knoten für dieses in der Variable `anchor` gespeichert. Du kannst die Auswahl mit anderen Methoden verwenden. The `d3` part of the example is a reference to the D3 object, which is how you access D3 methods.

Zwei weitere nützliche Methoden sind `append()` und `text()`.

Die `append()`-Methode akzeptiert das Element, welches du dem Dokument hinzufügen möchtest, als Argument. Es fügt einen HTML-Knoten einem bestimmten Element hinzu und gibt ein Handle zu diesem Knoten zurück.

Die `text()`-Methode legt entweder den Text des ausgewählten Knotens fest oder ruft den aktuellen Text ab. To set the value, you pass a string as an argument inside the parentheses of the method.

Hier ist ein Beispiel, das eine ungeordnete Liste auswählt, ein Listenelement anhängt und Text hinzufügt:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

Mit D3 kannst du mithilfe von Punkten mehrere Methoden „verketten“, um verschiedene Aktionen hintereinander auszuführen.

# --instructions--

Verwende die `select`-Methode, um das `body`-Tag im Dokument auszuwählen. Then `append` an `h1` tag to it, and add the text `Learning D3` into the `h1` element.

# --hints--

Der `body` sollte über ein `h1`-Element verfügen.

```js
assert($('body').children('h1').length == 1);
```

Das `h1`-Element sollte den Text `Learning D3` enthalten.

```js
assert($('h1').text() == 'Learning D3');
```

Dein Code sollte auf das `d3`-Objekt zugreifen.

```js
assert(code.match(/d3/g));
```

Dein Code sollte die `select`-Methode verwenden.

```js
assert(code.match(/\.select/g));
```

Dein Code sollte die `append`-Methode verwenden.

```js
assert(code.match(/\.append/g));
```

Dein Code sollte die `text`-Methode verwenden.

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
