---
id: 6895e0bdb0348bf46952ab67
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

Now it's time to create instances of your `MusicalInstrument` class.

To create an instance of a class, you call the class name like a function, passing the required arguments for the `__init__` method (except for `self`, which is automatically handled by Python).

```python
my_instance = ClassName(arg1, arg2)
```

When you create this instance, Python calls your `__init__` method and stores the values as instance attributes that belong only to this specific instance.

Outside the class definition, create an instance named `instrument_1` for an `Oboe` which is a `woodwind` instrument.

# --hints--

You should create an instance of the `MusicalInstrument` class named `instrument_1`.

```js
({
    test: () => runPython(`
    assert isinstance(instrument_1, MusicalInstrument)
    `)
})
```

You should pass `Oboe` and `woodwind` as arguments when creating `instrument_1`.

```js
({ 
    test: () => runPython(`
        assert instrument_1.name == "Oboe"
        assert instrument_1.instrument_type == "woodwind" 
    `) 
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
class MusicalInstrument:
    def __init__(self, name, instrument_type):
        self.name = name
        self.instrument_type = instrument_type

--fcc-editable-region--
```
