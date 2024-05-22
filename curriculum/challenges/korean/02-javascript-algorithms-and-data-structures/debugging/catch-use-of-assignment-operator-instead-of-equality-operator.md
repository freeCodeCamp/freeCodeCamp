---
id: 587d7b85367417b2b2512b38
title: 동등 연산자 대신 할당 연산자 사용 잡아내기
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

조건문 프로그램, 즉 특정 조건이 충족되면 다른 작업을 수행하는 프로그램은 JavaScript에서 `if`, `else if`, 및 `else` 문에 의존합니다. 조건은 때때로 결과가 어떤 값과 같은지 테스트하는 형태를 취합니다.

이 논리는 (적어도 영어에서는) "x가 y와 같으면 ..."이라고 말하며, 이는 코드에서 `=` 또는 할당 연산자를 사용하여 문자 그대로 코드에 적용될 수 있습니다. 이는 프로그램에서 예상치 못한 제어 흐름을 초래할 수 있습니다.

이전 과제에서 다룬 바와 같이, JavaScript의 할당 연산자(`=`)는 변수 이름에 값을 할당합니다. 그리고 `==` 및 `===` 연산자는 동등성을 검사합니다 (`===` 연산자는 엄격한 동등성을 검사하여 값과 유형이 모두 같은지 확인합니다).

아래 코드에서는 `x`에 2를 할당하며, 이는 `true`로 평가됩니다. JavaScript에서 "falsy" 값으로 알려진 `false`, `0`, `""` (빈 문자열), `NaN`, `undefined`, 및 `null`을 제외한 거의 모든 값은 `true`로 평가됩니다.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

이 예제에서 `if` 문 내의 코드 블록은 `y`가 falsy 값이 아닌 한, 어떤 값의 `y`에 대해서도 실행됩니다. 여기서 실행될 거라고 기대하는 `else` 블록은 실제 실행이 되지 않을 것입니다.

# --instructions--

프로그램이 올바른 조건문을 실행하고 `result`에 적절한 값이 할당되도록 조건을 수정하시오.

# --hints--

할당을 사용하는 대신 동등성을 검사하도록 조건을 수정해야 합니다.

```js
assert(result == 'Not equal!');
```

조건문은 동등성 검사를 위해 `==` 혹은 `===`을 사용해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
