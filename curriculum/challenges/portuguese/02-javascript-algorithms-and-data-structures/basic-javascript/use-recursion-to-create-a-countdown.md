---
id: 5cd9a70215d3c4e65518328f
title: Use Recursividade para Criar uma Contagem Regressiva
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

Em um [desafio anterior](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), você aprendeu como usar recursividade para substituir laços `for`. Agora, vamos analisar uma função mais complexa, a qual retorna um array de inteiros consecutivos começando com `1` até o número passado para a função.

Como mencionado no desafio anterior, haverá um <dfn>caso base</dfn>. O caso base diz a função recursiva quando ela não precisa mais chamar a si. É um simples caso onde o valor de retorno já é conhecido. Também haverá uma <dfn>chamada recursiva</dfn> a qual executa a função original com argumentos diferentes. Se a função for escrita corretamente, eventualmente o caso base será alcançado.

Por exemplo, vamos dizer que você quer escrever uma função recursiva que retorna um array contendo os números de `1` até `n`. Essa função precisará aceitar um argumento, `n`, representando o número final. Então ela precisará chamar a si mesmo como valores progressivamente menores de `n` até que alcance `1`. Você poderia escrever a função da seguinte forma:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

O valor `[1, 2, 3, 4, 5]` será exibido no console.

Inicialmente, isso se parece contra-intuitivo já que o valor de `n` *diminui*, mas os valores no array final estão *em ordem crescente*. Isso acontece porque a adição no array (push) acontece por último, após a chamada recursiva ter retornado. No ponto onde `n` é adicionado ao array, `countup(n - 1)` já foi avaliado e retornou `[1, 2, ..., n -1]`.

# --instructions--

Definimos uma função chamada `countdown` com um parâmetro (`n`). A função deve usar recursividade para retornar um array contendo inteiros `n` até `1` baseado no parâmetro `n`. Se a função é chamada com um número menor que 1, a função deve retornar um array vazio. Por exemplo, chamando essa função com `n = 5` deve retornar o array `[5, 4, 3, 2, 1]`. Sua função precisa usar recursividade ao chamar ela mesma e não deve usar laços de qualquer tipo.

# --hints--

`countdown(-1)` deve retornar um array vazio.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` deve retornar `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` deve retornar `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Seu código não deve depender de nenhum tipo de laço (`for`, `while` ou outras funções superiores como `forEach`, `map`, `filter` e `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Você deve usar recursividade para resolver esse problema.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
