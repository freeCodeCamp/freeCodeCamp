---
id: 587d7b8a367417b2b2512b4e
title: Strings mit Template-Literalen erstellen
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Eine neue Funktion von ES6 ist das <dfn>Template-Literal</dfn>. Dies ist eine besondere Art von String, die das Erstellen komplexer Strings erleichtert.

Mit Template-Literalen kannst du mehrzeilige Strings erstellen und String-Interpolationsfunktionen verwenden, um Strings zu erstellen.

Schau dir den folgenden Code an:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

Die Konsole zeigt die Strings `Hello, my name is Zodiac Hasbro!` und `I am 56 years old.` an.

Dort sind eine Menge Dinge passiert. Erstens verwendet das Beispiel Backticks (`` ` ``) und keine Anführungszeichen (`'` oder `"`), um den String einzuschließen. Zweitens: Beachte, dass der String mehrzeilig ist, sowohl im Code als auch in der Ausgabe. Das erspart das Einfügen von `\n` innerhalb von Strings. Die oben verwendete Syntax `${variable}` ist ein Platzhalter. Im Grunde musst du die Verkettung mit dem Operator `+` nicht mehr verwenden. Um Variablen zu Strings hinzuzufügen, fügst du die Variable einfach in einen Template-String ein und umschließt sie mit `${` und `}`. Du kannst auch andere Ausdrücke in dein Stringliteral einfügen, zum Beispiel `${a + b}`. Diese neue Art, Strings zu erstellen, gibt dir mehr Flexibilität, um robuste Strings zu erstellen.

# --instructions--

Verwende die Template-Literal-Syntax mit Backticks, um ein Array aus Listenelementen (`li`) zu erstellen. Der Text jedes Listenelements sollte eines der Array-Elemente aus der `failure`-Eigenschaft des Objekts `result` sein und ein `class`-Attribut mit dem Wert `text-warning` haben. Die Funktion `makeList` sollte das Array mit den Strings der Listenelemente zurückgeben.

Verwende eine Iterationsmethode (jede Art von Schleife), um die gewünschte Ausgabe zu erhalten (siehe unten).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` sollte ein Array sein, das `result failure` Meldungen enthält.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` sollte gleich der angegebenen Ausgabe sein.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Es sollten Template-Strings und die Interpolation von Ausdrücken verwendet werden.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Es sollte ein Iterator verwendet werden.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
