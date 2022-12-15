---
id: 5e444147903586ffb414c94f
title: Калькулятор площі багатокутника
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.


# --instructions--

У цьому проєкті ви будете використовувати об'єктно-орієнтоване програмування, щоб створити класи Rectangle (прямокутник) та Square (квадрат). Клас Square повинен бути підкласом до Rectangle і наслідувати його методи та атрибути.

## Клас Rectangle

При створенні об'єкту Rectangle ви повинні ініціалізувати його, використовуючи атрибути `width` та `height`. Клас також повинен містити наступні методи:

- `set_width`
- `set_height`
- `get_area`: повертає площу (`width * height`)
- `get_perimeter`: повертає периметр (`2 * width + 2 * height`)
- `get_diagonal`: повертає діагональ (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: повертає рядок, який представляє фігуру лініями "\*". Кількість ліній повинна дорівнювати висоті, а кількість "\*" у кожному рядку повинна дорівнювати ширині. Наприкінці кожного рядка має бути новий рядок (`\n`). Якщо ширина або висота більші за 50, то повинен повернутись рядок "Too big for picture." (завеликий для зображення).
- `get_amount_inside`: приймає іншу фігуру (квадрат чи трикутник) як аргумент. Повертає ту кількість разів, скільки передана фігура може поміститися у фігурі (без обертання). Наприклад, прямокутник з шириною 4 і висотою 8 може вмістити два квадрати зі сторонами 4.

Додатково, якщо екземпляр Rectangle представлений як рядок, він має виглядати так: `Rectangle(width=5, height=10)`

## Клас Square

Клас Square має бути підкласом Rectangle. Коли ви створюєте об'єкт Square, передається довжина однієї сторони. Метод `__init__` має зберігати довжину сторони в атрибутах `width` та `height` з класу Rectangle.

Клас Square повинен мати доступ до методів класу Rectange, але також повинен містити метод `set_side`. Якщо екземпляр Square представлений у вигляді рядка, то це має виглядати так: `Square(side=9)`

Додатково, методи `set_width` та `set_height` у класі Square повинні встановити як ширину, так і висоту.

## Приклад використання

```py
rect = shape_calculator.Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = shape_calculator.Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))
```

Цей код повинен повернути:

```bash
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8
```

Модульні тести для цього проєкту знаходяться в `test_module.py`.

## Розробка

Запишіть свій код у `shape_calculator.py`. Для розробки ви можете використати `main.py`, щоб протестувати свою функцію `shape_calculator()`. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Проєкт повинен створити класи Rectangle і Square та пройти всі тести.

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
