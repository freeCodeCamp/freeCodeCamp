---
id: a3f503de51cfab748ff001aa
title: De par em par
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

Dado um array `arr`, encontre pares de elementos cuja soma seja igual ao segundo argumento `arg` e retorne a soma de seus índices.

Você pode usar vários pares que tenham os mesmos elementos numéricos, mas com índices diferentes. Cada par deve utilizar os menores índices disponíveis. Quando um elemento tiver sido usado, ele não pode ser reutilizado para fazer par com outro elemento. Por exemplo, `pairwise([1, 1, 2], 3)` cria um par `[2, 1]` usando o 1 no índice 0 ao invés do 1 no índice 1, porque 0+2 &lt; 1+2.

Um outro exemplo: `pairwise([7, 9, 11, 13, 15], 20)` retorna `6`. Os pares que somam 20 são `[7, 13]` e `[9, 11]`. Em seguida, podemos escrever o array com seus índices e valores.

<div style='margin-left: 2em;'>

| Índice | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| Valor | 7 | 9 | 11 | 13 | 15 |

</div>

Abaixo, pegaremos os respectivos índices e os somaremos.

<div style='margin-left: 2em;'>

7 + 13 = 20 → Índices 0 + 3 = 3  
9 + 11 = 20 → Índices 1 + 2 = 3  
3 + 3 = 6 → Retorna `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` deve retornar 11.

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` deve retornar 1.

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` deve retornar 1.

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` deve retornar 10.

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` deve retornar 0.

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
