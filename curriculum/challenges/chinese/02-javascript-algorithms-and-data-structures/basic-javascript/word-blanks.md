---
id: 56533eb9ac21ba0edf2244bb
title: 填词造句
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

给你一些不完整的句子，这些句子会缺少一些例如名词、动词、形容词或者副词之类的字词。 然后你需要使用你选择的词语去填补这些缺失的地方，使得这个句子变得完整且有意义。

考虑这句话：

```md
It was really ____, and we ____ ourselves ____.
```

这句话有三个缺失的部分 - 形容词、动词和副词，我们可以选择合适单词填入完成它。 然后将完成的句子赋值给变量，如下所示：

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

在这个挑战中，我们为你提供名词、动词、形容词和副词。 你需要使用合适单词以及我们提供的单词来形成完整的句子。

你需要使用字符串连接运算符 `+` 来拼接字符串变量：`myNoun`、`myAdjective`、`myVerb` 和 `myAdverb`，以构建一个新字符串。 然后，将新字符串赋给 `wordBlanks` 变量。 你不应该更改分配给变量的单词。

你还需要考虑字符串中的空格，确保句子的所有单词之间有空格。 结果应该是一个完整的句子。

# --hints--

`wordBlanks` 应该是一个字符串。

```js
assert(typeof wordBlanks === 'string');
```

你不能改变赋给 `myNoun`、`myVerb`、`myAdjective` 或者 `myAdverb` 的值。

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

你不应该直接使用 `dog`、`ran`、`big` 或 `quickly` 来创建 `wordBlanks`。

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` 应该包含分配给变量 `myNoun`、`myVerb`、`myAdjective` 和 `myAdverb` 的所有单词，用非单词字符（和你选择的任何其他单词）分隔。

```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
