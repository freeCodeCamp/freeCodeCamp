---
id: 587d7db6367417b2b2512b99
title: Finde Zeichen, die ein oder mehrere Male vorkommen
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

Manchmal musst du ein Zeichen (oder eine Gruppe von Zeichen) finden, das ein oder mehrere Male hintereinander auftaucht. Das bedeutet, dass es mindestens einmal vorkommt und wiederholt werden kann.

Du kannst das Zeichen `+` verwenden, um zu überprüfen, ob das der Fall ist. Denke daran, dass das Zeichen oder Muster fortlaufend vorhanden sein muss. Das heißt, das Zeichen muss nacheinander wiederholt werden.

Zum Beispiel würde `/a+/g` eine Übereinstimmung in `abc` finden und `["a"]` zurückgeben. Aufgrund des `+` würde es auch eine einzelne Übereinstimmung in `aabc` finden und `["aa"]` zurückgeben.

Wenn er stattdessen den String `abab` prüfen würde, würde es zwei Übereinstimmungen finden und `["a", "a"]` zurückgeben, weil die `a` Zeichen nicht in einer Reihe stehen - zwischen ihnen befindet sich ein `b`. Da in dem String `bcd` kein `a` vorkommt, würde er keine Übereinstimmung finden.

# --instructions--

Du willst Übereinstimmungen finden, wenn der Buchstabe `s` ein oder mehrere Male in `Mississippi` vorkommt. Schreibe einen regulären Ausdruck, der das Zeichen `+` verwendet.

# --hints--

Dein regulärer Ausdruck `myRegex` sollte das Zeichen `+` verwenden, um ein oder mehrere `s`-Zeichen zu finden.

```js
assert(/\+/.test(myRegex.source));
```

Dein regulärer Ausdruck `myRegex` sollte 2 Elemente finden.

```js
assert(result.length == 2);
```

Die Variable `result` sollte ein Array mit zwei Übereinstimmungen von `ss` sein

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
