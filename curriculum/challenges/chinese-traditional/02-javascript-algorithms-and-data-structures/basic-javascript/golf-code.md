---
id: 5664820f61c48e80c9fa476c
title: 高爾夫代碼
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

在高爾夫遊戲中，每個洞都有自己的標準桿數`par`，意思是一個高爾夫球員爲了把球打進洞裏完成比賽，預計要揮杆的平均次數 `strokes`。 根據你把球打進洞所揮杆的次數 `strokes` 高於或低於 `par` 多少，有一個不同的暱稱（代表打高爾夫球的水平）。

函數將會傳送兩個參數，`par` 和 `strokes`。 根據下表返回正確的字符串。下表列出不同揮杆次數（從高到低）對應的字符串。

<table class='table table-striped'><thead><tr><th>揮杆次數</th><th>返回字符串</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` 和 `strokes` 必須是數字而且是正數。 題目已定義字符串的數組，便於你操作。

# --hints--

`golfScore(4, 1)` 應該返回字符串 `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` 應該返回字符串 `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` 應該返回字符串 `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` 應該返回字符串 `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` 應該返回字符串 `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` 應該返回字符串 `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` 應該返回字符串 `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` 應該返回字符串 `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` 應該返回字符串 `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` 應該返回字符串 `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` 應該返回字符串 `Go Home!`

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
