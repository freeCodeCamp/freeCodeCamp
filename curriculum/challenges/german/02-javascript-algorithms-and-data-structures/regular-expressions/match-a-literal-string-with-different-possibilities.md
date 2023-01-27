---
id: 587d7db4367417b2b2512b90
title: Einen literalen String mit verschiedenen Möglichkeiten abgleichen
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

Mit Regexen wie `/coding/` kannst du nach dem Muster `coding` in einem anderen String suchen.

Diese Funktion ist leistungsstark, um einzelne Strings zu suchen, aber sie ist auf ein einziges Muster beschränkt. Du kannst nach mehreren Mustern suchen, indem du den Operator `alternation` oder `OR` verwendest: `|`.

Dieser Operator gleicht Muster vor oder nach ihm ab. Wenn du zum Beispiel die Strings `yes` oder `no` abgleichen willst, lautet der Regex, den du brauchst `/yes|no/`.

Du kannst auch nach mehr als zwei Mustern suchen. Du kannst dies tun, indem du mehr Muster mit mehr `OR`-Operatoren zwischen ihnen hinzufügst, wie `/yes|no|maybe/`.

# --instructions--

Ergänze den Regex `petRegex`, um die Haustiere `dog`, `cat`, `bird` oder `fish` zu finden.

# --hints--

Dein Regex `petRegex` sollte `true` für folgenden String liefern `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

Deine Regex `petRegex` sollte `false` für folgenden String liefern `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

Dein Regex `petRegex` sollte `true` für folgenden String liefern `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

Dein Regex `petRegex` sollte `true` für folgenden String liefern `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

Dein Regex `petRegex` sollte `false` für folgenden String liefern `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

Dein Regex `petRegex` sollte `true` für folgenden String liefern `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

Dein Regex `petRegex` sollte `false` für folgenden String liefern `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
