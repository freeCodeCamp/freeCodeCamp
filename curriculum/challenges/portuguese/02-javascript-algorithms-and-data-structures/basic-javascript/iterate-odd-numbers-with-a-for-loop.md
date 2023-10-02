---
id: 56104e9e514f539506016a5c
title: Iterar números ímpares com um laço for
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

Laços for não tem de iterar um de cada vez. Ao alterar nossa `final-expression`, nós podemos contar os números pares.

Começaremos em `i = 0` e um laço while `i < 10`. Incrementaremos `i` em 2 a cada iteração com `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` agora conterá `[0, 2, 4, 6, 8]`. Vamos mudar nossa `initialization` para que possamos contar por números ímpares.

# --instructions--

Adicione (push) os números ímpares de 9 até 1 para `myArray` usando um laço `for`.

# --hints--

Você deve estar usando um laço `for` para isso.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` deve ser igual a `[1, 3, 5, 7, 9]`.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
