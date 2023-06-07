---
id: 5664820f61c48e80c9fa476c
title: Гольф-код
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

У грі в гольф кожна лунка має `par`, що відповідає середній кількості ударів (`strokes`), які повинен зробити гравець, щоб забити м’яч у лунку та завершити гру. Існують різні псевдоніми залежно від того, де знаходяться ваші удари (`strokes`) відповідно до `par`.

Вашій функції буде передано аргументи `par` та `strokes`. Поверніть правильний рядок відповідно до цієї таблиці, в якій перелічено удари за пріоритетом зверху (найвищий) донизу (найнижчий):

<table class='table table-striped'><thead><tr><th>Удари</th><th>Повернений рядок</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` та `strokes` завжди будуть додатними числами. Ми додали масив усіх імен для вашої зручності.

# --hints--

`golfScore(4, 1)` має повертати рядок `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` має повертати рядок `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` має повертати рядок `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` має повертати рядок `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` має повертати рядок `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` має повертати рядок `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` має повертати рядок `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` має повертати рядок `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` має повертати рядок `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` має повертати рядок `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` має повертати рядок `Go Home!`

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
