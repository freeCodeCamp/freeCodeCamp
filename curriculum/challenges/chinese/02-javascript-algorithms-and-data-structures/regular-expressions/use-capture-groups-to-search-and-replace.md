---
id: 587d7dbb367417b2b2512bab
title: 使用捕获组搜索和替换
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

搜索功能是很有用的。但是，当搜索同时也执行更改（或替换）匹配文本的操作时，搜索功能就会显得更加强大。

可以使用字符串上`.replace()`方法来搜索并替换字符串中的文本。`.replace()`的输入首先是想要搜索的正则表达式匹配模式，第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

你还可以使用美元符号（`$`）访问替换字符串中的捕获组。

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

# --instructions--

编写一个正则表达式，以搜索字符串`"good"`。然后更新变量`replaceText`，用字符串`"okey-dokey"`替换`"good"`。

# --hints--

你应该使用`.replace()`搜索并替换。

```js
assert(code.match(/\.replace\(.*\)/));
```

你的正则表达式应该把`'This sandwich is good.'`变成`'This sandwich is okey-dokey.'`。

```js
assert(
  result == 'This sandwich is okey-dokey.' && replaceText === 'okey-dokey'
);
```

你不应该改变最后一行。

```js
assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/));
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
