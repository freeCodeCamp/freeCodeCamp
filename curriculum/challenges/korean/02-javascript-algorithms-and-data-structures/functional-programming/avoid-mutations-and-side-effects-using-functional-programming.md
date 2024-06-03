---
id: 587d7b8e367417b2b2512b5e
title: 함수형 프로그래밍으로 변형과 부수 효과 피하기
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

아직 알아채지 못하셨을 수도 있겠지만 이전 과제에서 문제는 `tabClose()` 함수 안에 `splice`에 있었습니다. `splice`는 이 메소드를 호출하는 본래의 배열을 변형시킵니다. 그래서 두 번째 호출은 변형된 배열을 사용하여 예상치 못한 결과를 줬습니다.

이는 더 큰 유형의 일부 예시입니다. 변수, 배열 혹은 객체에 함수를 호출하고 그 함수가 객체 안에 있는 변수 등을 변형시킵니다.

함수형 프로그래밍의 주요 원칙 중 하나는 어느 것도 변형시키지 않는 것입니다. 변형은 버그를 만들 수 있습니다. 함수들이 함수 인자 혹은 전역 변수 등 어떤 것도 변형시키지 않는 다는 것을 안다면 버그를 예방하는 것은 쉬워집니다.

이전 예시에서는 복잡한 연산이 동반되지 않았음에도 `splice` 메소드는 본래 배열을 변형시켰고 버그를 만들었습니다.

함수형 프로그래밍에서 변형시킨다는 것은 <dfn>변형(mutation)</dfn>이라고 불리고 그 결과는 <dfn>부수 효과(side effect)</dfn>라고 불린다는 것을 기억하실 겁니다. 함수는 이상적으로 <dfn>순수 함수(pure function)</dfn>이어야 합니다. 이 말은 이 함수는 어떤 부수 효과도 일으키지 않는다는 의미입니다.

이 규칙을 체득하고 코드에서 변수나 객체를 변형시키지 않으려는 노력을 해야합니다.

# --instructions--

전역 변수인 `fixedValue`에 1이 증가된 값을 반환할 수 있도록 `incrementer` 함수를 위한 코드를 작성하시오.

# --hints--

`incrementer` 함수는 `fixedValue`의 값(`4`)을 변형시키지 않아야 합니다.

```js
incrementer();
assert(fixedValue === 4);
```

`incrementer` 함수는 `fixedValue` 값보다 1이 큰 값을 반환해야 합니다.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

`incrementer` 함수는 전역 변수 `fixedValue` 값에 기반한 값을 반환해야 합니다.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
