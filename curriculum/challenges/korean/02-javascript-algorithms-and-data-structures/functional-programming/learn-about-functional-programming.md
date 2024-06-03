---
id: 587d7b8d367417b2b2512b5b
title: 함수형 프로그래밍 배우기
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

함수형 프로그래밍은 함수의 범위 밖에서 어떤 부작용 없이 해결책이 간단하고 독립적인 함수인 프로그래밍 스타일입니다: `INPUT -> PROCESS -> OUTPUT`

함수형 프로그래밍은

1) 독립적인 함수 - 변화에 취약한 전역 변수를 포함하는 프로그램의 상태에 의존성이 없다

2) 순수 함수 - 같은 입력은 항상 같은 출력을 낸다

제한적인 부작용을 가진 함수 - 함수 밖의 프로그램의 상태의 변화가 안정적으로 제어된다

# --instructions--

freeCodeCamp 회원들은 차 마시는 것을 좋아한다고 합니다.

코드 편집기에 `prepareTea`와 `getTea` 함수가 정의되어 있습니다. 팀을 위한 40 잔의 차를 얻고 변수 `tea4TeamFCC`에 저장하도록 `getTea` 함수를 호출하시오.

# --hints--

변수 `tea4TeamFCC`는 팀을 위해 40잔의 차를 가지고 있어야 합니다.

```js
assert(tea4TeamFCC.length === 40);
```

변수 `tea4TeamFCC`는 녹차를 가지고 있어야 합니다.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
