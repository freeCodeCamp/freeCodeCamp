---
id: 56533eb9ac21ba0edf2244ae
title: Descobrindo o Resto em JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

O operador de <dfn>resto</dfn> `%` retorna o resto da divisão de dois números.

**Exemplo**

<blockquote>5 % 2 = 1 porque<br>Math.floor(5 / 2) = 2 (Quociente)<br> 2 * 2 = 4<br>5 - 4 = 1 (Resto)</blockquote>

**Uso**  
Na matemática, um número pode ser verificado para ser par ou ímpar ao verificar o resto da divisão de um número por `2`.

<blockquote>17 % 2 = 1 (17 é Ímpar)<br>48 % 2 = 0 (48 é Par)</blockquote>

**Nota:** O operador de <dfn>resto</dfn> às vezes é referido incorretamente como o operador de módulo. É muito semelhante ao módulo, mas não funciona adequadamente com números negativos.

# --instructions--

Define o `resto` igual ao restante de `11` dividido por `3` usando o operador de <dfn>restante</dfn> (`%`).

# --hints--

A variável `remainder` deve ser inicializada

```js
assert(/var\s+?remainder/.test(code));
```

O valor de `remainder` deve ser `2`

```js
assert(remainder === 2);
```

Você deve usar o operador `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
// Only change code below this line

var remainder;
```

# --solutions--

```js
var remainder =  11 % 3;
```
