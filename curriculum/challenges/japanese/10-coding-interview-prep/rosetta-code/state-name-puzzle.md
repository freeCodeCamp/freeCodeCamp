---
id: 5a23c84252665b21eecc8024
title: 州名のパズル
challengeType: 5
forumTopicId: 302323
dashedName: state-name-puzzle
---

# --description--

このタスクは、Mark Nelson 氏 の DDJ コラム「Wordplay (言葉遊び)」と、NPR 週末版の Will Shortz 氏の週ごとのパズルチャレンジの 1 つ[\[1\]](https://www.npr.org/templates/story/story.php?storyId=9264290) にインスパイアされたもので、もとは David Edelheit 氏の発案によるものです。 チャレンジの内容は、アメリカの州の名前を 2 つ選び、すべての文字を混ぜて並べ替え、 *別の* 2 つの州の名前を作成するというものでした。(つまり、4 つの州の名前がすべて異なるようにします。) これらの州名は何でしょうか? この問題は [Unicon Discussion Web](https://tapestry.tucson.az.us/twiki/bin/view/Main/StateNamesPuzzle) で再び出題され、幾つかの解答が解説付きで紹介されています。 いくつかの役立つと思われるテクニックがあります。[Gödel numbering](https://en.wikipedia.org/wiki/Goedel_numbering)、[equivalence relations](https://en.wikipedia.org/wiki/Equivalence_relation)、[equivalence classes](https://en.wikipedia.org/wiki/Equivalence_classes) などを参考にすると良いでしょう。 これらの基本的なメリットは、Unicon Discussion Web で説明されています。 架空の新しい州のセットを使用する形式で、第 2 のチャレンジも出題されています。

# --instructions--

与えられた州名の配列で、この課題を解く関数を記述してください。 この関数は配列を返す必要があります。 各要素はこの形式 (`{"from":[],"to":[]}`) のオブジェクトでなければなりません。 "from" 配列には元の名前を含め、"to" 配列には結果として生じる名前を含める必要があります。

# --hints--

`solve` は関数とします。

```js
assert(typeof solve == 'function');
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` は配列を返す必要があります。

```js
assert(
  Array.isArray(
    solve([
      'New Mexico',
      'New York',
      'North Carolina ',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota'
    ])
  )
);
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` は `[{ from: ["North Carolina ", "South Dakota"], to: ["North Dakota", "South Carolina"] }]` を返す必要があります。

```js
assert.deepEqual(
  solve([
    'New Mexico',
    'New York',
    'North Carolina ',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota'
  ]),
  [
    {
      from: ['North Carolina ', 'South Dakota'],
      to: ['North Dakota', 'South Carolina']
    }
  ]
);
```

`solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"])` は `[{ from: ["New Kory", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "New York"], to: ["Kory New", "Wen Kory"] }, { from: ["New Kory", "New York"], to: ["Kory New", "York New"] }, { from: ["New York", "Wen Kory"], to: ["New Kory", "York New"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "New Kory"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New York", "York New"], to: ["New Kory", "Wen Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "New Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "York New"] }, { from: ["Kory New", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New Kory", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New Kory"], to: ["Wen Kory", "York New"] }]` を返す必要があります。

```js
assert.deepEqual(
  solve([
    'New York',
    'New Kory',
    'Wen Kory',
    'York New',
    'Kory New',
    'New Kory'
  ]),
  [
    { from: ['New Kory', 'New York'], to: ['Wen Kory', 'York New'] },
    { from: ['New Kory', 'New York'], to: ['Kory New', 'Wen Kory'] },
    { from: ['New Kory', 'New York'], to: ['Kory New', 'York New'] },
    { from: ['New York', 'Wen Kory'], to: ['New Kory', 'York New'] },
    { from: ['New York', 'Wen Kory'], to: ['Kory New', 'New Kory'] },
    { from: ['New York', 'Wen Kory'], to: ['Kory New', 'York New'] },
    { from: ['New York', 'York New'], to: ['New Kory', 'Wen Kory'] },
    { from: ['New York', 'York New'], to: ['Kory New', 'New Kory'] },
    { from: ['New York', 'York New'], to: ['Kory New', 'Wen Kory'] },
    { from: ['Kory New', 'New York'], to: ['New Kory', 'Wen Kory'] },
    { from: ['Kory New', 'New York'], to: ['New Kory', 'York New'] },
    { from: ['Kory New', 'New York'], to: ['Wen Kory', 'York New'] },
    { from: ['New Kory', 'Wen Kory'], to: ['Kory New', 'York New'] },
    { from: ['New Kory', 'York New'], to: ['Kory New', 'Wen Kory'] },
    { from: ['Kory New', 'New Kory'], to: ['Wen Kory', 'York New'] }
  ]
);
```

# --seed--

## --seed-contents--

```js
function solve(input) {

}
```

# --solutions--

```js
function solve(input) {
  var orig = {};
  input.forEach(function(e) {
    orig[__helpers.removeWhiteSpace(e).toLowerCase()] = e;
  });

  input = Object.keys(orig);
  var map = {};
  for (var i = 0; i < input.length - 1; i++) {
    var pair0 = input[i];
    for (var j = i + 1; j < input.length; j++) {
      var pair = [pair0, input[j]];
      var s = pair0 + pair[1];
      var key = s.split('').sort();

      var val = map[key] ? map[key] : [];
      val.push(pair);
      map[key] = val;
    }
  }

  var result = [];
  Object.keys(map).forEach(key => {
    for (var i = 0; i < map[key].length - 1; i++) {
      var a = map[key][i];
      for (var j = i + 1; j < map[key].length; j++) {
        var b = map[key][j];

        if (new Set([a[0], b[0], a[1], b[1]]).size < 4) continue;
        var from = [orig[a[0]], orig[a[1]]].sort();
        var to = [orig[b[0]], orig[b[1]]].sort();
        result.push({
          from,
          to
        });
      }
    }
  });

  return result;
}
```
