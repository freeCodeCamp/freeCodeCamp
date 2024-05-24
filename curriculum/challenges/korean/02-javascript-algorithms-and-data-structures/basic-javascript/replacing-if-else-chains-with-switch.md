---
id: 56533eb9ac21ba0edf2244e0
title: If Else를 Switch로 대체하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

선택할 옵션이 많을 경우 `switch`문은 연쇄 `if`/`else if`문보다 쓰기 쉬울 수 있습니다. 다음은

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

아래와 같이 대체될 수 있습니다.

```js
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

연쇄 `if`/`else if`문을 `switch`문으로 변환하시오.

# --hints--

편집기 어디에도 `else`문이 사용되지 않아야 합니다.

```js
assert(!/else/g.test(__helpers.removeJSComments(code)));
```

편집기 어디에도 `if`문이 사용되지 않아야 합니다.

```js
assert(!/if/g.test(__helpers.removeJSComments(code)));
```

적어도 네 개의 `break`문이 있어야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/break/g).length >= 4);
```

`chainToSwitch("bob")`은 문자열 `Marley`를 반환해야 합니다.

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)`는 문자열 `The Answer`를 반환해야 합니다.

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)`은 문자열 `There is no #1`을 반환해야 합니다.

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)`은 문자열 `Missed me by this much!`을 반환해야 합니다.

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)`은 문자열 `Ate Nine`을 반환해야 합니다.

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")`은 `""` (빈 문자열)을 반환해야 합니다.

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)`은 `""` (빈 문자열)을 반환해야 합니다.

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```
