---
id: 6895e2becb7890fad818ad4d
title: Step 7
challengeType: 20
dashedName: step-7
---

# --description--

Now that you understand how to access object attributes, remove the existing `print` calls.

# --hints--

You should remove the `print(instrument_1.name)` statement.

```js
({
  test: () => assert.isFalse(runPython(`_Node(_code).has_call("print(instrument_1.name)")`))
})
```

You should remove the `print(instrument_1.instrument_type)` statement.

```js
({
  test: () => assert.isFalse(runPython(`_Node(_code).has_call("print(instrument_1.instrument_type)")`))
});
```

You should remove the `print(instrument_2.name)` statement.

```js
({
  test: () => assert.isFalse(runPython(`_Node(_code).has_call("print(instrument_2.name)")`))
});
```

You should remove the `print(instrument_2.instrument_type)` statement.

```js
({
  test: () => assert.isFalse(runPython(`_Node(_code).has_call("print(instrument_2.instrument_type)")`))
});
```

# --seed--

## --seed-contents--

```py
class MusicalInstrument:
    def __init__(self, name, instrument_type):
        self.name = name
        self.instrument_type = instrument_type

instrument_1 = MusicalInstrument('Oboe', 'woodwind')
instrument_2 = MusicalInstrument('Trumpet', 'brass')

--fcc-editable-region--
print(instrument_1.name)
print(instrument_1.instrument_type)

print(instrument_2.name)
print(instrument_2.instrument_type)

--fcc-editable-region--
```
