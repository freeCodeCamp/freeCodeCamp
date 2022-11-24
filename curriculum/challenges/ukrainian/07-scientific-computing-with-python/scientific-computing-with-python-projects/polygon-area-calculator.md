---
id: 5e444147903586ffb414c94f
title: Калькулятор площі багатокутника
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

У цьому проєкті ви будете використовувати об'єктно-орієнтоване програмування, щоб створити класи Rectangle (прямокутник) та Square (квадрат). Клас Square повинен бути підкласом до Rectangle і наслідувати його методи та атрибути.

## Клас Rectangle

При створенні об'єкту Rectangle ви повинні ініціалізувати його, використовуючи атрибути `width` та `height`. Клас також повинен містити наступні методи:

- `set_width`
- `set_height`
- `get_area`: Returns area (`width * height`)
- `get_perimeter`: Returns perimeter (`2 * width + 2 * height`)
- `get_diagonal`: Returns diagonal (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: Returns a string that represents the shape using lines of "\*". The number of lines should be equal to the height and the number of "\*" in each line should be equal to the width. There should be a new line (`\n`) at the end of each line. If the width or height is larger than 50, this should return the string: "Too big for picture.".
- `get_amount_inside`: Takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.

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

Проєкт повинен створити класи Rectangle і Square та пройти тестування.

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
