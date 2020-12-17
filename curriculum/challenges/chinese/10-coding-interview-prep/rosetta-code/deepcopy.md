---
id: 596a8888ab7c01048de257d5
title: deepcopy的
challengeType: 5
videoUrl: ''
---

# --description--

任务：

编写一个返回给定对象的深层副本的函数。

副本不得与给定的对象相同。

此任务不会测试：

具有属性属性的对象Date对象或具有Date对象属性的对象RegEx或具有RegEx对象属性的对象原型复制

# --hints--

`deepcopy`应该是一个功能。

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})`应返回一个对象。

```js
assert(typeof deepcopy(obj1) === 'object');
```

不应该返回提供的相同对象。

```js
assert(deepcopy(obj2) != obj2);
```

传递包含数组的对象时，应返回该对象的深层副本。

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

传递包含另一个对象的对象时，应返回该对象的深层副本。

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --solutions--

