---
id: 6895e572df8596062234f571
title: Step 13
challengeType: 20
dashedName: step-13
---

# --description--

Finally, do the same for `instrument_2`. Call the `play()` method on `instrument_2`, and then print the result of calling `get_fact()` on `instrument_2`.

This will complete your musical instrument workshop!

# --hints--

You should call the `play()` method on the `instrument_2` instance.

```js
({
  test: () => assert(runPython(`_Node(_code).has_stmt("instrument_2.play()")`))
});
```

You should call `get_fact()` on `instrument_2` and print the result.

```js
({
  test: () => assert(runPython(`_Node(_code).has_call("print(instrument_2.get_fact())")`))
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
print(instrument_1.get_fact())

--fcc-editable-region--
```

# --solutions--

```py
class MusicalInstrument:
    def __init__(self, name, instrument_type):
        self.name = name
        self.instrument_type = instrument_type

    def play(self):
        print(f'The {self.name} is fun to play!')

    def get_fact(self):
        return f'The {self.name} is part of the {self.instrument_type} family of instruments.'


instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')


instrument_1.play()              # The Oboe is fun to play!
print(instrument_1.get_fact())   # The Oboe is part of the woodwind family of instruments.

instrument_2.play()              # The Trumpet is fun to play!
print(instrument_2.get_fact())   # The Trumpet is part of the brass family of instruments.
```
