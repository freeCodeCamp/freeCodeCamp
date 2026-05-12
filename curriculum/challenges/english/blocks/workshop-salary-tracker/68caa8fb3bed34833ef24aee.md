---
id: 68caa8fb3bed34833ef24aee
title: Step 33
challengeType: 20
dashedName: step-33
---

# --description--

When the level is modified, you need to update the salary as well.

Before setting `self._level`, set `self._salary` to the base salary for the new level.

# --hints--

You should set `self._salary` to the base salary for the new level.

```js
({ test: () => runPython(`
emp = Employee('Frank', 'trainee')
new_levels = ['junior', 'mid-level', 'senior']
for new_level in new_levels:
    emp.level = new_level
    assert emp.salary == Employee._base_salaries.get(new_level)
`) })
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
        self.name = name
        self.level = level
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
        if not isinstance(new_level, str):
            raise TypeError("'level' must be a string.")
        if new_level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{new_level}' for 'level' attribute.")
        if hasattr(self, '_level') and new_level == self.level:
            raise ValueError(f"'{self.level}' is already the selected level.")
        if hasattr(self, '_level') and Employee._base_salaries[new_level] < Employee._base_salaries[self.level]:
            raise ValueError("Cannot change to lower level.")
--fcc-editable-region--
        
--fcc-editable-region--
        self._level = new_level

    @property
    def salary(self):
        return self._salary

charlie_brown = Employee('Charlie Brown', 'trainee')
print(charlie_brown)
print(f'Base salary: ${charlie_brown.salary}')
```
