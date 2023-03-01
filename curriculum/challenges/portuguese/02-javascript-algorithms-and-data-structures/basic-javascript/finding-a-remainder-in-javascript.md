---
id: 56533eb9ac21ba0edf2244ae
title: Descobrir o resto em JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

O operador de <dfn>resto</dfn> `%` retorna o resto da divisão de dois números.

**Exemplo**

<pre>
5 % 2 = 1
5 / 2 = 2 resto 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Uso**  
Na matemática, um número pode ser verificado como par ou ímpar por meio do resto da divisão do número por `2`. Números pares têm um resto de `0`, enquanto números ímpares têm um resto de `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Observação:** o operador de <dfn>resto</dfn> às vezes é referido incorretamente como o operador de módulo. É muito semelhante ao módulo, mas não funciona adequadamente com números negativos.

# --instructions--

Define o `resto` igual ao restante de `11` dividido por `3` usando o operador de <dfn>restante</dfn> (`%`).

# --hints--

A variável `remainder` deve ser inicializada

```js
assert(/(const|let|var)\s+?remainder/.test(code));
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
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
