---
id: 5e444136903586ffb414c94d
title: Calcolatore di tempi
challengeType: 23
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

Scrivi una funzione denominata `add_time` che richieda due parametri obbligatori e uno opzionale:

- un'ora di inizio nel formato dell'orologio a 12 ore (che termina in AM o PM)
- una durata che indica il numero di ore e minuti
- (facoltativo) un giorno di inizio della settimana, senza differenziare tra maiuscole e minuscole

La funzione dovrebbe sommare la durata all'ora di inizio e restituire il risultato.

Se il risultato sarà il giorno successivo, dovrebbe mostrare `(next day)` dopo l'ora. Se il risultato sarà più di un giorno dopo, dovrebbe mostrare `(n days later)` dopo il tempo, dove "n" è il numero di giorni dopo.

Se alla funzione viene passato il parametro opzionale del giorno di inizio della settimana, l'output dovrebbe visualizzare il giorno della settimana del risultato. Il giorno della settimana in output dovrebbe comparire dopo l'ora e prima del numero di giorni successivi.

Di seguito sono riportati alcuni esempi di casi diversi che la funzione dovrebbe gestire. Presta molta attenzione alla spaziatura e punteggiatura dei risultati.

```py
add_time('3:00 PM', '3:10')
# Returns: 6:10 PM

add_time('11:30 AM', '2:32', 'Monday')
# Returns: 2:02 PM, Monday

add_time('11:43 AM', '00:20')
# Returns: 12:03 PM

add_time('10:10 PM', '3:30')
# Returns: 1:40 AM (next day)

add_time('11:43 PM', '24:20', 'tueSday')
# Returns: 12:03 AM, Thursday (2 days later)

add_time('6:30 PM', '205:12')
# Returns: 7:42 AM (9 days later)
```

Non importare nessuna libreria Python. Supponi che gli orari di inizio siano validi. I minuti nel tempo di durata saranno un numero intero inferiore a 60, ma l'ora può essere qualsiasi numero intero.

# --hints--
Calling `add_time('3:30 PM', '2:12')` should return `'5:42 PM'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
import time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_same_period(self):
        actual = time_calculator.add_time("3:30 PM", "2:12")
        expected = "5:42 PM"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "3:30 PM", "2:12" to return "5:42 PM"')  
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `add_time('11:55 AM', '3:12')`  should return `'3:07 PM'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_different_period(self):
        actual = time_calculator.add_time("11:55 AM", "3:12")
        expected = "3:07 PM"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "11:55 AM", "3:12" to return "3:07 PM"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Expected time to end with `'(next day)'` when it is the next day.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_next_day(self):
        actual = time_calculator.add_time("9:15 PM", "5:30")
        expected = "2:45 AM (next day)"
        self.assertEqual(actual, expected, 'Expected time to end with "(next day)" when it is the next day.')
          `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
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
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_period_change_at_twelve(self):
        actual = time_calculator.add_time("11:40 AM", "0:25")
        expected = "12:05 PM"
        self.assertEqual(actual, expected, 'Expected period to change from AM to PM at 12:00')
          `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```


Calling `add_time('2:59 AM', '24:00')` should return `'2:59 AM (next day)'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_twenty_four(self):
        actual = time_calculator.add_time("2:59 AM", "24:00")
        expected = "2:59 AM (next day)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "2:59 AM", "24:00" to return "2:59 AM (next day)"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `add_time('11:59 PM', '24:05')` should return `'12:04 AM (2 days later)'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_two_days_later(self):
        actual = time_calculator.add_time("11:59 PM", "24:05")
        expected = "12:04 AM (2 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "11:59 PM", "24:05" to return "12:04 AM (2 days later)"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `add_time('8:16 PM', '466:02')` should return `'6:18 AM (20 days later)'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_high_duration(self):
        actual = time_calculator.add_time("8:16 PM", "466:02")
        expected = "6:18 AM (20 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "8:16 PM", "466:02" to return "6:18 AM (20 days later)"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
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
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_no_change(self):
        actual = time_calculator.add_time("5:01 AM", "0:00")
        expected = "5:01 AM"
        self.assertEqual(actual, expected, 'Expected adding 0:00 to return initial time.')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```


Calling `add_time('3:30 PM', '2:12', 'Monday')`should return `'5:42 PM, Monday'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_same_period_with_day(self):
        actual = time_calculator.add_time("3:30 PM", "2:12", "Monday")
        expected = "5:42 PM, Monday"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "3:30 PM", "2:12", "Monday" to return "5:42 PM, Monday"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```


Calling `add_time('2:59 AM', '24:00', 'saturDay')` should return `'2:59 AM, Sunday (next day)'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_twenty_four_with_day(self):
        actual = time_calculator.add_time("2:59 AM", "24:00", "saturDay")
        expected = "2:59 AM, Sunday (next day)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "2:59 AM", "24:00", "saturDay" to return "2:59 AM, Sunday (next day)"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `add_time('11:59 PM', '24:05', 'Wednesday')` should return `'12:04 AM, Friday (2 days later)'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_two_days_later_with_day(self):
        actual = time_calculator.add_time("11:59 PM", "24:05", "Wednesday")
        expected = "12:04 AM, Friday (2 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "11:59 PM", "24:05", "Wednesday" to return "12:04 AM, Friday (2 days later)"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `add_time('8:16 PM', '466:02', 'tuesday')`should return `'6:18 AM, Monday (20 days later)'`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/time_calculator.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', `
import unittest
time_calculator
from importlib import reload

reload(time_calculator)


class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_high_duration_with_day(self):
        actual = time_calculator.add_time("8:16 PM", "466:02", "tuesday")
        expected = "6:18 AM, Monday (20 days later)"
        self.assertEqual(actual, expected, 'Expected calling "add_time()" with "8:16 PM", "466:02", "tuesday" to return "6:18 AM, Monday (20 days later)"')
        `);
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
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

```py
def add_time(start, duration, day=''):
    start_arr = start[0:-3].split(':')
    dur_arr = duration.split(':')
    tail = ''
    # converting to 24h format
    if 'AM' in start:
        if start_arr[0] == '12':
            start_arr[0] = '00'
    elif 'PM' in start:
        if start_arr[0] == '12':
            start_arr[0] = '12'
        else:
            start_arr[0] = f'{int(start_arr[0]) + 12}'

    # adding minutes
    sum_m = int(start_arr[1]) + int(dur_arr[1])
    if sum_m > 59:

        if (sum_m - 60 * (sum_m//60)) < 10:
            mins = f'0{(sum_m - 60 * (sum_m//60))}'
            dur_arr[0] = int(dur_arr[0]) + sum_m//60

        else:    
            mins = sum_m - 60 * (sum_m//60)
            dur_arr[0] = int(dur_arr[0]) + sum_m//60
    else:
        if sum_m < 10:
            mins = f'0{sum_m}'
        else:
            mins = sum_m

    #adding hours
    sum_h = int(start_arr[0]) + int(dur_arr[0])
    if sum_h < 24:
        hours= sum_h
        #time_24 = f'{hours}:{mins}'
    else:
        days_after = sum_h//24
        if days_after == 1:
            hours = sum_h - 24
            tail = ' (next day)'
        else:
            hours = sum_h - 24 * days_after
            tail = f' ({days_after} days later)'

    #converting back to AM/PM
    if hours == 0:
        hours = 12
        time = f'{hours}:{mins} AM'
        final_time = f'{time}{tail}'
    elif hours < 12:
        time = f'{hours}:{mins} AM'
        final_time = f'{time}{tail}'
    else:
        if hours > 12:
            hours = hours - 12
        time = f'{hours}:{mins} PM'
        final_time = f'{time}{tail}'

    #days of the week
    week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if day:
        day = day.capitalize()
        if not tail:
            final_time = f'{time}, {day}'
        elif tail == ' (next day)':
            index = week.index(day) + 1
            if index == 7:
                index = 0
            week_day = f', {week[index]}'
            final_time = f'{time}{week_day}{tail}'
        elif tail:
            index = (week.index(day) + days_after) % 7
            week_day = f', {week[index]}'
            final_time = f'{time}{week_day}{tail}'


    print('\n')
    print(final_time)
    print('\n')
    return final_time

```
