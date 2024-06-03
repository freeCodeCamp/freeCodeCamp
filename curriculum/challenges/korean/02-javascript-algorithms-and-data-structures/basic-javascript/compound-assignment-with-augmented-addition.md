---
id: 56533eb9ac21ba0edf2244af
title: 더하기를 추가해서 복합적으로 할당하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

프로그래밍에서는 할당을 사용해서 변수의 값을 변경하는 일이 자주 일어납니다. 우선 등호(=) 의 우측 변에 있는 모든 것이 먼저 연산된다는 것을 기억하고 다음을 보세요.

```js
myVar = myVar + 5;
```

위와 같이 하면 `5`를 `myVar`에 더합니다. 이러한 조작은 일반적인 패턴이므로, 산술 연산과 할당 2가지를 한꺼번에 처리하는 연산자가 있습니다.

그중 하나가 `+=` 연산자입니다.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

콘솔에 `6`의 값이 나타날 것입니다.

# --instructions--

`a`, `b`, 및 `c`에 대한 할당을 `+=` 연산자를 사용하도록 변환하십시오.

# --hints--

`a`는 `15`와 같아야 합니다.

```js
assert(a === 15);
```

`b`는 `26`과 같아야 합니다.

```js
assert(b === 26);
```

`c`는 `19`와 같아야 합니다.

```js
assert(c === 19);
```

각 변수에 `+=` 연산자를 사용해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/\+=/g).length === 3);
```

지정된 코멘트 위의 코드를 변경하면 안됩니다.

```js
assert(
  /let a = 3;/.test(__helpers.removeJSComments(code)) &&
    /let b = 17;/.test(__helpers.removeJSComments(code)) &&
    /let c = 12;/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
