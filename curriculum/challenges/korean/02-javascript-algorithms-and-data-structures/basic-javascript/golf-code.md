---
id: 5664820f61c48e80c9fa476c
title: 골프 코드
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

골프 게임에는 골프 선수가 홀에 공을 넣어 플레이를 완성하기 위해 할 것으로 기대되는 `strokes`의 평균 수를 의미하는 `par`가 각 홀마다 있습니다. `par`에서 `strokes`를 얼마나 더 쳤는지, 덜 쳤는지에 대한 별칭이 있습니다.

함수는 `par`와 `strokes` 매개변수를 받습니다. 친 횟수를 우선순위(가장 높음에서 가장 낮음) 에 따라 나열한 아래 표에 대해 정확한 문자열을 반환하세요.

<table><thead><tr><th>친 횟수</th><th>반환 값</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par`와 `strokes`는 항상 양수의 숫자입니다. 당신의 편의를 위해 모든 이름 배열을 추가했습니다.

# --hints--

`golfScore(4, 1)`은 `Hole-in-one!` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)`은 `Eagle` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)`은 `Eagle` 문자열을 반환해야합니다.

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)`은 `Birdie` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)`은 `Par` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)`은 `Hole-in-one!` 문자열을 반환해야합니다.

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)`은 `Par` 문자열을 반환해야합니다.

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)`은 `Bogey` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)`은 `Double Bogey` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)`은 `Go Home!` 문자열을 반환해야합니다.

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)`은 `Go Home!` 문자열을 반환해야합니다.

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
