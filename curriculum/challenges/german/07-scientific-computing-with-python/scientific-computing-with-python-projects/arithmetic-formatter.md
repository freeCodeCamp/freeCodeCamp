---
id: 5e44412c903586ffb414c94c
title: Arithmetischer Formatierer
challengeType: 23
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Schüler der Grundschule stellen oft arithmetische Probleme vertikal auf, um sie leichter lösen zu können. Zum Beispiel wird "235 + 52" zu:

```py
  235
+  52
-----
```

Finish the `arithmetic_arranger` function that receives a list of strings which are arithmetic problems, and returns the problems arranged vertically and side-by-side. Optional sollte die Funktion ein zweites Argument verwenden. Wenn das zweite Argument auf `True` gesetzt ist, sollten die Antworten gezeigt werden.

## Beispiel

Function-Call:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Output:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Function-Call:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Output:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Regeln

Die Funktion gibt die korrekte Konvertierung zurück, wenn die übergebenen Probleme richtig formatiert sind. Andernfalls **gibt** er einen **String** zurück, der einen für den Benutzer aussagekräftigen Fehler beschreibt.

- Situationen, die einen Fehler zurückgeben:
  - Wenn **too many problems** an die Funktion übermittelt werden. The limit is **five**, anything more will return: `'Error: Too many problems.'`
  - Die entsprechenden Operatoren, die die Funktion akzeptieren wird, sind **Addition** und **Subtraktion**. Multiplikation und Division geben einen Fehler zurück. Andere Operatoren, die nicht in diesem Punkt erwähnt werden, müssen nicht getestet werden. The error returned will be: `"Error: Operator must be '+' or '-'."`
  - Jede Zahl (Operand) sollte nur Ziffern enthalten. Otherwise, the function will return: `'Error: Numbers must only contain digits.'`
  - Jeder Operand (d. h. die Zahl auf jeder Seite des Operators) ist maximal vier Stellen breit. Otherwise, the error string returned will be: `'Error: Numbers cannot be more than four digits.'`
- Wenn der Nutzer das richtige Format der Probleme angegeben hat, wird die von dir zurückgegebene Konvertierung diesen Regeln folgen:
  - Zwischen dem Operator und dem längsten der beiden Operanden sollte ein einzelnes Leerzeichen stehen, der Operator steht in derselben Zeile wie der zweite Operand, beide Operanden stehen in derselben Reihenfolge wie angegeben (der erste ist der oberste, der zweite der unterste).
  - Zahlen sollten rechts-ausgerichtet sein.
  - Zwischen den einzelnen Aufgaben sollten vier Leerzeichen stehen.
  - Am Ende jeder Aufgabe sollten Bindestriche stehen. Die Bindestriche sollten sich über die gesamte Länge der einzelnen Aufgaben erstrecken. (Das obige Beispiel zeigt, wie dies aussehen sollte.)

# --hints--

`arithmetic_arranger(["3801 - 2", "123 + 49"])` should return `3801      123\n-    2    +  49\n------    -----`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3801 - 2", "123 + 49"]), '  3801      123\\n-    2    +  49\\n------    -----')`);
  }
})
```

`arithmetic_arranger(["1 + 2", "1 - 9380"])` should return `1         1\n+ 2    - 9380\n---    ------`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["1 + 2", "1 - 9380"]), '  1         1\\n+ 2    - 9380\\n---    ------')`);
  }
})
```

`arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"])` should return `3      3801      45      123\n+ 855    -    2    + 43    +  49\n-----    ------    ----    -----`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]), '    3      3801      45      123\\n+ 855    -    2    + 43    +  49\\n-----    ------    ----    -----')`);
  }
})
```

`arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"])` should return `11      3801      1      123         1\n+  4    - 2999    + 2    +  49    - 9380\n----    ------    ---    -----    ------`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]), '  11      3801      1      123         1\\n+  4    - 2999    + 2    +  49    - 9380\\n----    ------    ---    -----    ------')`);
  }
})
```

`arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"])` should return `'Error: Too many problems.'`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"]), 'Error: Too many problems.')`);
  }
})
```

`arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"])` should return `"Error: Operator must be '+' or '-'."`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"]), "Error: Operator must be '+' or '-'.")`);
  }
})
```

`arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"])` should return `'Error: Numbers cannot be more than four digits.'`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]), "Error: Numbers cannot be more than four digits.")`);
  }
})
```

`arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"])` should return `'Error: Numbers must only contain digits.'`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"]), "Error: Numbers must only contain digits.")`);
  }
})
```

`arithmetic_arranger(["3 + 855", "988 + 40"], True)` should return `3      988\n+ 855    +  40\n-----    -----\n  858     1028`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3 + 855", "988 + 40"], True), "    3      988\\n+ 855    +  40\\n-----    -----\\n  858     1028")`);
  }
})
```

`arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True)` should return `32         1      45      123      988\n- 698    - 3801    + 43    +  49    +  40\n-----    ------    ----    -----    -----\n -666     -3800      88      172     1028`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True), "   32         1      45      123      988\\n- 698    - 3801    + 43    +  49    +  40\\n-----    ------    ----    -----    -----\\n -666     -3800      88      172     1028")`);
  }
})
```

# --seed--

## --seed-contents--

```py
def arithmetic_arranger(problems, show_answers=False):

    return problems

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')
```

# --solutions--

```py
def arithmetic_arranger(problems, result=False):

    lin1 = ""
    lin2 = ""
    lin3 = ""
    lin4 = ""

    if len(problems) > 5:
        return 'Error: Too many problems.'
    for problem in problems:
        [num1, sym, num2] = problem.split()
        sign = ['+', '-']
        if sym not in sign:
            return ("Error: Operator must be '+' or '-'.")
        if len(num1) > 4 or len(num2) > 4:
            return ("Error: Numbers cannot be more than four digits.")
        if not num1.isnumeric() or not num2.isnumeric():
            return ("Error: Numbers must only contain digits.")

        lin1 += "  " + num1 + "    " if len(num1) >= len(
            num2) else " " * (len(num2) + 2 - len(num1)) + num1 + "    "
        lin2 += sym + " " + num2 + "    " if len(num2) >= len(
            num1) else sym + " " * (len(num1) - len(num2) + 1) + num2 + "    "
        nmax = (len(num1) + 2) if len(num1) >= len(num2) else (len(num2) + 2)
        lin3 += "-" * nmax + "    "
        op = int(num1) + int(num2) if sym == "+" else int(num1) - int(num2)
        lin4 += (" " * (nmax - len(str(op)))) + str(op) + "    "

    arranged_problems = lin1.rstrip() + "\n" + lin2.rstrip(
    ) + "\n" + lin3.rstrip()
    if result:
        arranged_problems += "\n" + lin4.rstrip()

    return arranged_problems
```
