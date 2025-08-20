---
id: 6895e197180c9af6988e1e19
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

Create a second instance named `instrument_2` for a `Trumpet` which is a `brass` instrument.

Notice how you can create multiple instances from the same class template. Each instance stores its own attribute values independently from other instances.

# --hints--

You should create an instance named `instrument_2` of the `MusicalInstrument` class.

```js
({
    test: () => runPython(`
    assert isinstance(instrument_2, MusicalInstrument)
    `)
})
```

You should pass `Trumpet` and `brass` as arguments when creating `instrument_2`.

```js
({ 
    test: () => runPython(`
        assert instrument_2.name == "Trumpet"
        assert instrument_2.instrument_type == "brass" 
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

instrument_1 = MusicalInstrument('Oboe', 'woodwind')

--fcc-editable-region--
```
