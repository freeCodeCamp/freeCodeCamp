---
id: 594db4d0dedb4c06a2a4cefd
title: Задача Беббіджа
challengeType: 1
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

Charles Babbage, looking ahead to the sorts of problems his Analytical Engine would be able to solve, gave this example:

<blockquote>
  Яке найменше натуральне число, квадрат якого закінчується цифрами 269,696?
  <footer style='margin-left: 2em;'>Беббідж, лист до лорда Боудена, 1837; див. Hollingdale and Tootill, <i>Електронні комп’ютери</i>, друге видання, 1970, стор. 125.</footer>
</blockquote>

Він думав, що відповідь може бути 99,736, квадрат якого становить 9,947,269,696; але він не міг бути певним.

Завдання полягає в тому, щоб з'ясувати, чи відповідь Беббіджа була правильною.

# --instructions--

Реалізуйте функцію, щоб повернути найменше ціле число, що задовольняє задачу Беббіджа. Якщо Беббідж мав рацію, то поверніть число Беббіджа.

# --hints--

`babbage` має бути функцією.

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` не повинна повертати 99736 (відповідь має бути меншою).

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
