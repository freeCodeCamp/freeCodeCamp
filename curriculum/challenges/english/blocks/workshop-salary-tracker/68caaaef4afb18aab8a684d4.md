---
id: 68caaaef4afb18aab8a684d4
title: Step 31
challengeType: 20
dashedName: step-31
---

# --description--

It's time to test your new setter. Try to assign invalid values such as a random string or the current level (`trainee`) to `charlie_brown.level` and see the error messages in the console.

Once you've done, remove the lines raising errors and set `charlie_brown.level` to the string `junior`.

# --hints--

You should set `charlie_brown.level` to the string `junior`.

```js
({ test: () => assert(runPython(`_Node(_code).has_stmt("charlie_brown.level = 'junior'")`)) })
```

# --seed--

## --seed-contents--

```py
class Employee:
    _base_salaries = {
        'trainee': 1000,
        'junior': 2000,
        'mid-level': 3000,
        'senior': 4000,
    }

    def __init__(self, name, level):
        if not (isinstance(name, str) and isinstance(level, str)):
            raise TypeError("'name' and 'level' attribute must be of type 'str'.")
        if level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' attribute.")
        self._name = name
        self._level = level
        self._salary = Employee._base_salaries[level]

    def __str__(self):
        return f'{self.name}: {self.level}'

    def __repr__(self):
        return f"Employee('{self.name}', '{self.level}')"

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        if not isinstance(new_name, str):
            raise TypeError("'name' must be a string.")
        self._name = new_name
        print(f"'name' updated to '{self.name}'.")

    @property
    def level(self):
        return self._level

    @level.setter
    def level(self, new_level):
        if new_level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{new_level}' for 'level' attribute.")
        if new_level == self.level:
            raise ValueError(f"'{self.level}' is already the selected level.")
        if Employee._base_salaries[new_level] < Employee._base_salaries[self.level]:
            raise ValueError(f"Cannot change to lower level.")
        print(f"'{self.name}' promoted to '{new_level}'.")
        self._salary = Employee._base_salaries[new_level]
        self._level = new_level

    @property
    def salary(self):
        return self._salary

charlie_brown = Employee('Charlie Brown', 'trainee')
print(charlie_brown)
print(f'Base salary: ${charlie_brown.salary}')
--fcc-editable-region--

--fcc-editable-region--
```
