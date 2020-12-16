---
id: 59669d08d75b60482359409f
title: 日期格式
challengeType: 5
videoUrl: ''
---

# --description--

任务：

返回包含以下格式的当前日期的数组：

\- 2007-11-23和

\- 2007年11月23日星期日

示例输出： `['2007-11-23', 'Sunday, November 23, 2007']`

# --hints--

`getDateFormats`是一个函数。

```js
assert(typeof getDateFormats === 'function');
```

应该返回一个对象。

```js
assert(typeof getDateFormats() === 'object');
```

应该返回一个包含2个元素的数组。

```js
assert(getDateFormats().length === 2);
```

应以正​​确的格式返回正确的日期

```js
assert.deepEqual(getDateFormats(), dates, equalsMessage);
```

# --solutions--

