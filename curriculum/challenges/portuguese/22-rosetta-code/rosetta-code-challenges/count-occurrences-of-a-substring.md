---
id: 596fda99c69f779975a1b67d
title: Contar as ocorrências de uma substring
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Crie uma função, ou mostre uma função integrada para contar o número de ocorrências não sobrepostas de uma substring dentro de uma string.

A função deve receber dois argumentos:

<ul>
  <li>o primeiro argumento deve ser a string onde ocorrerá a busca, e</li>
  <li>o segundo deve ser uma substring a ser buscada.</li>
</ul>

A função deve retornar uma contagem inteira.

A pesquisa deve produzir o maior número de correspondências não sobrepostas.

Em geral, isto significa, essencialmente, uma correspondência da esquerda para a direita e da direita para a esquerda.

# --hints--

`countSubstring` deve ser uma função.

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` deve retornar `3`.

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` deve retornar `2`.

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` deve retornar `2`.

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

## --seed-contents--

```js
function countSubstring(str, subStr) {

  return true;
}
```

# --solutions--

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```
