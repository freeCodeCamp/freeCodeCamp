---
id: 56533eb9ac21ba0edf2244dd
title: Switch 문으로 여러 옵션에서 선택하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

만약 한 가지 값과 여러 옵션을 대조해야 한다면, <dfn>switch</dfn> 문을 사용할 수 있습니다. `switch`문은 값을 여러 가능성이 있는 값들을 정의하는 <dfn>case</dfn>문과 비교합니다. 어떤 유효한 자바스크립트 문이라도 <dfn>case</dfn> 블록 안에서 실행될 수 있으며, 첫 번째 일치하는 `case` 값부터 `break`가 나타날 때까지 실행됩니다.

여기 `switch`문 예시가 있습니다.

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

`case` 값들은 엄격한 동등성(`===`)으로 테스트 됩니다. `break`는 문장들이 실행되는 것을 멈추게 합니다. `break`이 없다면 다음 문장이 실행될 것입니다.

# --instructions--

`val`를 테스트하고 `answer`를 다음 조건 중 하나로 설정하는 switch 문을 작성하시오.  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)`는 문자열 `alpha`을 가져야 합니다.

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)`는 문자열 `beta`을 가져야 합니다.

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)`는 문자열 `gamma`을 가져야 합니다.

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)`는 문자열 `delta`을 가져야 합니다.

```js
assert(caseInSwitch(4) === 'delta');
```

`if` 나 `else`문을 사용하지 않아야 합니다.

```js
assert(!/else/g.test(__helpers.removeJSComments(code)) || !/if/g.test(__helpers.removeJSComments(code)));
```

적어도 3개의 `break`문이 있어야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
