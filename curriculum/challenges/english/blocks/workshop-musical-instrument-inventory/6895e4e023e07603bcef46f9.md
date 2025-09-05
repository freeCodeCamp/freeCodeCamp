---
id: 6895e4e023e07603bcef46f9
title: Step 11
challengeType: 20
dashedName: step-11
---

# --description--

Now let's use the methods you've created. 

Call the `play()` method on your `instrument_1` instance. This will print the message about playing the Oboe.

To call a method on an instance, use the dot notation:

```python
instance_name.method_name()
```

# --hints--

You should call the `play()` method on the `instrument_1` instance.

```js
({
  test: () => assert(runPython(`_Node(_code).has_stmt("instrument_1.play()")`))
});
```

# --seed--

## --seed-contents--

```py
class MusicalInstrument:
    def __init__(self, name, instrument_type):
        self.name = name
        self.instrument_type = instrument_type

    def play(self):
        print(f'The {self.name} is fun to play!')

    def get_fact(self):
        return f'The {self.name} is part of the {self.instrument_type} family of instruments.'


--fcc-editable-region--
instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')

--fcc-editable-region--
```
