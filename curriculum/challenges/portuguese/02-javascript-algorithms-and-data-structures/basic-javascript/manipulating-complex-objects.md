---
id: 56533eb9ac21ba0edf2244cb
title: Manipulando Objetos Complexos
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

Às vezes você pode querer armazenar dados em uma <dfn>Estrutura de Dados</dfn> flexível. Um objeto JavaScript é uma forma de lidar com dados flexíveis. Eles permitem combinações arbitrárias de <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn> e <dfn>objects</dfn>.

Aqui está um exemplo de estrutura de dados complexas:

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

Isto é um array o qual contém um objeto dentro dele. O objeto possui vários pedaços de <dfn>metadados</dfn> sobre um album. Também possui um array aninhado `formats`. Se você quiser adicionar mais discos de album, você pode fazer isso ao adicionar os discos no array de alto nível. Objetos armazenam dados em uma propriedade, a qual possui um formato de chave-valor. No exemplo acima, `"artist": "Daft Punk"` é uma propriedade que tem uma chave `artist` e um valor de `Daft Punk`. [Notação de Objeto JavaScript](http://www.json.org/) ou `JSON` é um formato, de interalteração de dados relacionados, usado para armazenar dados.

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**Nota:** Você precisará colocar uma vírgula após cada objeto no array, a não ser que for o último objeto no array.

# --instructions--

Adicione um novo álbum para o array `myMusic`. Adicione strings: `artist` e `title`, número: `release_year`, e um array de strings: `formats`.

# --hints--

`myMusic` deve ser um array

```js
assert(Array.isArray(myMusic));
```

`myMusic` deve ter pelo menos dois elementos

```js
assert(myMusic.length > 1);
```

Os elementos no array `myMusic` devem ser objetos

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Seu objeto em `myMusic` deve ter pelo menos 4 propriedades

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

Seu objeto em `myMusic` deve conter a propriedade `artist` a qual é uma string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

Seu objeto em `myMusic` deve conter a propriedade `title` a qual é uma string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

Seu objeto em `myMusic` deve conter a propriedade `release_year` a qual é um número

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

Seu objeto em `myMusic` deve conter a propriedade `formats` a qual é um array

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` deve ser um array de strings com pelo menos dois elementos

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.typeOf(format, 'string')
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

# --solutions--

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```
