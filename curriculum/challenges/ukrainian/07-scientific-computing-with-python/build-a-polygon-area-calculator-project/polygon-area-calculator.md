---
id: 5e444147903586ffb414c94f
title: Проєкт «Створіть калькулятор площі багатокутника»
challengeType: 23
forumTopicId: 462363
dashedName: build-a-polygon-area-calculator-project
---

# --description--

У цьому проєкті ви будете використовувати об’єктноорієнтоване програмування, щоб створити класи `Rectangle` та `Square`. Клас `Square` має бути підкласом класу `Rectangle` та наслідувати його методи й атрибути.

## Клас Rectangle

При створенні об’єкту Rectangle ви повинні ініціалізувати його, використовуючи атрибути `width` та `height`. Клас також повинен містити наступні методи:

- `set_width`
- `set_height`
- `get_area`: повертає площу (`width * height`)
- `get_perimeter`: повертає периметр (`2 * width + 2 * height`)
- `get_diagonal`: повертає діагональ (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: повертає рядок, який представляє фігуру лініями «\*». Кількість ліній повинна дорівнювати висоті, а кількість «\*» у кожному рядку повинна дорівнювати ширині. Наприкінці кожного рядка має бути новий рядок (`\n`). Якщо ширина або висота більші за 50, то має повернутись рядок «Too big for picture.».
- `get_amount_inside`: приймає іншу фігуру (квадрат чи трикутник) як аргумент. Повертає ту кількість разів, скільки передана фігура може поміститися у фігурі (без обертання). Наприклад, прямокутник з шириною 4 і висотою 8 може вмістити два квадрати зі сторонами 4.

Додатково, якщо екземпляр класу `Rectangle` представлений як рядок, то він має виглядати так: `Rectangle(width=5, height=10)`.

## Клас Square

Клас `Square` має бути підкласом класу `Rectangle`. Коли ви створюєте об’єкт `Square`, передається довжина однієї сторони. Метод `__init__` має зберігати довжину сторони в атрибутах `width` та `height` з класу `Rectangle`.

Клас `Square` повинен мати доступ до методів класу `Rectangle`, але також повинен містити метод `set_side`. Якщо екземпляр класу `Square` представлений у вигляді рядка, то він має виглядати так: `Square(side=9)`.

Додатково, методи `set_width` та `set_height` на класі `Square` мають встановити як ширину, так і висоту.

## Приклад використання

```py
rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
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

Примітка: відкрийте консоль браузера, натиснувши на F12, щоб побачити детальніший результат тестів.

# --hints--

Клас `Square` має бути підкласом класу `Rectangle`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None

    def test_subclass(self):
        actual = issubclass(shape_calculator.Square, shape_calculator.Rectangle)
        expected = True
        self.assertEqual(actual, expected, 'Expected Square class to be a subclass of the Rectangle class.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Клас `Square` має відрізнятись від класу `Rectangle`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None    

    def test_distinct_classes(self):
        actual = shape_calculator.Square is not shape_calculator.Rectangle
        expected = True
        self.assertEqual(actual, expected, 'Expected Square class to be a distinct class from the Rectangle class.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Об’єкт-квадрат має бути екземпляром класу `Square` та класу `Rectangle`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_square_is_square_and_rectangle(self):
        actual = isinstance(self.sq, shape_calculator.Square) and isinstance(self.sq, shape_calculator.Rectangle)
        expected = True
        self.assertEqual(actual, expected, 'Expected square object to be an instance of the Square class and the Rectangle class.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Рядковим представленням `Rectangle(3, 6)` має бути `Rectangle(width=3, height=6)`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_rectangle_string(self):
        actual = str(self.rect)
        expected = "Rectangle(width=3, height=6)"
        self.assertEqual(actual, expected, 'Expected string representation of rectangle to be "Rectangle(width=3, height=6)"')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Рядковим представленням `Square(5)` має бути `Square(side=5)`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_square_string(self):
        actual = str(self.sq)
        expected = "Square(side=5)"
        self.assertEqual(actual, expected, 'Expected string representation of square to be "Square(side=5)"')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Rectangle(3, 6).get_area()` має повернути `18`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_area(self):
        actual = self.rect.get_area()
        expected = 18
        self.assertEqual(actual, expected, 'Expected area of rectangle to be 18')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Square(5).get_area()` має повернути `25`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_area(self):        
        actual = self.sq.get_area()
        expected = 25
        self.assertEqual(actual, expected, 'Expected area of square to be 25')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Rectangle(3, 6).get_perimeter()` має повернути `18`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_perimeter(self):
        actual = self.rect.get_perimeter()
        expected = 18
        self.assertEqual(actual, expected, 'Expected perimeter of rectangle to be 18')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Square(5).get_perimeter()` має повернути `20`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_perimeter(self):
        actual = self.sq.get_perimeter()
        expected = 20
        self.assertEqual(actual, expected, 'Expected perimeter of square to be 20')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Rectangle(3, 6).get_diagonal()` має повернути `6.708203932499369`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_diagonal(self):
        actual = self.rect.get_diagonal()
        expected = 6.708203932499369
        self.assertEqual(actual, expected, 'Expected diagonal of rectangle to be 6.708203932499369')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Square(5).get_diagonal()` має повернути `7.0710678118654755`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_diagonal(self):
        actual = self.sq.get_diagonal()
        expected = 7.0710678118654755
        self.assertEqual(actual, expected, 'Expected diagonal of square to be 7.0710678118654755')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Екземпляр класу `Rectangle` повинен мати інше рядкове представлення після встановлення нових значень.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)        

    def test_set_attributes(self):
        self.rect.set_width(7)
        self.rect.set_height(8)        
        actual = str(self.rect)
        expected = "Rectangle(width=7, height=8)"
        self.assertEqual(actual, expected, 'Expected string representation of rectangle after setting new values to be "Rectangle(width=7, height=8)"')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Екземпляр класу `Square` повинен мати інше рядкове представлення після встановлення нових значень за допомогою `.set_side()`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_set_attributes(self):        
        self.sq.set_side(2)        
        actual = str(self.sq)
        expected = "Square(side=2)"
        self.assertEqual(actual, expected, 'Expected string representation of square after setting new values to be "Square(side=2)"')   
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Екземпляр класу `Square` повинен мати інше рядкове представлення після встановлення нових значень за допомогою `.set_width()` або `set_height()`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_set_attributes(self):        
        self.sq.set_height(2)        
        actual = str(self.sq)
        expected = "Square(side=2)"
        self.assertEqual(actual, expected, 'Expected string representation of square after setting new values to be "Square(side=2)"')
        self.sq.set_width(4)
        actual = str(self.sq)
        expected = "Square(side=4)"
        self.assertEqual(actual, expected, 'Expected string representation of square after setting width to be "Square(side=4)"')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Метод `.get_picture()` має повернути інше рядкове представлення екземпляра `Rectangle`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_rectangle_picture(self):
        self.rect.set_width(7)
        self.rect.set_height(3)
        actual = self.rect.get_picture()
        expected = "*******\\n*******\\n*******\\n"
        self.assertEqual(actual, expected, 'Expected rectangle picture to be different.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Метод `.get_picture()` має повернути інше рядкове представлення екземпляра `Square`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.sq = shape_calculator.Square(5)

    def test_square_picture(self):
        self.sq.set_side(2)
        actual = self.sq.get_picture()
        expected = "**\\n**\\n"
        self.assertEqual(actual, expected, 'Expected square picture to be different.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

Метод `.get_picture()` має повернути рядок `Too big for picture.`, якщо атрибути `width` або `height` більші за `50`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_big_picture(self):
        self.rect.set_width(51)
        self.rect.set_height(3)
        actual = self.rect.get_picture()
        expected = "Too big for picture."
        self.assertEqual(actual, expected, 'Expected message: "Too big for picture."')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Rectangle(15,10).get_amount_inside(Square(5))` має повернути `6`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)
        self.sq = shape_calculator.Square(5)

    def test_get_amount_inside(self):
        self.rect.set_height(10)
        self.rect.set_width(15)
        actual = self.rect.get_amount_inside(self.sq)
        expected = 6
        self.assertEqual(actual, expected, 'Expected "get_amount_inside" to return 6.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Rectangle(4,8).get_amount_inside(Rectangle(3, 6))` має повернути `1`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_get_amount_inside_two_rectangles(self):
        rect2 = shape_calculator.Rectangle(4, 8)
        actual = rect2.get_amount_inside(self.rect)
        expected = 1
        self.assertEqual(actual, expected, 'Expected "get_amount_inside" to return 1.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

`Rectangle(2,3).get_amount_inside(Rectangle(3, 6))` має повернути `0`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/shape_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import shape_calculator
from importlib import reload
reload(shape_calculator)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.rect = shape_calculator.Rectangle(3, 6)

    def test_get_amount_inside_none(self):
        rect2 = shape_calculator.Rectangle(2, 3)
        actual = rect2.get_amount_inside(self.rect)
        expected = 0
        self.assertEqual(actual, expected, 'Expected "get_amount_inside" to return 0.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = runPython(testCode);
    assert(out);
  }
})
```

# --seed--

## --seed-contents--

```py
class Rectangle:
    pass

class Square:
    pass
```

# --solutions--

```py
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        area = self.width * self.height
        return area

    def get_perimeter(self):
        perimeter = self.width * 2 + self.height * 2
        return perimeter

    def get_diagonal(self):
        diagonal = (self.width ** 2 + self.height ** 2) ** 0.5        
        return diagonal

    def get_picture(self):
        if self.width < 50 and self.height < 50:
            picture = f'{"*"*self.width}\n'*self.height            
            return picture
        else:            
            return 'Too big for picture.'

    def get_amount_inside(self, polygon):
        h_number = self.height // polygon.height
        w_number = self.width // polygon.width
        repetition = h_number * w_number        
        return repetition


class Square(Rectangle):
    def __init__(self, side):
        self.width = side
        self.height = side

    def __str__(self):
        return f'Square(side={self.width})'

    def set_width(self, side):
        self.width = side
        self.height = side

    def set_height(self, side):
        self.height = side
        self.width = side

    def set_side(self,side):
        self.width = side
        self.height = side

```
