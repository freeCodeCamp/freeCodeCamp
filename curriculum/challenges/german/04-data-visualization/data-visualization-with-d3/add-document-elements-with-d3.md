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

The above example finds the first anchor tag on the page and saves an HTML node for it in the variable `anchor`. Du kannst die Auswahl mit anderen Methoden verwenden. The `d3` part of the example is a reference to the D3 object, which is how you access D3 methods.

Two other useful methods are `append()` and `text()`.

The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

Die `text()`-Methode legt entweder den Text des ausgewählten Knotens fest oder ruft den aktuellen Text ab. To set the value, you pass a string as an argument inside the parentheses of the method.

Hier ist ein Beispiel, das eine ungeordnete Liste auswählt, ein Listenelement anhängt und Text hinzufügt:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 allows you to chain several methods together with periods to perform a number of actions in a row.

# --instructions--

Use the `select` method to select the `body` tag in the document. Then `append` an `h1` tag to it, and add the text `Learning D3` into the `h1` element.

# --hints--

The `body` should have one `h1` element.

```js
assert($('body').children('h1').length == 1);
```

The `h1` element should have the text `Learning D3` in it.

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
