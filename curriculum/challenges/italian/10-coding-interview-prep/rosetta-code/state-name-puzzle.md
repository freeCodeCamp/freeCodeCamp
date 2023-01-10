---
id: 5a23c84252665b21eecc8024
title: Puzzle sui nomi degli Stati
challengeType: 1
forumTopicId: 302323
dashedName: state-name-puzzle
---

# --description--

**Nome degli stati** è <em>un puzzle di parole</em> in cui prendi le lettere da due stati US e riorganizzi le lettere per formare i nomi di altri due stati US.


# --instructions--

Scrivi una funzione per risolvere la sfida per un dato array di veri nomi di stati americani, e per nomi di stati fittizi.

La funzione dovrebbe restituire un array. Ogni elemento deve essere un oggetto in questa forma: `{"from":[],"to":[]}`. L'array `from` dovrebbe contenere i nomi originali e l'array `to` dovrebbe contenere i nomi risultanti.

# --hints--

`solve` dovrebbe essere una funzione.

```js
assert(typeof solve == 'function');
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` dovrebbe restituire un array.

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

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` dovrebbe restituire `[{ from: ["North Carolina ", "South Dakota"], to: ["North Dakota", "South Carolina"] }]`.

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

`solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"])` dovrebbe restituire `[{ from: ["New Kory", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "New York"], to: ["Kory New", "Wen Kory"] }, { from: ["New Kory", "New York"], to: ["Kory New", "York New"] }, { from: ["New York", "Wen Kory"], to: ["New Kory", "York New"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "New Kory"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New York", "York New"], to: ["New Kory", "Wen Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "New Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "York New"] }, { from: ["Kory New", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New Kory", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New Kory"], to: ["Wen Kory", "York New"] }]`.

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
