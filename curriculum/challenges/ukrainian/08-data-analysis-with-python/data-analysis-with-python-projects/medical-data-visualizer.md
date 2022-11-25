---
id: 5e46f7f8ac417301a38fb92a
title: Візуалізатор медичних даних
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Ми досі розробляємо інтерактивну частину навчальної програми з Python. Наразі є декілька відео на ютуб-каналі freeCodeCamp.org, які навчать всього необхідного для виконання цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

У цьому проєкті ви візуалізуєте та зробите підрахунки на основі даних медичного обстеження, використовуючи matplotlib, seaborn та pandas. Значення набору даних були зібрані під час медичних оглядів.

## Опис даних

Рядки в наборі даних представляють пацієнтів, а стовпці інформацію, як-от вимірювання тіла, результати різних аналізів крові та вибір способу життя. Ви будете використовувати набір даних, щоб дослідити зв’язок між серцевими захворюваннями, розмірами тіла, маркерами крові та вибором способу життя.

Назва файлу: medical_examination.csv

|                      Особливість                      |       Тип змінної       |    Змінна     |                   Тип значення                    |
|:-----------------------------------------------------:|:-----------------------:|:-------------:|:-------------------------------------------------:|
|                          Вік                          | Об'єктивна особливість  |     `age`     |                    ціле (дні)                     |
|                         Зріст                         | Об'єктивна особливість  |   `height`    |                     ціле (см)                     |
|                         Вага                          | Об'єктивна особливість  |   `weight`    |                   плаваюче (кг)                   |
|                         Стать                         | Об'єктивна особливість  |   `gender`    |                 категоричний код                  |
|              Систолічний кров'яний тиск               | Особливість обстеження  |    `ap_hi`    |                       ціле                        |
|              Діастолічний кров'яний тиск              | Особливість обстеження  |    `ap_lo`    |                       ціле                        |
|                      Холестерин                       | Особливість обстеження  | `cholesterol` | 1: нормально, 2: вище норми, 3: значно вище норми |
|                        Глюкоза                        | Особливість обстеження  |    `gluc`     | 1: нормально, 2: вище норми, 3: значно вище норми |
|                        Куріння                        | Суб'єктивна особливість |    `smoke`    |                     двійкове                      |
|                   Вживання алкоголю                   | Суб'єктивна особливість |    `alco`     |                     двійкове                      |
|                  Фізична активність                   | Суб'єктивна особливість |   `active`    |                     двійкове                      |
| Наявність чи відсутність серцево-судинних захворювань |     Цільова змінна      |   `cardio`    |                     двійкове                      |

## Завдання

Створіть діаграму, подібну до `examples/Figure_1.png`, де ми покажемо кількість хороших та поганих результатів для змінних `cholesterol`, `gluc`, `alco`, `active` та `smoke` для пацієнтів з cardio=1 та cardio=0 на різних панелях.

Використайте дані для виконання наступних завдань у `medical_data_visualizer.py`:

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value 0 for NOT overweight and the value 1 for overweight.
- Normalize the data by making 0 always good and 1 always bad. If the value of `cholesterol` or `gluc` is 1, make the value 0. If the value is more than 1, make the value 1.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `catplot()`. The dataset should be split by 'Cardio' so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using seaborn's `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

Кожного разу, коли для змінної встановлено значення `None`, переконайтеся, що для неї встановлено правильний код.

Для вас складені модульні тести у `test_module.py`.

## Розробка

Для розробки ви можете використати `main.py`, щоб протестувати свої функції. Натисніть кнопку "run" і `main.py` запуститься.

## Тестування

Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

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
