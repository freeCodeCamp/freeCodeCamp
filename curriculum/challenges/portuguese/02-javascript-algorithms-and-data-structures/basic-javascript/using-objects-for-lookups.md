---
id: 56533eb9ac21ba0edf2244ca
title: Usar objetos para pesquisas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Objetos podem ser pensados como armazenamento de chave/valor, como um dicionário. Se você tem um dado tabular, você pode usar um objeto para pesquisar valores ao invés de uma instrução `switch` ou uma cadeia de `if/else`. Isso é mais útil quando você sabe que o seu dado de entrada é limitado para um certo intervalo.

Aqui está um exemplo de uma simples pesquisa reversa no alfabeto:

```js
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
```

`alpha[2]` é a string `Y`, `alpha[24]` é a string `C` e `alpha[value]` é a string `Y`.

# --instructions--

Converta a instrução switch em um objeto chamado `lookup`. Use-o para pesquisar por `val` e atribua a string associada para a variável `result`.

# --hints--

`phoneticLookup("alpha")` deve ser igual a string `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` deve ser igual a string `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` deve ser igual a string `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` deve ser igual a string `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` deve ser igual a string `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` deve ser igual a string `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` deve ser igual a `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

Você não deve modificar a instrução `return`

```js
assert(code.match(/return\sresult;/));
```

Você não deve usar as instruções `case`, `switch` ou `if`

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
