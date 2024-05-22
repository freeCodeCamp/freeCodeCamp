---
id: bd7123c9c443eddfaeb5bdef
title: JavaScript 변수 선언
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

컴퓨터 과학에서 <dfn>데이터(data)</dfn>란 컴퓨터에게 있어서 의미있는 모든 것을 가리킵니다. JavaScript에서는 8가지의 다른 형태의 <dfn>데이터 타입</dfn>을 제공하며 그것들은 `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, 그리고 `object` 입니다.

예를 들어, 컴퓨터에서는 숫자(number) 인 `12`와 `strings`(문자열 ： 문자들의 집합체) 인 `"12"`, `"dog"`, 또는 `"123 cats"`가 구별됩니다. 또한 컴퓨터는 숫자를 수학적으로 연산 할 수 있지만, 문자열(strings)은 불가능합니다.

<dfn>Variables</dfn>(변수)는 컴퓨터가 데이터를 동적으로 저장하여 조작하는 것이 가능하게 합니다. 이 때 실제로 데이터 그 자체를 사용하는 게 아니라, 데이터를 가리키는 "라벨(label)"을 사용합니다. 위의 8가지의 데이터는 어떤 것이든 변수에 저장될 수가 있습니다.

컴퓨터에서의 변수는, 수학에서 사용하는 x나 y 라는 변수와 비슷합니다. 즉, 변수들이란 참조하고 싶은 데이터를 나타내는 간단한 이름입니다. 컴퓨터 변수는 수학적 변수와 달리 다른 시간에 다른 값을 저장할 수 있습니다.

자바스크립트에서 변수를 작성 또는 <dfn>선언(declare)</dfn>하기 위해서는, 다음과 같이 변수 앞에 `var` 키워드를 붙입니다.

```js
var ourName;
```

이걸로 `ourName`라는 하나의 변수가 만들어졌습니다. 자바스크립트에서는 문장의 마지막에 세미콜론(;) 을 붙입니다. 변수 이름으로는 숫자, 문자, `$` 또는 `_`를 사용할 수 있습니다. 하지만 공백(띄어쓰기)을 추가하거나 숫자로 변수 이름을 시작할 수는 없습니다.

# --instructions--

`var` 키워드를 사용해 `myName`이라는 변수를 만들어 보세요.

**힌트**  
이해하기 어려울 때는 위의 `ourName`의 예를 봐 주세요.

# --hints--

`myName`을 `var` 키워드를 사용해 선언하고, 세미콜론(;) 을 마지막에 붙여야 합니다.

```js
assert(/var\s+myName\s*;/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
