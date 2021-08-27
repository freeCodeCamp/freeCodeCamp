---
id: 587d7db6367417b2b2512b99
title: Capturar caracteres que aparecem uma ou mais vezes seguidas
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

Às vezes você precisa capturar um caractere, ou grupo de caracteres, que aparece uma ou mais vezes seguidas. Ou seja, que aparecem pelo menos uma vez e podem se repetir.

Você pode usar o caractere `+` para verificar se é o caso. Lembre-se que o caractere ou padrão precisa repetir-se consecutivamente. Ou seja, um atrás do outro.

Por exemplo, `/a+/g` encontra um resultado na string `abc` e retorna `["a"]`. Mas o `+` também faz com que encontre um único resultado em `aabc` e retorne `["aa"]`.

Se a string fosse `abab`, a operação retornaria `["a", "a"]` porque entre os dois `a` há um `b`. Por fim, se não houvesse nenhum `a` na string, como em `bcd`, nada seria encontrado.

# --instructions--

Você quer capturar as ocorrências de `s` quando acontecer uma ou mais vezes em `Mississippi`. Escreva uma regex que use o caractere `+`.

# --hints--

A regex `myRegex` deve usar o caractere `+` para encontrar um ou mais `s`s.

```js
assert(/\+/.test(myRegex.source));
```

A regex `myRegex` deve encontrar 2 itens.

```js
assert(result.length == 2);
```

A variável `result` deve ser um array com dois `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
