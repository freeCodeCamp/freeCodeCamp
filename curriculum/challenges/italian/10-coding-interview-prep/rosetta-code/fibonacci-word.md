---
id: 5992e222d397f00d21122931
title: Parola di Fibonacci
challengeType: 1
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

La Sequenza di Parole di Fibonacci può essere creata in maniera analoga alla Sequenza di Fibonacci, ma utilizza la concatenazione iterativa.

<pre>Definisci  F_Word<sub>1</sub>  come  <strong>1</strong>
Definisci  F_Word<sub>2</sub>  come  <strong>0</strong>
Definisci   F_Word<sub>3</sub>  come  F_Word<sub>2</sub>   concatenato con  F_Word<sub>1</sub>   i.e.:  <strong>01</strong>
Forma   F_Word<sub>n</sub>  come  F_Word<sub>n-1</sub>  concatento con with  F_word<sub>n-2</sub>
</pre>

Calcolare l'entropia è un requisito di questa sfida, come mostrato in <a href="https://www.freecodecamp.org/italian/learn/coding-interview-prep/rosetta-code/entropy" target="_blank" rel="noopener noreferrer nofollow">questa sfida di Rosetta</a>

# --instructions--

Scrivi una funzione che restituisce le prime `n` Parole di Fibonacci. Il numero di `n` è dato come parametro alla funzione. La funzione dovrebbe restituire un array di oggetti. Gli oggetti dovrebberi essere della forma: `{ N: 1, Length: 1, Entropy: 0, Word: '1' }`. `Entropy` (l'entropia) è computata per la stringa `Word` e arrotondata a 8 cifre decimali di precisione. Nota che gli indici di questa sequenza iniziano da `1`.

# --hints--

`fibWord` dovrebbe essere una funzione.

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` dovrebbe restituire un array.

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` dovrebbe restituire `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }]`.

```js
assert.deepEqual(fibWord(5), words5);
```

`fibWord(7)` dovrebbe restituire `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }, { N:6, Length:8, Entropy:0.954434, Word:'01001010' }, { N:7, Length:13, Entropy:0.9612366, Word:'0100101001001' }]`.

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
