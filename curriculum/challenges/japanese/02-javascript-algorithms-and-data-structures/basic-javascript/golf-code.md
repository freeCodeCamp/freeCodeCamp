---
id: 5664820f61c48e80c9fa476c
title: ゴルフのプログラム
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

ゴルフの試合では、各ホールに `par` (パー) が設定されています。これは、ゴルファーがボールをカップインさせてホールアウトするのに要すると考えられる平均 `strokes` (ストローク) 数です。 `strokes`数 が `par` よりどれだけ多いか少ないかによって、異なるニックネームが付いています。

関数は引数として `par` と `strokes` を受け取ります。 次の表に対応した正しい文字列を返してください。この表はスコアの良い順 (最高から最低の順) にストロークを並べて記載しています。

<table class='table table-striped'><thead><tr><th>ストローク</th><th>戻り値</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` と `strokes` は常に正の数値になります。 すべての名称を含む配列をすでに追加してあります。

# --hints--

`golfScore(4, 1)` は文字列 `Hole-in-one!` を返す必要があります。

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` は文字列 `Eagle` を返す必要があります。

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` は文字列 `Eagle` を返す必要があります。

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` は文字列 `Birdie` を返す必要があります。

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` は文字列 `Par` を返す必要があります。

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` は文字列 `Hole-in-one!` を返す必要があります。

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` は文字列 `Par` を返す必要があります。

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` は文字列 `Bogey` を返す必要があります。

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` は文字列 `Double Bogey` を返す必要があります。

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` は文字列 `Go Home!` を返す必要があります。

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` は文字列 `Go Home!` を返す必要があります。

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
