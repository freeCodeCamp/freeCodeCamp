---
title: Python Code Blocks and Indentation
localeTitle: Python代码块和缩进
---
在Python中编码时，通常不要混合制表符和空格。这样做可能会导致`TabError` ，并且您的程序将崩溃。在编码时保持一致 - 选择使用制表符或空格缩进，并在整个程序中遵循您选择的约定。

#### 代码块和缩进

Python最显着的特点之一是使用缩进来标记代码块。考虑我们简单的密码检查程序中的if语句：

\`\`\`python 如果pwd =='apple'： 打印（'登录...'） 其他： 打印（'密码错误。'）

打印（'全部完成！'）
```
The lines print('Logging on ...') and print('Incorrect password.') are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements. 
 
 To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python. 
 
 In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print('All done!') is not indented, and so is not part of the else-block. 
 
 Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation. 
 
 #### If/elif-statements 
 An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay: 
```

蟒蛇

# airfare.py

age = int（输入（'你多大了？'）） 如果年龄<= 2： 打印（'免费'） elif 2 <年龄<13岁： 打印（'儿童票价） 其他： 打印（'成人票价'）
```
After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block. 
 
 #### Conditional expressions 
 Python has one more logical operator that some programmers like (and some don't!). It's essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code: 
```

蟒蛇 food = input（“你最喜欢的食物是什么？”） 如果食物=='羊''其他'yum'，回复='yuck'
```
The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either 'yuck' or 'yum'. It's equivalent to the following: 
```

蟒蛇 food = input（“你最喜欢的食物是什么？”） 如果食物=='羊肉'： 回复='哎' 其他： 回复='yum' \`\`\`

条件表达式通常比相应的if / else语句短，但不够灵活或易于阅读。通常，您应该在使代码更简单时使用它们。

[Python文档 - 缩进](https://docs.python.org/3/reference/lexical_analysis.html#indentation)