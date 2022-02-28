---
id: 587d7b87367417b2b2512b3f
title: Diferenciar entre as palavras-chave var e let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Um dos maiores problemas ao declarar variáveis com a palavra-chave `var` é que você pode sobrescrever facilmente declarações de variável:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

No código acima, a variável `camper` é originalmente declarada com o valor `James` e então substituída pelo valor `David`. O console, então, vai exibir a string `David`.

Em uma aplicação pequena, você pode não encontrar esse tipo de problema. Mas à medida que sua base de código se tornar maior, você pode sobrescrever acidentalmente uma variável que você não pretendia. Como esse comportamento não lança um erro, a busca e correção de bugs tornam-se mais difíceis.

Uma palavra-chave chamada `let` foi introduzida na ES6, uma grande atualização para o JavaScript, para resolver este possível problema com a palavra-chave `var`. Você vai aprender sobre outros recursos da ES6 em desafios posteriores.

Se você substituir `var` por `let` no código acima, ele resultará em um erro:

```js
let camper = "James";
let camper = "David";
```

O erro pode ser visto no console do seu navegador.

Então, diferente de `var`, ao usar `let`, uma variável com o mesmo nome só pode ser declarada uma única vez.

# --instructions--

Atualize o código para que apenas a palavra-chave `let` seja usada.

# --hints--

A palavra-chave `var` não deve existir no código.

```js
assert.notMatch(code, /var/g);
```

A variável `catName` deve ser uma string de valor `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

`catSound` deve ser uma string de valor `Meow!`

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
