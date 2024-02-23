---
id: 596e414344c3b2872167f0fe
title: 逗号翻转
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Comma quibbling</a> is a task originally set by Eric Lippert in his blog.

# --instructions--

编写一个函数来生成一个字符串输出，它是来自列表/序列的输入单词的串联，其中：

<ol>
  <li>An input of no words produces the output string of just the two brace characters (<code>"{}"</code>)</li>
  <li>仅输入一个单词，例如<code>["ABC"]</code>，生成两个大括号内单词的输出字符串，例如<code>"{ABC}"</code></li>
  <li>输入两个单词，例如 <code>["ABC", "DEF"]</code>，生成两个大括号内的两个单词的输出字符串，单词由字符串 <code>" and "</code> 分隔，例如 <code>"{ABC and DEF}"</code></li>
  <li>输入三个或更多单词，例如 <code>["ABC", "DEF", "G", "H"]</code>，生成除最后一个单词以外的所有单词的输出字符串，由 <code>", "</code> 分隔，最后一个单词由 <code>" and "</code> 分隔的单词以及全部在大括号内；例如<code>"{ABC, DEF, G and H}"</code></li>
</ol>

使用以下一系列输入测试您的函数，在此页面上显示您的输出：

<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**注意：** 对于此任务，假设单词是大写字符的非空字符串。

# --hints--

`quibble` 应该是一个函数。

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` 应该返回一个字符串。

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` 应该返回 “{}”。

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
