---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence:

```md
It was really ____, and we ____ ourselves ____.
```

이 문장은 형용사, 동사, 부사의 3가지가 빈칸으로 되어 있어서, 우리는 좋아하는 단어를 넣어 문장을 완성시킬 수 있습니다. 그리고 우리는 다음과 같이 완성한 문장을 변수에 할당할 수 있습니다:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

이 도전에서, 우리는 명사, 동사, 형용사, 부사를 제시했습니다. 당신은 우리가 제시한 단어들 속에서, 직접 선택한 단어를 사용해서 문장을 완성할 필요가 있습니다.

당신은 제공된 변수 (`myNoun`, `myAdjective`, `myVerb`, and `myAdverb`) 를 사용해서 새로운 문자열을 작성하기 위해, 문자열 연결 연산자 `+`를 사용할 필요가 있습니다. 그리고 당신은 작성한 문자열을 `wordBlanks` 변수에 할당합니다. 변수에 할당되어 있는 단어를 변경해서는 안됩니다.

당신은 문자열 안의 공백에도 주의할 필요가 있습니다. 최종 문장에서는 모든 단어 사이에 공백을 포함하도록 합니다. 결과는 완전한 문장이 되어야 합니다.

# --hints--

`wordBlanks`은 문자열이어야 합니다.

```js
assert(typeof wordBlanks === 'string');
```

당신은 `myNoun`, `myVerb`, `myAdjective` or `myAdverb`에 할당된 값을 변화시키면 안됩니다.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

`wordBlanks`을 작성하기 위해서 `dog`, `ran`, `big`, 또는 `quickly`의 값들을 직접적으로 사용해서는 안됩니다.

```js
const newCode = removeAssignments(__helpers.removeJSComments(code));
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` should contain all of the words assigned to the variables `myNoun`, `myVerb`, `myAdjective` and `myAdverb` separated by non-word characters (and any additional words of your choice).

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
