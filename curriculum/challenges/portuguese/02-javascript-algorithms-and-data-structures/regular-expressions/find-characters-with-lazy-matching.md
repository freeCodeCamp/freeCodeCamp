---
id: 587d7db6367417b2b2512b9b
title: Encontrar caracteres com captura preguiçosa
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

Em expressões regulares, uma captura <dfn>gananciosa</dfn> encontra a parte mais longa o possível de uma string em que a regex atua e a retorna como resultado. A alternativa se chama captura <dfn>preguiçosa</dfn> e ela encontra o menor pedaço possível de uma string que satisfaz a regex.

Você pode aplicar a regex `/t[a-z]*i/` à string `"titanic"`. Essa regex é basicamente um padrão que começa com `t`, termina com `i`e tem algumas letras no meio delas.

Expressões regulares são gananciosas por padrão, então o resultado seria `["titani"]`. Ou seja, a maior string o possível que atende ao padrão é encontrada.

Mas você pode usar o caractere `?` para torná-la preguiçosa. Aplicar a regex adaptada `/t[a-z]*?i/` à string `"titanic"` retorna `["ti"]`.

**Observação:** ler HTML com expressões regulares deve ser evitado, mas procurar uma string HTML usando expressões regulares é perfeitamente aceitável.

# --instructions--

Arrume a regex `/<.*>/` para que retorne a tag HTML `<h1>` mas não a linha `"<h1>Winter is coming</h1>"`. Lembre-se de que o caractere curinga `.` em uma expressão regular captura qualquer caractere.

# --hints--

A variável `result` deve ser um array contendo `<h1>`

```js
assert(result[0] == '<h1>');
```

`myRegex` deve ser preguiçosa

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` não deve incluir a string `h1`

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
