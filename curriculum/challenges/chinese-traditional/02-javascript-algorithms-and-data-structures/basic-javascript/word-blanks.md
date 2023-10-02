---
id: 56533eb9ac21ba0edf2244bb
title: 填詞造句
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

給你一些不完整的句子，這些句子會缺少一些例如名詞、動詞、形容詞或者副詞之類的字詞。 然後你需要使用你選擇的詞語去填補這些缺失的地方，使得這個句子變得完整且有意義。

考慮這句話：

```md
It was really ____, and we ____ ourselves ____.
```

這句話有三個缺失的部分 - 形容詞、動詞和副詞，我們可以選擇合適單詞填入完成它。 然後將完成的句子賦值給變量，如下所示：

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

在這個挑戰中，我們爲你提供名詞、動詞、形容詞和副詞。 你需要使用合適單詞以及我們提供的單詞來形成完整的句子。

你需要使用字符串連接運算符 `+` 來拼接字符串變量：`myNoun`、`myAdjective`、`myVerb` 和 `myAdverb`，以構建一個新字符串。 然後，將新字符串賦給 `wordBlanks` 變量。 你不應該更改分配給變量的單詞。

你還需要考慮字符串中的空格，確保句子的所有單詞之間有空格。 結果應該是一個完整的句子。

# --hints--

`wordBlanks` 應該是一個字符串。

```js
assert(typeof wordBlanks === 'string');
```

你不能改變賦給 `myNoun`、`myVerb`、`myAdjective` 或者 `myAdverb` 的值。

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

你不應該直接使用 `dog`、`ran`、`big` 或 `quickly` 來創建 `wordBlanks`。

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` 應該包含分配給變量 `myNoun`、`myVerb`、`myAdjective` 和 `myAdverb` 的所有單詞，用非單詞字符（和你選擇的任何其他單詞）分隔。

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
