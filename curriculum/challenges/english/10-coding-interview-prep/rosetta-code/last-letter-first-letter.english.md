---
id: 5e4ce2b6ac708cc68c1df25e
title: Last letter-first letter
challengeType: 5
isHidden: false
forumTopicId: 385256
---

## Description
<section id='description'>
A certain children's game involves starting with a word in a particular category. Each participant in turn says a word, but that word must begin with the final letter of the previous word. Once a word has been given, it cannot be repeated. If an opponent cannot give a word in the category, they fall out of the game.
For example, with "animals" as the category,
<pre>
Child 1: dog
Child 2: goldfish
Child 1: hippopotamus
Child 2: snake
...
</pre>
</section>

## Instructions
<section id='instructions'>
Write a function that takes an input array of words. The function should return an array of words where the first letter of each word is the same as the last letter of the previous word. Only use the words in the input array, and once a word is used it cannot be repeated. The words in the return array should be selected and sequenced so that that its length is maximized.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>findLongestChain</code> should be a function.
    testString: assert(typeof findLongestChain == 'function');
  - text: <code>findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])</code> should return an array.
    testString: assert(Array.isArray(findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])));
  - text: <code>findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])</code> should return <code>["involves", "starting", "game", "each"]</code>.
    testString: assert.deepEqual(findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"]), ['involves', 'starting', 'game', 'each']);
  - text: <code>findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"])</code> should return <code>["braviary", "yamask", "kangaskhan"]</code>
    testString: assert.deepEqual(findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"]), ['braviary', 'yamask', 'kangaskhan']);
  - text: <code>findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"])</code> should return <code>["poliwrath", "harp", "poochyena", "archana"]</code>.
    testString: assert.deepEqual(findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"]), ['poliwrath', 'harp', 'poochyena', 'archana']);
  - text: <code>findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"])</code> should return <code>["scolipede", "elephant", "tigers", "sealeo"]</code>.
    testString: assert.deepEqual(findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"]), ['scolipede', 'elephant', 'tigers', 'sealeo']);
  - text: <code>findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"])</code> should return <code>["machamp", "petilil", "lumineon", "nosepass"]</code>.
    testString: assert.deepEqual(findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"]), ['machamp', 'petilil', 'lumineon', 'nosepass']);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findLongestChain(items) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
