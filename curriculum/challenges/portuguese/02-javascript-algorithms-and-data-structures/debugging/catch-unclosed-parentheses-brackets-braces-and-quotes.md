---
id: 587d7b84367417b2b2512b36
title: 'Identificar parênteses, colchetes, chaves e aspas sem fechamento'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

Outro erro de sintaxe para estar ciente é que todas as aberturas de parênteses, colchetes, chaves e aspas têm um par de fechamento. Esquecer um pedaço tende a acontecer quando você está editando um código existente e inserindo itens com um dos tipos de pares. Além disso, tenha cuidado ao aninhar blocos de código em outros, como ao adicionar uma função de callback como um argumento a um método.

Uma maneira de evitar esse erro é, assim que o caractere de abertura é digitado, incluir imediatamente o caractere de fechamento, mover o cursor entre eles e continuar programando. Felizmente, a maioria dos editores de código modernos geram a segunda parte do par automaticamente.

# --instructions--

Corrija os dois erros de pares no código.

# --hints--

O código deve corrigir o pedaço que falta do array.

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

O código deve corrigir o pedaço que falta do método `.reduce()`. A saída no console deve mostrar que `Sum of array value is: 6`.

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
