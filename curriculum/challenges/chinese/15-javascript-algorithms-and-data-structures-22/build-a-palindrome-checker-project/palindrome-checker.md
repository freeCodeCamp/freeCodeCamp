---
id: aaa48de84e1ecc7c742e1124
title: 构建一个回文检测器
challengeType: 5
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

如果传入的字符串是回文字符串，则返回 `true`。 否则，返回 `false` 。

回文（<dfn>palindrome</dfn>），指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。

**注意：** 检查回文时，你需要先去除 **所有非字母数字的字符**（标点、空格和符号），并将所有字母都转换成大写或都转换成小写。

我们会传入具有不同格式的字符串，如 `racecar`、`RaceCar` 和 `race CAR` 等等。

我们也会传入一些包含特殊符号的字符串，例如 `2A3*3a2`、`2A3 3a2`、`2_A3*3#A2`。

# --hints--

`palindrome("eye")` 应返回一个布尔值。

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` 应返回 `true`。

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` 应返回 `true`。

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` 应返回 `true`。

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` 应返回 `false`。

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` 应返回 `true`。

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` 应返回 `true`。

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` 应返回 `false`。

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` 应返回 `false`。

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` 应返回 `true`。

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` 应返回 `false`。

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` 应返回 `true`。

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` 应返回 `false`。

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}

palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```
