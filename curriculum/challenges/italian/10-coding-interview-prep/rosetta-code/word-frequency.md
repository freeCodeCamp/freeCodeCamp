---
id: 5e94a54cc7b022105bf0fd2c
title: Frequenza delle parole
challengeType: 1
forumTopicId: 393913
dashedName: word-frequency
---

# --description--

Data una stringa di testo e un intero n, restituire le n parole più comuni nel file (e il numero delle loro occorrenze) in ordine di frequenza decrescente.

# --instructions--

Scrivere una funzione per contare le occorrenze di ogni parola e restituire le n parole più comuni insieme al numero delle loro occorrenze in ordine di frequenza decrescente.

La funzione dovrebbe restituire un array 2D con ciascuno degli elementi nella seguente forma: `[word, freq]`. `word` dovrebbe essere la versione minuscola della parola e `freq` il numero che indica il conteggio.

La funzione dovrebbe restituire un array vuoto, se non viene fornita alcuna stringa.

La funzione dovrebbe ignorare maiuscole e minuscole, per esempio, le stringe "Hello" e "hello" devono essere trattate allo stesso modo.

Puoi le parole che hanno caratteri speciali come sottolineature, trattini, apostrofi, virgole, ecc., come parole distinte.

Per esempio, data la stringa "Hello hello goodbye", la tua funzione dovrebbe restituire `[['hello', 2], ['goodbye', 1]]`.

# --hints--

`wordFrequency` dovrebbe essere una funzione.

```js
assert(typeof wordFrequency == 'function');
```

`wordFrequency` dovrebbe restituire un array.

```js
assert(Array.isArray(wordFrequency('test')));
```

`wordFrequency("Hello hello world", 2)` dovrebbe restituire `[['hello', 2], ['world', 1]]`

```js
assert.deepEqual(wordFrequency(example_1, 2), example_1_solution);
```

`wordFrequency("The quick brown fox jumped over the lazy dog", 1)` dovrebbe restituire `[['the', 2]]`

```js
assert.deepEqual(wordFrequency(example_2, 1), example_2_solution);
```

`wordFrequency("Opensource opensource open-source open source", 1)` dovrebbe restituire `[['opensource', 2]]`

```js
assert.deepEqual(wordFrequency(example_3, 1), example_3_solution);
```

`wordFrequency("Apple App apply aPP aPPlE", 3)` dovrebbe restituire `[['app', 2], ['apple', 2], ['apply', 1]]` oppure `[['apple', 2], ['app', 2], ['apply', 1]]`

```js
const arr = JSON.stringify(wordFrequency(example_4, 3));
assert(arr === example_4_solution_a || arr === example_4_solution_b);
```

`wordFrequency("c d a d c a b d d c", 4)` dovrebbe restituire `[['d', 4], ['c', 3], ['a', 2], ['b', 1]]`

```js
assert.deepEqual(wordFrequency(example_5, 4), example_5_solution);
```

`wordFrequency("", 5)` dovrebbe restituire `[]`

```js
assert.deepEqual(wordFrequency(example_6, 5), example_6_solution);
```

# --seed--

## --before-user-code--

```js
var example_1 = 'Hello hello world';
var example_1_solution = [['hello', 2], ['world', 1]];
var example_2 = 'The quick brown fox jumped over the lazy dog';
var example_2_solution = [['the', 2]];
var example_3 = 'Opensource opensource open-source open source';
var example_3_solution = [['opensource', 2]];
var example_4 = 'Apple App apply aPP aPPlE';
var example_4_solution_a = "[[\"app\",2],[\"apple\",2],[\"apply\",1]]";
var example_4_solution_b = "[[\"apple\",2],[\"app\",2],[\"apply\",1]]";
var example_5 = 'c d a d c a b d d c';
var example_5_solution = [['d', 4], ['c', 3], ['a', 2], ['b', 1]];
var example_6 = '';
var example_6_solution = [];
```

## --seed-contents--

```js
function wordFrequency(txt, n) {

}
```

# --solutions--

```js
function wordFrequency(txt, n) {
  var words = txt.split(/\s+/);
  var wordCount = {};
  words.forEach(word => {
    if (word == '') {
      return;
    }
    const lowerWord = word.toLowerCase();
    wordCount[lowerWord] =
      lowerWord in wordCount ? wordCount[lowerWord] + 1 : 1;
  });

  var wordsArray = [];
  for (let [word, count] of Object.entries(wordCount)) {
    wordsArray.push([word, count]);
  }

  wordsArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else if (a[0] !== b[0]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return 0;
  });
  return wordsArray.slice(0, n);
}
```
