---
id: 587d7b85367417b2b2512b39
title: 함수 호출 후 누락된 여는 괄호와 닫는 괄호를 찾아내기
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

함수나 메서드가 인수를 받지 않을 때, 호출 시 빈 여는 괄호와 닫는 괄호를 포함하는 것을 잊어버릴 수 있습니다. 종종 함수 호출의 결과를 변수에 저장하여 코드에서 사용합니다. 이 오류는 변수 값(또는 그들의 타입)을 콘솔에 출력하고, 하나가 예상된 함수 반환 값 대신 함수 참조로 설정된 것을 확인함으로써 감지할 수 있습니다.

다음 예시에 있는 변수들은 서로 다릅니다.

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

여기 `varOne`는 함수 `myFunction`이고 `varTwo`는 문자열 `You rock!`입니다.

# --instructions--

변수 `result`가 `getNine` 함수를 호출하여 반환받은 값으로 설정되도록 코드를 수정하시오.

# --hints--

함수 `getNine` 반환하는 숫자로 설정되도록 변수 `result`를 수정해야 합니다.

```js
assert(result == 9);
```

Your code should call the `getNine` function.

```js
assert(__helpers.removeJSComments(code).match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
