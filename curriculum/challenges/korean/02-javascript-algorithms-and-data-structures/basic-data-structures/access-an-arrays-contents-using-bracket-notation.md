---
id: 5a661e0f1068aca922b3ef17
title: 대괄호 표기법을 사용하여 배열의 내용에 접근하기
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

자료 구조의 핵심 기능은 당연히 자료를 저장하는 것뿐만 아니라 필요시 해당 자료를 불러오는 것입니다. 이미 배열을 생성하는 법을 배웠으니 이제 배열 안의 정보에 접근하는 법에 대하여 생각해 보겠습니다.

아래와 같이 간단한 배열을 정의할 때, 이 배열에는 3개의 요소가 있습니다.

```js
let ourArray = ["a", "b", "c"];
```

배열의 각 요소는 <dfn>인덱스(index)</dfn>를 가집니다. 이 인덱스는 배열의 해당 요소의 위치와 이 위치를 참조하는 데 사용됩니다. 그러나 여기서 중요하게 알아둘 것은 자바스크립트 배열은 <dfn>0-인덱스 기반(zero-indexed)</dfn>인데, 배열의 첫 요소가 첫번째 위치가 아니라 실제로 ***0번째(zeroth)*** 위치라는 의미입니다. 배열의 한 요소를 얻으려면 인덱스를 대괄호 안에 두고 배열의 끝에 붙이거나 더 일반적으로는 배열 객체를 참조하는 변수에 붙이면 됩니다. 이것이 <dfn>대괄호 표기법</dfn>입니다. 예를 들면, `ourArray`에서 `a` 를 얻고 변수에 저장하려면 다음과 같은 코드로 가능합니다.

```js
let ourVariable = ourArray[0];
```

이제 `ourVariable`는 `a`라는 값을 갖게 됩니다.

인덱스와 관련된 값에 접근하는 것 이외에도 같은 방법을 사용해 한 인덱스를 어떤 값으로 *설정*도 할 수 있습니다.

```js
ourArray[1] = "not b anymore";
```

대괄호 표기법을 사용하여 인덱스 1에 있는 요소를 문자열 `b`에서 `not b anymore`로 다시 설정하였습니다. 이제 `ourArray`는 `["a", "not b anymore", "c"]`입니다.

# --instructions--

이 과제를 마치기 위해서는 `myArray`의 두 번째 위치(인덱스 `1`)에 문자 `b` 이외의 원하는 값을 설정하시오.

# --hints--

`myArray[0]`는 문자 `a`와 같아야 합니다.

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]`는 문자 `b`와 같지 않아야 합니다.

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]`는 문자 `c`와 같아야 합니다.

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]`는 문자 `d`와 같아야 합니다.

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
