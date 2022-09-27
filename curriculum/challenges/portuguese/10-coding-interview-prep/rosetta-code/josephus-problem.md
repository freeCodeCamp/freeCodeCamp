---
id: 5a23c84252665b21eecc7ec5
title: O problema de Josephus
challengeType: 1
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

O problema de Josephus é um desafio de matemática com uma descrição macabra: $n$ prisoneiros estão de pé, em círculo, sequencialmente numerados de $0$ a $n-1$.

Um carrasco caminha pelo círculo, começando pelo prisioneiro $0$, removendo cada $k$-ésimo prisioneiro e matando-o.

À medida que o processo avança, o círculo torna-se cada vez menor, até ficar apenas um prisioneiro, que é depois libertado.

Por exemplo, se houver $n=5$ prisioneiros e $k=2$, a ordem em que os prisioneiros são mortos (vamos chamá-la de "sequência de morte") será 1, 3, 0 e 4. O sobrevivente, então, será o nº 2.

Dado qualquer $n, sendo k > 0$, descubra qual prisioneiro será o sobrevivente ao final.

Em um incidente deste tipo, havia 41 prisoneiros e o 3<sup>o</sup> prisioneiro na sequência era morto ($k=3$).

Entre eles, havia um homem inteligente, chamado Josephus, que desvendou o problema, ficou na posição do sobrevivente e viveu para contar a história.

Qual era o número dele?

# --instructions--

Escreva uma função que recebe o número inicial de prisioneiros e `k` como parâmetros, devolvendo o número do prisioneiro que sobrevive.

# --hints--

`josephus` deve ser uma função.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` deve retornar um número.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` deve retornar `28`.

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` deve retornar `2`.

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` deve retornar `8`.

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` deve retornar `1`.

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` deve retornar `1`.

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
