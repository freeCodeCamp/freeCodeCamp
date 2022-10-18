---
id: 587d7b7b367417b2b2512b15
title: Iterar através de todos os itens de um array usando laços for
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

Às vezes quando trabalhando com arrays, é muito útil ser capaz de iterar sobre cada item para encontrar um ou mais elementos que podemos precisar, ou para manipular o array baseado em qual item de dados atende a determinados critérios. JavaScript oferece diversos métodos integrados que fazem iteração sobre arrays de formas ligeiramente diferentes para alcançar resultados diferentes (como `every()`, `forEach()`, `map()`, entre outros). Porém, a técnica mais flexível e que nos oferece a maior capacidade de controle é o laço `for` simples.

Considere o seguinte:

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

Usando o laço `for`, essa função itera o array, acessa cada elemento do array e submete-o a um teste simples que nós criamos. Dessa forma, nós determinamos de forma fácil e programática qual item é maior que `10`, e retornamos um novo array, `[12, 14, 80]`, contendo esses itens.

# --instructions--

Definimos uma função, `filteredArray`, a qual recebe `arr`, um array aninhado, e `elem` como argumentos, e retornamos um novo array. `elem` representa um elemento que pode ou não estar presente em um ou mais dos arrays aninhados dentro de `arr`. Modifique a função, usando o laço `for`, para retornar uma versão filtrada do array recebido de modo que qualquer array aninhado dentro de `arr` e contendo `elem` seja removido.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` deve retornar `[[10, 8, 3], [14, 6, 23]]`

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

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` deve retornar `[["flutes", 4]]`

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

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` deve retornar `[["amy", "beth", "sam"]]`

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

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` deve retornar `[]`

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

A função `filteredArray` deve usar o laço `for`

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
