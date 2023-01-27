---
id: 587d7b84367417b2b2512b34
title: Usar typeof para verificar o tipo da variável
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

Você pode usar `typeof` para verificar a estrutura de dado, ou tipo, de uma variável. Isso é útil na depuração quando trabalhando com diversos tipos de dados. Se você pensar que está adicionando dois números, mas na verdade um é na verdade uma string, o resultado pode ser inesperado. Erros de tipo podem se esconder em cálculos ou chamada de funções. Seja cuidadoso especialmente quando você estiver acessando e trabalhando com dados externos na forma de um objeto JavaScript Object Notation (JSON).

Aqui está alguns exemplos usando `typeof`:

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

Em ordem, o console exibirá as strings `string`, `number`, `object` e `object`.

JavaScript reconhece sete tipos de dados primitivos (imutáveis): `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` (novo na ES6) e `BigInt` (novo na ES2020), além de um tipo para itens mutáveis: `Object`. Note que em JavaScript, arrays são tecnicamente um tipo de objeto.

# --instructions--

Adicione duas instruções `console.log()` para verificar o `typeof` de cada uma das duas variáveis `seven` e `three` no código.

# --hints--

O código deve usar `typeof` em duas instruções `console.log()` para verificar o tipo das variáveis.

```js
assert(code.match(/console\.log\s*\(typeof[\( ].*\)?\)/g).length == 2);
```

O código deve usar `typeof` para verificar o tipo da variável `seven`.

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

O código deve usar `typeof` para verificar o tipo da variável `three`.

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
