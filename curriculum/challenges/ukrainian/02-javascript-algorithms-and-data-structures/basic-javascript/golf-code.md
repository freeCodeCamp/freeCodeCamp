---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

In the game of Golf, each hole has a `par`, meaning, the average number of `strokes` a golfer is expected to make in order to sink the ball in the hole to complete the play. Залежно від того, на скільки вище або нижче `par` є ваші `удари`, існують різні псевдоніми.

Ваша функція проходитиме аргументи `par` та `strokes`. Поверніть правильний рядок відповідно до цієї таблиці, яка перелічує удари в порядку пріоритету; зверху (найвищий) до низу (найнижчий):

<table class='table table-striped'><thead><tr><th>Удари</th><th>Відображений результат</th></tr></thead><tbody><tr><td>1</td><td>"В лунку з першого удару"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Орел"</td></tr><tr><td>par - 1</td><td>"Пташка"</td></tr><tr><td>par</td><td>"Середнячок"</td></tr><tr><td>par + 1</td><td>"Страшко"</td></tr><tr><td>par + 2</td><td>"Двічі Страшко"</td></tr><tr><td>>= par + 3</td><td>"Йди додому!"</td></tr></tbody></table>

`par` та `удари` завжди будуть числовими та додатніми. Ми додали масив усіх ваших імен для зручності.

# --hints--

`golfScore(4, 1)` повинен повертати рядок `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` повинен повертати рядок `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` повинен повертати рядок `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` повинен повертати рядок `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` повинен повертати рядок `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` повинен повертати рядок `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` повинен повертати рядок `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` повинен повертати рядок `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` повинен повертати рядок `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` повинен повертати рядок `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` повинен повертати рядок `Go Home!`

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
```

# --solutions--

```js
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```
