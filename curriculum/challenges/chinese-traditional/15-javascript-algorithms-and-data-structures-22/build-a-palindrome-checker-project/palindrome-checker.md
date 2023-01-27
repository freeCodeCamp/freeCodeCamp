---
id: aaa48de84e1ecc7c742e1124
title: 構建一個迴文檢測器
challengeType: 5
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

如果傳入的字符串是迴文字符串，則返回 `true`。 否則，返回 `false` 。

迴文（<dfn>palindrome</dfn>），指在忽略標點符號、大小寫和空格的前提下，正着讀和反着讀一模一樣。

**注意：** 檢查迴文時，你需要先去除 **所有非字母數字的字符**（標點、空格和符號），並將所有字母都轉換成大寫或都轉換成小寫。

我們會傳入具有不同格式的字符串，如 `racecar`、`RaceCar` 和 `race CAR` 等等。

我們也會傳入一些包含特殊符號的字符串，例如 `2A3*3a2`、`2A3 3a2`、`2_A3*3#A2`。

# --hints--

`palindrome("eye")` 應返回一個布爾值。

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` 應返回 `true`。

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` 應返回 `true`。

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` 應返回 `true`。

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` 應返回 `false`。

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` 應返回 `true`。

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` 應返回 `true`。

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` 應返回 `false`。

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` 應返回 `false`。

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` 應返回 `true`。

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` 應返回 `false`。

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` 應返回 `true`。

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` 應返回 `false`。

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
