---
id: 68e2c945cc1d8e778152be31
title: Build a Player Interface
challengeType: 27
dashedName: build-a-player-interface
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define an abstract class named `Player` that inherits from the `abc.ABC` class.
1. The `Player` class should have an `__init__` method that sets:

   - The `moves` attribute to an empty list.
   - The `position` attribute to `(0, 0)`.
   - The `path` attribute to a list containing the initial position.

1. The `Player` class should have a method named `make_move` that:

   - Uses `random.choice` to get a random move from the `moves` attribute (defined in the concrete class).
   - Adds the values from the selected move to the current position and updates the `position` attribute.
   - Appends the new `position` tuple to the `path` attribute.
   - Returns the new `position`.

1. The `Player` class should have an abstract method named `level_up` to be implemented in concrete classes.
1. You should define a `Pawn` class that inherits from the `Player` class.
1. The `Pawn` class should use `super()` to call the parent's `__init__` method and then set the `moves` attribute to a list of tuples representing `x, y` coordinates.
1. Each coordinate tuple should represent a movement of `1` unit in the following directions: up, down, left, right.
1. The `Pawn` class should implement a concrete `level_up` method by adding more moves to the `moves` attribute. The added moves should represent the four diagonal movements (for example, `1` unit down plus `1` unit left).

**Note:** Standard library modules should be imported without using aliases. Tests related to the `Player` class will fail until the `Pawn` class becomes instantiable.

# --hints--

You should have a class named `Player`.

```js
({ test: () => runPython(`assert _Node(_code).has_class("Player")`) })
```

The `Player` class should inherit from the `ABC` class of the `abc` module.

```js
({ test: () => runPython(`
from abc import ABC
import ast
cls = _Node(_code).find_class("Player")
assert cls.inherits_from("ABC") or cls.inherits_from("abc.ABC")
`) })
```

The `Player` class should have an `__init__` method.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").has_function("__init__")`) })
```

The `Player`'s `__init__` method should have a single parameter `self`.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").find_function("__init__").has_args("self")`) })
```

The `Player`'s `__init__` method should set `self.moves` to an empty list.

```js
({ test: () => runPython(`
init = _Node(_code).find_class("Player").find_function("__init__")
assert init.has_stmt("self.moves = []") or init.has_stmt("self.moves = list()")
`) })
```

The `Player`'s `__init__` method should set `self.position` to `(0, 0)`.

```js
({ test: () => runPython(`
init = _Node(_code).find_class("Player").find_function("__init__")
assert init.has_stmt("self.position = (0, 0)")
`) })
```

The `Player`'s `__init__` method should set `self.path` to a list containing the initial position.

```js
({ test: () => runPython(`
init = _Node(_code).find_class("Player").find_function("__init__")
assert init.has_stmt("self.path = [self.position]")
`) })
```

The `Player` class should have a `make_move` method.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").has_function("make_move")`) })
```

The `Player`'s `make_move` method should have a single parameter `self`.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").find_function("make_move").has_args("self")`) })
```

The `Player`'s `make_move` method should use `random.choice` to get a random move from the `moves` attribute.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").block_has_call("choice", "make_move")`) })
```

The `Player`'s `make_move` method should update the `position` attribute by adding to it the coordinates of the randomly selected move.

```js
({ test: () => runPython(`
def test_func():
  try:
    p = Pawn()
  except TypeError:
    assert False, "Unable to instantiate Pawn"

  p.make_move()
  assert p.position == (1, 2)
  p.make_move()
  assert p.position == (2, 4)

def custom_choice(seq):
  return (1, 2)

flag = None

try:
  original_choice = choice
  choice = custom_choice
  flag = "choice"
    
  test_func()

except NameError:
  try:
    original_choice = random.choice
    random.choice = custom_choice
    flag = "random.choice"

    test_func()

  except NameError:
    assert False, "missing import"
finally:
  if flag == "choice":
    choice = original_choice
  elif flag == "random.choice":
    random.choice = original_choice
`) })
```

The `Player`'s `make_move` method should append the new `position` tuple to the `path` attribute.

```js
({ test: () => runPython(`
def test_func():
  try:
    p = Pawn()
  except TypeError:
    assert False, "Unable to instantiate Pawn"

  p.make_move()
  assert p.path == [(0, 0), (1, 2)]
  p.make_move()
  assert p.path == [(0, 0), (1, 2), (2, 4)]

def custom_choice(seq):
  return (1, 2)

flag = None

try:
  original_choice = choice
  choice = custom_choice
  flag = "choice"
    
  test_func()

except NameError:
  try:
    original_choice = random.choice
    random.choice = custom_choice
    flag = "random.choice"

    test_func()

  except NameError:
    assert False, "missing import"
finally:
  if flag == "choice":
    choice = original_choice
  elif flag == "random.choice":
    random.choice = original_choice
`) })
```

The `Player`'s `make_move` method should return the updated `position` attribute.

```js
({ test: () => runPython(`
def test_func():
  try:
    p = Pawn()
  except TypeError:
    assert False, "Unable to instantiate Pawn"

  assert p.make_move() == (1, 2)

def custom_choice(seq):
  return (1, 2)

flag = None

try:
  original_choice = choice
  choice = custom_choice
  flag = "choice"
    
  test_func()

except NameError:
  try:
    original_choice = random.choice
    random.choice = custom_choice
    flag = "random.choice"

    test_func()

  except NameError:
    assert False, "missing import"
finally:
  if flag == "choice":
    choice = original_choice
  elif flag == "random.choice":
    random.choice = original_choice
`) })
```

The `Player` class should have a `level_up` method.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").has_function("level_up")`) })
```

The `Player`'s `level_up` method should have a single parameter `self`.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Player").find_function("level_up").has_args("self")`) })
```

The `Player`'s `level_up` method should be an abstract method.

```js
({ test: () => runPython(`
target = _Node(_code).find_class("Player").find_function("level_up")
assert target.has_decorators("abstractmethod") or target.has_decorators("abc.abstractmethod")
`) })
```

The `Player` class should be an abstract class.

```js
({ test: () => runPython(`
try:
  Player()
except TypeError as e:
  assert str(e) == "Can't instantiate abstract class Player with abstract method level_up"
else:
  assert False, "Player class should not be instantiable"
`) })
```

You should have a class named `Pawn`.

```js
({ test: () => runPython(`assert _Node(_code).has_class("Pawn")`) })
```

The `Pawn` class should inherit from the `Player` class.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Pawn").inherits_from("Player")`) })
```

The `Pawn` class should have an `__init__` method.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Pawn").has_function("__init__")`) })
```

The `Pawn`'s `__init__` method should have a single parameter `self`.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Pawn").find_function("__init__").has_args("self")`) })
```

The `Pawn`'s `__init__` method should call the parent's `__init__` with using the `super` function.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Pawn").find_function("__init__").has_stmt("super().__init__()")`) })
```

The `Pawn`'s `__init__` method should set the `moves` attribute to a list of tuples representing `x, y` coordinates, where each coordinate tuple represents a movement of `1` unit in the following directions: up, down, left, right.

```js
({ test: () => runPython(`
p = Pawn()
moves = [(0, 1), (1, 0), (-1, 0), (0, -1)]
assert isinstance(p.moves, list)
assert len(p.moves) == 4
assert all(move in p.moves for move in moves)
`) })
```

The `Pawn` class should have a `level_up` method.

```js
({ test: () => runPython(`assert _Node(_code).find_class("Pawn").has_function("level_up")`) })
```

The `Pawn`'s `level_up` method should add the four diagonal movement of `1` unit to the `moves` attribute.

```js
({ test: () => runPython(`
p = Pawn()
moves = [(0, 1), (1, 0), (-1, 0), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)]
p.level_up()
assert isinstance(p.moves, list)
assert len(p.moves) == 8
assert all(move in p.moves for move in moves)
`) })
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
from abc import ABC, abstractmethod
from random import choice


class Player(ABC):
    def __init__(self):
        self.moves = []
        self.position = (0, 0)
        self.path = [self.position]

    def make_move(self):
        x, y = self.position
        move = choice(self.moves)
        new_x = move[0] + x
        new_y = move[1] + y
        self.position = (new_x, new_y)
        self.path.append(self.position)
        return self.position

    @abstractmethod
    def level_up(self):
        pass


class Pawn(Player):
    def __init__(self):
        super().__init__()
        self.moves = [(0, 1), (1, 0), (-1, 0), (0, -1)]

    def level_up(self):
        self.moves.extend([(1, 1), (1, -1), (-1, 1), (-1, -1)])
```
