---
id: 56533eb9ac21ba0edf2244b1
title: 곱셈를 추가해서 복합적으로 할당하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

`*=` 연산자는 변수에 숫자를 곱합니다.

```js
myVar = myVar * 5;
```

위의 내용은 `myVar`에 `5`를 곱합니다. 이 내용은 다음과 같이 변환될 수 있습니다.

```js
myVar *= 5;
```

# --instructions--

`a`, `b`, `c`에 각각 할당을 `*=` 연산자를 사용하도록 변경해 주세요.

# --hints--

`a`는 `25`와 같아야 합니다.

```js
assert(a === 25);
```

`b`는 `36`과 같아야 합니다.

```js
assert(b === 36);
```

`c`는 `46`과 같아야 합니다.

```js
assert(c === 46);
```

각 변수에서 `*=` 연산자를 사용해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/\*=/g).length === 3);
```

지정된 코멘트 위의 코드를 변경하면 안됩니다.

```js
assert(
  /let a = 5;/.test(__helpers.removeJSComments(code)) &&
    /let b = 12;/.test(__helpers.removeJSComments(code)) &&
    /let c = 4\.6;/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
