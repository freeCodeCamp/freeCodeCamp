---
id: 5e44412c903586ffb414c94c
title: Formatador aritmético
challengeType: 23
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Os alunos da escola primária geralmente organizam problemas aritméticos de modo vertical para facilitar a sua resolução. Por exemplo, "235 + 52" se torna:

```py
  235
+  52
-----
```

Finish the `arithmetic_arranger` function that receives a list of strings which are arithmetic problems, and returns the problems arranged vertically and side-by-side. A função deve, como opção, receber um segundo argumento. Quando o segundo argumento for definido como `True`, as respostas devem ser exibidas.

## Exemplo

Chamada da função:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Resultado:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Chamada da função:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Resultado:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Regras

A função retornará a conversão correta se os problemas fornecidos forem formatados corretamente. Caso contrário, ela **retornará** uma **string** que descreve um erro significativo para o usuário.

- Situações que retornarão um erro:
  - Se **houver muitos problemas** fornecidos para a função. The limit is **five**, anything more will return: `'Error: Too many problems.'`
  - Os operadores apropriados que a função aceitará são **adição** e **subtração**. A multiplicação e a divisão retornarão um erro. Outros operadores não mencionados aqui não precisarão ser testados. The error returned will be: `"Error: Operator must be '+' or '-'."`
  - Cada número (operando) deve conter apenas algarismos. Otherwise, the function will return: `'Error: Numbers must only contain digits.'`
  - Cada operando (ou seja, o número de cada lado do operador) tem, no máximo, quatro algarismos. Otherwise, the error string returned will be: `'Error: Numbers cannot be more than four digits.'`
- Se o usuário forneceu o formato correto dos problemas, a conversão retornada seguirá estas regras:
  - Deve haver um único espaço entre o operador e o maior entre os dois operandos. O operador estará na mesma linha do segundo operando. Ambos os operadores estarão na mesma ordem fornecida – o primeiro será o de cima e o segundo será o de baixo.
  - Os números devem estar alinhados à direita.
  - Deve haver quatro espaços entre cada problema.
  - Deve haver travessões abaixo de cada problema. Os travessões devem compreender todo o tamanho de cada problema individualmente. (O exemplo acima mostra como deve ser a aparência do resultado.)

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
