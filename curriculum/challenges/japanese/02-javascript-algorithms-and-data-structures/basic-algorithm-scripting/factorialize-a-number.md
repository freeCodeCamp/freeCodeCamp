---
id: a302f7aae1aa3152a5b413bc
title: 階乗計算
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

指定された整数の階乗を返してください。

指定された整数が `n` の場合、階乗は `n` 以下のすべての正の整数の積となります。

階乗はよく `n!` と簡略表記されます。

例: `5! = 1 * 2 * 3 * 4 * 5 = 120`

関数には 0 以上の整数だけが与えられます。

# --hints--

`factorialize(5)` は数値を返す必要があります。

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` は `120` を返す必要があります。

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` は `3628800` を返す必要があります。

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` は `2432902008176640000` を返す必要があります。

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` は `1` を返す必要があります。

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
