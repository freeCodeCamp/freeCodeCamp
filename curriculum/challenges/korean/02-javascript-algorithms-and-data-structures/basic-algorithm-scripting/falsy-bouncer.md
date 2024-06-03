---
id: adf08ec01beb4f99fc7a68f2
title: 거짓값 바운서
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

배열로부터 모든 거짓값들을 제거하시오. 기존 배열을 변형하지 않으면서 새로운 배열을 반환하시오.

자바스크립트에서 거짓값들은 `false`, `null`, `0`, `""`, `undefined`, 그리고 `NaN`입니다.

힌트: 모든 값들을 불리언으로 변환해보세요.

# --hints--

`bouncer([7, "ate", "", false, 9])`는 `[7, "ate", 9]`을 반환해야 합니다.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])`는 `["a", "b", "c"]`을 반환해야 합니다.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])`는 `[]`을 반환해야 합니다.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])`는 `[1, 2]`을 반환해야 합니다.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

`arr`을 변형시키지 말아야 합니다.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi'])
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
