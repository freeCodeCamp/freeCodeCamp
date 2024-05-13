---
id: 587d7b8f367417b2b2512b62
title: 프로토타입에 map 실행하기
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

앞서 `Array.prototype.map()` 혹은 그냥 `map()`를 적용했을 때 봤듯이 `map` 메소드는 호출한 배열과 같은 길이의 배열을 반환합니다. 이 메소드는 콜백 함수가 본래 배열을 변형시키지 않는 한 본래 배열을 변형시키지 않습니다.

다시 말해 `map`는 순수 함수이고 이 결괏값은 온전히 입력에 의존합니다. 게다가 이 메소드는 다른 함수를 인자로 받습니다.

만약 `map` 메소드를 스스로 만들어서 적용한다면 이 메소드에 대해 많은 것을 배울 수 있을 것입니다. `for` 루프를 사용하거나 `Array.prototype.forEach()`를 사용하는 것을 추천합니다.

# --instructions--

`Array.prototype.map()`와 같이 동작하는 고유의 `Array.prototype.myMap()`를 작성하시오. 내장된 `map` 메소드를 사용하지 않아야 합니다. `Array` 인스턴스는 `this`를 사용하여 `myMap` 메소드에서 접근이 가능합니다.

# --hints--

`[23, 65, 98, 5, 13].myMap(item => item * 2)`는 `[46, 130, 196, 10, 26]`와 같아야 합니다.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())`는 `["NAOMI", "QUINCY", "CAMPERBOT"]`를 반환해야 합니다.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])`는 `[1, 2, 5, 2, 1]`을 반환해야 합니다.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`map` 메소드를 사용하지 않아야 합니다.

```js
assert(!__helpers.removeJSComments(code).match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```
