---
id: 56533eb9ac21ba0edf2244b0
title: 빼기를 추가해서 복합적으로 할당하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

`+=` 연산자처럼, `-=`는 변수에서 수를 뺍니다.

```js
myVar = myVar - 5;
```

위의 내용은 `myVar`에서 `5`를 뺍니다. 이 내용은 아래와 같이 다시 쓸 수 있습니다.

```js
myVar -= 5;
```

# --instructions--

`a`, `b`, `c`에 각각 할당을, `-=` 연산자를 사용하도록 변경해주세요.

# --hints--

`a`는 `5`와 같아야 합니다.

```js
assert(a === 5);
```

`b`는 `-6`과 같아야 합니다.

```js
assert(b === -6);
```

`c`는 `2`와 같아야 합니다.

```js
assert(c === 2);
```

각 변수에 `-=` 연산자를 사용해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/-=/g).length === 3);
```

지정된 코멘트 위의 코드를 변경하면 안됩니다.

```js
assert(
  /let a = 11;/.test(__helpers.removeJSComments(code)) && /let b = 9;/.test(__helpers.removeJSComments(code)) && /let c = 3;/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
