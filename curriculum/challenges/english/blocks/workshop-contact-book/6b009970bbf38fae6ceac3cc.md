---
id: 6b009970bbf38fae6ceac3cc
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

To access a value in a dictionary, write the name of the dictionary followed by the key inside square brackets:

```py
my_dict = {'name': 'Ada', 'age': 36}
print(my_dict['name'])  # Ada
```

Print the value of the `email` key of `contact`.

# --hints--

You should print `contact['email']`.

```js
({ test: () => runPython(`
assert _Node(_code).has_call("print(contact['email'])")
`) });
```

# --seed--

## --seed-contents--

```py
contact = {
    'phone': '555-0101',
    'email': 'maria@example.com',
    'group': 'work'
}
--fcc-editable-region--

--fcc-editable-region--
```
