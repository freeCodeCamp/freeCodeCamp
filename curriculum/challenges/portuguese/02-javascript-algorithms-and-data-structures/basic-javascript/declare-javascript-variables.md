---
id: bd7123c9c443eddfaeb5bdef
title: Declarar variáveis JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

Na ciência da computação, <dfn>dado</dfn> é qualquer coisa que tenha significado para o computador. JavaScript fornece oito <dfn>tipos de dados</dfn> diferentes que são `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` e `object`.

Por exemplo, os computadores distinguem números, como o número`12`, e `strings`, como o `"12"`, `"dog"`, ou`"123 cats"`, as quais são coleções de caracteres. Computadores podem realizar operações matemáticas em um número, mas não em uma string.

<dfn>Variáveis</dfn> permitem aos computadores armazenar e manipular dados de forma dinâmica. Elas fazem isso usando uma "etiqueta" para apontar para o dado ao invés de usar o próprio dado. Qualquer um dos 8 tipos de dados pode ser armazenado em uma variável.

Variáveis são similares às variáveis x e y utilizadas na matemática, o que significa que elas são simples nomes para representar os dados aos quais se referem. Variáveis de computador diferem das variáveis matemáticas porque elas podem armazenar diferentes valores em momentos diferentes.

Dizemos ao JavaScript para criar ou declarar uma variável colocando a palavra-chave `var` na frente dela, dessa forma:

```js
var ourName;
```

cria uma variável chamada `ourName`. Em JavaScript, terminamos uma instrução com ponto e vírgula. Nomes de variáveis podem ser formados por números, letras e `$` ou `_`, mas não podem conter espaços ou começar com um número.

# --instructions--

Use a palavra-chave `var` para criar uma variável chamada `myName`.

**Dica**  
Olhe o exemplo acima de `ourName` se você ficar travado.

# --hints--

Você deve declarar `myName` com a palavra-chave `var`, terminando com ponto e vírgula

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
