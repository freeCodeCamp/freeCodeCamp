---
id: 5e4ce2b6ac708cc68c1df25e
title: Última letra-primeira letra
challengeType: 1
forumTopicId: 385256
dashedName: last-letter-first-letter
---

# --description--

Um certo jogo infantil envolve começar com uma palavra em uma determinada categoria. Cada participante, em sua vez, diz uma palavra, mas essa palavra deve começar com a letra final da palavra anterior. Quando uma palavra é dita, ela não pode ser repetida. Se o oponente não disser uma palavra da categoria, ele sai do jogo.

Por exemplo, com a categoria "animais",

<pre>Criança 1: cachorro
Criança 2: onça
Criança 1: antílope
Criança 2: elefante
...
</pre>

# --instructions--

Escreva uma função que receba um array de palavras. A função deve retornar um array de palavras em que a primeira letra de cada palavra é a mesma que a última letra da palavra anterior. Use apenas as palavras do array de entrada. Quando uma palavra for usada, ela não poderá ser repetida. As palavras no array de retorno devem ser selecionadas e sequenciadas para que o comprimento do array seja maximizado.

# --hints--

`findLongestChain` deve ser uma função.

```js
assert(typeof findLongestChain == 'function');
```

`findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])` deve retornar um array.

```js
assert(
  Array.isArray(
    findLongestChain([
      'certain',
      'each',
      'game',
      'involves',
      'starting',
      'with',
      'word'
    ])
  )
);
```

`findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])` deve retornar `["involves", "starting", "game", "each"]`.

```js
assert.deepEqual(
  findLongestChain([
    'certain',
    'each',
    'game',
    'involves',
    'starting',
    'with',
    'word'
  ]),
  ['involves', 'starting', 'game', 'each']
);
```

`findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"])` deve retornar `["braviary", "yamask", "kangaskhan"]`

```js
assert.deepEqual(
  findLongestChain([
    'audino',
    'bagon',
    'kangaskhan',
    'banette',
    'bidoof',
    'braviary',
    'exeggcute',
    'yamask'
  ]),
  ['braviary', 'yamask', 'kangaskhan']
);
```

`findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"])` deve retornar `["poliwrath", "harp", "poochyena", "archana"]`.

```js
assert.deepEqual(
  findLongestChain([
    'harp',
    'poliwrath',
    'poochyena',
    'porygon2',
    'porygonz',
    'archana'
  ]),
  ['poliwrath', 'harp', 'poochyena', 'archana']
);
```

`findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"])` deve retornar `["scolipede", "elephant", "tigers", "sealeo"]`.

```js
assert.deepEqual(
  findLongestChain([
    'scolipede',
    'elephant',
    'zeaking',
    'sealeo',
    'silcoon',
    'tigers'
  ]),
  ['scolipede', 'elephant', 'tigers', 'sealeo']
);
```

`findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"])` deve retornar `["machamp", "petilil", "lumineon", "nosepass"]`.

```js
assert.deepEqual(
  findLongestChain([
    'loudred',
    'lumineon',
    'lunatone',
    'machamp',
    'magnezone',
    'nosepass',
    'petilil',
    'pidgeotto',
    'pikachu'
  ]),
  ['machamp', 'petilil', 'lumineon', 'nosepass']
);
```

# --seed--

## --seed-contents--

```js
function findLongestChain(items) {

}
```

# --solutions--

```js
function findLongestChain(items) {
  function Ref(index, first_char, last_char) {
    this.index = index;
    this.first_char = first_char;
    this.last_char = last_char;
  }

  var items_len = items.length
  var refs_len = items_len;
  var refs = []

  // enough space for all items
  var longest_path_refs_len = 0;
  var longest_path_refs = new Array(items_len);

  function search(curr_len) {
    if (curr_len > longest_path_refs_len) {
      longest_path_refs_len = curr_len;

      for (var i = 0; i < curr_len; i++) {
        longest_path_refs[i] = refs[i];
      }
    }

    // recursive search
    var last_char = refs[curr_len - 1].last_char;
    for (var i = curr_len; i < refs_len; i++)
      if (refs[i].first_char == last_char) {
        var aux = refs[curr_len];
        refs[curr_len] = refs[i];
        refs[i] = aux;
        search(curr_len + 1);
        refs[i] = refs[curr_len];
        refs[curr_len] = aux;
      }
  }

  for (var i = 0; i < items_len; i++) {
    var itemsi_len = items[i].length;
    refs.push(new Ref(i, items[i][0], items[i][itemsi_len - 1]));
  }

  // try each item as possible start
  for (var i = 0; i < items_len; i++) {
    var aux = refs[0];
    refs[0] = refs[i];
    refs[i] = aux;
    search(1);
    refs[i] = refs[0];
    refs[0] = aux;
  }

  var longest_path_len = longest_path_refs_len;
  var longest_path = new Array(longest_path_len);

  for (var i = 0; i < longest_path_len; i++)
    longest_path[i] = items[longest_path_refs[i].index];

  return longest_path;
}
```
