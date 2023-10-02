---
id: 5900f3bb1000cf542c50fece
title: 'Problema 79: Derivação de senha'
challengeType: 1
forumTopicId: 302192
dashedName: problem-79-passcode-derivation
---

# --description--

Um método comum de segurança usado pelos serviços bancários on-line é pedir ao usuário três caracteres aleatórios de uma senha. Por exemplo, se a senha for `531278`, eles podem pedir o segundo, o terceiro e o quinto caracteres. A resposta esperada seria: `317`.

Os arrays, `keylog1`, `keylog2` e `keylog3`, contém cinquenta tentativas de login bem-sucedidas.

Dado que os três caracteres são sempre solicitados em ordem, analise o array para determinar a senha secreta mais curta possível de tamanho desconhecido.

# --hints--

`passcodeDerivation(keylog1)` deve retornar um número.

```js
assert(typeof passcodeDerivation(_keylog1) === 'number');
```

`passcodeDerivation(keylog1)` deve retornar `531278`.

```js
assert.strictEqual(passcodeDerivation(_keylog1), 531278);
```

`passcodeDerivation(keylog2)` deve retornar `1230567`.

```js
assert.strictEqual(passcodeDerivation(_keylog2), 1230567);
```

`passcodeDerivation(keylog3)` deve retornar `73162890`.

```js
assert.strictEqual(passcodeDerivation(_keylog3), 73162890);
```

# --seed--

## --after-user-code--

```js
const _keylog1 = [
  127,327,178,528,537,538,532,328,127,178,537,127,317,328,512,278,328,327,178,327,578,317,527,178,128,328,517,312,531,128,128,317,527,312,328,532,512,518,317,127,537,528,537,527,327,278,532,128, 318,517
];
const _keylog2 = [
  305,367,256,123,357,120,125,307,236,256,356,267,357,256,356,136,257,107,126,567,567,105,120,237,367,120,367,135,207,167,367,367,307,125,120,130,367,230,106,356,126,106,130,123,307,127,306,167,136,126
];
const _keylog3 = [
  319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716,
];
```

## --seed-contents--

```js
function passcodeDerivation(arr) {

  return true;
}

// Only change code above this line

const keylog1 = [
  319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716,
];

passcodeDerivation(keylog1);
```

# --solutions--

```js
function passcodeDerivation(arr) {
  const numbersInPasscode = [];
  const relativePositions = new Array(10)
    .fill()
    .map(() => new Array(10).fill(0));

  for (let i = 0; i < arr.length; i++) {
    const curAttempt = arr[i]
      .toString()
      .split('')
      .map(key => parseInt(key, 10));
    for (let j = 0; j < curAttempt.length; j++) {
      if (numbersInPasscode.indexOf(curAttempt[j]) === -1) {
        numbersInPasscode.push(curAttempt[j]);
      }
      for (let k = j + 1; k < curAttempt.length; k++) {
        relativePositions[curAttempt[j]][curAttempt[k]] += 1;
      }
    }
  }

  const ranks = {};
  for (let i = 0; i < numbersInPasscode.length; i++) {
    const curNumber = numbersInPasscode[i];
    ranks[curNumber] = relativePositions[curNumber].filter(
      count => count > 0
    ).length;
  }

  const passcode = numbersInPasscode
    .sort((i, j) => ranks[i] - ranks[j])
    .reverse()
    .join('');

  return parseInt(passcode, 10);
}
```
