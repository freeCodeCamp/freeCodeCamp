---
id: 597089c87eec450c68aa1643
title: 定义原始数据类型
challengeType: 5
videoUrl: ''
---

# --description--

任务：

定义一个行为类似于整数但最低有效值为1且最高有效值为10的类型。

错误：如果您尝试实例化一个值超出1 - 10的`Num` ，它应该抛出一个错误消息为`'Out of range'`的`TypeError` 。如果您尝试使用不是`Num`的值实例化`Num` ，则应抛出`TypeError`并显示错误消息`'Not a Number'` 。

# --hints--

`Num`应该是一个功能。

```js
assert(typeof Num === 'function');
```

`new Num(4)`应返回一个对象。

```js
assert(typeof new Num(4) === 'object');
```

`new Num(\'test\')`应抛出一个带有消息“非数字”的TypeError。

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)`应该抛出一个带有消息“超出范围”的TypeError。

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)`应该抛出一个带有消息“超出范围”的TypeError。

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)`应抛出一个带有消息“超出范围”的TypeError。

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)`应抛出一个带有消息“超出范围”的TypeError。

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)`应该等于7。

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)`应该等于-1。

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)`应该等于12。

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)`应该等于0.75。

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)`应该是真的。

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)`应该是假的。

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()`应返回\\'5 \\'

```js
assert.equal(new Num(5).toString(), '5');
```

# --solutions--

