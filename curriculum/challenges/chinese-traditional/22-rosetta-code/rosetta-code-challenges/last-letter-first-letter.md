---
id: 5e4ce2b6ac708cc68c1df25e
title: 單詞接龍
challengeType: 1
forumTopicId: 385256
dashedName: last-letter-first-letter
---

# --description--

A certain children's game involves starting with a word in a particular category. Each participant in turn says a word, but that word must begin with the final letter of the previous word. Once a word has been given, it cannot be repeated. If an opponent cannot give a word in the category, they fall out of the game.

例如，以“動物”爲類別，

<pre>Child 1: dog
Child 2: goldfish
Child 1: hippopotamus
Child 2: snake
...
</pre>

# --instructions--

編寫一個函數，該函數接受輸入的單詞數組。 該函數應該返回一個單詞數組，其中每個單詞的第一個字母與前一個單詞的最後一個字母相同。 只使用輸入數組中的詞，一個詞一旦用過就不能重複。 應選擇返回數組中的單詞並對其進行排序，以使其長度最大化。

# --hints--

`findLongestChain` 應該是一個函數。

```js
assert(typeof findLongestChain == 'function');
```

`findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])` 應該返回一個數組。

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

`findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])` 應該返回 `["involves", "starting", "game", "each"]`。

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

`findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"])` 應該返回 `["braviary", "yamask", "kangaskhan"]`

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

`findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"])` 應該返回 `["poliwrath", "harp", "poochyena", "archana"]`。

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

`findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"])` 應該返回 `["scolipede", "elephant", "tigers", "sealeo"]`。

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

`findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"])` 應該返回 `["machamp", "petilil", "lumineon", "nosepass"]`。

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
