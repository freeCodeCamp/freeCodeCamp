---
id: 6afece0acf43c38cd39ad715
title: Build a Polygon Area Calculator
challengeType: 27
dashedName: build-a-polygon-area-calculator
saveSubmissionToDB: true
---

# --description--

In this project, you will use object-oriented programming to create a `Rectangle` class and a `Square` class. The `Square` class should be a subclass of `Rectangle` and inherit its methods and attributes.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a `Rectangle` class.

2. When a `Rectangle` object is created, it should be initialized with `width` and `height` properties, backed by `_width` and `_height` attributes. Define getters using `@property` and setters using `@width.setter` and `@height.setter`. Initialize the dimensions through these setters. The class should contain the following properties and method:

    - `width`: Gets or sets the width of the rectangle.
    - `height`: Gets or sets the height of the rectangle.
    - `area`: A read-only property defined using `@property` that returns area (\\( \text{width} \times \text{height} \\)).
    - `perimeter`: A read-only property defined using `@property` that returns perimeter \\( 2(\text{width} + \text{height}) \\).
    - `diagonal`: A read-only property defined using `@property` that returns diagonal \\( \sqrt{\text{width}^2 + \text{height}^2} \\).
    - `picture`: A read-only property defined using `@property` that returns a string that represents the shape using lines of `*`. The number of lines should be equal to the height and the number of `*` in each line should be equal to the width. There should be a new line (`\n`) at the end of each line. If the width or height is larger than `50`, this should return the string: `Too big for picture.`
    - `amount_inside`: A method that takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, two squares with sides of `4` could fit inside a rectangle with a width of `4` and a height of `8`.

3. If an instance of a `Rectangle` is represented as a string, it should look like: `Rectangle(width=5, height=10)`.

4. You should create a `Square` class that subclasses `Rectangle`.
5. When a `Square` object is created, it should be initialized with a single side length. The `__init__` method should call `super().__init__(side, side)` to initialize both dimensions through the `Rectangle` class.
6. The `Square` class should contain the following properties with getters and setters. The `width` and `height` getters may be reused from `Rectangle` or defined in `Square`:

    - `width`: Returns the width. Its setter should override the setter from the `Rectangle` class and set both width and height to the side length.
    - `height`: Returns the height. Its setter should override the setter from the `Rectangle` class and set both width and height to the side length.
    - `side`: Returns the current side length. Its setter sets the height and width of the square equal to the side length. Define these using `@property` and `@side.setter`.

7. The `Square` class should inherit the `Rectangle` class calculation properties and `amount_inside` method.
8. If an instance of a `Square` is represented as a string, it should look like: `Square(side=9)`.

9. Dimensions must be positive integers. Apply these rules during construction and assignments to `width`, `height`, or `side`:

    - For values that are not integers, including booleans, raise a `TypeError` with the message `Dimension must be an integer.`
    - For integers less than or equal to zero, raise a `ValueError` with the message `Dimension must be positive.`
    - If an update is rejected, leave both existing dimensions unchanged.

10. Both classes should define `__repr__` methods that return constructor-style representations using the current dimensions. For example, `repr(Rectangle(5, 10))` should return `Rectangle(5, 10)`, and `repr(Square(9))` should return `Square(9)`.

## Usage Example

```py
rect = Rectangle(10, 5)
print(rect.area)
rect.height = 3
print(rect.perimeter)
print(rect)
print(rect.picture)

sq = Square(9)
print(sq.area)
sq.side = 4
print(sq.diagonal)
print(sq)
print(sq.picture)

rect.height = 8
rect.width = 16
print(rect.amount_inside(sq))
```

That code should print:

```md
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

# --hints--

You should define a `Rectangle` class.

```js
({ test: () => runPython(`
assert _Node(_code).has_class("Rectangle")
`) });
```

`Rectangle.width` should have a getter decorated with `@property` and a setter decorated with `@width.setter`.

```js
({ test: () => runPython(`
methods = _Node(_code).find_class("Rectangle").find_functions("width")
assert any(method.has_decorators("property") for method in methods)
assert any(method.has_decorators("width.setter") for method in methods)
assert isinstance(Rectangle.width, property)
assert Rectangle.width.fget is not None and Rectangle.width.fset is not None
`) });
```

`Rectangle.height` should have a getter decorated with `@property` and a setter decorated with `@height.setter`.

```js
({ test: () => runPython(`
methods = _Node(_code).find_class("Rectangle").find_functions("height")
assert any(method.has_decorators("property") for method in methods)
assert any(method.has_decorators("height.setter") for method in methods)
assert isinstance(Rectangle.height, property)
assert Rectangle.height.fget is not None and Rectangle.height.fset is not None
`) });
```

`Rectangle(3, 6)` should initialize `width` and `_width` to `3`, and `height` and `_height` to `6`.

```js
({ test: () => runPython(`
rect = Rectangle(3, 6)
assert (rect.width, rect.height, rect._width, rect._height) == (3, 6, 3, 6)
other = Rectangle(7, 2)
assert (other.width, other.height) == (7, 2)
assert (rect.width, rect.height) == (3, 6)
`) });
```

The `Rectangle` constructor should initialize its dimensions through the property setters.

```js
({ test: () => runPython(`
class TrackedRectangle(Rectangle):
    calls = []
    @Rectangle.width.setter
    def width(self, value):
        self.calls.append(('width', value))
        Rectangle.width.fset(self, value)
    @Rectangle.height.setter
    def height(self, value):
        self.calls.append(('height', value))
        Rectangle.height.fset(self, value)
rect = TrackedRectangle(3, 6)
assert ('width', 3) in rect.calls and ('height', 6) in rect.calls
`) });
```

Assigning `8` to the `width` of `Rectangle(3, 6)` should update `width` and `_width` without changing the other dimension.

```js
({ test: () => runPython(`
rect = Rectangle(3, 6)
rect.width = 8
assert (rect.width, rect.height, rect._width, rect._height) == (8, 6, 8, 6)
`) });
```

Assigning `8` to the `height` of `Rectangle(3, 6)` should update `height` and `_height` without changing the other dimension.

```js
({ test: () => runPython(`
rect = Rectangle(3, 6)
rect.height = 8
assert (rect.width, rect.height, rect._width, rect._height) == (3, 8, 3, 8)
`) });
```

`Rectangle(3, 6).area` should return `18` and reflect later dimension changes.

```js
({ test: () => runPython(`
import math
rect = Rectangle(3, 6)
assert math.isclose(rect.area, 18)
for width, height in [(7, 2), (4, 9)]:
    rect.width, rect.height = width, height
    assert math.isclose(rect.area, width * height)
`) });
```

`Rectangle(3, 6).perimeter` should return `18` and reflect later dimension changes.

```js
({ test: () => runPython(`
import math
rect = Rectangle(3, 6)
assert math.isclose(rect.perimeter, 18)
for width, height in [(7, 2), (4, 9)]:
    rect.width, rect.height = width, height
    assert math.isclose(rect.perimeter, 2 * (width + height))
`) });
```

`Rectangle(3, 6).diagonal` should return `6.708203932499369` and reflect later dimension changes.

```js
({ test: () => runPython(`
import math
rect = Rectangle(3, 6)
assert math.isclose(rect.diagonal, 6.708203932499369)
for width, height in [(7, 2), (4, 9)]:
    rect.width, rect.height = width, height
    assert math.isclose(rect.diagonal, (width ** 2 + height ** 2) ** 0.5)
`) });
```

`Rectangle.area` should be a read-only property defined using `@property`.

```js
({ test: () => runPython(`
assert _Node(_code).find_class("Rectangle").find_function("area").has_decorators("property")
assert isinstance(Rectangle.area, property)
assert Rectangle.area.fset is None
rect = Rectangle(3, 6)
try:
    rect.area = 10
except AttributeError:
    pass
else:
    assert False
`) });
```

`Rectangle.perimeter` should be a read-only property defined using `@property`.

```js
({ test: () => runPython(`
assert _Node(_code).find_class("Rectangle").find_function("perimeter").has_decorators("property")
assert isinstance(Rectangle.perimeter, property)
assert Rectangle.perimeter.fset is None
rect = Rectangle(3, 6)
try:
    rect.perimeter = 10
except AttributeError:
    pass
else:
    assert False
`) });
```

`Rectangle.diagonal` should be a read-only property defined using `@property`.

```js
({ test: () => runPython(`
assert _Node(_code).find_class("Rectangle").find_function("diagonal").has_decorators("property")
assert isinstance(Rectangle.diagonal, property)
assert Rectangle.diagonal.fset is None
rect = Rectangle(3, 6)
try:
    rect.diagonal = 10
except AttributeError:
    pass
else:
    assert False
`) });
```

`Rectangle.picture` should be a read-only property defined using `@property`.

```js
({ test: () => runPython(`
assert _Node(_code).find_class("Rectangle").find_function("picture").has_decorators("property")
assert isinstance(Rectangle.picture, property)
assert Rectangle.picture.fset is None
rect = Rectangle(3, 6)
try:
    rect.picture = 10
except AttributeError:
    pass
else:
    assert False
`) });
```

`Rectangle(3, 2).picture` should return `"***\n***\n"`.

```js
({ test: () => runPython(`
assert Rectangle(3, 2).picture == '***\\n***\\n'
for width, height in [(1, 4), (50, 1), (1, 50), (50, 50)]:
    assert Rectangle(width, height).picture == ('*' * width + '\\n') * height
`) });
```

`Rectangle(51, 1).picture` and `Rectangle(1, 51).picture` should return `"Too big for picture."`.

```js
({ test: () => runPython(`
for width, height in [(51, 1), (1, 51), (60, 70)]:
    assert Rectangle(width, height).picture == 'Too big for picture.'
`) });
```

`Rectangle(15, 10).amount_inside(Square(5))` should return `6` without rotating either shape.

```js
({ test: () => runPython(`
assert Rectangle(15, 10).amount_inside(Square(5)) == 6
`) });
```

`Rectangle(4, 8).amount_inside(Rectangle(3, 6))` should return `1` without rotating either shape.

```js
({ test: () => runPython(`
assert Rectangle(4, 8).amount_inside(Rectangle(3, 6)) == 1
`) });
```

`Rectangle(2, 3).amount_inside(Rectangle(3, 6))` should return `0` without rotating either shape.

```js
({ test: () => runPython(`
assert Rectangle(2, 3).amount_inside(Rectangle(3, 6)) == 0
`) });
```

`Rectangle(3, 8).amount_inside(Rectangle(4, 2))` should return `0` without rotating either shape.

```js
({ test: () => runPython(`
assert Rectangle(3, 8).amount_inside(Rectangle(4, 2)) == 0
`) });
```

`Square(8).amount_inside(Rectangle(3, 2))` should return `8` without rotating either shape.

```js
({ test: () => runPython(`
assert Square(8).amount_inside(Rectangle(3, 2)) == 8
`) });
```

`Square` should inherit from `Rectangle`.

```js
({ test: () => runPython(`
assert _Node(_code).find_class("Square").inherits_from("Rectangle")
assert issubclass(Square, Rectangle)
`) });
```

`Square(5)` should call `super().__init__(5, 5)` to initialize both dimensions.

```js
({ test: () => runPython(`
import ast
constructor = _Node(_code).find_class("Square").find_function("__init__")
assert any(
    isinstance(node, ast.Call)
    and isinstance(node.func, ast.Attribute)
    and node.func.attr == '__init__'
    and isinstance(node.func.value, ast.Call)
    and isinstance(node.func.value.func, ast.Name)
    and node.func.value.func.id == 'super'
    for node in ast.walk(ast.parse(str(constructor)))
)
original = Rectangle.__init__
calls = []
def tracked(self, *args, **kwargs):
    calls.append((self, args, kwargs))
    return original(self, *args, **kwargs)
try:
    Rectangle.__init__ = tracked
    square = Square(5)
    assert calls == [(square, (5, 5), {})]
    assert (square.width, square.height, square.side) == (5, 5, 5)
finally:
    Rectangle.__init__ = original
`) });
```

`Square.side` should have a getter decorated with `@property` and a setter decorated with `@side.setter`.

```js
({ test: () => runPython(`
methods = _Node(_code).find_class("Square").find_functions("side")
assert any(method.has_decorators("property") for method in methods)
assert any(method.has_decorators("side.setter") for method in methods)
`) });
```

Assigning `2` to `width` on `Square(5)` should set `width`, `height`, and `side` to `2`.

```js
({ test: () => runPython(`
assert isinstance(Square.width, property)
assert Square.width.fget is not None and Square.width.fset is not None
square = Square(5)
for value in [2, 7]:
    square.width = value
    assert (square.width, square.height, square.side, square._width, square._height) == (value,) * 5
`) });
```

Assigning `2` to `height` on `Square(5)` should set `width`, `height`, and `side` to `2`.

```js
({ test: () => runPython(`
assert isinstance(Square.height, property)
assert Square.height.fget is not None and Square.height.fset is not None
square = Square(5)
for value in [2, 7]:
    square.height = value
    assert (square.width, square.height, square.side, square._width, square._height) == (value,) * 5
`) });
```

Assigning `2` to `side` on `Square(5)` should set `width`, `height`, and `side` to `2`.

```js
({ test: () => runPython(`
assert isinstance(Square.side, property)
assert Square.side.fget is not None and Square.side.fset is not None
square = Square(5)
for value in [2, 7]:
    square.side = value
    assert (square.width, square.height, square.side, square._width, square._height) == (value,) * 5
`) });
```

`Square` should inherit `area`, `perimeter`, `diagonal`, `picture`, and `amount_inside` from `Rectangle`.

```js
({ test: () => runPython(`
for name in ['area', 'perimeter', 'diagonal', 'picture', 'amount_inside']:
    assert name not in Square.__dict__
    assert getattr(Square, name) is getattr(Rectangle, name)
`) });
```

After setting `Square(5).side` to `2`, its area should be `4`, perimeter `8`, diagonal `2.8284271247461903`, and picture `"**\n**\n"`.

```js
({ test: () => runPython(`
import math
square = Square(5)
square.side = 2
assert square.area == 4
assert square.perimeter == 8
assert math.isclose(square.diagonal, 8 ** 0.5)
assert square.picture == '**\\n**\\n'
assert Square(50).picture == ('*' * 50 + '\\n') * 50
assert Square(51).picture == 'Too big for picture.'
`) });
```

`Rectangle(True, 5)`, `Rectangle(5, True)`, and `Square(True)` should raise `TypeError` with `"Dimension must be an integer."`.

```js
({ test: () => runPython(`
for value in [1.5, "3", None, True, False]:
    for factory, args in [(Rectangle, (value, 5)), (Rectangle, (5, value)), (Square, (value,))]:
        try:
            factory(*args)
        except TypeError as error:
            assert str(error) == 'Dimension must be an integer.'
        else:
            assert False
`) });
```

Assigning `True` to `width`, `height`, or `side` should raise `TypeError` with `"Dimension must be an integer."` and leave the dimensions unchanged.

```js
({ test: () => runPython(`
for shape, names in [(Rectangle(3, 6), ['width', 'height']), (Square(5), ['width', 'height', 'side'])]:
    before = (shape.width, shape.height, shape._width, shape._height)
    for name in names:
        for value in [1.5, "3", None, True, False]:
            try:
                setattr(shape, name, value)
            except TypeError as error:
                assert str(error) == 'Dimension must be an integer.'
            else:
                assert False
            assert (shape.width, shape.height, shape._width, shape._height) == before
            if isinstance(shape, Square):
                assert shape.side == before[0]
`) });
```

`Rectangle(0, 5)`, `Rectangle(5, 0)`, and `Square(0)` should raise `ValueError` with `"Dimension must be positive."`.

```js
({ test: () => runPython(`
for value in [0, -1, -10]:
    for factory, args in [(Rectangle, (value, 5)), (Rectangle, (5, value)), (Square, (value,))]:
        try:
            factory(*args)
        except ValueError as error:
            assert str(error) == 'Dimension must be positive.'
        else:
            assert False
`) });
```

Assigning `0` to `width`, `height`, or `side` should raise `ValueError` with `"Dimension must be positive."` and leave the dimensions unchanged.

```js
({ test: () => runPython(`
for shape, names in [(Rectangle(3, 6), ['width', 'height']), (Square(5), ['width', 'height', 'side'])]:
    before = (shape.width, shape.height, shape._width, shape._height)
    for name in names:
        for value in [0, -1, -10]:
            try:
                setattr(shape, name, value)
            except ValueError as error:
                assert str(error) == 'Dimension must be positive.'
            else:
                assert False
            assert (shape.width, shape.height, shape._width, shape._height) == before
            if isinstance(shape, Square):
                assert shape.side == before[0]
`) });
```

`str(Rectangle(5, 10))` should return `"Rectangle(width=5, height=10)"`, and `str(Square(9))` should return `"Square(side=9)"`.

```js
({ test: () => runPython(`
assert str(Rectangle(5, 10)) == 'Rectangle(width=5, height=10)'
assert str(Square(9)) == 'Square(side=9)'
`) });
```

After dimension updates, `str` should return `"Rectangle(width=7, height=2)"` for a rectangle with width `7` and height `2`, and `"Square(side=4)"` for a square with side `4`.

```js
({ test: () => runPython(`
rect = Rectangle(5, 10)
rect.width, rect.height = 7, 2
square = Square(9)
square.height = 4
assert str(rect) == 'Rectangle(width=7, height=2)'
assert str(square) == 'Square(side=4)'
`) });
```

`repr(Rectangle(5, 10))` should return `"Rectangle(5, 10)"`, and `repr(Square(9))` should return `"Square(9)"`.

```js
({ test: () => runPython(`
assert repr(Rectangle(5, 10)) == 'Rectangle(5, 10)'
assert repr(Square(9)) == 'Square(9)'
`) });
```

After dimension updates, `repr` should return `"Rectangle(7, 2)"` for a rectangle with width `7` and height `2`, and `"Square(4)"` for a square with side `4`.

```js
({ test: () => runPython(`
rect = Rectangle(5, 10)
rect.width, rect.height = 7, 2
square = Square(9)
square.height = 4
assert repr(rect) == 'Rectangle(7, 2)'
assert repr(square) == 'Square(4)'
`) });
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @property
    def width(self):
        return self._width

    @width.setter
    def width(self, value):
        if type(value) is not int:
            raise TypeError('Dimension must be an integer.')
        if value <= 0:
            raise ValueError('Dimension must be positive.')
        self._width = value

    @property
    def height(self):
        return self._height

    @height.setter
    def height(self, value):
        if type(value) is not int:
            raise TypeError('Dimension must be an integer.')
        if value <= 0:
            raise ValueError('Dimension must be positive.')
        self._height = value

    @property
    def area(self):
        return self.width * self.height

    @property
    def perimeter(self):
        return 2 * (self.width + self.height)

    @property
    def diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** 0.5

    @property
    def picture(self):
        if self.width > 50 or self.height > 50:
            return 'Too big for picture.'
        return ('*' * self.width + '\n') * self.height

    def amount_inside(self, shape):
        return (self.width // shape.width) * (self.height // shape.height)

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'

    def __repr__(self):
        return f'Rectangle({self.width!r}, {self.height!r})'


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

    @Rectangle.width.setter
    def width(self, value):
        self.side = value

    @Rectangle.height.setter
    def height(self, value):
        self.side = value

    @property
    def side(self):
        return self._width

    @side.setter
    def side(self, side):
        if type(side) is not int:
            raise TypeError('Dimension must be an integer.')
        if side <= 0:
            raise ValueError('Dimension must be positive.')
        self._width = side
        self._height = side

    def __str__(self):
        return f'Square(side={self.width})'

    def __repr__(self):
        return f'Square({self.width!r})'
```
