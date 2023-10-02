---
id: 587d7dbb367417b2b2512baa
title: Reusar padrões com grupos de captura
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Vamos supor que você deseja encontrar a correspondência de uma palavra que ocorra várias vezes como abaixo.

```js
let repeatStr = "row row row your boat";
```

Você poderia usar `/row row row/`, mas e se você não souber a palavra específica repetida? <dfn>Grupos de captura</dfn> podem ser usados para localizar substrings repetidas.

Os grupos de captura são criados envolvendo o padrão de regex a ser capturado entre parênteses. Neste caso, o objetivo é capturar uma palavra composta de caracteres alfanuméricos para que o grupo de captura seja `\w+` entre parênteses: `/(\w+)/`.

A substring correspondente ao grupo é salva em uma "variável" temporária que pode ser acessada dentro da mesma expressão regular usando uma barra invertida e o número do grupo de captura (ex.: `\1`). Os grupos de captura são automaticamente numerados pela posição de abertura de seus parênteses (esquerda para direita), começando em 1.

O exemplo abaixo captura qualquer palavra que se repita três vezes, separada por espaços:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

Usar o método `.match()` em uma string retornará um array com a substring correspondente, juntamente com seus grupos capturados.


# --instructions--

Use grupos de captura na regex `reRegex` para capturar em uma string um número que aparece exatamente três vezes, separados por espaços.

# --hints--

A regex deve usar o atalho de classe de caracteres para dígitos.

```js
assert(reRegex.source.match(/\\d/));
```

A regex deve reusar um grupo de captura duas vezes.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

A regex deve encontrar a string `42 42 42`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

A regex deve encontrar a string `100 100 100`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

A regex não deve encontrar a string `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

A regex não deve encontrar a string `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

A regex não deve encontrar a string `101 102 103`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

A regex não deve encontrar a string `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

A regex deve encontrar a string `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

A regex não deve encontrar a string `42\t42\t42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

A regex não deve encontrar a string `42  42  42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
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
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
