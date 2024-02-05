---
id: 5900f3a31000cf542c50feb6
title: 'Завдання 55: числа Лішрел'
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

Щоб стати паліндромом, числу 349 знадобилося три інтерації.

Попри відсутність доказів, вважається, що деякі числа, такі-от як 196, ніколи не утворюють паліндроми. Число Лішрел — це число, яке ніколи не формує паліндром шляхом перевертання і додавання. Зважаючи на теоретичну природу цих чисел та задля цілі даної задачі, ми вважатимемо, що число є числом Лішрел, поки не буде доведено протилежне. Окрім цього відомо, що будь-яке число менше десяти тисяч або стане паліндромом менш ніж за п’ятдесят ітерацій, або нікому, навіть маючи всю можливу обчислювальну потужність, не вдасться зобразити його у вигляді паліндрому. Насправді 10677 є першим відомим числом, яке вимагає понад п’ятдесяти ітерацій для утворення паліндрому: 4668731596684224866951378664 (53 ітерації, 28-значне число).

Дивно, але є паліндромні числа, які також є числами Лішрел; перший приклад — 4994.

Скільки існує чисел Лішрел менших за `num`?

**Примітка:** формулювання завдання було трохи змінено 24 квітня 2007 року, щоб підкреслити теоретичну природу чисел Лішрел.

# --hints--

`countLychrelNumbers(1000)` має повернути число.

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` має повернути 13.

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` має повернути 39.

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` має повернути 76.

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` має повернути 140.

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` має повернути 249.

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
