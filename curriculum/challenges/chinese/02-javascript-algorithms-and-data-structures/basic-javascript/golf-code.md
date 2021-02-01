---
id: 5664820f61c48e80c9fa476c
title: 高尔夫代码
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

在高尔夫[golf](https://en.wikipedia.org/wiki/Golf)游戏中，每个洞都有自己的标准杆数`par`，代表着距离。根据你把球打进洞所挥杆的次数`strokes`，可以计算出你的高尔夫水平。

函数将会传送 2 个参数，分别是标准杆数`par`和挥杆次数`strokes`，根据下面的表格返回正确的水平段位。

<table class='table table-striped'><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par`和`strokes`必须是数字而且是正数。

# --hints--

`golfScore(4, 1)`应该返回 "Hole-in-one!"。

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)`应该返回 "Eagle"。

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)`应该返回 "Eagle"。

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)`应该返回 "Birdie"。

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)`应该返回 "Par"。

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)`应该返回 "Hole-in-one!"。

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)`应该返回 "Par"。

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)`应该返回 "Bogey"。

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)`应该返回 "Double Bogey"。

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)`应该返回 "Go Home!"。

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)`应该返回 "Go Home!"。

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
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
