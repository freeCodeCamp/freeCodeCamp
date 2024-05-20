---
id: 587d7b88367417b2b2512b45
title: '복잡한 문제 해결을 위한 고차 함수 map, filter 혹은 reduce 사용하기'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

`map()`, `filter()` 그리고 `reduce()`같은 고차 함수를 사용하여 과제들을 진행했으니 이제 더 복잡한 과제해결을 위해 이 함수들을 적용해볼 수 있습니다.

# --instructions--

`map()`, `filter()` 그리고 `reduce()`의 조합을 사용하여 `squareList` 함수에 대한 코드를 완성하시오. 이 함수는 실수 배열이 전달되었을 때 오직 양수(소수는 정수가 아님)의 제곱을 포함하는 새로운 배열을 반환해야 합니다. 실수 배열의 예시로 `[-3, 4.8, 5, 3, -3.2]`가 있습니다.

**주의:** `for</code`, `while` 루프 혹은 `forEach()` 함수를 사용하지 않아야 합니다.

# --hints--

`squareList`는 `function`이어야 합니다.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`, `while` 그리고 `forEach`를 사용하지 않아야 합니다.

```js
assert(!__helpers.removeJSComments(code).match(/for|while|forEach/g));
```

`map`, `filter` 혹은 `reduce`를 사용해야 합니다.

```js
assert(
  __helpers
    .removeWhiteSpace(__helpers.removeJSComments(code))
    .match(/\.(map|filter|reduce)\(/g)
);
```

이 함수는 `array`를 반환해야 합니다.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])`는 `[16, 1764, 36]`를 반환해야 합니다.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])`는 `[9, 100, 49]`를 반환해야 합니다.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
