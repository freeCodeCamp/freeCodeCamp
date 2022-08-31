---
id: 594db4d0dedb4c06a2a4cefd
title: Il problema di Babbage
challengeType: 1
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

Charles Babbage, riguardo al tipo di problemi che il suo Analytical Engine sarebbe stato in grado di risolvere, diede questo esempio:

<blockquote>
  Quale è il più piccolo numero positivo intero il quale quadrato finisce con le cifre 269696?
  <footer style='margin-left: 2em;'>Traduzione da Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125.</footer>
</blockquote>

Pensava che la risposta potesse essere 99.736, il cui quadrato è 9.947.269.696; ma non poteva esserne certo.

Questa sfida riguarda trovare se Babbage avesse la risposta giusta.

# --instructions--

Implementa una funzione che restituisce il più piccolo numero intero che soddisfa il problema di Babbage. Se Babbage aveva ragione, restituisci il numero di Babbage.

# --hints--

`babbage` dovrebbe essere una funzione.

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` non dovrebbe restituire 99736 (c'è una risposta più piccola).

```js
assert.equal(babbage(babbageAns, endDigits), answer);
```

# --seed--

## --after-user-code--

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;
```

## --seed-contents--

```js
function babbage(babbageNum, endDigits) {

  return true;
}
```

# --solutions--

```js
function babbage(babbageAns, endDigits) {
  const babbageNum = Math.pow(babbageAns, 2);
  const babbageStartDigits = parseInt(babbageNum.toString().replace('269696', ''));
  let answer = 99736;

  // count down from this answer and save any sqrt int result. return lowest one
  for (let i = babbageStartDigits; i >= 0; i--) {
    const num = parseInt(i.toString().concat('269696'));
    const result = Math.sqrt(num);
    if (result === Math.floor(Math.sqrt(num))) {
      answer = result;
    }
  }

  return answer;
}
```
