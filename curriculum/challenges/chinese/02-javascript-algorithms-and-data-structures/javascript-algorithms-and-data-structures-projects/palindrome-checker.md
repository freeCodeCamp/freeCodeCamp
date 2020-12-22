---
id: aaa48de84e1ecc7c742e1124
title: 回文检查器
challengeType: 5
forumTopicId: 16004
---

# --description--

如果给定的一个字符串是回文，那么返回`true`，否则返回`false`。

<dfn>palindrome（回文）</dfn>，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。

**注意：**  
检查回文时，你需要先除去**所有非字母数字的字符**（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。

我们将会传入不同格式的字符串，例如：`"racecar"`、`"RaceCar"`、`"race CAR"`等等。

我们也会传入一些包含特殊符号的字符串，例如`"2A3*3a2"`，`"2A3 3a2"`和`"2_A3*3#A2"`。

# --hints--

`palindrome('eye')`应该返回一个布尔值。

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome('eye')`应该返回 true。

```js
assert(palindrome('eye') === true);
```

`palindrome('_eye')`应该返回 true。

```js
assert(palindrome('_eye') === true);
```

`palindrome('race car')`应该返回 true。

```js
assert(palindrome('race car') === true);
```

`palindrome('not a palindrome')`应该返回 false。

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome('A man, a plan, a canal. Panama')`应该返回 true。

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome('never odd or even')`应该返回 true。

```js
assert(palindrome('never odd or even') === true);
```

`palindrome('nope')`应该返回 false。

```js
assert(palindrome('nope') === false);
```

`palindrome('almostomla')`应该返回 false。

```js
assert(palindrome('almostomla') === false);
```

`palindrome('My age is 0, 0 si ega ym.')`应该返回 true。

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome('1 eye for of 1 eye.')`应该返回 false。

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")`应该返回 true。

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome('five| /|four')`应该返回 false。

```js
assert(palindrome('five|_/|four') === false);
```

# --solutions--

