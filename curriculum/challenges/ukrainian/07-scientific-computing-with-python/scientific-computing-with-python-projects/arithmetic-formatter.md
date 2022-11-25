---
id: 5e44412c903586ffb414c94c
title: Арифметичне форматування
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

У початковій школі вчать вирішувати математичні приклади вертикально, аби було простіше. Наприклад, «235 + 52» перетворюється на:

```py
  235
+  52
-----
```

Створіть функцію, яка отримує список рядків з математичними прикладами та послідовно повертає їх у вертикальному вигляді. В разі потреби функція повинна брати другий аргумент. Коли другий аргумент встановлено на `True`, відповіді повинні відображатися.

## Наприклад

Виклик функції:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Вивід:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Виклик функції:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Вивід:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Правила

Функція поверне правильне перетворення, якщо надані приклади відформатовані правильно. В іншому випадку буде **повернений** **рядок**, який описує помилку, важливу для користувача.


- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return: `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return: `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

## Розробка

Запишіть свій код у `arithmetic_arranger.py`. Для розробки ви можете використати `main.py`, щоб протестувати свою функцію `arithmetic_arranger()`. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Модульні тести для цього проєкту знаходяться в `test_module.py`. Ми запускаємо тести з `test_module.py` в `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run». Як варіант, ви можете запустити тести, ввівши у консоль `pytest`.

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її.

# --hints--

Проєкт повинен правильно відформатувати математичний приклад та пройти тестування.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
