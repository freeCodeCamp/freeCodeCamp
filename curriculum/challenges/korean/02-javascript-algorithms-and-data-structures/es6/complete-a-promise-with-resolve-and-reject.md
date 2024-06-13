---
id: 5cdafbc32913098997531680
title: resolve와 reject로 프로미스 완료하기
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

한 프로미스는 세 가지 상태를 가집니다: `pending`, `fulfilled` 그리고 `rejected`. 이전 과제에서 생성한 프로미스는 프로미스를 완료시키는 법을 추가하지 않았기 때문에 `pending`에서 영원히 머무르게 됩니다. 프로미스에 인자로 주어진 `resolve`와 `reject` 파라미터는 이를 위해 사용됩니다. `resolve`는 프로미스가 성공할 때 사용되고 `reject`는 실패할 때 사용됩니다. 이 메소드는 아래 보이는 것처럼 인자를 취합니다.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

위 예시는 이 함수들의 인자로 문자열을 사용하지만 인자는 어떤 것이든 상관없습니다. 많은 경우에 웹사이트나 다른 곳에 사용할 데이터는 객체일 수 있습니다.

# --instructions--

성공과 실패를 처리하는 프로미스를 생성하시오. `responseFromServer`가 `true`라면 프로미스를 성공적으로 완료시키기 위해 `resolve` 메소드를 호출하시오. `We got the data` 라는 문자열을 `resolve`에 전달하시오. `responseFromServer`가 `false`라면 `reject` 메소드를 사용하고 문자열 `Data not received`를 해당 메소드에 전달하시오.

# --hints--

`resolve`는 `if` 조건이 `true`일 때 예상 문자열 값과 함께 호출되어야 합니다.

```js
assert(
  __helpers.removeJSComments(code).match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject`는 `if` 조건이 `false`일 때 예상 문자열 값과 함께 호출되어야 합니다.

```js
assert(
  __helpers.removeJSComments(code).match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
