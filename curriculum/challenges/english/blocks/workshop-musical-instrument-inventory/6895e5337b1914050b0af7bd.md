---
id: 6895e5337b1914050b0af7bd
title: Step 12
challengeType: 20
dashedName: step-12
---

# --description--

Now, call the `get_fact()` method on the `instrument_1` instance and print the result.

Since `get_fact()` returns a string instead of printing it directly, you need to use `print()` to display the returned string.

# --hints--

You should call `get_fact()` on `instrument_1` and print the result.

```js
({
  test: () => assert(runPython(`_Node(_code).has_call("print(instrument_1.get_fact())")`))
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

instrument_1.play()

--fcc-editable-region--
```
