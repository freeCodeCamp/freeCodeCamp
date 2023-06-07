---
id: 5992e222d397f00d21122931
title: Palavra de Fibonacci
challengeType: 1
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

A sequência de palavra de Fibonacci pode ser criada de uma maneira análoga à sequência de Fibonacci, mas foca na iteração de concatenações.

<pre>Defina a F_Word<sub>1</sub>  como  <strong>1</strong>
Defina a  F_Word<sub>2</sub>  como  <strong>0</strong>
Forme a F_Word<sub>3</sub>  como  F_Word<sub>2</sub>   concatenada com a  F_Word <sub>1</sub>, ou seja:  <strong>01</strong>
Forme a F_Word<sub>n</sub>  como  F_Word<sub>n-1</sub>  concatenada com a  F_word <sub>n-2</sub>
</pre>

É necessário o cálculo de entropia neste desafio, <a href="https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/entropy" target="_blank" rel="noopener noreferrer nofollow">como mostrado neste desafio do Rosetta Code</a>

# --instructions--

Escreva uma função que retorne as `n` primeiras palavras de Fibonacci. O número `n` será fornecido como um parâmetro para a função. A função deve retornar um array de objetos. Os objetos devem estar na forma: `{ N: 1, Length: 1, Entropy: 0, Word: '1' }` (tamanho, entropia e palavra). `Entropy` é calculada para a string `Word` e arredondada para 8 casas decimais de precisão. Observe que os índices dessa sequência começam em `1`.

# --hints--

`fibWord` deve ser uma função.

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` deve retornar um array.

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` deve retornar `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }]`.

```js
assert.deepEqual(fibWord(5), words5);
```

`fibWord(7)` deve retornar `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },{ N:5, Length:5, Entropy:0.97095059, Word:"01001" }, { N:6, Length:8, Entropy:0.954434, Word:'01001010' }, { N:7, Length:13, Entropy:0.9612366, Word:'0100101001001' }]`.

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
