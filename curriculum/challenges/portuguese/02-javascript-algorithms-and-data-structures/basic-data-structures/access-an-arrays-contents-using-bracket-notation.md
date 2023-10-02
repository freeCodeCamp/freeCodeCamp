---
id: 5a661e0f1068aca922b3ef17
title: Acessar o conteúdo de uma lista utilizando a notação de colchetes
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

A funcionalidade fundamental de qualquer estrutura de dados é, evidentemente, não só a capacidade de armazenar informação, como também a possibilidade de acessar esta informação quando necessário. Então, agora que aprendemos como criar um array, vamos começar a pensar em como podemos acessar as informações desse array.

Quando definimos um array simples como o que vemos abaixo, existem 3 itens nele:

```js
let ourArray = ["a", "b", "c"];
```

Em um array, cada item do array possui um <dfn>índice </dfn>. Esse índice possui dois papéis: é a posição daquele item no array e como você o referencia. No entanto, é importante notar que arrays em JavaScript são <dfn>indexados a partir do zero</dfn>, o que significa que o primeiro elemento do array está, na verdade, na posição ***zero*** em vez de na posição 1. Para recuperar um elemento de um array, nós podemos ao final de um array adicionar um índice encapsulado com colchetes (por exemplo [0]), ou mais comumente, no final de uma variável que faz referência a um objeto array. Isso é conhecido como <dfn>notação de colchetes</dfn>. Por exemplo, se queremos recuperar o `a` de um array `ourArray` e atribuir a uma variável, nós podemos fazer isso com o código a seguir:

```js
let ourVariable = ourArray[0];
```

Agora, `ourVariable` possui o valor de `a`.

Além de acessar o valor associado ao índice, você também pode *definir* um índice para um valor usando a mesma notação:

```js
ourArray[1] = "not b anymore";
```

Usando a notação de colchetes, nós agora redefinimos o item no índice 1, alterando a string `b`, para `not b anymore`. Agora, `ourArray` é `["a", "not b anymore", "c"]`.

# --instructions--

A fim de concluir esse desafio, defina a segunda posição (index `1`) do `myArray` como qualquer coisa que deseje, exceto a letra `b`.

# --hints--

`myArray[0]` deve ser igual à letra `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` não deve ser igual à letra `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` deve ser igual à letra `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` deve ser igual à letra `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
