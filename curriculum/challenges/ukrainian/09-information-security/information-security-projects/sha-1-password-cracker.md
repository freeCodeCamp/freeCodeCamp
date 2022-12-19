---
id: 5e46f983ac417301a38fb933
title: Програма для злому паролів SHA-1
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.


Ми досі розробляємо інтерактивну частину навчальної програми з Python. Наразі є декілька відео на ютуб-каналі freeCodeCamp.org, які навчать всього необхідного для виконання цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 годин)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 години)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 годин)

# --instructions--

Паролі ніколи не повинні зберігатися як звичайний текст. Їх потрібно зберігати як хеші на випадок виявлення списку паролів. Однак не всі хеші створені однаковими.

У цьому проєкті ви дізнаєтеся про важливість безпеки, створивши програму для злому паролів, щоб виявити паролі, які були хешовані за допомогою SHA-1.

Створіть функцію, яка приймає хеш SHA-1 і повертає пароль, якщо він є одним із 10 000 найуживаніших паролів. Якщо хеш SHA-1 НЕ є паролем у базі даних, поверніть «PASSWORD NOT IN DATABASE».

Функція повинна хешувати кожен пароль із `top-10000-passwords.txt` та порівнювати його з хешем, переданим у функцію.

Функція повинна приймати додатковий другий аргумент під назвою `use_salts`. Якщо значення встановлено на true, кожна сіль з файлу `known-salts.txt` повинна бути додана до ТА після кожного пароля з `top-10000-passwords.txt` перед хешуванням та перед порівнянням з хешем, переданим у функцію.

Ось кілька хешованих паролів для перевірки функції:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` повинен повернути «sammy123»
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` повинен повернути «abacab»
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` повинен повернути «password»

Ось кілька хешованих паролів для тестування функції, якщо `use_salts` встановлено на `True`:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` повинен повернути «superman»
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` повинен повернути «q1w2e3r4t5»
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` повинен повернути «bubbles1»

Для вас було імпортовано бібліотеку `hashlib`. Подумайте над її використанням у своєму коді. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Дізнайтеся більше про «hashlib» тут</a>.

## Розробка

Запишіть свій код у `password_cracker.py`. Для розробки ви можете використати `main.py`, щоб протестувати свій код. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Модульні тести для цього проєкту знаходяться в `test_module.py`. Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

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
