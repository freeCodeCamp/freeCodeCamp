---
id: 5951e88f64ebf159166a1176
title: Il gioco del 24
challengeType: 1
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

`solve24("4878")` dovrebbe restituire `(7-8/8)*4`, `4*(7-8/8)`, o una stringa simile valida

```js
assert(isValidSolution_(solve24(testCases_[0])));
```

`solve24("1234")` dovrebbe restituire `1*2*3*4` o una stringa simile valida

```js
assert(isValidSolution_(solve24(testCases_[1])));
```

`solve24("6789")` dovrebbe restituire `(6*8)/(9-7)`, `(8*6)/(9-7)` o una stringa simile valida

```js
assert(isValidSolution_(solve24(testCases_[2])));
```

`solve24("1127")` dovrebbe restituire `(1+7)*(1+2)` o una stringa simile valida

```js
assert(isValidSolution_(solve24(testCases_[3])));
```

# --seed--

## --after-user-code--

```js
const testCases_ = [
  '4878',
  '1234',
  '6789',
  '1127'
];

const OPERATORS_ = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}

const PRECIDENCE_ = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
}

function evaluate_(expression) {
  expression = expression.replace('/\s+/g', '');
  const stack = [];
  let postfix = "";

  // Convert from infix to postfix
  let head = 0;
  while (head < expression.length) {
    let c = expression[head];
    switch (c) {
      case "(":
        stack.push(c);
        break;
      case ")":
        let last = stack.pop();
        while (last !== "(") {
          postfix += last;
          last = stack.pop();
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        while (stack.length &&
               PRECIDENCE_[c] <= PRECIDENCE_[stack[stack.length-1]]) {
          postfix += stack.pop();
        }
        stack.push(c);
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        postfix += c;
        break;
      default:
        return false;
    }
    head++;
  }

  // Clear out stack
  while (stack.length) {
    postfix += stack.pop();
  }

  // Evaluate postfix
  for (let c of postfix) {
    switch (c) {
      case "+":
      case "-":
      case "*":
      case "/":
        const b = +stack.pop();
        const a = +stack.pop();
        stack.push(OPERATORS_[c](a, b));
        break;
      default:
        stack.push(c);
    }
  }
  return stack.pop();
}

// Check solution validity
function isValidSolution_(userSolution) {
  return evaluate_(userSolution) === 24;
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
