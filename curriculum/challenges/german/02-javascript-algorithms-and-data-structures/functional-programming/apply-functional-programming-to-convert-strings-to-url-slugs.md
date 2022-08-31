---
id: 587d7dab367417b2b2512b6d
title: Verwende funktionale Programmierung, um Strings in URL-Slugs umzuwandeln
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Die letzten verschiedenen Herausforderungen haben eine Reihe nützlicher Array- und String-Methoden vorgestellt, die funktionalen Programmiergrundsätzen folgen. Wir haben auch über `reduce` gelernt, eine leistungsstarke Methode, um Probleme auf einfachere Formen zu reduzieren. Von der Berechnung von Durchschnittswerten bis zur Sortierung kann jede Array-Operation damit durchgeführt werden. Denke daran, dass `map` und `filter` Sonderfälle von `reduce` sind.

Lass uns zusammenfassen, was wir gelernt haben, um ein praktisches Problem zu lösen.

Bei vielen Content-Management-Sites (CMS) wird der Titel eines Beitrags zu einem Teil der URL hinzugefügt, um ein einfaches Bookmarking zu ermöglichen. Wenn du zum Beispiel einen Medium-Beitrag mit dem Titel `Stop Using Reduce` schreibst, ist es wahrscheinlich, dass die URL eine gewisse Form des Titel-Strings enthält (`.../stop-using-reduce`). Du hast das vielleicht schon auf der FreeCodeCamp-Seite bemerkt.

# --instructions--

Fülle die Funktion `urlSlug` so aus, dass sie einen String `title` umwandelt und die Version mit Bindestrich für die URL zurückgibt. Du kannst jede der Methoden verwenden, die in diesem Abschnitt behandelt werden und musst nicht `replace` verwenden. Hier sind die Anforderungen:

Die Eingabe ist ein String mit Leerzeichen und Wörtern in Großbuchstaben

Die Ausgabe ist ein String, bei der die Leerzeichen zwischen den Wörtern durch einen Bindestrich (`-`) ersetzt werden.

Die Ausgabe sollte nur Kleinbuchstaben enthalten

Die Ausgabe sollte keine Leerzeichen haben

# --hints--

Dein Code sollte nicht die `replace` Methode für diese Challenge verwenden.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` sollte den String `winter-is-coming` zurückgeben.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` sollte den String `winter-is-coming` zurückgeben.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` sollte den String `a-mind-needs-books-like-a-sword-needs-a-whetstone` zurückgeben.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` sollte den String `hold-the-door` zurückgeben.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
