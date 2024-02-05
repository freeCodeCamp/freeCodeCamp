---
id: 5992e222d397f00d21122931
title: フィボナッチ列
challengeType: 1
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

The Fibonacci Word Sequence may be created in a manner analogous to the Fibonacci Sequence, but it focuses on iterating concatenation.

<pre>Define  F_Word<sub>1</sub>  as  <strong>1</strong>
Define  F_Word<sub>2</sub>  as  <strong>0</strong>
Form   F_Word<sub>3</sub>  as  F_Word<sub>2</sub>   concatenated with  F_Word<sub>1</sub>   i.e.:  <strong>01</strong>
Form   F_Word<sub>n</sub>  as  F_Word<sub>n-1</sub>  concatenated with  F_word<sub>n-2</sub>
</pre>

このチャレンジでは、<a href="https://www.freecodecamp.org/japanese/learn/coding-interview-prep/rosetta-code/entropy" target="_blank" rel="noopener noreferrer nofollow">こちらのロゼッタコードのチャレンジで説明されている</a>エントロピーの計算が必要です。

# --instructions--

最初の `n` 個のフィボナッチ列を返す関数を記述してください。 数値 `n` は関数のパラメータとして与えられます。 この関数はオブジェクトの配列を返す必要があります。 オブジェクトは `{ N: 1, Length: 1, Entropy: 0, Word: '1' }` という形式にする必要があります。 文字列 `Word` に対する `Entropy` を計算し、小数を 8 桁に四捨五入します。 列のインデックスは `1` から始まることに注意してください。

# --hints--

`fibWord` という関数です。

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` は配列を返します。

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` は `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }]` を返します。

```js
assert.deepEqual(fibWord(5), words5);
```

`fibWord(7)` は `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }, { N:6, Length:8, Entropy:0.954434, Word:'01001010' }, { N:7, Length:13, Entropy:0.9612366, Word:'0100101001001' }]` を返します。

```js
assert.deepEqual(fibWord(7), words7);
```

# --seed--

## --after-user-code--

```js
const words5 = [
  { N: 1, Length: 1, Entropy: 0, Word: '1' },
  { N: 2, Length: 1, Entropy: 0, Word: '0' },
  { N: 3, Length: 2, Entropy: 1, Word: '01' },
  { N: 4, Length: 3, Entropy: 0.91829583, Word: '010' },
  { N: 5, Length: 5, Entropy: 0.97095059, Word: '01001' }
];

const words7 = [
  { N: 1, Length: 1, Entropy: 0, Word: '1' },
  { N: 2, Length: 1, Entropy: 0, Word: '0' },
  { N: 3, Length: 2, Entropy: 1, Word: '01' },
  { N: 4, Length: 3, Entropy: 0.91829583, Word: '010' },
  { N: 5, Length: 5, Entropy: 0.97095059, Word: '01001' },
  { N: 6, Length: 8, Entropy: 0.954434, Word: '01001010' },
  { N: 7, Length: 13, Entropy: 0.9612366, Word: '0100101001001' }
];
```

## --seed-contents--

```js
function fibWord(n) {

}
```

# --solutions--

```js
// Round to digits
function roundFloat(num, digits) {
  return Math.round(num * 10.0**digits) / (10.0**digits);
}

// Entropy calculation for string with only 0 and 1
function entropy(word) {
  function digitEntropy(count) {
    return count < 1 ? 0
      : - count / word.length * Math.log2(count / word.length);
  }
  const numZeros = word.split('').filter(e => e === '0').length;
  const numOnes  = word.length - numZeros;
  return roundFloat(digitEntropy(numZeros) + digitEntropy(numOnes), 8);
}

// Compute array of Fibonacci words
function fibWord(n) {
  return [...Array(n).keys()]
    .reduce((words, i) => {
      const word = i === 0 ? "1"
                 : i === 1 ? "0"
                 : words[i - 1].Word + words[i - 2].Word;
      words.push(
        { N: i + 1, Length: word.length, Entropy: entropy(word), Word: word }
      );
      return words;
    }, []);
}
```
