---
id: 587d7b8a367417b2b2512b4e
title: Creare stringhe usando i modelli letterali
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Una nuova caratteristica di ES6 è il <dfn>modello letterale</dfn>. Questo è un tipo speciale di stringa che facilita la creazione di stringhe complesse.

I modelli letterali consentono di creare stringhe multi-linea e di utilizzare le funzioni di interpolazione di stringhe per crearne altre.

Considera il codice qui sotto:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

La console mostrerà le stringhe `Hello, my name is Zodiac Hasbro!` e `I am 56 years old.`.

Sono accadute un sacco di cose qui! In primo luogo, l'esempio utilizza l'apice inverso, detto backtick (`` ` ``), non le virgolette (`'` o `"`), per racchiudere la stringa. In secondo luogo, nota che la stringa è multi-riga, sia nel codice che nell'output. Questo ci risparmia l'inserimento di `\n` all'interno delle stringhe. La sintassi `${variable}` utilizzata sopra è un segnaposto. Fondamentalmente, non dovrai più usare la concatenazione con l'operatore `+`. Per aggiungere variabili alle stringhe, basta mettere la variabile in una stringa modello e avvolgerla con `${` e `}`. Allo stesso modo, puoi includere altre espressioni nella tua stringa letterale, ad esempio `${a + b}`. Questo nuovo modo di creare stringhe ti dà più flessibilità per creare stringhe affidabili.

# --instructions--

Usa la sintassi dei modelli letterali con l'apice inverso per creare un array di stringhe di elementi di lista (`li`). Il testo di ogni elemento della lista dovrebbe essere uno degli elementi dell'array dalla proprietà `failure` dell'oggetto `result` e avere un attributo `class` con il valore `text-warning`. La funzione `makeList` dovrebbe restituire l'array delle stringhe degli elementi della lista.

Utilizza un metodo iteratore (qualsiasi tipo di ciclo) per ottenere l'output desiderato (mostrato di seguito).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` dovrebbe essere un array contenente messaggi `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` dovrebbe essere uguale all'output specificato.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Dovresti usare modelli di stringhe e interpolazione di espressioni.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Dovresti usare un iteratore.

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
