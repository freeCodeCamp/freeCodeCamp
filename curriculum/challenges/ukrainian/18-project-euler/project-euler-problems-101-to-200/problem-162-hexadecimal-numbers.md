---
id: 5900f40e1000cf542c50ff21
title: 'Завдання 162: шістнадцяткові числа'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

У шістнадцятковій системі числення числа представлені шістнадцятьма різними цифрами:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

Шістнадцяткове число, записане десятковими числами, виглядатиме так: $10 \times 16 + 15 = 175$.

У тризначних шістнадцяткових числах 10A, 1A0, A10 та A01 наявні цифри 0, 1 та A.

Як і в десятковій системі, ми пишемо шістнадцяткові числа без початкових нулів.

Скільки існує шістнадцяткових чисел, які містять не більше шістнадцяти цифр, а також 0, 1, А принаймні один раз?

Дайте відповідь у вигляді шістнадцяткового числа.

**Note:** (A,B,C,D,E and F in upper case, without any leading or trailing code that marks the number as hexadecimal and without leading zeroes , e.g. 1A3F and not: 1a3f and not 0x1a3f and not $1A3F and not #1A3F and not 0000001A3F)

# --hints--

`hexadecimalNumbers()` має повернути рядок.

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` має повернути рядок `3D58725572C62302`.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
