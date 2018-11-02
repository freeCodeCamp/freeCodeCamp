---
title: Python Code Blocks and Indentation
localeTitle: Блоки и отступы кода Python
---
Как правило, вам не следует смешивать вкладки и пробелы при кодировании в Python. Это может привести к `TabError` , и ваша программа выйдет из `TabError` . Будьте последовательны при кодировании - выберите либо отступ, используя вкладки или пробелы, и следуйте выбранному вами соглашению в своей программе.

#### Блоки кода и отступы

Одной из самых отличительных особенностей Python является использование отступов для маркировки блоков кода. Рассмотрим инструкцию if из нашей простой программы проверки пароля:

\`\` \`python если pwd == 'apple': print («Вход в систему ...») еще: print («Неверный пароль»).

print («Все сделано!»)
```
The lines print('Logging on ...') and print('Incorrect password.') are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements. 
 
 To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python. 
 
 In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print('All done!') is not indented, and so is not part of the else-block. 
 
 Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation. 
 
 #### If/elif-statements 
 An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay: 
```

питон

# airfare.py

age = int (ввод («Сколько вам лет?»)) если возраст <= 2: печать («бесплатно») elif 2 <возраст <13: печать («детский тариф») еще: печать («взрослый тариф»)
```
After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block. 
 
 #### Conditional expressions 
 Python has one more logical operator that some programmers like (and some don't!). It's essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code: 
```

питон food = input («Какая ваша любимая еда?») ответ = 'yuck', если пища == 'lamb' else 'yum'
```
The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either 'yuck' or 'yum'. It's equivalent to the following: 
```

питон food = input («Какая ваша любимая еда?») если пища == 'ягненок': ответить = 'yuck' еще: ответить = 'yum' \`\` \`

Условные выражения обычно короче соответствующих if / else-операторов, хотя и не столь гибкие или легко читаемые. В общем, вы должны использовать их, когда они упрощают ваш код.

[Документация Python - отступы](https://docs.python.org/3/reference/lexical_analysis.html#indentation)