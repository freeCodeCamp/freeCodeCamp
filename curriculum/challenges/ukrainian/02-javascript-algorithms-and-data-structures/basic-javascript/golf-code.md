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

Рахунок `(4, 1)` має виводити стрічку `В лунку з першого удару!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

Рахунок `(4, 2)` має виводити стрічку `Орел`

```js
assert(golfScore(4, 2) === 'Eagle');
```

Рахунок `(5, 2)` має виводити стрічку `Орел`

```js
assert(golfScore(5, 2) === 'Eagle');
```

Рахунок `(4, 3)` має виводити стрічку `Пташка`

```js
assert(golfScore(4, 3) === 'Birdie');
```

Рахунок `(4, 4)` має виводити стрічку `Середнячок`

```js
assert(golfScore(4, 4) === 'Par');
```

Рахунок `(1, 1)` має виводити стрічку `В лунку з першого удару!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

Рахунок `(5, 5)` має виводити стрічку `Середнячок`

```js
assert(golfScore(5, 5) === 'Par');
```

Рахунок `(4, 5)` має виводити стрічку `Страшко`

```js
assert(golfScore(4, 5) === 'Bogey');
```

Рахунок `(4, 6)` має виводити стрічку `Двічі Страшко`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

Рахунок `(4, 7)` має виводити стрічку `Йди додому!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

Рахунок `(5, 9)` має виводити стрічку `Йди додому!`

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
