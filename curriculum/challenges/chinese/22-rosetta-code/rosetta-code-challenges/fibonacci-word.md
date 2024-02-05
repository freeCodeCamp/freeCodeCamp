---
id: 5992e222d397f00d21122931
title: 斐波那契数列
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

在这个挑战中需要进行熵计算，如本罗塞塔代码挑战所示

# --instructions--

编写一个返回最低的 n 个出租车号码的函数。 `n` 将作为函数的参数提供。 该函数应该返回一个对象数组。 对象的格式应为：`{ N: 1, Length: 1, Entropy: 0, Word: '1' }`。 对于字符串 ` Word ` 计算熵，并将精度四舍五入到小数点后8位。 注意，这个序列的索引从 ` 1 ` 开始。

# --hints--

`fibWord` 应该是一个函数

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)`应该返回一个数组

```js
assert(Array.isArray(fibWord(5)));
```

` fibWord (5) ` 应该返回 ` [{ N: 1，长度: 1，熵: 0，Word: “1”} ，{ N: 2，长度: 1，熵: 0，Word: “0”} ，{ N: 3，长度: 2，熵: 1，Word: “01”} ，{ N: 4，长度: 3，熵: 0.91829583，Word: “010”} ，{ N: 5，长度: 5，熵: 0.97095059，Word: “01001”}] `。

```js
assert.deepEqual(fibWord(5), words5);
```

`fibWord(7)` should return `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }, { N:6, Length:8, Entropy:0.954434, Word:'01001010' }, { N:7, Length:13, Entropy:0.9612366, Word:'0100101001001' }]`.

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
