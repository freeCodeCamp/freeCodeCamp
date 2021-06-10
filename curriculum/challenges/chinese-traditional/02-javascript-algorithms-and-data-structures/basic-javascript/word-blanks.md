---
id: 56533eb9ac21ba0edf2244bb
title: 填詞造句
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

現在，我們來用字符串的相關知識實現一個 "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" 類的文字遊戲，稱爲 "Word Blanks"。 你將創建一個（可選幽默的）“填空”樣式句子。

在 "Mad Libs" 遊戲中，提供一個缺少一些單詞的句子，缺少的單詞包括名詞、動詞、形容詞和副詞等。 然後，你選擇一些單詞填寫句子缺失的地方，使句子完整並且有意義。

思考一下這句話 - It was really **\_\_\_\_**, and we **\_\_\_\_** ourselves **\_\_\_\_**。 這句話有三個缺失的部分 - 形容詞、動詞和副詞，選擇合適單詞填入完成它。 然後將完成的句子賦值給變量，如下所示：

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

在這個挑戰中，我們爲你提供名詞、動詞、形容詞和副詞。 你需要使用合適單詞以及我們提供的單詞來形成完整的句子。

你需要使用字符串連接運算符 `+` 來拼接字符串變量：`myNoun`、`myAdjective`、`myVerb` 和 `myAdverb` 來構建一個新字符串。 然後，將新字符串賦給 `wordBlanks` 變量。 您不應該更改分配給變量的單詞。

你還需要考慮字符串中的空格，確保句子的所有單詞之間有空格。 結果應該是一個完整的句子。

# --hints--

`wordBlanks` 應該返回一個字符串。

```js
assert(typeof wordBlanks === 'string');
```

不能改變 `myNoun`、`myVerb`、`myAdjective` 或者 `myAdverb` 的值。

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

您不應該直接使用 `dog`、`ran`、`big` 或 `quickly` 來創建 `wordBlanks`。

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` 應包含賦值給變量 `myNoun`、`myVerb`、`myAdjective` 和 `myAdverb` 的所有單詞，並用非單詞字符（以及 madlib 中的其它單詞）分隔。

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
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
