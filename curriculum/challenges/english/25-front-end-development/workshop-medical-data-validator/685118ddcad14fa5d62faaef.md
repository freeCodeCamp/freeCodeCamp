---
id: 685118ddcad14fa5d62faaef
title: Step 33
challengeType: 20
dashedName: step-33
---

# --description--

Now add a key `diagnosis` to the `constraints` dictionary. For its value, write an expression that checks that `diagnosis` is either an instance of `str` or is `None`.

# --hints--

Your `constraints` dictionary should have a key `diagnosis`.

```js
({ test: () => assert(runPython(`
_ast_keys = _Node(_code).find_function("find_invalid_records").find_variable("constraints").tree.value.keys
_keys = [k.value for k in _ast_keys]
'diagnosis' in _keys
`)) })
```

The `diagnosis` key of your `constraints` dictionary should have the value of `isinstance(diagnosis, str) or diagnosis is None`.

```js
({ test: () => assert(runPython(`
_target = _Node(_code).find_function("find_invalid_records").find_variable("constraints").tree.value
_keys = [k.value for k in _target.keys]
_index = _keys.index('diagnosis')
_val = _target.values[_index]
_Node(_val).is_equivalent("isinstance(diagnosis, str) or diagnosis is None")
`)) })
```

# --seed--

## --seed-contents--

```py
import re


medical_records = [
    {
        'patient_id': 'P1001',
        'age': 34,
        'gender': 'Female',
        'diagnosis': 'Hypertension',
        'medications': ['Lisinopril'],
        'last_visit_id': 'V2301',
    },
    {
        'patient_id': 'p1002',
        'age': 47,
        'gender': 'male',
        'diagnosis': 'Type 2 Diabetes',
        'medications': ['Metformin', 'Insulin'],
        'last_visit_id': 'v2302',
    },
    {
        'patient_id': 'P1003',
        'age': 29,
        'gender': 'female',
        'diagnosis': 'Asthma',
        'medications': ['Albuterol'],
        'last_visit_id': 'v2303',
    },
    {
        'patient_id': 'p1004',
        'age': 56,
        'gender': 'Male',
        'diagnosis': 'Chronic Back Pain',
        'medications': ['Ibuprofen', 'Physical Therapy'],
        'last_visit_id': 'V2304',
    }
]


def find_invalid_records(
    patient_id, age, gender, diagnosis, medications, last_visit_id
):

--fcc-editable-region--
    constraints = {
        'patient_id': isinstance(patient_id, str) and re.fullmatch('p\d+', patient_id, re.IGNORECASE),
        'age': isinstance(age, int) and age >= 18,
        'gender': isinstance(gender, str) and gender.lower() in ('male', 'female')

    }
--fcc-editable-region--
    return constraints

def validate(data):
    is_sequence = isinstance(data, (list, tuple))

    if not is_sequence:
        print('Invalid format: expected a list or tuple.')
        return False
        
    is_invalid = False
    key_set = set(
        ['patient_id', 'age', 'gender', 'diagnosis', 'medications', 'last_visit_id']
    )

    for index, dictionary in enumerate(data):
        if not isinstance(dictionary, dict):
            print(f'Invalid format: expected a dictionary at position {index}.')
            is_invalid = True

        if set(dictionary.keys()) != key_set:
            print(
                f'Invalid format: {dictionary} at position {index} has missing and/or invalid keys.'
            )
            is_invalid = True

    if is_invalid:
        return False
    print('Valid format.')
    return True

validate(medical_records)
print(find_invalid_records(**medical_records[0]))
```
