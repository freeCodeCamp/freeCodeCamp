---
id: 587d7db8367417b2b2512ba2
title: 限制可能的用户名
challengeType: 1
forumTopicId: 301363
---

# --description--

用户名在互联网上随处可见。它们是用户在自己喜欢的网站上的唯一身份。

需要检索数据库中的所有用户名。以下是用户在创建用户名时必须遵守的一些简单规则。

1) 用户名只能是数字字母字符。

2) 用户名中的数字必须在最后，且数字可以有零个或多个。

3) 用户名字母可以是小写字母和大写字母。

4) 用户名长度必须至少为两个字符。两位用户名只能使用字母。

# --instructions--

修改正则表达式`userCheck`以适合上面列出的约束。

# --hints--

你的正则表达式应该匹配`JACK`。

```js
assert(userCheck.test('JACK'));
```

你的正则表达式不应该匹配`J`。

```js
assert(!userCheck.test('J'));
```

正则表达式应该匹配 `Jo`。

```js
assert(userCheck.test('Jo'));
```

你的正则表达式应该匹配`Oceans11`。

```js
assert(userCheck.test('Oceans11'));
```

你的正则表达式应该匹配`RegexGuru`。

```js
assert(userCheck.test('RegexGuru'));
```

你的正则表达式不应该匹配`007`。

```js
assert(!userCheck.test('007'));
```

你的正则表达式不应该匹配`9`。

```js
assert(!userCheck.test('9'));
```

正则表达式不应该匹配 `A1`。

```js
assert(!userCheck.test('A1'));
```

正则表达式不应该匹配 `BadUs3rnam3`。

```js
assert(!userCheck.test('BadUs3rnam3'));
```

正则表达式应该匹配 `Z97`。

```js
assert(userCheck.test('Z97'));
```

正则表达式不应该匹配 `c57bT3`。

```js
assert(!userCheck.test('c57bT3'));
```

# --solutions--

