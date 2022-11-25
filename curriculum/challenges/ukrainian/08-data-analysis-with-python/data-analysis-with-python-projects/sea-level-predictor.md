---
id: 5e4f5c4b570f7e3a4949899f
title: Прогнозування змін рівня моря
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Ми досі розробляємо інтерактивну частину навчальної програми з Python. Наразі є декілька відео на ютуб-каналі freeCodeCamp.org, які навчать всього необхідного для виконання цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Ви проаналізуєте набір даних про зміни середнього рівня моря на планеті з 1880 року. Ви використаєте дані, щоб передбачити зміни рівня моря до 2050 року.

Використайте дані для виконання наступних завдань:

- Use Pandas to import the data from `epa-sea-level.csv`.
- Use matplotlib to create a scatter plot using the `Year` column as the x-axis and the `CSIRO Adjusted Sea Level` column as the y-axix.
- Use the `linregress` function from `scipy.stats` to get the slope and y-intercept of the line of best fit. Plot the line of best fit over the top of the scatter plot. Make the line go through the year 2050 to predict the sea level rise in 2050.
- Plot a new line of best fit just using the data from year 2000 through the most recent year in the dataset. Make the line also go through the year 2050 to predict the sea level rise in 2050 if the rate of rise continues as it has since the year 2000.
- The x label should be `Year`, the y label should be `Sea Level (inches)`, and the title should be `Rise in Sea Level`.

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
