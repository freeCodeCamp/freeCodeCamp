---
id: 5e46f983ac417301a38fb933
title: Злом паролів SHA-1
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Ми досі розробляємо інтерактивну частину навчальної програми з Python. Наразі є декілька відео на ютуб-каналі freeCodeCamp.org, які навчать всього необхідного для виконання цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Паролі ніколи не повинні зберігатися у вигляді звичайного тексту. Їх потрібно зберігати як хеші на випадок виявлення списку паролів. Однак не всі хеші створені однаковими.

По цьому проєкті ви дізнаєтеся про важливість безпеки, створивши програму для злому паролів, щоб виявити паролі, які були хешовані за допомогою SHA-1.

Create a function that takes in a SHA-1 hash of a password and returns the password if it is one of the top 10,000 passwords used. If the SHA-1 hash is NOT of a password in the database, return "PASSWORD NOT IN DATABASE".

The function should hash each password from `top-10000-passwords.txt` and compare it to the hash passed into the function.

The function should take an optional second argument named `use_salts`. If set to true, each salt string from the file `known-salts.txt` should be appended AND prepended to each password from `top-10000-passwords.txt` before hashing and before comparing it to the hash passed into the function.

Here are some hashed passwords to test the function with:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` should return "sammy123"
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` should return "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` should return "password"

Here are some hashed passwords to test the function with when `use_salts` is set to `True`:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` should return "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` should return "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` should return "bubbles1"

The `hashlib` library has been imported for you. You should consider using it in your code. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Learn more about "hashlib" here</a>.

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
