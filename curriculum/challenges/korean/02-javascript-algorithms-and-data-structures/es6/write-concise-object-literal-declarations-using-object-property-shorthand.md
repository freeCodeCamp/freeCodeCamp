---
id: 587d7b8a367417b2b2512b4f
title: 객체 속성 줄임 표현으로 간결하게 객체 리터럴 정의하기
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6에서는 쉽게 객체 리터럴을 정의할 수 있는 문법을 지원합니다.

아래 코드를 주의 깊게 읽어보세요.

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

함수 `getMousePosition`는 두 속성을 가진 객체를 반환하는 간단한 함수입니다. ES6에서는 `x: x` 처럼 중복된 표현을 하지 않아도 되는 문법적 설탕(syntactic sugar)을 제공합니다. 간단하게 `x`로 작성해도 내부적으로 `x: x`와 같은 형식으로 변환됩니다. 위 함수에 새로운 문법을 적용하여 다시 작성한 함수를 아래에서 확인하세요.

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

객체 속성 줄임 표현을 이용하여 속성 `name`, `age`, `gender` 을 포함한 객체를 리턴하세요.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")`은 `{name: "Zodiac Hasbro", age: 56, gender: "male"}`을 반환해야 합니다.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

`key:value` 문법은 사용하지 않습니다.

```js
assert(!__helpers.removeJSComments(code).match(/:/g))
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  /*return {
    name: name,
    age: age,
    gender: gender
  };*/
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};
```
