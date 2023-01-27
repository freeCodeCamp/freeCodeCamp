---
id: 5900f3a31000cf542c50feb6
title: 'Завдання 55: Числа Лішрел'
challengeType: 1
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

Якщо взяти число 47, перевернути його та додати (47 + 74 = 121), то вийде паліндром.

Не з усіх чисел можна утворити паліндром так легко. Наприклад,

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

Тобто, щоб стати паліндромом числу 349 знадобилося три інтерації.

Попри відсутність доказів, вважається, що деякі числа, такі-от як 196, ніколи не утворюють паліндроми. Число, яке ніколи не формує паліндром шляхом перевертання і додавання - це число Лішрел. Зважаючи на теоретичну природу цих чисел та задля цілі даної задачі, ми вважатимемо, що число є числом Лішрел, поки не буде доведено протилежне. Окрім цього, відомо, що будь-яке число менше десяти тисяч або (і) стане паліндромом менш ніж за п'ятдесят ітерацій, або (іі) нікому, навіть маючи всю можливу обчислювальну потужність, не вдасться відобразити його у вигляді паліндрому. Насправді, 10677 - це перше відоме число, яке вимагає більше п'ятдесяти ітерацій перед утворенням паліндрому: 4668731596684224866951378664 (53 ітерації, 28 цифр).

Дивно, але є паліндромні числа, які також є числами Лішрел; перший приклад - 4994.

Скільки існує чисел Лішрел нижчих за `num`?

**Примітка:** Формулювання завдання було трохи змінено 24 квітня 2007 року, щоб підкреслити теоретичну природу чисел.

# --hints--

`countLychrelNumbers(1000)` має повернути число.

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` має повернути число 13.

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` має повернути число 39.

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` має повернути число 76.

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` має повернути число 140.

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` має повернути число 249.

```js
assert.strictEqual(countLychrelNumbers(10000), 249);
```

# --seed--

## --seed-contents--

```js
function countLychrelNumbers(num) {

  return true;
}

countLychrelNumbers(10000);
```

# --solutions--

```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```
