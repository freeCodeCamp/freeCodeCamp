---
id: 5a23c84252665b21eecc8024
title: Головоломка з назвами штатів
challengeType: 5
forumTopicId: 302323
dashedName: state-name-puzzle
---

# --description--

При створенні цього завдання надихалися DDJ колонкою Марка Нельсона "Wordplay" та однією з тижневих головоломок Вілла Шорца з вихідного випуску NPR [\[1\]](https://www.npr.org/templates/story/story.php?storyId=9264290) та спочатку приписували Девіду Едельгайту. Завдання полягало в тому, щоб взяти назви двох штатів США, поєднати їх, потім переставити літери так, щоб утворилися назви двох *різних* штатів США (щоб усі чотири назви штатів відрізнялися одна від одної). Які це штати? Проблема була знову опублікована на [the Unicon Discussion Web](https://tapestry.tucson.az.us/twiki/bin/view/Main/StateNamesPuzzle), який включає декілька розв'язків з аналізом. Декілька технік можуть допомогти і ви, можливо, захочете звернутися до [нумерації Геделя](https://en.wikipedia.org/wiki/Goedel_numbering), [відношення еквівалентності](https://en.wikipedia.org/wiki/Equivalence_relation), та [класів еквівалентності](https://en.wikipedia.org/wiki/Equivalence_classes). Базові переваги цього обговорювалися на Unicon Discussion Web. Також було представлено друге завдання у вигляді набору нових вигаданих штатів.

# --instructions--

Напишіть функцію для розв'язання завдання для заданого масиву назв штатів. Функція має повернути масив. Кожен елемент має бути об'єктом у цьому вигляді: `{"from":[],"to":[]}`. Масив "from" повинен містити оригінальні назви, а масив "to" повинен містити отримані назви.

# --hints--

`solve` має бути функцією.

```js
assert(typeof solve == 'function');
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` має повернути масив.

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

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` має повернути `[{ from: ["North Carolina ", "South Dakota"], to: ["North Dakota", "South Carolina"] }]`.

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

`solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"])` має повернути `[{ from: ["New Kory", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "New York"], to: ["Kory New", "Wen Kory"] }, { from: ["New Kory", "New York"], to: ["Kory New", "York New"] }, { from: ["New York", "Wen Kory"], to: ["New Kory", "York New"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "New Kory"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New York", "York New"], to: ["New Kory", "Wen Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "New Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "York New"] }, { from: ["Kory New", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New Kory", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New Kory"], to: ["Wen Kory", "York New"] }]`.

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
