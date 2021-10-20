---
id: 598f48a36c8c40764b4e52b3
title: Impedir a modificação de um objeto
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

Como visto no desafio anterior, a declaração `const` sozinha, na verdade, não protege a mutação de seus dados. Para garantir que seus dados não mudem, o JavaScript fornece a função `Object.freeze` que previne os dados de serem modificados.

Qualquer tentativa de alterar o objeto será rejeitada, com um erro sendo lançado se o script estiver executando em modo estrito.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

As atribuições `obj.review` e `obj.newProp` vão resultar em erros, pois nosso editor executa em modo estrito por padrão. O console vai exibir o valor `{ name: "FreeCodeCamp", review: "Awesome" }`.

# --instructions--

Nesse desafio, você usará o método `Object.freeze` para prevenir a mudança de constantes matemáticas. Você precisa congelar o objeto `MATH_CONSTANTS` para que ninguém possa alterar o valor de `PI`, adicionar ou deletar propriedades.

# --hints--

Você não deve substituir a palavra-chave `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` deve ser uma variável constante (use `const`).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

Você não deve alterar a declaração original de `MATH_CONSTANTS`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

A variável `PI` deve ser igual a `3.14`.

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
