---
id: 56533eb9ac21ba0edf2244de
title: 在 Switch 语句中添加默认选项
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
---

# --description--

在`switch`语句中你可能无法用 case 来指定所有情况，这时你可以添加 default 语句。当再也找不到 case 匹配的时候 default 语句会执行，非常类似于 if/else 组合中的 else 语句。

`default`语句应该是最后一个 case。

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

写一个 switch 语句，根据下面的条件来设置`answer`的switch语句：  
`"a"` - "apple"  
`"b"` - "bird"  
`"c"` - "cat"  
`default` - "stuff"

# --hints--

`switchOfStuff("a")`应该有一个值为 "apple"。

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")`应该有一个值为 "bird"。

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")`应该有一个值为 "cat"。

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")`应该有一个值为 "stuff"。

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)`应该有一个值为 "stuff"。

```js
assert(switchOfStuff(4) === 'stuff');
```

不能使用任何`if`或`else`表达式。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你应该有一个`default`表达式。

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

你应该有至少 3 个`break`表达式。

```js
assert(code.match(/break/g).length > 2);
```

# --solutions--

