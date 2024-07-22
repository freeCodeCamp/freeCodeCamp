---
id: 587d7b8f367417b2b2512b64
title: 프로토타입에 filter 메소드 적용하기
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

`filter` 메소드를 직접 만들어서 적용하려고 한다면 이에 대해 많은 것을 배우게 될 것입니다. `for` 루프를 이용하거나 `Array.prototype.forEach()`를 사용하는 것을 권장합니다.

# --instructions--

`Array.prototype.filter()`와 같이 동작하는 고유의 `Array.prototype.myFilter()`를 작성하시오. 내장 `filter` 메소드를 사용하지 않아야 합니다. `Array` 인스턴스는 `this`를 사용하여 `myFilter` 메소드 안에서 접근이 가능합니다.

# --hints--

`[23, 65, 98, 5, 13].myFilter(item => item % 2)`는 `[23, 65, 5, 13]`와 같아야 합니다.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")`는 `["naomi"]`를 반환해야 합니다.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)`는 `[1, 2, 5]`을 반환해야 합니다.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`filter` 메소드를 사용하지 않아야 합니다.

```js
assert(!__helpers.removeJSComments(code).match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const odd_s = s.myFilter(item => item % 2 === 1);
```
