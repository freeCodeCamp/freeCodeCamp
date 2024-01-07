---
id: 587d7dbb367417b2b2512bab
title: 使用捕获组搜索和替换
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

搜索功能是很有用的。 但是，当搜索同时也执行更改（或替换）匹配文本的操作时，搜索功能就会显得更加强大。

可以在字符串上使用 `.replace()` 方法来搜索并替换字符串中的文本。 `.replace()` 的输入首先是想要搜索的正则表达式匹配模式。 第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

`replace` 调用将返回字符串 `The sky is blue.`。

你还可以使用美元符号（`$`）访问替换字符串中的捕获组。

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

调用 `replace` 将返回字符串 `Camp Code`。

# --instructions--

使用三个捕获组编写一个正则表达式 `fixRegex`，这三个捕获组将搜索字符串 `one two three` 中的每个单词。 然后更新 `replaceText` 变量，以字符串 `three two one` 替换 `one two three`，并将结果分配给 `result` 变量。 确保使用美元符号（`$`）语法在替换字符串中使用捕获组。

# --hints--

你应该使用 `.replace()` 搜索并替换。

```js
assert(code.match(/\.replace\(.*\)/));
```

你的正则表达式应该将字符串 `one two three` 更改为字符串 `three two one`

```js
assert(result === 'three two one');
```

你不应该改变最后一行。

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` 应该至少使用三个抓取组。

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` 应该使用括号化的子匹配字符串（例如：nth 括号化的子匹配字符串, $n, 对应于第 n 个捕获组）。

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
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
