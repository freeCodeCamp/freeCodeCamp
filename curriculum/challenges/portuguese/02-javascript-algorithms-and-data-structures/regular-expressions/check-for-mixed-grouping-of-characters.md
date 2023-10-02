---
id: 5c3dda8b4d8df89bea71600f
title: Validar grupos mistos de caracteres
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

Há vezes em que queremos validar grupos de caracteres em uma expressão regular. É possível fazê-lo usando parênteses: `()`.

Você pode usar a expressão regular `/P(engu|umpk)in/g` para encontrar tanto `Penguin` quanto `Pumpkin` em uma string.

Depois é só usar o método `test()` para verificar se os grupos estão presentes na string.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

O método `test` retorna `true` aqui.

# --instructions--

Corrija a regex para que ela valide os nomes `Franklin Roosevelt` e `Eleanor Roosevelt` levando em conta maiúsculas e minúsculas. A regex também deve permitir nomes do meio.

Depois corrija o código, fazendo com que a regex seja testada na string `myString`, retornando `true` ou `false`.

# --hints--

A regex `myRegex` deve retornar `true` para a string `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

A regex `myRegex` deve retornar `true` para a string `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

A regex `myRegex` deve retornar `false` para a string `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

A regex `myRegex` deve retornar `false` para a string `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

A regex `myRegex` deve retornar `false` para a string `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

A regex `myRegex` deve retornar `false` para a string `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
