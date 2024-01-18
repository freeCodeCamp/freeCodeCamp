---
id: 5e44412c903586ffb414c94c
title: Arithmetic Formatter
challengeType: 23
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Students in primary school often arrange arithmetic problems vertically to make them easier to solve. For example, "235 + 52" becomes:

```py
  235
+  52
-----
```

Finish the `arithmetic_arranger` function that receives a list of strings which are arithmetic problems, and returns the problems arranged vertically and side-by-side. The function should optionally take a second argument. When the second argument is set to `True`, the answers should be displayed.

## Example

Function Call:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Output:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Function Call:

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

## Rules

The function will return the correct conversion if the supplied problems are properly formatted, otherwise, it will **return** a **string** that describes an error that is meaningful to the user.

- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return:
    `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be:
    `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return:
    `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be:
    `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

# --hints--

`arithmetic_arranger(["3801 - 2", "123 + 49"])` should return `  3801      123\n-    2    +  49\n------    -----`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
  pytest.param(
    [['3801 - 2', '123 + 49']],
        '  3801      123\\n'
        '-    2    +  49\\n'
        '------    -----',
        'Expected different output when calling "arithmetic_arranger()" with ["3801 - 2", "123 + 49"]',
        id='test_two_problems_arrangement1'
    )
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["1 + 2", "1 - 9380"])` should return `  1         1\n+ 2    - 9380\n---    ------`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['1 + 2', '1 - 9380']],
        '  1         1\\n'
        '+ 2    - 9380\\n'
        '---    ------',
        'Expected different output when calling "arithmetic_arranger()" with ["1 + 2", "1 - 9380"]',
        id='test_two_problems_arrangement2')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"])` should return `    3      3801      45      123\n+ 855    -    2    + 43    +  49\n-----    ------    ----    -----`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['3 + 855', '3801 - 2', '45 + 43', '123 + 49']],
        '    3      3801      45      123\\n'
        '+ 855    -    2    + 43    +  49\\n'
        '-----    ------    ----    -----',
        'Expected different output when calling "arithmetic_arranger()" with ["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]',
        id='test_four_problems_arrangement')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"])` should return `  11      3801      1      123         1\n+  4    - 2999    + 2    +  49    - 9380\n----    ------    ---    -----    ------`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['11 + 4', '3801 - 2999', '1 + 2', '123 + 49', '1 - 9380']],
        '  11      3801      1      123         1\\n'
        '+  4    - 2999    + 2    +  49    - 9380\\n'
        '----    ------    ---    -----    ------',
        'Expected different output when calling "arithmetic_arranger()" with ["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]',
        id='test_five_problems_arrangement')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"])` should return `Error: Too many problems.`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['44 + 815', '909 - 2', '45 + 43', '123 + 49',
          '888 + 40', '653 + 87']],
        'Error: Too many problems.',
        'Expected calling "arithmetic_arranger()" with more than five problems to return "Error: Too many problems."',
        id='test_too_many_problems')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"])` should return `Error: Operator must be '+' or '-'.`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['3 / 855', '3801 - 2', '45 + 43', '123 + 49']],
        "Error: Operator must be '+' or '-'.",
        '''Expected calling "arithmetic_arranger()" with a problem that uses the "/" operator to return "Error: Operator must be '+' or '-'."''',
        id='test_incorrect_operator')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"])` should return `Error: Numbers cannot be more than four digits.`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['24 + 85215', '3801 - 2', '45 + 43', '123 + 49']],
        'Error: Numbers cannot be more than four digits.',
        'Expected calling "arithmetic_arranger()" with a problem that has a number over 4 digits long to return "Error: Numbers cannot be more than four digits."',
        id='test_too_many_digits')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"])` should return `Error: Numbers must only contain digits.`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['98 + 3g5', '3801 - 2', '45 + 43', '123 + 49']],
        'Error: Numbers must only contain digits.',
        'Expected calling "arithmetic_arranger()" with a problem that contains a letter character in the number to return "Error: Numbers must only contain digits."',
        id='test_only_digits')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["3 + 855", "988 + 40"], True)` should return `    3      988\n+ 855    +  40\n-----    -----\n  858     1028`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['3 + 855', '988 + 40'], True],
        '    3      988\\n'
        '+ 855    +  40\\n'
        '-----    -----\\n'
        '  858     1028',
        'Expected solutions to be correctly displayed in output when calling "arithmetic_arranger()" with ["3 + 855", "988 + 40"] and a second argument of \`True\`.',
        id='test_two_problems_with_solutions')
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
  }
})
```

`arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True)` should return `   32         1      45      123      988\n- 698    - 3801    + 43    +  49    +  40\n-----    ------    ----    -----    -----\n -666     -3800      88      172     1028`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/arithmetic_arranger.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py', 
    `
from arithmetic_arranger import arithmetic_arranger
import pytest
test_cases = [
    pytest.param(
        [['32 - 698', '1 - 3801', '45 + 43', '123 + 49', '988 + 40'], True],
        '   32         1      45      123      988\\n'
        '- 698    - 3801    + 43    +  49    +  40\\n'
        '-----    ------    ----    -----    -----\\n'
        ' -666     -3800      88      172     1028',
        'Expected solutions to be correctly displayed in output when calling "arithmetic_arranger()" with five arithmetic problems and a second argument of \`True\`.'
    )
]

@pytest.mark.parametrize('arguments,expected_output,fail_message', test_cases)
def test_template(arguments, expected_output, fail_message):
    actual = arithmetic_arranger(*arguments)
    assert actual == expected_output, fail_message
`);
    const testCode = `
from pytest import main
main(['-vv', '/home/pyodide/test_module.py'])
`;
    const out = __pyodide.runPython(testCode);
    assert.equal(out, 0);
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
