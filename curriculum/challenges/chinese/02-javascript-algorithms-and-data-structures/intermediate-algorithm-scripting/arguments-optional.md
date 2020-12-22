---
id: a97fd23d9b809dac9921074f
title: 可选参数
challengeType: 5
forumTopicId: 14271
---

# --description--

创建一个将两个参数相加的函数。如果只传入了一个参数，则返回一个函数，需要传入一个参数并返回总和。

比如，`addTogether(2, 3)`应该返回`5`。而`addTogether(2)`应该返回一个函数。

调用这个返回的函数，传入一个值，返回总和：

`var sumTwoAnd = addTogether(2);`

`sumTwoAnd(3)`此时应返回`5`。

只要其中任何一个参数不是数字，那就应返回`undefined`。

# --hints--

`addTogether(2, 3)`应该返回5。

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(2)(3)`应该返回5。

```js
assert.deepEqual(addTogether(2)(3), 5);
```

`addTogether("http://bit.ly/IqT6zt")`应返回undefined。

```js
assert.isUndefined(addTogether('http://bit.ly/IqT6zt'));
```

`addTogether(2, "3")`应返回undefined。

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])`应返回undefined。

```js
assert.isUndefined(addTogether(2)([3]));
```

# --solutions--

