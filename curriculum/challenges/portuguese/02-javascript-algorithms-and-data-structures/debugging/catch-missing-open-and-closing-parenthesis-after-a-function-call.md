---
id: 587d7b85367417b2b2512b39
title: Capturar abertura e fechamento de parênteses faltantes após uma chamada de função
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Quando uma função ou método não recebe nenhum parâmetro, você pode esquecer de incluir a abertura e fechamento de parênteses (vazio) ao chamá-la. Frequentemente, o resultado de uma chamada de função é salva em uma variável para outro uso em seu código. Esse erro pode ser detectado ao exibir no console os valores das variáveis (ou seus tipos) e verificar que uma variável está definida para uma referência de uma função, ao invés do valor esperado que a função retorna.

As variáveis no seguinte exemplo são diferentes:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

Aqui `varOne` é a função `myFunction` e `varTwo` é a string `You rock!`.

# --instructions--

Corrija o código para que a variável `result` seja definida para o valor retornado da chamada da função `getNine`.

# --hints--

O código deve corrigir a variável `result` para que seja definida para o número que a função `getNine` retorna.

```js
assert(result == 9);
```

O código deve chamar a função `getNine`.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
