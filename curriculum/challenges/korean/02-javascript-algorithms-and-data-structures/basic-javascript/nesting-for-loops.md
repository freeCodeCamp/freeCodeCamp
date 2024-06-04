---
id: 56533eb9ac21ba0edf2244e1
title: For 루프 중첩하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

다차원 배열이 있을 때, 이전에 언급된 것과 같은 논리를 사용하여 배열과 모든 하위 배열을 순환할 수 있습니다. 여기 예시가 있습니다.

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

이는 `arr`의 각 하위 요소를 한 번에 하나씩 출력합니다. 내부 루프에서는 `arr[i]`의 `.length`를 확인합니다. `arr[i]` 자체가 배열이기 때문입니다.

# --instructions--

`multiplyAll` 함수를 수정해 `arr`의 하위 배열에 있는 모든 숫자의 곱을 반환하도록 하세요.

# --hints--

`multiplyAll([[1], [2], [3]])`은 `6`을 반환해야 합니다.

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])`은 `5040`을 반환해야 합니다.

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])`은 `54`를 반환해야 합니다.

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
