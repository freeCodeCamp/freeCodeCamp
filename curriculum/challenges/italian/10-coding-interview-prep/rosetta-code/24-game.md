---
id: 5951e88f64ebf159166a1176
title: Il gioco del 24
challengeType: 5
forumTopicId: 302218
dashedName: 24-game
---

# --description--

Il gioco 24 testa l'aritmetica mentale di una persona.

L'obbiettivo del gioco è di arrangiare quattro numeri in un modo tale che una volta calcolato il risultato sia 24

# --instructions--

Scrivi una funzione che prenda una stringa di quattro cifre come argomento, con ogni cifra tra uno e nove (inclusi) con ripetizioni, e restituisca un'espressione aritmetica che una volta calcolata dia come risultato 24. Se non c'è una soluzione del genere, restituisci "no solution exists".

**Regole:**
<ul>
  <li> Solo le seguenti operazioni/funzioni sono ammesse: moltiplicazione, divisione, addizione, sottrazione. </li>
  <li> La divisione dovrebbe essere in virgola mobile o aritmetica razionale (frazioni) per preservare i resti. </li>
  <li> Formare numeri con più di una cifra dalle cifre date non è permesso. (Quindi una risposta di 12+12 quando le cifre date sono 1, 2, 2 e 1 è sbagliata). </li>
  <li> L'ordine delle cifre nell'input non deve essere conservato. </li>
</ul>

| Esempio di input          | Esempio di output         |
| ------------------------- | ------------------------- |
| <code>solve24("4878");</code> | <code>(7-8/8)\*4</code> |
| <code>solve24("1234");</code> | <code>3\*1\*4\*2</code> |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |

# --hints--

`solve24` dovrebbe essere una funzione.

```js
assert(typeof solve24 === 'function');
```

`solve24("4878")` dovrebbe restituire `(7-8/8)*4` o `4*(7-8/8)`

```js
assert(include(answers[0], removeParentheses(solve24(testCases[0]))));
```

`solve24("1234")` dovrebbe restituire un qualsiasi ordine di `1*2*3*4`

```js
assert(include(answers[1], removeParentheses(solve24(testCases[1]))));
```

`solve24("6789")` dovrebbe restituire `(6*8)/(9-7)` o `(8*6)/(9-7)`

```js
assert(include(answers[2], removeParentheses(solve24(testCases[2]))));
```

`solve24("1127")` dovrebbe restuire una permutazione di `(1+7)*(1+2)`

```js
assert(include(answers[3], removeParentheses(solve24(testCases[3]))));
```

# --seed--

## --after-user-code--

```js
const testCases = [
  '4878',
  '1234',
  '6789',
  '1127'
];

const answers = [
  ['(7-8/8)*4', '4*(7-8/8)', '(4-8+7)*8', '(4+7-8)*8', '(7+4-8)*8', '(7-8+4)*8', '8*(4-8+7)', '8*(4+7-8)', '8*(7+4-8)', '8*(7-8+4)'],
  ['1*2*3*4', '1*2*4*3', '1*3*2*4', '1*3*4*2', '1*4*2*3', '1*4*3*2', '2*1*3*4', '2*1*4*3', '2*3*1*4', '2*3*4*1', '2*4*3*1', '2*4*1*3', '3*1*2*4', '3*1*4*2', '3*2*1*4', '3*2*4*1', '3*4*1*2', '3*4*2*1', '4*1*2*3', '4*1*3*2', '4*2*1*3', '4*2*3*1', '4*3*1*2', '4*3*2*1', '(1+2+3)*4', '(1+3+2)*4', '(2+1+3)*4', '(2+3+1)*4', '(3+1+2)*4', '(3+2+1)*4', '4*(1+2+3)', '4*(2+1+3)', '4*(2+3+1)', '4*(3+1+2)', '4*(3+2+1)'],
  ['(6*8)/(9-7)', '(8*6)/(9-7)', '6*8/(9-7)', '8*6/(9-7)'],
  ['(1+7)*(2+1)', '(1+7)*(1+2)', '(1+2)*(1+7)', '(1+2)*(7+1)', '(2+1)*(1+7)', '(7+1)*(2+1)']
];

function include(ansArr, res) {
  const index = ansArr.indexOf(res);
  return index >= 0;
}

//The main method for detecting single parentheses
function removeParentheses(ans) {
  for (let i = 0; i < ans.length; i++) {
    if (!isNaN(ans[i])) {
      ans = removeParenthesesHelper(ans, i);
    }
  }
  return ans;
}

//Helper to remove left and right parantheses
function removeParenthesesHelper(ans, i) {
  while (i > 0 && i < ans.length - 1) {
    if (ans[i - 1] === '(' && ans[i + 1] === ')') {
      //Paranthesis detected. Remove them.
      ans = replaceChar(ans, '', i - 1);
      ans = replaceChar(ans, '', i);
      i--;
    } else {
      return ans;
    }
  }
  return ans;
}

//Replace a character at a given index for the provided character
function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);
  let newString = firstPart + replaceChar + lastPart;
  return newString;
}
```

## --seed-contents--

```js
function solve24 (numStr) {

  return true;
}
```

# --solutions--

```js
function solve24(numStr) {
  const digitsArr = numStr.split('');
  const answers = [];

  const digitPermutations = [];
  const operatorPermutations = [];

  function generateDigitPermutations (digits, permutations = []) {
    if (digits.length === 0) {
      digitPermutations.push(permutations);
    }
    else {
      for (let i = 0; i < digits.length; i++) {
        const curr = digits.slice();
        const next = curr.splice(i, 1);
        generateDigitPermutations(curr.slice(), permutations.concat(next));
      }
    }
  }

  function generateOperatorPermutations (permutations = []) {
    const operators = ['+', '-', '*', '/'];
    if (permutations.length === 3) {
      operatorPermutations.push(permutations);
    }
    else {
      for (let i = 0; i < operators.length; i++) {
        const curr = permutations.slice();
        curr.push(operators[i]);
        generateOperatorPermutations(curr);
      }
    }
  }

  generateDigitPermutations(digitsArr);
  generateOperatorPermutations();

  interleave();

  return answers[0];

  function interleave () {
    for (let i = 0; i < digitPermutations.length; i++) {
      for (let j = 0; j < operatorPermutations.length; j++) {
        const d = digitPermutations[i];
        const o = operatorPermutations[j];
        const perm = [
          `${d[0]}${o[0]}${d[1]}${o[1]}${d[2]}${o[2]}${d[3]}`,
          `(${d[0]}${o[0]}${d[1]})${o[1]}${d[2]}${o[2]}${d[3]}`,
          `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
          `${d[0]}${o[0]}${d[1]}${o[1]}(${d[2]}${o[2]}${d[3]})`,
          `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]}${o[2]}${d[3]})`,
          `(${d[0]}${o[0]}${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
          `(${d[0]}${o[0]}${d[1]})${o[1]}(${d[2]}${o[2]}${d[3]})`
        ];

        perm.forEach(combination => {
          const res = eval(combination);

          if (res === 24) {
            return answers.push(combination);
          }
        });
      }
    }
  }
}
```
