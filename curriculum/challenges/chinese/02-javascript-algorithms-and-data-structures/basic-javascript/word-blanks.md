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

思考一下这个句子：它真的非常**\_\_\_\_**，我们**\_\_\_\_**我们自己**\_\_\_\_**。 这个句子有三处缺失：一个形容词、一个动词和一个副词。我们可以将选择的词语加进去完成它。 然后我们可以将完成的句子赋给一个变量，如下所示：

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

在这个挑战中，我们会提供给你一个名词、一个动词、一个形容词和一个副词。 你需要在我们提供的词语中，选择你要使用的词语来使这个句子变得完整。

你需要使用字符串连接操作符 `+` 和提供的变量 `myNoun`、`myAdjective`、`myVerb` 和 `myAdverb` 来构建一个新的字符串。 然后，将这个改好的新字符串赋值给 `wordBlanks` 变量。 不要去更改已经赋值给这些变量的单词。

你还需要确认字符串里的空格，以确保最后的句子里的每个单词之间都有空格。 最后的结果应该是一个完整的句子。

# --hints--

`wordBlanks` 应该是一个字符串.

```js
assert(typeof wordBlanks === 'string');
```

不要改变赋值给 `myNoun`, `myVerb`、`myAdjective` 或者`myAdverb` 这些变量的值。

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

不要直接使用 `dog`、`ran`、`big` 或者 `quickly` 的值去创建 `wordBlanks`。

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
