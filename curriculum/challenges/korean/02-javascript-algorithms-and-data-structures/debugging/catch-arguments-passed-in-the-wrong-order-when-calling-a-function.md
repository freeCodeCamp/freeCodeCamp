---
id: 587d7b85367417b2b2512b3a
title: 함수를 호출할 때 잘못된 순서로 전달된 인자를 찾아내기
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

함수 호출에 대해 더 이야기해보겠습니다. 주의해야 할 또 다른 버그는 함수의 인자들이 잘못된 순서로 전달되는 경우입니다. 인자의 타입이 다를 경우, 예를 들어 배열과 정수를 인자로 받는 함수에서 잘못된 순서로 인자를 전달하면 런타임 오류가 발생하게 됩니다. 만약 인자들의 타입이 같은 경우 (예를 들어, 인자가 모두 정수인 경우) 런타임 에러는 발생하지 않겠지만 함수의 논리가 맞지 않는 문제가 발생합니다. 이러한 문제들을 피하기 위해, 함수에 필요한 모든 인자가 정확한 순서로 전달되는지 확인하세요.

# --instructions--

함수 `raiseToPower`는 밑(base) 을 지수(exponent) 만큼 제곱하는 기능을 합니다. 안타깝게도, 이 함수는 올바르게 호출되지 않았습니다. 코드를 수정하여 `power`의 값이 8이 되도록 하세요.

# --hints--

변수 `power`가 3의 제곱이 아닌 2의 세제곱이 되도록 코드를 수정해야 합니다.

```js
assert(power == 8);
```

`raiseToPower` 함수를 호출할 때 인자를 순서에 맞게 전달해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
