---
id: 5664820f61c48e80c9fa476c
title: تعليمات برمجية للعبة الجولف
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

في لُعْبَة الجولف، كل ثقب لديه `par`، التي تصف متوسط عدد الضربات `strokes` المتوقعة من اللاعب من أجل أدخال الكرة في الثَّقب لإكمال اللعب. اعتمادًا على مدى بعد `strokes` من `par` سواء البعد كان فوق أو تحت، يوجد اسم مستعار مختلف لكل منهم.

سيمرر `par` و `strokes` كمعطيات (arguments) لوظيفتك (function). أرجع المقطع الصحيح وفقًا لهذا الجدول الذي يسرد strokes حسب الأولوية؛ من الأعلى إلى الأسفل:

<table class='table table-striped'><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

يكونان `par` و `strokes` دائما من نوع رَقم إيجابي. لقد أضفنا القائمة من جميع الأسماء لمساعدتك.

# --hints--

يجب أن ينتج `golfScore(4, 1)` المقطع النصي `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

يجب أن ينتج `golfScore(4, 2)` المقطع النصي `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

يجب أن ينتج `golfScore(5, 2)` المقطع النصي `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

يجب أن ينتج `golfScore(4, 3)` المقطع النصي `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

يجب أن ينتج `golfScore(4, 4)` المقطع النصي `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

يجب أن ينتج `golfScore(1, 1)` المقطع النصي `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

يجب أن ينتج `golfScore(5, 5)` المقطع النصي `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

يجب أن ينتج `golfScore(4, 5)` المقطع النصي `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

يجب أن ينتج `golfScore(4, 6)` المقطع النصي`Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

يجب أن ينتج `golfScore(4, 7)` المقطع النصي`Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

يجب أن ينتج `golfScore(5, 9)` المقطع النصي`Go Home!`

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
