---
id: acda2fb1324d9b0fa741e6b5
title: 끝 부분 확인하기
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

문자열(첫 번째 인자, `str`)이 주어진 대상 문자열(두 번째 인자`target`)로 끝나는지 확인하세요.

이번 도전 과제는 ES2015에 도입된 `.endsWith()`라는 메소드로 *해결*할 수 있습니다. 하지만, 도전 과제라는 의의를 위해 여러분이 JavaScript의 substring 메소드 중 하나를 대신 사용해보면 좋겠습니다.

# --hints--

`confirmEnding("Bastian", "n")`은 `true`를 반환합니다.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")`은 `true`를 반환합니다.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")`은 `false`를 반환합니다.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")`은 `false`를 반환합니다.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")`은 `true`를 반환합니다.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")`은 `true`를 반환합니다.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")`은 `false`를 반환합니다.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")`은 `false`를 반환합니다.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")`은 `false`를 반환합니다.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")`은 `true`를 반환합니다.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

해당 도전 과제를 해결하기 위해 내장 메소드인 `.endsWith()`를 사용하지 않아야 합니다.

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(__helpers.removeJSComments(code)) && !/\['endsWith'\]/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
