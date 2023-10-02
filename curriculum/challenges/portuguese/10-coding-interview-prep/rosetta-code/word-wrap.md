---
id: 594810f028c0303b75339ad4
title: Quebra de linha
challengeType: 1
forumTopicId: 302344
dashedName: word-wrap
---

# --description--

Mesmo hoje, com fontes proporcionais e layouts complexos, ainda há casos em que você precisa quebrar o texto em uma determinada coluna. A tarefa básica é quebrar um parágrafo de um texto de uma forma simples.

# --instructions--

Escreva uma função que possa quebrar este texto para qualquer número de caracteres. Como exemplo, o texto quebrado com 80 caracteres deve se parecer com o seguinte:

<pre>
Quebre o texto usando um algoritmo mais sofisticado, como o algoritmo de Knuth e Plass TeX. Se o seu idioma fornece isso, você obtém crédito extra fácil, mas você
deve fazer referência à documentação que indica que o algoritmo é algo melhor
do que um simples algoritmo de comprimento mínimo.
</pre>

# --hints--

wrap deve ser uma função.

```js
assert.equal(typeof wrap, 'function');
```

wrap deve retornar uma string.

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

wrap(80) deve retornar 4 linhas.

```js
assert(wrapped80.split('\n').length === 4);
```

Sua função `wrap` deve retornar nosso texto esperado.

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

wrap(42) deve retornar 7 linhas.

```js
assert(wrapped42.split('\n').length === 7);
```

A função `wrap` deve retornar nosso texto esperado.

```js
assert.equal(wrapped42.split('\n')[0], firstRow42);
```

# --seed--

## --after-user-code--

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';
```

## --seed-contents--

```js
function wrap(text, limit) {
  return text;
}
```

# --solutions--

```js
function wrap(text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}
```
