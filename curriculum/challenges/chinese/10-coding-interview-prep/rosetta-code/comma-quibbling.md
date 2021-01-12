---
id: 596e414344c3b2872167f0fe
title: 逗号狡猾
challengeType: 5
videoUrl: ''
dashedName: comma-quibbling
---

# --description--

<p> Comma quibbling是Eric Lippert在他的<a href='http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx' title='链接：http：//blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx'>博客中</a>最初设定的任务。 </p>任务： <p>编写一个函数来生成一个字符串输出，它是列表/序列中输入字的串联，其中： </p>没有单词的输入产生仅两个大括号字符“{}”的输出字符串。只有一个单词的输入，例如\[“ABC”]，会在两个大括号内产生单词的输出字符串，例如“{ABC}”。两个单词的输入，例如\[“ABC”，“DEF”]，产生两个大括号内的两个单词的输出字符串，其中单词由字符串“和”分隔，例如“{ABC和DEF}”。三个或更多单词的输入，例如\[“ABC”，“DEF”，“G”，“H”]，产生除了最后一个单词之外的所有输出字符串，用“，”分隔，最后一个单词用“和”分隔。 “并且都在括号内;例如“{ABC，DEF，G和H}”。 <p>在此页面上显示输出的以下一系列输入测试您的功能： </p> \[]＃（无输入字）。 \[“ABC”] \[“ABC”，“DEF”] \[“ABC”，“DEF”，“G”，“H”] <p>注意：假设此单词是此任务的非空字符串大写字符。 </p>

# --hints--

`quibble`是一种功能。

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])`应该返回一个字符串。

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])`应返回“{}”。

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])`应该返回“{ABC}”。

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])`应返回“{ABC和DEF}”。

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])`应返回“{ABC，DEF，G和H}”。

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC,DEF,G and H}"];
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
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
