---
id: 596e414344c3b2872167f0fe
title: Entre vírgulas
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Entre vírgulas</a> é uma tarefa originalmente criada por Eric Lippert em seu blog.

# --instructions--

Escreva uma função para gerar uma saída de string que é a concatenação das palavras de entrada a partir de uma lista/sequência, onde:

<ol>
  <li>Uma entrada sem palavra produz como string de saída apenas dois caracteres de chaves (<code>"{}"</code>)</li>
  <li>Uma entrada de apenas uma palavra, por exemplo, <code>["ABC"]</code>, produz a string de saída com a palavra dentro de duas chaves. <code>"{ABC}"</code></li>
  <li>Uma entrada de duas palavras, por exemplo, <code>["ABC", "DEF"]</code>, produz uma string de saída com as duas palavras dentro de duas chaves com as palavras separadas pela string <code>" and "</code>, por exemplo, <code>"{ABC and DEF}"</code></li>
  <li>Uma entrada de três ou mais palavras, por exemplo <code>["ABC", "DEF", "G", "H"]</code>, produz a string de saída de todas elas separadas por <code>", "</code>, exceto a última palavra, que é separada por <code>" and "</code>, com todas elas dentro de duas chaves, por exemplo, <code>"{ABC, DEF, G and H}"</code></li>
</ol>

Teste sua função com a série de entradas a seguir mostrando a saída aqui nesta página:

<ul>
  <li>[] # (Sem palavras de entrada).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**Observação:** assuma que as palavras são strings não vazias de caracteres maiúsculos para esta tarefa.

# --hints--

`quibble` deve ser uma função.

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` deve retornar uma string.

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` deve retornar "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` deve retornar `"{ABC}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` deve retornar `"{ABC and DEF}"`.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` deve retornar `"{ABC, DEF, G and H}"`.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC, DEF, G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(", ") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
