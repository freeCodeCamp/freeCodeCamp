---
id: 5690307fddb111c6084545d7
title: If Else문의 논리적 순서
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

`if`, `else if`문에서 순서는 중요합니다.

함수는 위에서부터 아래로 실행되기 때문에 어떠한 문장이 먼저 오는지 주의해야 합니다.

이 두가지 함수를 예로 들어 보겠습니다.

첫번째는 다음과 같습니다.

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

두번째는 단순히 문장의 순서만 바꾼 것 입니다.

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

두 함수는 거의 동일하게 보이지만, 함수에 숫자를 넣으면 다른 결과를 얻게 됩니다.

```js
foo(0)
bar(0)
```

`foo(0)`는 `Less than one` 문자열을 반환할 것이고, `bar(0)`는 `Less than two`문자열을 반환할 것 입니다.

# --instructions--

함수의 논리 순서를 변경하여 항상 정확한 문장을 반환하도록 합니다.

# --hints--

`orderMyLogic(4)`는 `Less than 5`문자열을 반환해야 합니다.

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)`는 `Less than 10`문자열을 반환해야 합니다.

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)`는 `Greater than or equal to 10`문자열을 반환해야 합니다.

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
