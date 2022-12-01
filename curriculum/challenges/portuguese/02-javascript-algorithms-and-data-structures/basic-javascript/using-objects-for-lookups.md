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

Aqui está um exemplo de um objeto de artigo:

```js
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```

`articleAuthor` é a string `Kaashan Hussain`, `articleLink` é a string `https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/` e `valueLookup` é a string `How to create objects in JavaScript`.

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
