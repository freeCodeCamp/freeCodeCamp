---
id: 665464bafadba599aba67ecb
title: Step 50
challengeType: 20
dashedName: step-50
---

# --description--

To complete the `analyze` method, append to the `details` attribute a string in the form of `concavity = {}\n{} = {}`, where the three placeholders should be filled with the value of `concavity`, either `min` or `max` and the value of the vertex coordinates, respectively.

Pay attention to give the vertex coordinates as a tuple `(x, y)`, where `x` and `y` are rounded to the third decimal digit.

# --hints--

You should append the correct string to the `details` attribute.

```js
({ test: () => runPython(`
eq1 = QuadraticEquation(16, 2, 1)
eq1.analyze()
eq2 = QuadraticEquation(-16, 2, 1)
eq2.analyze()
assert eq1.details == ['concavity = upwards\\nmin = (-0.062, 0.938)']
assert eq2.details == ['concavity = downwards\\nmax = (0.062, 1.062)']
`) })
```

# --seed--

## --seed-contents--

```py
from abc import ABC, abstractmethod
import re

class Equation(ABC):   
    def __init__(self, *args):
        if (self.degree + 1) != len(args):
            raise TypeError(
                f"'Equation' object takes {self.degree + 1} positional arguments but {len(args)} were given"
            )
        for arg in args:
            if not isinstance(arg, (int, float)):
                raise TypeError("Coefficients must be of type 'int' or 'float'")
        if args[0] == 0:
            raise ValueError("Highest degree coefficient must be different from zero")
        self.coefficients = {n: arg for n, arg in enumerate(reversed(args))}
        self.results = []
        self.details = []

    def __str__(self):
        terms = []
        for n, coefficient in self.coefficients.items():
            if coefficient:
                if n == 0:
                    terms.append(f'{coefficient:+}')
                elif n == 1:
                    terms.insert(0, f'{coefficient:+}x')
                else:
                    terms.insert(0, f'{coefficient:+}x**{n}')

        equation_string = ' '.join(terms) + ' = 0'
        return re.sub(r'(?<!\d)1(?=x)', '', equation_string.strip('+'))

    @property
    @abstractmethod
    def degree(self): pass    
    
    @abstractmethod
    def solve(self): pass
        
    @abstractmethod
    def analyze(self): pass
        
class LinearEquation(Equation):
    @property
    def degree(self):
        return 1
    
    def solve(self):
        x = -self.coefficients[0] / self.coefficients[1]
        self.results.append(f'x = {x:.3f}')
        return [x]

    def analyze(self):
        self.details.append(
            f'slope = {self.coefficients[1]}\ny-intercept = {self.coefficients[0]}'
        )
        return {'slope': self.coefficients[1], 'intercept': self.coefficients[0]}

class QuadraticEquation(Equation):
    def __init__(self, *args):
        super().__init__(*args)
        self.delta = (
            self.coefficients[1] ** 2 - 4 * self.coefficients[2] * self.coefficients[0]
        )
    @property
    def degree(self):
        return 2

    def solve(self):
        if self.delta < 0:
            self.results.append('No real roots')
            return []
            
        x1 = (-self.coefficients[1] + (self.delta) ** 0.5) / (2 * self.coefficients[2])
        x2 = (-self.coefficients[1] - (self.delta) ** 0.5) / (2 * self.coefficients[2])
        if self.delta == 0:
            self.results.append(f'x = {x1:.3f}')
            return [x1]

        self.results.extend([f'x1 = {x1:.3f}', f'x2 = {x2:.3f}'])
        return [x1, x2]

    def analyze(self):
        x = -self.coefficients[1] / (2 * self.coefficients[2])
        y = (
            self.coefficients[2] * x**2
            + self.coefficients[1] * x
            + self.coefficients[0]
        )
        vertex = {'x': x, 'y': y}
        if self.coefficients[2] > 0:
            concavity = 'upwards'
            vertex['m'] = 'min'
        else:
            concavity = "downwards"
            vertex['m'] = 'max'
--fcc-editable-region--
        
--fcc-editable-region--
        return {'vertex': vertex, 'concavity': concavity}

lin_eq = LinearEquation(2, 3)
print(lin_eq)
quadr_eq = QuadraticEquation(1, 2, 1)
print(quadr_eq)
print(quadr_eq.solve())
print(quadr_eq.results)
```
