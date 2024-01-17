---
id: 5e444136903586ffb414c94d
title: Time Calculator
challengeType: 23
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

# --instructions--

Write a function named `add_time` that takes in two required parameters and one optional parameter:

- a start time in the 12-hour clock format (ending in AM or PM)
- a duration time that indicates the number of hours and minutes
- (optional) a starting day of the week, case insensitive

The function should add the duration time to the start time and return the result.

If the result will be the next day, it should show `(next day)` after the time. If the result will be more than one day later, it should show `(n days later)` after the time, where "n" is the number of days later.

If the function is given the optional starting day of the week parameter, then the output should display the day of the week of the result. The day of the week in the output should appear after the time and before the number of days later.

Below are some examples of different cases the function should handle. Pay close attention to the spacing and punctuation of the results.

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

Do not import any Python libraries. Assume that the start times are valid times. The minutes in the duration time will be a whole number less than 60, but the hour can be any whole number.

# --hints--
Calling `add_time()` with `3:30 PM, 2:12` should return `5:42 PM`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
from time_calculator import add_time

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_same_period(self):
        actual = add_time("3:30 PM", "2:12")
        expected = "5:42 PM"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "3:30 PM", "2:12" to return "5:42 PM"')  
`);
    const testCode = `
from unittest import main
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `add_time()` with `"11:55 AM", "3:12"` should return `"3:07 PM"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_different_period(self):
    console.log("hello")
        actual = add_time("11:55 AM", "3:12")
        expected = "3:07 PM"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "11:55 AM", "3:12" to return "3:07 PM"')
`);
const testCode = `
from unittest import main
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected time to end with `"(next day)"` when it is the next day.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_next_day(self):
        actual = add_time("9:15 PM", "5:30")
        expected = "2:45 AM (next day)"
        self.assertEqual(actual, expected, 'Expected time to end with "(next day)" when it is the next day.')
`);

    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected period to change from `AM` to `PM` at `12:00`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_period_change_at_twelve(self):
        actual = add_time("11:40 AM", "0:25")
        expected = "12:05 PM"
        self.assertEqual(actual, expected, 'Expected period to change from AM to PM at 12:00')

`);
const testCode = `
from unittest import main
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"2:59 AM", "24:00"` to return `2:59 AM`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_twenty_four(self):
        actual = add_time("2:59 AM", "24:00")
        expected = "2:59 AM (next day)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "2:59 AM", "24:00" to return "2:59 AM"')
`);
const testCode = `
from unittest import main
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"11:59 PM", "24:05"` to return `"12:04 AM (2 days later)"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_two_days_later(self):
        actual = add_time("11:59 PM", "24:05")
        expected = "12:04 AM (2 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "11:59 PM", "24:05" to return "12:04 AM (2 days later)"')

`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"8:16 PM", "466:02"` to return `"6:18 AM (20 days later)"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_high_duration(self):
        actual = add_time("8:16 PM", "466:02")
        expected = "6:18 AM (20 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "8:16 PM", "466:02" to return "6:18 AM (20 days later)"')

`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected adding `0:00` to return the initial time.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_no_change(self):
        actual = add_time("5:01 AM", "0:00")
        expected = "5:01 AM"
        self.assertEqual(actual, expected, 'Expected adding 0:00 to return initial time.')


`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"3:30 PM", "2:12", "Monday"` to return `"5:42 PM, Monday"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_same_period_with_day(self):
        actual = add_time("3:30 PM", "2:12", "Monday")
        expected = "5:42 PM, Monday"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "3:30 PM", "2:12", "Monday" to return "5:42 PM, Monday"')


`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"2:59 AM", "24:00", "saturDay"` to return `"2:59 AM, Sunday (next day)"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_twenty_four_with_day(self):
        actual = add_time("2:59 AM", "24:00", "saturDay")
        expected = "2:59 AM, Sunday (next day)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "2:59 AM", "24:00", "saturDay" to return "2:59 AM, Sunday (next day)"')


`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"11:59 PM", "24:05", "Wednesday"` to return `"12:04 AM, Friday (2 days later)"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_two_days_later_with_day(self):
        actual = add_time("11:59 PM", "24:05", "Wednesday")
        expected = "12:04 AM, Friday (2 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "11:59 PM", "24:05", "Wednesday" to return "12:04 AM, Friday (2 days later)"')

`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected calling `add_time()` with `"8:16 PM", "466:02", "tuesday"` to return `"6:18 AM, Monday (20 days later)"`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from time_calculator import add_time
import unittest

class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_high_duration_with_day(self):
        actual = add_time("8:16 PM", "466:02", "tuesday")
        expected = "6:18 AM, Monday (20 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "8:16 PM", "466:02", "tuesday" to return "6:18 AM, Monday (20 days later)"')

`);
const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

# --seed--

## --seed-contents--

```py
def add_time(start, duration):





    return new_time
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
