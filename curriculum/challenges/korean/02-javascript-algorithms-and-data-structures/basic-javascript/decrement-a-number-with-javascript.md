---
id: 56533eb9ac21ba0edf2244ad
title: 자바스크립트를 이용해서 수치를 감소시키기
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

`--` 연산자를 사용해서 간단하게 변수의 값을 1만큼 <dfn>감소(Decrement)</dfn> 시킬 수 있습니다.

```js
i--;
```

이것은 다음에 나오는 수식과 같습니다.

```js
i = i - 1;
```

**참고:** 이 전체 행이 `i--;`가 되어, 등호(=) 가 불필요해집니다.

# --instructions--

코드를 변경해서 `myVar`에 `--` 연산자를 사용해 주세요.

# --hints--

`myVar`는 `10`과 같아야 합니다.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;`의 식이 변경되어야 합니다.

```js
assert(!__helpers.removeJSComments(code).match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

`myVar`에 `10`을 할당해서는 안됩니다.

```js
assert(!__helpers.removeJSComments(code).match(/myVar\s*=\s*10.*?;?/));
```

`--` 연산자를 `myVar`에 사용해야 합니다.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(__helpers.removeJSComments(code)));
```

지정된 코멘트 위의 코드를 변경하면 안됩니다.

```js
assert(/let myVar = 11;/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
