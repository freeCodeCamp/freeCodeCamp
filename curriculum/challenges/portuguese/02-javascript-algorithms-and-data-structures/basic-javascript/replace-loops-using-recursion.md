---
id: 5cfa3679138e7d9595b9d9d4
title: Substituir laços usando recursão
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

Recursão é o conceito de que uma função pode ser chamada por ela mesma. Para ajudar a entender isso, comece a pensar sobre a seguinte tarefa: multiplique os primeiros `n` elementos de um array para criar o produto desses elementos. Usando um laço `for`, você poderia fazer isso:

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

No entanto, note que `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Isso significa que você pode reescrever `multiply` dentro da própria função e nunca precisar usar um laço.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

A versão recursiva de `multiply` fica dessa forma. No <dfn>caso de base</dfn>, onde `n <= 0`, ele retorna 1. Para valores maiores de `n`, a função chama a si mesma, mas com `n - 1`. Essa chamada da função é avaliada da mesma forma, chamando `multiply` novamente até que `n <= 0`. Nesse ponto, todas as funções podem retornar e a função `multiply` original retorna a resposta.

**Observação:** funções recursivas precisam ter um caso de base quando elas retornam sem chamar a função novamente (nesse exemplo, quando `n <= 0`), caso contrário, elas nunca vão parar de executar.

# --instructions--

Escreva uma função recursiva, `sum(arr, n)`, que retorna a soma dos primeiros `n` elementos de um array `arr`.

# --hints--

`sum([1], 0)` deve ser igual a 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` deve ser igual a 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` deve ser igual a 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

O código não deve depender de nenhum laço (`for` ou `while` ou funções de ordem superior como as funções `forEach`, `map`, `filter` ou `reduce`.).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Você deve usar recursão para resolver o problema.

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
