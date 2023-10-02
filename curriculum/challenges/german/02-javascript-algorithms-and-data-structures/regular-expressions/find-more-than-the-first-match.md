---
id: 587d7db4367417b2b2512b93
title: Finde mehr als nur den ersten Treffer
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

Bis jetzt konntest du ein Muster nur einmal extrahieren oder suchen.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Hier würde `match` `["Repeat"]` zurückgeben.

Um ein Muster mehr als einmal zu suchen oder zu extrahieren, kannst du das globale Search-Flag verwenden: `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

Und hier liefert `match` den Wert `["Repeat", "Repeat", "Repeat"]`

# --instructions--

Finde mit dem Regex `starRegex` die beiden Wörter `Twinkle` und extrahiere sie aus dem String `twinkleStar`.

**Hinweis**  
Du kannst mehrere Flags in deinem Regex benutzen, wie `/search/gi`

# --hints--

Dein Regex `starRegex` sollte den globalen Flag `g` verwenden

```js
assert(starRegex.flags.match(/g/).length == 1);
```

Dein Regex `starRegex` sollte den Flag `i` zur Unterscheidung von Groß- und Kleinschreibung verwenden

```js
assert(starRegex.flags.match(/i/).length == 1);
```

Dein Treffer sollte mit beiden Vorkommen des Wortes `Twinkle` übereinstimmen

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

Dein Treffer `result` sollte zwei Elemente enthalten.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
