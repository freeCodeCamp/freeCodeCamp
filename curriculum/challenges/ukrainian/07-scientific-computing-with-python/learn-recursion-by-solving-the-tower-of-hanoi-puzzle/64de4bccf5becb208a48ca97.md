---
id: 64de4bccf5becb208a48ca97
title: Крок 13
challengeType: 20
dashedName: step-13
---

# --description--

У Ханойській вежі можна визначити три стрижні відповідно до їхнього призначення:

- Перший стрижень є джерелом, де всі диски складені один на одного на початку гри.
- Другий стрижень є допоміжним стрижнем, і він допомагає переміщати диски до цільового стрижня.
- Третій стрижень — це мішень, на якій потрібно розмістити всі диски за порядком в кінці гри.

Наразі функція `move()` не приймає жодних параметрів. Змініть оголошення функції, щоб вона приймала 4 параметри: `n`, `source`, `auxiliary` та `target`. Потім передайте `NUMBER_OF_DISKS` і рядки `'A'`, `'B'` та `'C'` як аргументи до виклику функції. Порядок має значення.

# --hints--

Функція `move()` повинна мати `n`, `source`, `auxiliary` та `target` як параметри. Порядок має значення.

```js
({ test: () => assert(__pyodide.runPython(`
      import inspect
      str(inspect.signature(__locals.get('move'))) == '(n, source, auxiliary, target)'    
  `))
})
```

Передайте `NUMBER_OF_DISKS` і рядки `'A'`, `'B'` та `'C'` до `move()`. Порядок має значення.

```js
({test: () => assert.match(code, /^move\(\s*NUMBER_OF_DISKS\s*,\s*('|")A\1\s*,\s*('|")B\2\s*,\s*('|")C\3\s*\)/m)
})
```

# --seed--

## --seed-contents--

```py
NUMBER_OF_DISKS = 3
number_of_moves = 2**NUMBER_OF_DISKS - 1
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}

--fcc-editable-region--
def move():
    print(rods)

move()
--fcc-editable-region--
```
