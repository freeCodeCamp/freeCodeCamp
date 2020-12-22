---
id: 56533eb9ac21ba0edf2244e0
title: 用一个 Switch 语句来替代多个 if else 语句
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
---

# --description--

如果你有多个选项需要选择，`switch`语句写起来会比多个串联的`if`/`if else`语句容易些，譬如:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

可以被下面替代：

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

把串联的`if`/`if else`语句改成`switch`语句。

# --hints--

不要使用`else`表达式。

```js
assert(!/else/g.test(code));
```

不要使用`if`表达式。

```js
assert(!/if/g.test(code));
```

你应该有至少 4 个`break`表达式。

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")`应该为 "Marley"。

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)`应该为 "The Answer"。

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)`应该为 "There is no

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)`应该为 "Missed me by this much!"。

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)`应该为 "Ate Nine"。

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")`应该为 "" (empty string)。

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)`应该为 "" (empty string)。

```js
assert(chainToSwitch(156) === '');
```

# --solutions--

