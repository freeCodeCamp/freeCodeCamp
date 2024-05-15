---
id: cf1111c1c11feddfaeb6bdef
title: JavaScript에서 하나의 숫자를 다른 숫자로 나누기
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqkbdAr'
forumTopicId: 17566
dashedName: divide-one-number-by-another-with-javascript
---

# --description--

한 숫자를 다른 숫자로 나누는 것도 가능합니다.

JavaScript에서는 나누기 기호로 `/`를 사용합니다.

**예:**

```js
const myVar = 16 / 2;
```

`myVar`의 값은 이제 `8`을 갖습니다.
# --instructions--

`0`를 변경해서, `quotient`(몫) 이 `2`와 같도록 해주세요.

# --hints--

변수 `quotient`의 값이 2와 같아야 합니다.

```js
assert(quotient === 2);
```

`/` 연산자를 사용해야 합니다.

```js
assert(/\d+\s*\/\s*\d+/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'quotient = '+z;})(quotient);
```

## --seed-contents--

```js
const quotient = 66 / 0;
```

# --solutions--

```js
const quotient = 66 / 33;
```
