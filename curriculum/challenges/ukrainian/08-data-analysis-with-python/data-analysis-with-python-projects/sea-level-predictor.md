---
id: 5e4f5c4b570f7e3a4949899f
title: Прогнозування змін рівня моря
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.


Ми досі розробляємо інтерактивну частину навчальної програми з Python. Наразі є декілька відео на ютуб-каналі freeCodeCamp.org, які навчать всього необхідного для виконання цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 годин)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 годин)

# --instructions--

Ви проаналізуєте набір даних про зміни середнього рівня моря на планеті з 1880 року. Ви використаєте дані, щоб передбачити зміни рівня моря до 2050 року.

Використайте дані для виконання наступних завдань:

- Використайте Pandas для імпорту даних з `epa-sea-level.csv`.
- Використайте matplotlib, щоб створити діаграму розсіювання, використовуючи стовпчик `Year` як вісь x та стовпчик `CSIRO Adjusted Sea Level` як вісь y.
- Використайте функцію `linregress` із `scipy.stats`, щоб отримати нахил та Y-перехоплення лінії, яка найкраще підходить. Нанесіть лінію, яка найкраще підходить, поверх діаграми розсіювання. Проведіть лінію через 2050 рік, щоб передбачити підвищення рівня моря в 2050 році.
- Побудуйте нову лінію, яка найкраще підходить, просто використовуючи дані з 2000 року до найновішого року в наборі даних. Зробіть так, щоб лінія також проходила через 2050 рік, щоб передбачити підвищення рівня моря в 2050 році, якщо темпи підвищення триватимуть, як це було з 2000 року.
- Міткою x повинна бути `Year`, міткою y повинна бути `Sea Level (inches)`, а назва повинна бути `Rise in Sea Level`.

Для вас складені модульні тести у `test_module.py`.

Шаблон також містить команди для збереження та повернення зображення.

## Розробка

Для розробки ви можете використати `main.py`, щоб протестувати свої функції. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Ми перенесли тести з `test_module.py` в `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

## Джерело даних

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">Глобальна зміна середнього абсолютного рівня моря</a>, 1880-2014 від Агентства з охорони навколишнього середовища США з використанням даних CSIRO, 2015; NOAA, 2015.


# --hints--

Проєкт повинен пройти усі тести Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
