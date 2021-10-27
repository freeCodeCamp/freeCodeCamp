---
id: 587d7daa367417b2b2512b6c
title: Transformar um array em uma string usando o método join
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

O método `join` é usado para juntar os elementos de um array, resultando em uma string. Ele recebe um delimitador como argumento, que é usado para conectar os elementos na string.

Exemplo:

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

O valor de `str` é `Hello World`.
# --instructions--

Use o método `join` (entre outros) dentro da função `sentensify` para criar uma frase a partir das palavras da string `str`. A função deve retornar uma string. Por exemplo, `I-like-Star-Wars` deve ser convertido para `I like Star Wars`. Não use o método `replace` neste desafio.

# --hints--

Você deve usar o método `join`.

```js
assert(code.match(/\.join/g));
```

Você não deve usar o método `replace`.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` deve retornar uma string.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` deve retornar a string `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` deve retornar a string `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` deve retornar a string `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```
