---
id: af2170cad53daa0770fabdea
title: 突变
challengeType: 5
videoUrl: ''
---

# --description--

如果数组的第一个元素中的字符串包含数组第二个元素中字符串的所有字母，则返回true。例如， `["hello", "Hello"]`应该返回true，因为第二个字符串中的所有字母都出现在第一个字母中，忽略大小写。参数`["hello", "hey"]`应返回false，因为字符串“hello”不包含“y”。最后， `["Alien", "line"]`应该返回true，因为“line”中的所有字母都出现在“Alien”中。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`mutation(["hello", "hey"])`应该返回false。

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])`应该返回true。

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])`应该返回true。

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])`应该返回true。

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])`应该返回true。

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])`应该返回true。

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])`应该返回true。

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])`应该返回false。

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])`应该返回false。

```js
assert(mutation(['voodoo', 'no']) === false);
```

# --solutions--

