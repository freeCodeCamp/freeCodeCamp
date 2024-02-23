---
id: 587d7b7b367417b2b2512b15
title: Iterare attraverso tutti gli oggetti di un array utilizzando i cicli for
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

A volte, quando si lavora con gli array, è molto utile essere in grado di iterare attraverso ogni elemento per trovare uno o più elementi di cui potremmo aver bisogno, o per manipolare un array basandoci sugli elementi che soddisfano una determinata serie di criteri. JavaScript offre diversi metodi integrati, ognuno dei quali itera sugli array in modo leggermente differente dagli altri per ottenere risultati diversi (come `every()`, `forEach()`, `map()`, etc.), tuttavia la tecnica più flessibile e che ci offre la massima quantità di controllo è un semplice ciclo `for`.

Considera quanto segue:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

Utilizzando un ciclo `for`, questa funzione itera attraverso ogni elemento dell'array, vi accede e lo sottopone a un semplice test che abbiamo creato. In questo modo, abbiamo determinato facilmente e in maniera schematica quali dati sono maggiori di `10`, e abbiamo restituito un nuovo array, `[12, 14, 80]`, contenente questi elementi.

# --instructions--

Abbiamo definito una funzione, `filteredArray`, che richiede come argomenti `arr`, un array annidato, e `elem` e restituisce un nuovo array. `elem` rappresenta un elemento che potrebbe oppure no essere presente in uno o più degli array annidati dentro `arr`. Modifica la funzione usando un ciclo `for` per restituire una versione filtrata dell'array passato, in modo che qualsiasi array annidato all'interno di `arr` contenente `elem` venga rimosso.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` dovrebbe restituire `[[10, 8, 3], [14, 6, 23]]`

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` dovrebbe restituire `[["flutes", 4]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` dovrebbe restituire `[["amy", "beth", "sam"]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` dovrebbe restituire `[]`

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

La funzione `filteredArray` dovrebbe utilizzare un ciclo `for`

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
