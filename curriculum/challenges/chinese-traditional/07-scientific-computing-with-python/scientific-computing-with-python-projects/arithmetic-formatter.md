---
id: 5e44412c903586ffb414c94c
title: 算術格式化
challengeType: 23
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

小學生經常把算術題垂直排列，這樣更容易解決。 例如，“235 + 52” 變成：

```py
  235
+  52
-----
```

Finish the `arithmetic_arranger` function that receives a list of strings which are arithmetic problems, and returns the problems arranged vertically and side-by-side. 該函數應該接受可選的第二個參數。 當第二個參數設置爲 `True` 時，應顯示答案。

## 示例

函數調用：

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

輸出:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

函數調用：

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

輸出:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## 規則

如果提供的問題格式正確，該函數將返回正確的轉換，否則，它將 **返回** 一個 **字符串** 來描述對用戶有意義的錯誤。

- 會返回錯誤的情況：
  - 如果提供給函數的**問題過多**。 The limit is **five**, anything more will return: `'Error: Too many problems.'`
  - 函數可以接受的運算符是**加法**和**減法**。 乘法和除法將返回錯誤。 本要點中未提及的其他運算符將不需要進行測試。 The error returned will be: `"Error: Operator must be '+' or '-'."`
  - 每個數字（操作數）應該只包含數字。 Otherwise, the function will return: `'Error: Numbers must only contain digits.'`
  - 每個操作數（即運算符每一側的數字）的寬度最多爲四位數字。 Otherwise, the error string returned will be: `'Error: Numbers cannot be more than four digits.'`
- 如果用戶提供了正確格式的問題，返回的轉換將遵循以下規則：
  - 操作符和兩個操作數中最長的一個之間應該有一個空格，操作符將與第二個操作數在同一行，兩個操作數的順序與提供的相同（第一個是上面的，第二個是下面的）。
  - 數字應該右對齊。
  - 每個問題之間應該有四個空格。
  - 每個問題的底部都應該有破折號。 破折號應該單獨沿着每個問題的整個長度延伸。 （上面的例子展示了這應該是什麼樣子。）

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
