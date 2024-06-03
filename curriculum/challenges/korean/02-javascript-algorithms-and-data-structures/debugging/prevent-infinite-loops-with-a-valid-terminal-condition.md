---
id: 587d7b86367417b2b2512b3d
title: 유효한 종료 조건으로 무한 루프 방지하기
challengeType: 1
forumTopicId: 301192
dashedName: prevent-infinite-loops-with-a-valid-terminal-condition
---

# --description--

마지막 주제는 공포의 무한 루프에 관한 것입니다. 반복문은 프로그램이 특정 횟수 혹은 조건이 만족할 때까지 코드 블록을 실행해야 하는 경우에 훌륭한 도구이지만, 반복문을 종료하는 종료 조건이 필요합니다. 무한 루프는 브라우저의 작동을 멈추거나 갑자기 닫히게 할 수도 있고, 전체적인 프로그램 실행 장애를 일으키기 때문에 아무도 원하지 않습니다.

이 섹션의 도입부에 무한 루프의 예가 있었는데, `loopy()` 내부의 `while` 반복문에서 벗어날 수 있는 종료 조건이 없었습니다. 이 함수를 호출하지 마세요!

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

루프 코드에서 벗어날 시점을 프로그램에 알려주는 종료 조건에 결국 도달하도록 하는 것이 프로그래머의 역할입니다. 한 가지 오류는 증감 변수를 터미널 조건에서 잘못된 방향으로 증가시키거나 감소시키는 것입니다. 또 다른 하나는 루프 코드 내에서 증감 변수 또는 인덱스 변수를 증가 또는 감소시키는 대신 실수로 재설정하는 경우입니다.

# --instructions--

`myFunc()`함수는 종료조건 `i != 4`는 `false`로 절대 평가받지(그리고 반복을 종료하지) 않기 때문에 - `i`는 홀수로 시작하고 매 순환마다 2씩 증가해서 4를 뛰어넘기 때문에 - 무한루프를 포함하고 있습니다. 종료 조건에서 비교 연산자를 수정하여 반복문이 4보다 작거나 같은 `i`에 대해서만 실행되도록 합니다.

# --hints--

코드의 `for` 반복문의 종료 조건(중간 부분) 에서 비교 연산자를 변경해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/i\s*?<=\s*?4;/g).length == 1);
```

코드의 반복문의 종료조건의 비교 연산자를 변경해야 합니다.

```js
assert(!__helpers.removeJSComments(code).match(/i\s*?!=\s*?4;/g));
```

# --seed--

## --seed-contents--

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

# --solutions--

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```
