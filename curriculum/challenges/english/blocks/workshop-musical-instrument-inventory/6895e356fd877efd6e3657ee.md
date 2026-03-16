---
id: 6895e356fd877efd6e3657ee
title: Step 8
challengeType: 20
dashedName: step-8
---

# --description--


Inside the `MusicalInstrument` class, define another method named `play` with only the `self` parameter. The `self` parameter allows methods to access the specific instance's attributes.

# --hints--

You should define a method named `play` with a `self` parameter.

```js
({
  test: () => assert(runPython(`_Node(_code).find_class("MusicalInstrument").find_function("play").has_args("self")`))
});
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

instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')

```
