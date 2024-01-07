---
id: bd7123c9c448eddfaeb5bdef
title: Ermitteln der Länge eines Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Du kannst die Länge eines `String`-Wertes ermitteln, indem du `.length` hinter die String-Variable oder das String-Literal schreibst.

```js
console.log("Alan Peter".length);
```

Der Wert `10` würde in der Konsole angezeigt werden. Beachte, dass auch das Leerzeichen zwischen "Alan" und "Peter" gezählt wird.

Wenn wir zum Beispiel eine Variable `const firstName = "Ada"` erstellen, können wir mit der Eigenschaft `firstName.length` herausfinden, wie lang der String `Ada` ist.

# --instructions--

Benutze die `.length`-Eigenschaft, um `lastNameLength` auf die Anzahl der Zeichen in `lastName` zu setzen.

# --hints--

Du solltest die Variablendeklarationen im Abschnitt `// Setup` nicht ändern.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` sollte gleich acht sein.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Du solltest die Länge von `lastName` erhalten, indem du `.length` wie folgt benutzt: `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
