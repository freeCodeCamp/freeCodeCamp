---
id: 587d7dbb367417b2b2512baa
title: Reusar padrões com grupos de captura
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Por vezes você procurará padrões que ocorrem várias vezes em uma string. Não faz sentido repetir a regex manualmente. Existe uma forma muito melhor de especificar quando a string possui múltiplas ocorrências do padrão buscado.

Você pode usar <dfn>grupos de captura</dfn> para buscar substrings repetidas. Usamos parênteses (`(` e `)`) para criar grupos de captura. Só precisamos escrever a regex do padrão que se repete dentro deles.

E, para especificar que a string capturada pelo grupo se repetirá, você escreve uma barra invertida (`\`) seguida de um número. Esse número começa por 1 e aumenta em um para cada grupo de captura que você usa. Por exemplo, `\1` captura o primeiro grupo.

No exemplo abaixo, é capturada qualquer palavra que se repita depois de um espaço:

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
```

Nele, `test` retorna `true` e `match` retorna `["regex regex", "regex"]`.

O método `.match()` de uma string retorna um array com a string capturada e cada grupo capturado.

# --instructions--

Use grupos de captura na regex `reRegex` para capturar em uma string um número que aparece exatamente três vezes, separados por espaços.

# --hints--

Sua regex deve usar o atalho de classe de caracteres para dígitos.

```js
assert(reRegex.source.match(/\\d/));
```

Sua regex deve reusar um grupo de captura duas vezes.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

Sua regex deve encontrar a string `42 42 42`.

```js
assert(reRegex.test('42 42 42'));
```

Sua regex deve encontrar a string `100 100 100`.

```js
assert(reRegex.test('100 100 100'));
```

Sua regex não deve encontrar a string `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

Sua regex não deve encontrar a string `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

Sua regex não deve encontrar a string `101 102 103`.

```js
assert(!reRegex.test('101 102 103'));
```

Sua regex não deve encontrar a string `1 2 3`.

```js
assert(!reRegex.test('1 2 3'));
```

Sua regex deve encontrar a string `10 10 10`.

```js
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
