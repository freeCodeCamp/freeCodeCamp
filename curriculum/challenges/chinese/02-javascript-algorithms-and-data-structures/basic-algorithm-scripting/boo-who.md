---
id: a77dbc43c33f39daa4429b4f
title: 嘘谁
challengeType: 5
videoUrl: ''
---

# --description--

检查参数是否归类为布尔基元。返回true或false。布尔基元是true和false。如果卡住，请记得使用[Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) 。尝试配对程序。编写自己的代码。

# --hints--

`booWho(true)`应该返回true。

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)`应该返回true。

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])`应该返回false。

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)`应该返回false。

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })`应该返回false。

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)`应该返回false。

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)`应该返回false。

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")`应该返回false。

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")`应该返回false。

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")`应该返回false。

```js
assert.strictEqual(booWho('false'), false);
```

# --solutions--

