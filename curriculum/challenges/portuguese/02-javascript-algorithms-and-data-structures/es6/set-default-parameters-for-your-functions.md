---
id: 587d7b88367417b2b2512b46
title: Definir um valor padrão para o parâmetro de uma função
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

Para nos ajudar a criar funções mais flexíveis, a versão ES6 introduziu os <dfn>parâmetros padrão</dfn> para funções.

Confira este código:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

O console exibirá as strings `Hello John` e `Hello Anonymous`.

O parâmetro padrão é usado quando o argumento não é especificado (ele não é definido). Como você pode ver no exemplo acima, o parâmetro `name` receberá o valor padrão `Anonymous` quando você não fornecer um valor para o parâmetro. Você pode adicionar valores padrão para quantos parâmetros quiser.

# --instructions--

Modifique a função `increment` adicionando parâmetros padrão para que ela adicione 1 à variável `number` se o parâmetro `value` não for especificado.

# --hints--

O resultado de `increment(5, 2)` deve ser `7`.

```js
assert(increment(5, 2) === 7);
```

O resultado de `increment(5)` deve ser `6`.

```js
assert(increment(5) === 6);
```

O parâmetro padrão (`value`) deve receber o valor `1`.

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
