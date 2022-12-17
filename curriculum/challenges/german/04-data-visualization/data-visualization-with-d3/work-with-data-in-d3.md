---
id: 587d7fa7367417b2b2512bc4
title: Mit Daten in D3 arbeiten
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

Die D3-Bibliothek stützt sich auf einen datenbezogenen Ansatz. Hast du einen Datensatz, kannst du Methoden aus der D3-Bibliothek verwenden, um diesen auf der Seite anzuzeigen. Es gibt verschiedene Datenformate, diese Aufgabe aber behandelt einen einfachen Zahlen-Array.

In einem ersten Schritt weisen wir D3 auf die Daten hin. Die Methode `data()` wird auf eine Auswahl von DOM-Elementen angewendet, um die Daten an diese Elemente anzuhängen. Der Datensatz wird anschließend als Argument an die Methode übergeben.

Ein häufig verwendetes Workflow-Muster ist es, für jeden im Datensatz vorhandenen Eintrag, ein neues Element im Dokument zu erstellen. Hierfür gibt es bei D3 die `enter()`-Methode.

Bei einer Kombination der `enter()`- und der `data()`-Methode werden die gewählten Elemente aus der Seite mit der Anzahl von Dateneinträgen in der Sammlung verglichen. Gibt es weniger Elemente als Dateneinträge, werden die fehlenden Elemente erzeugt.

Hier ist ein Beispiel, das ein `ul`-Element auswählt und einen neuen Dateneintrag anhand der Anzahl der Einträge im Array erstellt:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

Es hört sich womöglich verwirrend an, noch nicht existierende Elemente auszuwählen. Dieser Code weist D3 an, als Erstes den `ul`-Tag der Seite auszuwählen. Als Nächstes werden alle Elemente der Liste ausgewählt, die eine leere Sammlung zurückgeben. Anschließend prüft die `data()`-Methode den Datensatz und führt folgenden Code dreimal aus – einmal für jedes Element im Array. Die `enter()`-Methode benötigt 3 Elemente – je eines für jeden Eintrag von `dataset` – bemerkt aber, dass keine `li`-Elemente auf der Seite existieren. Neue `li`-Elemente werden an `ul` angehängt und sind durch den Text `New item` gekennzeichnet.

# --instructions--

Wähle den `body`-Knoten aus, dann alle `h2`-Elemente. Lass' D3 für jedes Element im `dataset`-Array einen neuen `h2`-Tag erstellen und anhängen. Der Text innerhalb von `h2` sollte `New Title` sein. Dein Code sollte Gebrauch von der `data()`- und `enter()`-Methode machen.

# --hints--

In deinem Dokument sollten 9 `h2`-Elemente vorkommen.

```js
assert($('h2').length == 9);
```

Der Text innerhalb des `h2`-Elements sollte `New Title` sein. Achte hierbei auf Groß- und Kleinschreibung und Abstände – diese müssen exakt übereinstimmen.

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

Dein Code sollte von der `data()`-Methode Gebrauch machen.

```js
assert(code.match(/\.data/g));
```

Dein Code sollte von der `enter()`-Methode Gebrauch machen.

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
