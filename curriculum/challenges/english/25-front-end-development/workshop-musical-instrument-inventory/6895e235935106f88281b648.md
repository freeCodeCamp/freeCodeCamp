---
id: 6895e235935106f88281b648
title: Step 6
challengeType: 20
dashedName: step-6
---

# --description--

You can access the attributes of your instances using dot notation:

```py
instance_name.attribute_name
```

This allows you to retrieve the values that were stored during initialization.

Try printing the `name` and `instrument_type` attributes of both your instances. You'll be able to see the values you assigned when you created them.

# --hints--

You should print the `name` attribute of `instrument_1`.

```js
({
  test: () => assert(runPython(`_Node(_code).has_call("print(instrument_1.name)")`))
})
```

You should print the `instrument_type` attribute of `instrument_1`.

```js
({
  test: () => assert(runPython(`_Node(_code).has_call("print(instrument_1.instrument_type)")`))
});
```

You should print the `name` attribute of `instrument_2`.

```js
({
  test: () => assert(runPython(`_Node(_code).has_call("print(instrument_2.name)")`))
});
```

You should print the `instrument_type` attribute of `instrument_2`.

```js
({
  test: () => assert(runPython(`_Node(_code).has_call("print(instrument_2.instrument_type)")`))
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

instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')

--fcc-editable-region--
```
