---
id: 5e44412c903586ffb414c94c
title: Проєкт «Створіть арифметичний форматор»
challengeType: 23
forumTopicId: 462359
dashedName: build-an-arithmetic-formatter-project
---

# --description--

У початковій школі вчать вирішувати математичні приклади вертикально, аби було простіше. Наприклад, «235 + 52» перетворюється на:

```py
  235
+  52
-----
```

Закінчіть функцію `arithmetic_arranger`, яка отримує список рядків з математичними прикладами та послідовно повертає їх у вертикальному вигляді. В разі потреби функція повинна приймати другий аргумент. Якщо другий аргумент встановлено на `True`, мають відтворюватись відповіді.

## Наприклад

Виклик функції:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Вихідні дані:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Виклик функції:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Вихідні дані:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Правила

Функція поверне правильне перетворення, якщо надані приклади відформатовані правильно. В іншому випадку буде **повернений** **рядок**, який описує помилку, важливу для користувача.

- Ситуації, які повернуть помилку:
  - Функції надано **забагато прикладів**. Ліміт становить **5 прикладів**. Якщо їх більше, то повернеться `'Error: Too many problems.'`
  - Функція приймає відповідні оператори: **додавання** та **віднімання**. Множення та ділення поверне помилку. Інші оператори, які не згадані тут, тестовані не будуть. Повернеться помилка `"Error: Operator must be '+' or '-'."`
  - Кожне число (операнд) має містити лише цифри. В іншому випадку функція поверне `'Error: Numbers must only contain digits.'`
  - Кожен операнд (тобто число з кожної сторони оператора) може складатись максимум з чотирьох цифр. В іншому випадку рядок помилки видасть `'Error: Numbers cannot be more than four digits.'`
- Якщо користувач надав правильний формат прикладу, то перетворення буде дотримуватись таких правил:
  - Між оператором і довшим операндом має бути лише один пробіл; оператор буде в тому ж рядку, що й другий операнд; обоє операндів будуть в тому порядку, як і надано (перший буде зверху, а другий — знизу).
  - Числа мають бути вирівняними за правим краєм.
  - Приклади мають бути розділеними чотирма пробілами.
  - Знизу кожного прикладу має бути риска. Риска повинна йти по всій довжині прикладу індивідуально. (На прикладі вище видно, як це має виглядати.)

Примітка: відкрийте консоль браузера, натиснувши на F12, щоб побачити детальніший результат тестів.

# --hints--

`arithmetic_arranger(["3801 - 2", "123 + 49"])` має повернути `3801      123\n-    2    +  49\n------    -----`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3801 - 2", "123 + 49"]), '  3801      123\\n-    2    +  49\\n------    -----')`);
  }
})
```

`arithmetic_arranger(["1 + 2", "1 - 9380"])` має повернути `1         1\n+ 2    - 9380\n---    ------`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["1 + 2", "1 - 9380"]), '  1         1\\n+ 2    - 9380\\n---    ------')`);
  }
})
```

`arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"])` має повернути `3      3801      45      123\n+ 855    -    2    + 43    +  49\n-----    ------    ----    -----`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]), '    3      3801      45      123\\n+ 855    -    2    + 43    +  49\\n-----    ------    ----    -----')`);
  }
})
```

`arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"])` має повернути `11      3801      1      123         1\n+  4    - 2999    + 2    +  49    - 9380\n----    ------    ---    -----    ------`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]), '  11      3801      1      123         1\\n+  4    - 2999    + 2    +  49    - 9380\\n----    ------    ---    -----    ------')`);
  }
})
```

`arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"])` має повернути `'Error: Too many problems.'`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"]), 'Error: Too many problems.')`);
  }
})
```

`arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"])` має повернути `"Error: Operator must be '+' or '-'."`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"]), "Error: Operator must be '+' or '-'.")`);
  }
})
```

`arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"])` має повернути `'Error: Numbers cannot be more than four digits.'`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]), "Error: Numbers cannot be more than four digits.")`);
  }
})
```

`arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"])` має повернути `'Error: Numbers must only contain digits.'`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"]), "Error: Numbers must only contain digits.")`);
  }
})
```

`arithmetic_arranger(["3 + 855", "988 + 40"], True)` має повернути `3      988\n+ 855    +  40\n-----    -----\n  858     1028`.

```js
({
  test: () => {
    runPython(`
from unittest import TestCase

TestCase().assertEqual(arithmetic_arranger(["3 + 855", "988 + 40"], True), "    3      988\\n+ 855    +  40\\n-----    -----\\n  858     1028")`);
  }
})
```

`arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True)` має повернути `32         1      45      123      988\n- 698    - 3801    + 43    +  49    +  40\n-----    ------    ----    -----    -----\n -666     -3800      88      172     1028`.

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
