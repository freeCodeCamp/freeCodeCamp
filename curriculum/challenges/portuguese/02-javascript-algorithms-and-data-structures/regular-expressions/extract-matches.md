---
id: 587d7db4367417b2b2512b92
title: Extrair resultados
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

Até agora, você só tem verificado se existe ou não um padrão dentro de uma string. Você também pode extrair os resultados encontrados por meio do método `.match()`.

Para usar o método `.match()`, aplique o método em uma string e passe a regex dentro dos parênteses.

Exemplo:

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Aqui, o primeiro `match` retorna `["Hello"]` e, o segundo, `["expressions"]`.

Note que o método `.match` se usa de forma "contrária" ao método `.test` que você usou até então:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

Aplique o método `.match()` para extrair a string `coding`.

# --hints--

O resultado, `result`, deve conter a string `coding`

```js
assert(result.join() === 'coding');
```

A regex `codingRegex` deve buscar a string `coding`

```js
assert(codingRegex.source === 'coding');
```

Você deve usar o método `.match()`.

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
