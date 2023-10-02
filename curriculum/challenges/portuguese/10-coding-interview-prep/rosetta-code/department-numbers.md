---
id: 59f40b17e79dbf1ab720ed7a
title: Números dos departamentos
challengeType: 1
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

Existe uma cidade altamente organizada que decidiu atribuir um número a cada um de seus departamentos:

<ul>
  <li>Departamento de polícia</li>
  <li>Departamento de limpeza sanitária</li>
  <li>Departamento dos bombeiros</li>
</ul>

Cada departamento pode ter um número de 1 a 7 (inclusive).

Os três números de departamento devem ser exclusivos (diferentes um do outro) e devem somar, no total, 12.

O chefe de polícia não gosta de números ímpares e quer que o número de seu departamento seja par.

# --instructions--

Escreva um programa que retorne todas as combinações válidas na forma de um array.

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

# --hints--

`combinations` deve ser uma função.

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)` deve retornar um array.

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` deve retornar um array de tamanho 14.

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` deve retornar todas as combinações válidas.

```js
assert.deepEqual(combinations(nums, total), result);
```

# --seed--

## --after-user-code--

```js
const nums = [1, 2, 3, 4, 5, 6, 7];
const total = 12;
const len = 14;
const result = [
  [2, 3, 7],
  [2, 4, 6],
  [2, 6, 4],
  [2, 7, 3],
  [4, 1, 7],
  [4, 2, 6],
  [4, 3, 5],
  [4, 5, 3],
  [4, 6, 2],
  [4, 7, 1],
  [6, 1, 5],
  [6, 2, 4],
  [6, 4, 2],
  [6, 5, 1]
];
```

## --seed-contents--

```js
function combinations(possibleNumbers, total) {

  return true;
}
```

# --solutions--

```js
function combinations(possibleNumbers, total) {
  let firstNumber;
  let secondNumber;
  let thridNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thridNumber = total - firstNumber - secondNumber;

          if (thridNumber !== firstNumber && thridNumber !== secondNumber && possibleNumbers.includes(thridNumber)) {
            allCombinations.push([firstNumber, secondNumber, thridNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
