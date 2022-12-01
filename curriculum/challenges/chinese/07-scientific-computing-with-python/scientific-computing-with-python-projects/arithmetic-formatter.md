---
id: 5e44412c903586ffb414c94c
title: 算术格式化
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

小学生经常把算术题垂直排列，这样更容易解决。 例如，“235 + 52” 变成：

```py
  235
+  52
-----
```

创建一个函数，接收一个属于算术问题的字符串列表，并返回垂直和并排排列的问题。 该函数应该接受可选的第二个参数。 当第二个参数设置为 `True` 时，应显示答案。

## 示例

函数调用：

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

输出:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

函数调用：

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

输出:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## 规则

如果提供的问题格式正确，该函数将返回正确的转换，否则，它将 **返回** 一个 **字符串** 来描述对用户有意义的错误。


- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return: `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return: `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

## 开发

在 `arithmetic_arranger.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的 `arithmetic_arranger()` 函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

这个项目的单元测试在 `test_module.py` 中。 为了你的方便，我们在 `main.py` 中从 `test_module.py` 运行测试。 只要你点击“运行”按钮，测试就会自动运行。 或者，你可以通过在控制台中输入 `pytest` 来运行测试。

## 提交

复制项目的 URL 并在下面提交。

# --hints--

它应该正确地格式化算术问题并通过所有测试。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
