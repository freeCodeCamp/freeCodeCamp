---
id: 587d7b7b367417b2b2512b16
title: Creare array multi-dimensionali complessi
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

Ottimo! Hai appena imparato un sacco di cose sugli array! Questa è stata una panoramica di livello abbastanza alto, e c'è ancora molto da imparare per lavorare con gli array, come potrai vedere nelle prossime sezioni. Ma prima di passare a studiare gli <dfn>oggetti</dfn>, diamo un'altra occhiata e vediamo come gli array possono diventare un po' più complessi di quello che abbiamo visto nelle sfide precedenti.

Una delle caratteristiche più potenti quando si pensa agli array come strutture di dati, è che gli array possono contenere, o anche essere completamente costituiti da altri array. Abbiamo visto array che contengono altri array nelle sfide precedenti, ma erano abbastanza semplici. Tuttavia, gli array possono contenere una profondità infinita di array che possono contenere altri array, ciascuno con i propri livelli arbitrari di profondità, e così via. In questo modo, un array può diventare in fretta una struttura dati molto complessa, nota come <dfn>multi-dimensionale</dfn>, o array annidato. Considera l'esempio seguente:

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

L'array `deep` è annidato al secondo livello di profondità. Gli array `deeper` sono al terzo livello di profondità. Gli array `deepest` al quarto livello, e il `deepest-est?` è al quinto.

Anche se questo esempio può sembrare contorto, questo livello di complessità non è inaudito, e nemmeno insolito, quando si tratta di grandi quantità di dati. Tuttavia, possiamo ancora accedere molto facilmente ai livelli più profondi di un array così complesso con la notazione tra parentesi:

```js
console.log(nestedArray[2][1][0][0][0]);
```

Questo mostra nella console la stringa `deepest-est?`. E ora che sappiamo dove sono i dati, possiamo reimpostarli se ne abbiamo bisogno:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

Ora verrà scritto `deeper still`.

# --instructions--

Abbiamo definito una variabile, `myNestedArray`, impostata su un array. Modifica `myNestedArray`, utilizzando qualsiasi combinazione di <dfn>stringhe</dfn>, <dfn>numeri</dfn>, e <dfn>booleani</dfn> per gli elementi di dati, in modo che abbia esattamente cinque livelli di profondità (ricorda, l'array più esterno è il livello 1). Da qualche parte al terzo livello, includi la stringa `deep`, al quarto livello includi la stringa `deeper`e al quinto livello includi la stringa `deepest`.

# --hints--

`myNestedArray` dovrebbe contenere solo numeri, booleani e stringhe come elementi

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

`myNestedArray` dovrebbe avere esattamente 5 livelli di profondità

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

`myNestedArray` dovrebbe contenere esattamente una occorrenza della stringa `deep` in un array annidato al terzo livello di profondità

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

`myNestedArray` dovrebbe contenere esattamente una occorrenza della stringa `deeper` in un array annidato al quarto livello di profondità

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

`myNestedArray` dovrebbe contenere esattamente una occorrenza della stringa `deepest` in un array annidato al quinto livello di profondità

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
