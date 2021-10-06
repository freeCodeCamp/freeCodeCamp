---
id: 587d7db8367417b2b2512ba2
title: 限制可能的用户名
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

用户名在互联网上随处可见。 它们是用户在自己喜欢的网站上的唯一身份。

需要检索数据库中的所有用户名。 以下是用户在创建用户名时必须遵守的一些简单规则。

1) 用户名只能是数字字母字符。

2) 用户名中的数字必须在最后。 数字可以有零个或多个。 用户名不能以数字开头。

3) 用户名字母可以是小写字母和大写字母。

4) 用户名长度必须至少为两个字符。 两位用户名只能使用字母。

# --instructions--

修改正则表达式 `userCheck` 以满足上面列出的约束。

# --hints--

你的正则表达式应该匹配字符串 `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

你的正则表达式不应匹配字符串 `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

你的正则表达式应该匹配字符串 `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

你的正则表达式应该匹配字符串 `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

你的正则表达式应该匹配字符串 `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

你的正则表达式不应匹配字符串 `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

你的正则表达式不应匹配字符串 `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

你的正则表达式不应匹配字符串 `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

你的正则表达式不应匹配字符串 `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

你的正则表达式应该匹配字符串 `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

你的正则表达式不应匹配字符串 `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

你的正则表达式应该匹配字符串 `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

你的正则表达式不应匹配字符串 `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
