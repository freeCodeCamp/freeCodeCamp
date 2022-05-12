---
id: bd7123c9c448eddfaeb5bdef
title: Trovare la lunghezza di una stringa
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Puoi trovare la lunghezza di un valore `String` scrivendo `.length` dopo la variabile stringa o il stringa letterale.

```js
console.log("Alan Peter".length);
```

Il valore `10` sarà visualizzato nella console. Nota che è contato anche il carattere spazio tra "Alan" e "Peter".

Ad esempio, se avessimo creato una variabile `const firstName = "Ada"`, potremmo scoprire quanto è lunga la stringa `Ada` utilizzando la proprietà `firstName.length`.

# --instructions--

Usa la proprietà `.length` per dare a `lastNameLength` un valore pari al numero di caratteri in `lastName`.

# --hints--

Non dovresti cambiare le dichiarazioni della variabile nella sezione `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` dovrebbe essere uguale a 8.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Dovresti ottenere la lunghezza di `lastName` utilizzando `.length` in questo modo: `lastName.length`.

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
