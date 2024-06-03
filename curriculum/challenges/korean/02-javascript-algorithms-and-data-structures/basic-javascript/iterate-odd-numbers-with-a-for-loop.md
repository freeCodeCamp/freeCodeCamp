---
id: 56104e9e514f539506016a5c
title: For 루프로 홀수 순환하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

For 루프는 한 번에 하나만 순환할 필요가 없습니다. `final-expression` 변경하여 짝수로 세어 나갈 수 있습니다.

`i = 0`에 시작하여 `i < 10`인 동안 루프를 순환할 것입니다. `i += 2`으로 매 순환하마다 2씩 `i`를 증가시킬 것입니다.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray`는 이제 `[0, 2, 4, 6, 8]`를 포함할 것입니다. `initialization`를 변경하여 홀수로 세어 나갈 수 있습니다.

# --instructions--

`for` 루프로 `myArray`에 1부터 9 중 홀수를 추가하시오.

# --hints--

이를 위해 `for` 루프를 사용해야 합니다.

```js
assert(/for\s*\([^)]+?\)/.test(__helpers.removeJSComments(code)));
```

`myArray`는 `[1, 3, 5, 7, 9]`와 같아야 합니다.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
