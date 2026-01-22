---
id: 6895e0452b3370f26f365a46
title: Step 3
challengeType: 20
dashedName: step-3
---

# --description--

In the `__init__` method, you need to assign the parameters to instance attributes. Instance attributes are variables that belong to a specific instance of a class.

Inside your `__init__` method, assign the `name` parameter to `self.name` and the `instrument_type` parameter to `self.instrument_type`.

# --hints--

You should assign the `name` parameter to `self.name` inside the `__init__` method.

```js
 ({
    test: () => assert(runPython(`_Node(_code).find_class("MusicalInstrument").find_function("__init__").find_body()[0].is_equivalent("self.name = name")`))
});
```

You should assign the `instrument_type` parameter to `self.instrument_type` inside the `__init__` method.

```js
({
 test: () => assert(runPython(`_Node(_code).find_class("MusicalInstrument").find_function("__init__").find_body()[1].is_equivalent("self.instrument_type = instrument_type")`))
})

```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
class MusicalInstrument:
    def __init__(self, name, instrument_type):
        pass
--fcc-editable-region--
```
