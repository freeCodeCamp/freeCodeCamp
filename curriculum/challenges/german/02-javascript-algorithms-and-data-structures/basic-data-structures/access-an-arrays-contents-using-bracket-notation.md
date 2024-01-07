---
id: 5a661e0f1068aca922b3ef17
title: Auf den Inhalt eines Arrays mit der Klammernotation zugreifen
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

Die grundlegende Eigenschaft jeder Datenstruktur ist natürlich die Fähigkeit, nicht nur Daten zu speichern, sondern diese Daten auch auf Befehl abrufen zu können. Nachdem wir nun gelernt haben, wie man ein Array erstellt, wollen wir uns überlegen, wie wir auf die Informationen in diesem Array zugreifen können.

Wenn wir ein einfaches Array wie unten definieren, sind darin 3 Elemente enthalten:

```js
let ourArray = ["a", "b", "c"];
```

In einem Array hat jedes Array-Element einen <dfn>Index</dfn>. Dieser Index verweist zum einen auf die Position des jeweiligen Elements innerhalb des Arrays, zum anderen kann es über ihn referenziert werden. Dabei ist zu beachten, dass JavaScript-Arrays <dfn>nullbasiert indiziert</dfn> sind, d. h. das erste Element eines Arrays befindet sich eigentlich an der ***nullten*** Position, nicht der ersten. Um ein Element aus einem Array abzurufen, können wir einen Index in eckige Klammern schreiben und ihn an das Ende eines Arrays hängen, oder noch häufiger, an eine Variable, die ein Array-Objekt referenziert. Diese Schreibweise nennt man <dfn>Klammernotation</dfn>. Wenn wir beispielsweise das `a` aus `ourArray` abrufen möchten, um es einer Variablen zuzuweisen, können wir das mit folgendem Code tun:

```js
let ourVariable = ourArray[0];
```

Nun enthält `ourVariable` den Wert `a`.

Neben dem Zugreifen auf einen Wert, der mit einem Index assoziiert ist, ermöglicht dir diese Notation auch das *Setzen* eines Wertes über einen Index:

```js
ourArray[1] = "not b anymore";
```

Mit der Klammernotation haben wir nun das Element am Index 1 mit dem String `b` durch `not b anymore` ersetzt. `ourArray` enthält nun `["a", "not b anymore", "c"]`.

# --instructions--

Um diese Aufgabe abzuschließen, setze die zweite Position (Index `1`) von `myArray` auf einen Wert deiner Wahl, ausgenommen dem Buchstaben `b`.

# --hints--

`myArray[0]` sollte gleich dem Buchstaben `a` sein

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` sollte nicht gleich dem Buchstaben `b` sein

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` sollte gleich dem Buchstaben `c` sein

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` sollte gleich dem Buchstaben `d` sein

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
