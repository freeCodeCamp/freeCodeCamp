---
id: 587d7b7c367417b2b2512b18
title: 자바스크립트 객체에 키-값 추가하기
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

기본적으로, 객체는 단순히 <dfn>키-값</dfn> 쌍의 모음입니다. 다시 말해 객체는 <dfn>속성</dfn>(<dfn>키</dfn>)이라는 고유 식별 값에 매핑된 데이터(<dfn>값</dfn>)입니다. 예시를 보겠습니다.

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

위 코드는 `tekkenCharacter`라는 철권 게임 캐릭터 객체를 정의합니다. 이 객체는 세 개의 속성을 가지는데 각각 특정한 값에 대응합니다. "origin"과 같은 추가적인 속성을 더하고 싶다면 해당 객체에 `origin`을 할당하면 가능합니다.

```js
tekkenCharacter.origin = 'South Korea';
```

이는 점 표기법을 사용합니다. `tekkenCharacter` 객체를 살펴본다면 이제 이 객체는 `origin` 속성을 포함할 것입니다. Hwoarang 또한 뚜렷한 오렌지 색 머리를 가졌습니다. 다음과 같이 대괄호 표기법으로 이 속성을 추가할 수 있습니다.

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

속성이 객체 안에 있거나 속성에 이름을 주기 위해 변수를 사용하고 싶을 때 괄호 표기법이 필요합니다. 위의 경우, 속성은 따옴표로 묶여 문자열로 표시되며 정확히 표시된 대로 추가됩니다. 따옴표가 없다면 이것은 변수로 여겨질 것이며 속성의 이름은 이 변수의 값으로 설정될 것입니다. 여기 변수를 이용한 예시가 있습니다.

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

모든 예를 추가한 후 객체는 다음과 같을 것입니다.

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

`foods` 객체가 세 개의 항목과 함께 생성되었습니다. 원하는 구문을 사용하여 그것에 세 개의 추가 항목을 추가하시오. 값이 `13`인 `bananas`, 값이 `35`인 `grapes` 및 값이 `27`인 `strawberries`입니다.

# --hints--

`foods`는 객체이어야 합니다.

```js
assert(typeof foods === 'object');
```

`foods` 객체는 값이 `13`인 `bananas`라는 키를 가져야 합니다.

```js
assert(foods.bananas === 13);
```

`foods` 객체는 값이 `35`인 `grapes`라는 키를 가져야 합니다.

```js
assert(foods.grapes === 35);
```

`foods` 객체는 값이 `27`인 `strawberries`라는 키를 가져야 합니다.

```js
assert(foods.strawberries === 27);
```

`foods` 객체의 정의는 변하지 않아야 합니다.

```js
assert(
  __helpers.removeJSComments(code).search(/let foods/) === -1 &&
  __helpers.removeJSComments(code).search(/const\s+foods\s*=\s*{\s*apples:\s*25,\s*oranges:\s*32,\s*plums:\s*28\s*};/
) !== -1
);
```

# --seed--

## --seed-contents--

```js
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
