---
id: 587d7b7b367417b2b2512b16
title: Criar arrays multidimensionais complexos
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

Excelente! Você acabou de aprender muito sobre arrays! Esta foi uma visão geral de nível bastante elevado, e há muito mais a aprender para trabalhar com arrays. Muitas dessas questões você verá em sessões posteriores. Mas antes de passarmos a examinar os <dfn>objetos</dfn>, vamos dar mais uma olhada e ver como os arrays podem se tornar um pouco mais complexos do que aquilo que vimos nos desafios anteriores.

Uma das características mais poderosas ao pensar em arrays como estruturas de dados é que arrays podem conter, ou mesmo ser completamente compostos por outros arrays. Vimos arrays que contêm arrays em desafios anteriores, mas que são bastante simples. No entanto, os arrays podem conter uma profundidade infinita de arrays que podem conter outros arrays, cada um com seus próprios níveis arbitrários de profundidade, e assim por diante. Desta forma, um array pode muito rapidamente se tornar uma estrutura de dados muito complexa, conhecida como <dfn>array multidimensional</dfn> ou array aninhado. Considere o seguinte exemplo:

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

O array `deep` está aninhado com 2 níveis de profundidade. Os arrays `deeper` têm 3 níveis de profundidade. Os arrays `deepest` têm 4 níveis, e os `deepest-est?` têm 5 níveis.

Embora este exemplo possa parecer complicado, este nível de complexidade não é inédito, ou ainda fora do normal, em se tratando de grandes quantidades de dados. Entretanto, nós ainda podemos facilmente acessar os níveis mais profundos de um array complexo com a notação de colchetes:

```js
console.log(nestedArray[2][1][0][0][0]);
```

Isso exibe no console a string `deepest-est?`. Agora que sabemos onde esse pedaço de dado está, nós podemos redefini-lo se precisarmos:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

Agora, ele mostra no console `deeper still`.

# --instructions--

Definimos uma variável, `myNestedArray`, definida igual a um array. Modifique `myNestedArray`, usando qualquer combinação de <dfn>strings</dfn>, <dfn>numbers</dfn>, e <dfn>booleans</dfn> para elementos, para que tenha 5 níveis de profundidade (lembre-se: o array mais extremo é de nível 1). Em algum lugar no terceiro nível, inclua a string `deep`, no quarto nível, inclua a string `deeper`, e no quinto nível, inclua a string `deepest`.

# --hints--

`myNestedArray` deve conter apenas números, booleans e strings como elementos

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` deve ter exatamente 5 níveis de profundidade

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` deve conter exatamente uma ocorrência da string `deep` no array aninhado de 3 níveis de profundidade

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` deve conter exatamente uma ocorrência da string `deeper` no array aninhado de 4 níveis de profundidade

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` deve conter exatamente uma ocorrência da string `deepest` no array aninhado de 5 níveis de profundidade

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
