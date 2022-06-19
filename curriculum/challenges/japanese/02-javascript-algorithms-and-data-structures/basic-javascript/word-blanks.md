---
id: 56533eb9ac21ba0edf2244bb
title: 文章穴埋め
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

名詞、動詞、形容詞、副詞など、いくつかの単語が空欄となっている文章が提示されます。 そして、自由に選んだ言葉で空欄を埋めて、意味が通る文章を完成させます。

次の文章を考えてみましょう 。「It was really **\_\_\_\_**, and we **\_\_\_\_** ourselves **\_\_\_\_**」。 この文章は形容詞、動詞、副詞の 3 つが空欄になっており、好きな単語を入れて文章を完成させることができます。 そして、次のように完成した文章を変数に代入します。

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

このチャレンジでは、名詞、動詞、形容詞、副詞が提示されます。 提示された単語と、自分の選んだ言葉を使用して文章を完成させてください。

用意された変数 (`myNoun`、`myAdjective`、`myVerb`、`myAdverb`) を使用して新しい文字列を作成するために、文字列連結演算子 `+` を使用する必要があります。 そして、作成した文字列を `wordBlanks` 変数に代入します。 あらかじめ変数に代入されている単語を変更してはいけません。

文字列内のスペースにも気を付ける必要があります。最終的な文章ではすべての単語間にスペースが含まれるようにします。 結果が完全な文章になるようにしてください。

# --hints--

`wordBlanks` は文字列である必要があります。

```js
assert(typeof wordBlanks === 'string');
```

`myNoun`、`myVerb`、`myAdjective`、`myAdverb` に割り当てられた値を変更しないでください。

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

`wordBlanks` を作成するために、`dog`、`ran`、`big`、`quickly` の値を直接使用しないでください。

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` には変数の `myNoun`、`myVerb`、`myAdjective`、`myAdverb` に割り当てられた単語がすべて含まれている必要があり、それらの間は単語以外の文字 (および、あなたが追加した単語) で区切られる必要があります。

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
