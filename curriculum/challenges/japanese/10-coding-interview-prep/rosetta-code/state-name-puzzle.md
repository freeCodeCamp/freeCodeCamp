---
id: 5a23c84252665b21eecc8024
title: 州名のパズル
challengeType: 1
forumTopicId: 302323
dashedName: state-name-puzzle
---

# --description--

**State name** is a <em>word puzzle</em> in which you take the letters from two U.S. state names and rearrange them to form the names of two different U.S. states.


# --instructions--

Write a function to solve the challenge for a given array of actual U.S. state names, and for fictional state names.

The function should return an array. Each element should be an object in this form: `{"from":[],"to":[]}`. The `from` array should contain the original names and the `to` array should contain the resultant names.

# --hints--

`solve` should be a function.

```js
assert(typeof solve == 'function');
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` should return an array.

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

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` should return `[{ from: ["North Carolina ", "South Dakota"], to: ["North Dakota", "South Carolina"] }]`.

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

`solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"])` should return `[{ from: ["New Kory", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "New York"], to: ["Kory New", "Wen Kory"] }, { from: ["New Kory", "New York"], to: ["Kory New", "York New"] }, { from: ["New York", "Wen Kory"], to: ["New Kory", "York New"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "New Kory"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New York", "York New"], to: ["New Kory", "Wen Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "New Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "York New"] }, { from: ["Kory New", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New Kory", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New Kory"], to: ["Wen Kory", "York New"] }]`.

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
