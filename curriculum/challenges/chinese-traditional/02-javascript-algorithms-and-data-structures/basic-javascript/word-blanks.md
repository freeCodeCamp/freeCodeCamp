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

思考一下這個句子：它真的非常**\_\_\_\_**，我們**\_\_\_\_**我們自己**\_\_\_\_**。 這個句子有三處缺失：一個形容詞、一個動詞和一個副詞。我們可以將選擇的詞語加進去完成它。 然後我們可以將完成的句子賦給一個變量，如下所示：

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

在這個挑戰中，我們會提供給你一個名詞、一個動詞、一個形容詞和一個副詞。 你需要在我們提供的詞語中，選擇你要使用的詞語來使這個句子變得完整。

你需要使用字符串連接操作符 `+` 和提供的變量 `myNoun`、`myAdjective`、`myVerb` 和 `myAdverb` 來構建一個新的字符串。 然後，將這個改好的新字符串賦值給 `wordBlanks` 變量。 不要去更改已經賦值給這些變量的單詞。

你還需要確認字符串裏的空格，以確保最後的句子裏的每個單詞之間都有空格。 最後的結果應該是一個完整的句子。

# --hints--

`wordBlanks` 應該是一個字符串.

```js
assert(typeof wordBlanks === 'string');
```

不要改變賦值給 `myNoun`, `myVerb`、`myAdjective` 或者`myAdverb` 這些變量的值。

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

不要直接使用 `dog`、`ran`、`big` 或者 `quickly` 的值去創建 `wordBlanks`。

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
