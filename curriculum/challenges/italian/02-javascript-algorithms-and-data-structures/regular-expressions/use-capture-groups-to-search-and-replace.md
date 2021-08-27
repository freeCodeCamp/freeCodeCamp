---
id: 587d7dbb367417b2b2512bab
title: Usare i gruppi di cattura per cercare e sostituire
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

La ricerca è utile. Tuttavia, puoi rendere la ricerca ancora più potente facendole anche cambiare (o sostituire) il testo che corrisponde al pattern.

È possibile cercare e sostituire il testo in una stringa usando `.replace()` su una stringa. Il primo parametro per `.replace()` è il pattern che si desidera cercare, sotto forma di espressione regolare. Il secondo parametro è la stringa con cui sostituire la corrispondenza o una funzione per fare qualcosa.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

La chiamata `replace` restituirà la stringa `The sky is blue.`.

Puoi anche accedere ai gruppi di cattura nella stringa di sostituzione con i segni di dollaro (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

La chiamata a `replace` restituirà la stringa `Camp Code`.

# --instructions--

Scrivi un'espressione regolare `fixRegex` utilizzando tre gruppi di cattura che cercheranno ogni parola nella stringa `one two three`. Quindi aggiorna la variabile `replaceText` per sostituire `one two three` con la stringa `three two one` e assegnare il risultato alla variabile `result`. Assicurati di utilizzare i gruppi di cattura nella stringa di sostituzione utilizzando la sintassi del segno del dollaro (`$`).

# --hints--

Dovresti usare `.replace()` per cercare e sostituire.

```js
assert(code.match(/\.replace\(.*\)/));
```

La tua espressione regolare dovrebbe sostituire la stringa `one two three` con la stringa `three two one`

```js
assert(result === 'three two one');
```

Non dovresti cambiare l'ultima riga.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` dovrebbe usare almeno tre gruppi di cattura.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` dovrebbe usare stringhe di sotto-corrispondenza tra parentesi (cioè l'ennesima stringa sotto-corrispondente, $n, corrisponde all'ennesimo gruppo di acquisizione).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
