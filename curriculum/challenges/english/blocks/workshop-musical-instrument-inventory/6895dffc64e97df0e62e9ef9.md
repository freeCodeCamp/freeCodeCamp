---
id: 6895dffc64e97df0e62e9ef9
title: Step 2
challengeType: 20
dashedName: step-2
---

# --description--

Methods are functions defined inside a class that can perform actions using the class's data. Here is how you create methods:

```python
def method_name(parameter1, parameter2,...):
    # Method contents will go here
```

In Python, the `__init__` method is a special method known as the initializer method, which is called when you create a new instance of the class.

Inside your `MusicalInstrument` class, add an `__init__` method with three parameters: `self`, `name`, and `instrument_type`.

The `self` parameter is a standard way to refer to the instance of the class and is required as the first parameter for all instance methods in a class.

# --hints--

You should define an `__init__` method inside your `MusicalInstrument` class.

```js
({
 test: () => assert(runPython(`_Node(_code).find_class("MusicalInstrument").has_function("__init__")`))
});
```

Your `__init__` method should have three parameters: `self`, `name`, and `instrument_type`.

```js
({
  test: () => assert(runPython(`_Node(_code).find_class("MusicalInstrument").find_function("__init__").has_args("self, name, instrument_type")`))
});
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
class MusicalInstrument:
    pass
--fcc-editable-region--
```
