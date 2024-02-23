---
id: 596e414344c3b2872167f0fe
title: 逗號翻轉
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Comma quibbling</a> is a task originally set by Eric Lippert in his blog.

# --instructions--

編寫一個函數來生成一個字符串輸出，它是來自列表/序列的輸入單詞的串聯，其中：

<ol>
  <li>An input of no words produces the output string of just the two brace characters (<code>"{}"</code>)</li>
  <li>僅輸入一個單詞，例如<code>["ABC"]</code>，生成兩個大括號內單詞的輸出字符串，例如<code>"{ABC}"</code></li>
  <li>輸入兩個單詞，例如 <code>["ABC", "DEF"]</code>，生成兩個大括號內的兩個單詞的輸出字符串，單詞由字符串 <code>" and "</code> 分隔，例如 <code>"{ABC and DEF}"</code></li>
  <li>輸入三個或更多單詞，例如 <code>["ABC", "DEF", "G", "H"]</code>，生成除最後一個單詞以外的所有單詞的輸出字符串，由 <code>", "</code> 分隔，最後一個單詞由 <code>" and "</code> 分隔的單詞以及全部在大括號內；例如<code>"{ABC, DEF, G and H}"</code></li>
</ol>

使用以下一系列輸入測試您的函數，在此頁面上顯示您的輸出：

<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**注意：** 對於此任務，假設單詞是大寫字符的非空字符串。

# --hints--

`quibble` 應該是一個函數。

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` 應該返回一個字符串。

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` 應該返回 “{}”。

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` should return `"{ABC}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` should return `"{ABC and DEF}"`.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` should return `"{ABC, DEF, G and H}"`.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC, DEF, G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(", ") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
