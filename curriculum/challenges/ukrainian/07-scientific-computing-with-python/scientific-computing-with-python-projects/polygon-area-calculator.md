---
id: 5e444147903586ffb414c94f
title: Калькулятор площі багатокутника
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Ви маєте [виконати цей проєкт за допомогою нашого стартового коду Replit](https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator).

Ми й досі в процесі розробки інтерактивної складової навчального курсу Python. Наразі можете ознайомитись із наступними відео на YouTube каналі freeCodeCamp.org. У них ви знайдете все необхідне для завершення цього проєкту:

- [Python for Everybody Video Course](https://www.freecodecamp.org/news/python-for-everybody/) (14 годин)

- [Learn Python Video Course](https://www.freecodecamp.org/news/learn-python-video-course/) (10 години)

# --instructions--

У цьому проєкті ви будете використовувати програмування, що зорієнтоване на проєкті для створення класів "Rectangle" і "Square". Клас "Square" повинен бути підкласом до "Rectangle" і наслідувати його методи та атрибути.

## Клас "Rectangle"

Зробіть початковими атрибутами `width` та `height`, коли ви створюєте об'єкт Rectangle. Клас також повинен містити наступні методи:

- `set_width`
- `set_height`
- `get_area`: повертає площину (`width * height`)
- `get_perimeter`: повертає периметр (`2 * width + 2 * height`)
- `get_diagonal`: повертає діагональ (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: повертає рядок, який представлений формою з "\*" ліній. Кількість рядків має бути рівною висоті, а кількість "\*" у кожному рядку має бути рівною ширині. Наприкінці кожного рядка має бути новий рядок (`\n`). Якщо ширина або висота більші за 50, то рядок повинен повернути: "Завеликий для зображення.".
- `get_amount_inside`: бере іншу форму (квадрат чи трикутник) як аргумент. Повертає кількість разів, скільки потрібна форма може поміститися у задану форму (без обертання). Наприклад, прямокутник з шириною 4 і висотою 8 може вмістити два квадрати зі сторонами 4.

Додатково, якщо екземпляр Rectangle представлений як рядок, він має виглядати так: `Rectangle(width=5, height=10)`

## Клас Square

Клас Square має бути підкласом Rectangle. Коли ви створюєте об'єкт Square, зберігається довжина однієї сторони. Метод `__init__` має зберігати довжину сторони в атрибутах `width` та `height` з класу Rectangle.

Клас Square повинен мати доступ до методів класу Rectange, але також повинен містити метод `set_side`. Якщо екземпляр Square представлений у вигляді рядка, то це має виглядати так: `Square(side=9)`

Додатково, методи `set_width` та `set_height` на класі Square повинні встановити як ширину, так і висоту.

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

Цей код має повернути:

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

Розділи з тестами для цього проєкту є в `test_module.py`.

## Розробка

Запишіть свій код в `shape_calculator.py`. Для розробки, ви можете використати `main.py`, щоб перевірити вашу функцію `shape_calculator()`. Натисніть клавішу "run" і `main.py` запуститься.

## Тестування

Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично кожен раз, коли ви натиснете клавішу "run".

## Надсилання

Скопіюйте URL-адресу вашого проєкту і відправте його до freeCodeCamp.

# --hints--

Це має створити класи "Rectangle", "Square" та пройти тестування.

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
