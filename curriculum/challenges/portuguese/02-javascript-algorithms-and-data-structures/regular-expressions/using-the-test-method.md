---
id: 587d7db3367417b2b2512b8e
title: Usar o método test
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Expressões regulares são usadas em linguagens de programação para encontrar e extrair partes de strings. Cria-se padrões que ajudam a encontrar tais partes.

Se você quiser encontrar a palavra `the` na string `The dog chased the cat`, você poderia usar a seguinte expressão regular: `/the/`. Note que aspas não são necessárias ao redor da expressão regular.

O JavaScript oferece múltiplas maneiras de usar <dfn>regexes</dfn>. Uma dessas maneiras é com o método `.test()`. O método `.test()` aplica a regex à string dentro dos parênteses e retorna `true` caso encontre o padrão ou `false` caso contrário.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

O método `test` retorna `true` aqui.

# --instructions--

Aplique a regex `myRegex` na string `myString` usando o método `.test()`.

# --hints--

Você deve usar `.test()` para testar a regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

O resultado deve ser `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
