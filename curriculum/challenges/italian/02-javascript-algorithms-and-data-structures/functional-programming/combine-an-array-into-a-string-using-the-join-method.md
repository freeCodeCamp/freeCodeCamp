---
id: 587d7daa367417b2b2512b6c
title: Combinare un array in una stringa usando il metodo join
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

Il metodo `join` viene utilizzato per unire gli elementi di un array per creare una stringa. Prende un argomento che sarà il delimitatore che viene utilizzato per separare gli elementi dell'array nella stringa.

Ecco un esempio:

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` conterrà la stringa `Hello World`.
# --instructions--

Usa il metodo `join` (tra gli altri) all'interno della funzione `sentensify` per creare una frase a partire dalle parole contenute nella stringa `str`. La funzione dovrebbe restituire una stringa. Ad esempio, `I-like-Star-Wars` sarebbe stato convertito in `I like Star Wars`. Per questa sfida, non utilizzare il metodo `replace`.

# --hints--

Il tuo codice dovrebbe utilizzare il metodo `join`.

```js
assert(code.match(/\.join/g));
```

Il tuo codice non dovrebbe usare il metodo `replace`.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` dovrebbe restituire una stringa.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` dovrebbe restituire la stringa `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` dovrebbe restituire la stringa `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` dovrebbe restituire la stringa `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```
