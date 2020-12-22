---
id: 5966c21cf732a95f1b67dd28
title: 日期操纵
challengeType: 5
videoUrl: ''
---

# --description--

任务：

给定EST中的日期字符串，将给定日期输出为字符串，并添加12小时。

时区应该保留。

示例输入：

`"March 7 2009 7:30pm EST"`

输出示例：

`"March 8 2009 7:30am EST"`

# --hints--

`add12Hours`是一个功能。

```js
assert(typeof add12Hours === 'function');
```

`add12Hours(dateString)`应该返回一个字符串。

```js
assert(typeof add12Hours('January 17 2017 11:43am EST') === 'string');
```

`add12Hours("" + tests[0] + "")`应该返回`"" + answers[0] + ""`

```js
assert(
  add12Hours('January 17 2017 11:43am EST') === 'January 17 2017 11:43pm EST'
);
```

汉德尔应该改变一天。 `add12Hours("" + tests[1] + "")`应返回`"" + answers[1] + ""`

```js
assert(add12Hours('March 7 2009 7:30pm EST') === 'March 8 2009 7:30am EST');
```

汉德尔月份应该在闰年中发生变化。 `add12Hours("" + tests[2] + "")`应返回`"" + answers[2] + ""`

```js
assert(add12Hours('February 29 2004 9:15pm EST') === 'March 1 2004 9:15am EST');
```

应该在一个共同的年份改变汉德尔月份。 `add12Hours("" + tests[3] + "")`应该返回`"" + answers[3] + ""`

```js
assert(add12Hours('February 28 1999 3:15pm EST') === 'March 1 1999 3:15am EST');
```

汉德尔应该改变一年。 `add12Hours("" + tests[4] + "")`应该返回`"" + answers[4] + ""`

```js
assert(
  add12Hours('December 31 2020 1:45pm EST') === 'January 1 2021 1:45am EST'
);
```

# --solutions--

