---
id: 596a8888ab7c01048de257d5
title: ディープコピー
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

与えられたオブジェクトのディープコピーを返す関数を作成します。 コピーは与えられたオブジェクトと同じであってはなりません。

このタスクは次のものをテストするものではありません。

<ul>
  <li>関数のプロパティを持つオブジェクト</li>
  <li>日付オブジェクト、または日付オブジェクトであるプロパティを持つオブジェクト</li>
  <li>RegEx、またはRegExオブジェクトであるプロパティを持つオブジェクト</li>
  <li>プロトタイプのコピー</li>
</ul>

# --hints--

`deepcopy` という関数です。

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` はオブジェクトを返します。

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` は元のオブジェクトと同じオブジェクトを返しません。

```js
assert(deepcopy(obj2) != obj2);
```

配列を含むオブジェクトが渡された場合、 `deepcopy` はそのオブジェクトのディープコピーを返します。

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

別のオブジェクトを含むオブジェクトが渡された場合、 `deepcopy` はそのオブジェクトのディープコピーを返します。

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --seed--

## --after-user-code--

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};
```

## --seed-contents--

```js
function deepcopy(obj) {

  return true;
}
```

# --solutions--

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```
