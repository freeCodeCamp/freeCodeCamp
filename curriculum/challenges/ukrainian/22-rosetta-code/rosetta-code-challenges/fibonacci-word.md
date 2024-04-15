---
id: 5992e222d397f00d21122931
title: Слово Фібоначчі
challengeType: 1
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

Послідовність слів Фібоначчі можна створити схожим способом до послідовності Фібоначчі, але вона зосереджена на об’єднанні.

<pre>Визначте F_Word<sub>1</sub> як <strong>1</strong>
Визначте F_Word<sub>2</sub> як <strong>0</strong>
Утворіть F_Word<sub>3</sub> як F_Word<sub>2</sub>, об’єднане з F_Word<sub>1</sub>, тобто: <strong>01</strong>
Утворіть F_Word<sub>n</sub> як F_Word<sub>n-1</sub>, об’єднане з F_word<sub>n-2</sub>
</pre>

Для цього завдання обов’язковий ентропічний розрахунок, <a href="https://www.freecodecamp.org/ukrainian/learn/rosetta-code/rosetta-code-challenges/entropy" target="_blank" rel="noopener noreferrer nofollow">як показано в цьому завданні</a>

# --instructions--

Напишіть функцію, яка повертає перші `n` слів Фібоначчі. Число `n` надається як параметр до функції. Функція має повернути масив об’єктів. Об’єкти повинні мати наступний вигляд: `{ N: 1, Length: 1, Entropy: 0, Word: '1' }`. `Entropy` обчислюється для рядка `Word` та округлюється до 8 десяткових цифр. Зауважте, що індекси цієї послідовності починаються з `1`.

# --hints--

`fibWord` має бути функцією.

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` має повернути масив.

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` має повернути `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }]`.

```js
assert.deepEqual(fibWord(5), words5);
```

`fibWord(7)` має повернути `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }, { N:6, Length:8, Entropy:0.954434, Word:'01001010' }, { N:7, Length:13, Entropy:0.9612366, Word:'0100101001001' }]`.

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
