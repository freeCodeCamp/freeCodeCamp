---
id: 5e46f7e5ac417301a38fb929
title: Аналізатор демографічних даних
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.


Ми досі розробляємо інтерактивну частину навчальної програми з Python. Наразі є декілька відео на ютуб-каналі freeCodeCamp.org, які навчать всього необхідного для виконання цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 годин)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 годин)

# --instructions--

У цьому завдання ви повинні проаналізувати демографічні дані за допомогою Pandas. Вам надається набір демографічних даних, отриманих з бази даних перепису населення 1994 року. Ось приклад того, як виглядають дані:

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

Ви повинні використати Pandas, щоб відповісти на наступні запитання:

- Скільки людей кожної раси представлено в цьому наборі даних? Це повинна бути серія Pandas з назвами рас як індексними мітками. (стовпчик `race`)
- Який середній вік людей?
- Який відсоток людей, у яких є ступінь бакалавра?
- Який відсоток людей з вищою освітою (`Bachelors`, `Masters` або `Doctorate`) заробляє понад 50 тисяч?
- Який відсоток людей без вищої освіти заробляє понад 50 тисяч?
- Яку мінімальну кількість годин на тиждень працює людина?
- Який відсоток людей, які працюють мінімальну кількість годин на тиждень та отримують зарплату понад 50 тисяч?
- У якій країні найбільший відсоток людей, які заробляють >50 тисяч і який цей відсоток?
- Визначте найпопулярнішу професію для тих, хто заробляє >50 тисяч в Індії.

Використайте початковий код у файлі `demographic_data_analyzer`. Оновіть код, щоб для всіх змінних, для яких встановлено значення "None", було встановлено відповідне обчислення або код. Заокругліть усі десяткові дроби до найближчих десятків.

Для вас складені модульні тести у `test_module.py`.

## Розробка

Для розробки ви можете використати `main.py`, щоб протестувати свій код. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

## Джерело даних

Dua, D. and Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repository</a>. Irvine, CA: University of California, School of Information and Computer Science.

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
