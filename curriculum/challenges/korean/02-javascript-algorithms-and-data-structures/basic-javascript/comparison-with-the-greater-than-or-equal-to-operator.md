---
id: 56533eb9ac21ba0edf2244d5
title: 크거나 같음 비교 연산자 사용하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

크거나 같음 비교 연산자(`>=`)는 두 숫자의 값을 비교합니다. 왼쪽 숫자가 오른쪽 숫자보다 크거나 같다면 `true`를 반환합니다. 그렇지 않으면 `false`를 반환합니다.

등호 연산자와 같이 크거나 같음 비교 연산자는 비교하면서 데이터 유형을 변환할 것입니다.

**예시**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

반환문이 맞도록 지시된 줄에 이상 연산자를 추가하시오.

# --hints--

`testGreaterOrEqual(0)`는 문자열 `Less than 10`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)`는 문자열 `Less than 10`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)`는 문자열 `10 or Over`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)`는 문자열 `10 or Over`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)`는 문자열 `10 or Over`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)`는 문자열 `20 or Over`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)`는 문자열 `20 or Over`을 반환해야 합니다.

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

`>=` 연산자를 적어도 두번 사용해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
