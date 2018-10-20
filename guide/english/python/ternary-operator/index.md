---
title: Python Ternary Operater
---
# Ternary operator in Python
Ternary operations in Python, often also referred to as conditional expressions allow the programmer to perform an evaluation and return a value based on the truth of the given condition.

The ternary operator differs from a standard `if`, `else`, `elif` structure in the sense that it is not a control flow structure, and behaves more like other operators such as `==` or `!=` in the Python language.

### Example
In this example, the string `Even` is returned if the `val` variable is even, otherwise the string `Odd` is returned. The returned string is then assigned to the `is_even` variable and printed to the console.

#### Input

```python
for val in range(1, 11):
    is_even = "Even" if val % 2 == 0 else "Odd"
    print(val, is_even, sep=' = ')
```

#### Output
```
1 = Odd
2 = Even
3 = Odd
4 = Even
5 = Odd
6 = Even
7 = Odd
8 = Even
9 = Odd
10 = Even
```
### Sources
https://docs.python.org/2.5/whatsnew/pep-308.html
