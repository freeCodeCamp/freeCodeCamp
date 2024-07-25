---
id: 5675e877dbd60be8ad28edc6
title: For 루프로 배열 순환하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

배열의 내용을 순환하는 것은 자바스크립트에서 일반적인 일입니다. 이를 위한 한가지 방법은 `for` 루프를 사용하는 것입니다. 다음 코드는 콘솔에 `arr` 배열의 각 요소를 출력할 것입니다.

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

배열은 0을 기준으로 인덱싱한다는 것을 기억해야 합니다. 이는 해당 배열의 마지막 인덱스가 `length - 1`임을 의미합니다. 이 루프의 조건은 `i < arr.length` 인데, `i`가 `length`와 같을 때 루프를 멈춥니다. 이 경우에 마지막 순환은 `i === 4`입니다. `i`가 `arr.length - 1`와 같고 콘솔에 `6`을 출력합니다. 그런 다음 `i`가 `5`로 증가하면 `i < arr.length`가 `false`이게 되므로 루프가 끝나게 됩니다.

# --instructions--

변수 `total`를 `0`로 초기화하여 선언하시오. 배열 `myArr`의 각 요소의 값을 `total`에 추가하도록 `for` 루프를 사용하시오.

# --hints--

`total`은 선언되어야 하고 0으로 초기화되어야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total`는 20과 같아야 합니다.

```js
assert(total === 20);
```

`myArr`을 순환하도록 `for` 루프를 사용해야 합니다.

```js
assert(/for\s*\(/g.test(__helpers.removeJSComments(code)) && /myArr\s*\[/g.test(__helpers.removeJSComments(code)));
```

`total`에 20을 직접 할당하지 않아야 합니다.

```js
assert(!__helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
