---
id: 5e46f7e5ac417301a38fb928
title: Калькулятор середньоквадратичного відхилення
challengeType: 10
forumTopicId: 462366
dashedName: mean-variance-standard-deviation-calculator
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-mean-variance-standard-deviation-calculator" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

Ми все ще розробляємо інтерактивну частину навчального курсу Python. Наразі ось кілька відео на YouTube-каналі freeCodeCamp.org, які навчать вас усього необхідного, щоб виконати цей проєкт:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Створіть функцію `calculate()` в `mean_var_std.py`, яку використовує Numpy для виведення середнього значення, дисперсії, стандартного відхилення, максимуму, мінімуму та суми рядків, стовпців, і елементи в матриці 3 x 3.

Вхідним значенням функції має бути список, що містить 9 цифр. Функція повинна перетворити список у масив Numpy 3 x 3, а потім повернути словник, що містить середнє значення, дисперсію, стандартне відхилення, максимум, мінімум і суму вздовж обох осей і для сплощеної матриці.

The returned dictionary should follow this format:

```py
{
  'mean': [axis1, axis2, flattened],
  'variance': [axis1, axis2, flattened],
  'standard deviation': [axis1, axis2, flattened],
  'max': [axis1, axis2, flattened],
  'min': [axis1, axis2, flattened],
  'sum': [axis1, axis2, flattened]
}
```

Якщо у функцію передається список, що містить менше 9 елементів, вона має викликати виняток `ValueError` з повідомленням: «Список має містити дев’ять чисел.» Значеннями у повернутому словнику мають бути списки, а не числові масиви Numpy.

For example, `calculate([0,1,2,3,4,5,6,7,8])` should return:

```py
{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}
```

Модульні тести для цього проєкту знаходяться в `test_module.py`.

## Розробка

Для розробки ви можете використати `main.py`, щоб протестувати свою функцію `calculate()`. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Потрібно виконати всі тести Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
