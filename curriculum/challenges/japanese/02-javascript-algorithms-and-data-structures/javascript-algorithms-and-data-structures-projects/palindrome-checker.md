---
id: aaa48de84e1ecc7c742e1124
title: 回文チェッカー
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

与えられた文字列が回文の場合は、`true` を返してください。 それ以外の場合は、`false` を返してください。

ここでの<dfn>回文</dfn>とは、英語で句読点、大文字と小文字、スペースを無視して、前からでも後ろからでも同じ綴りとなる単語または文章です。

**注:** **英数字以外のすべての文字** (句読点、スペース、記号) を削除する必要があります。また、回文かどうかをチェックするために、すべてを同じケース (小文字または大文字) に変換する必要があります。

`racecar`、`RaceCar`、`race CAR` など、さまざまな形式の文字列を渡します。

`2A3*3a2`、`2A3 3a2`、`2_A3*3#A2` など、特殊記号を含む文字列も渡します。

# --hints--

`palindrome("eye")` はブール値を返す必要があります。

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` は `true` を返す必要があります。

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` は `true` を返す必要があります。

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` は `true` を返す必要があります。

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` は `false` を返す必要があります。

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` は `true` を返す必要があります。

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` は `true` を返す必要があります。

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` は `false` を返す必要があります。

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` は `false` を返す必要があります。

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` は `true` を返す必要があります。

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` は `false` を返す必要があります。

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` は `true` を返す必要があります。

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` は `false` を返す必要があります。

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
