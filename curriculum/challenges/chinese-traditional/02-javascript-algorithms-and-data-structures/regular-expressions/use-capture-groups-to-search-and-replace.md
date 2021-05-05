---
id: 587d7dbb367417b2b2512bab
title: 使用捕獲組搜索和替換
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

搜索功能是很有用的。 但是，當搜索同時也執行更改（或替換）匹配文本的操作時，搜索功能就會顯得更加強大。

可以在字符串上使用 `.replace()` 方法來搜索並替換字符串中的文本。 `.replace()` 的輸入首先是想要搜索的正則表達式匹配模式。 第二個參數是用於替換匹配的字符串或用於執行某些操作的函數。

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

`replace` 調用將返回字符串 `The sky is blue.`。

你還可以使用美元符號（`$`）訪問替換字符串中的捕獲組。

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

調用 `replace` 將返回字符串 `Camp Code`。

# --instructions--

使用三個捕獲組編寫一個正則表達式 `fixRegex`，這三個捕獲組將搜索字符串 `one two three` 中的每個單詞。 然後更新 `replaceText` 變量，以字符串 `three two one` 替換 `one two three`，並將結果分配給 `result` 變量。 確保使用美元符號（`$`）語法在替換字符串中使用捕獲組。

# --hints--

你應該使用 `.replace()` 搜索並替換。

```js
assert(code.match(/\.replace\(.*\)/));
```

你的正則表達式應該將字符串 `one two three` 更改爲字符串 `three two one`

```js
assert(result === 'three two one');
```

你不應該改變最後一行。

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` 應該至少使用三個抓取組。

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` 應該使用括號化的子匹配字符串（例如：nth 括號化的子匹配字符串, $n, 對應於第 n 個捕獲組）。

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
