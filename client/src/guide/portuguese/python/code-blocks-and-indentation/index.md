---
title: Python Code Blocks and Indentation
localeTitle: Blocos de Código Python e Recuo
---
Em geral, é boa prática não misturar guias e espaços ao codificar em Python. Isso pode causar um `TabError` e seu programa `TabError` . Seja consistente quando você codifica - escolha recuar usando guias ou espaços e siga a convenção escolhida em todo o programa.

#### Blocos de Código e Recuo

Uma das características mais distintivas do Python é o uso de recuo para marcar blocos de código. Considere a declaração if do nosso programa simples de verificação de senha:

\`\` \`python se pwd == 'apple': print ('Conectando-se…') outro: print ('Senha incorreta.')

print ('Tudo pronto!')
```
The lines print('Logging on ...') and print('Incorrect password.') are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements. 
 
 To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python. 
 
 In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print('All done!') is not indented, and so is not part of the else-block. 
 
 Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation. 
 
 #### If/elif-statements 
 An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay: 
```

python

# airfare.py

age = int (input ('Quantos anos você tem?')) se idade <= 2: imprimir ('grátis') elif 2 <idade <13: print (tarifa de criança) outro: print ('tarifa para adultos')
```
After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block. 
 
 #### Conditional expressions 
 Python has one more logical operator that some programmers like (and some don't!). It's essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code: 
```

python food = input ("Qual é a sua comida favorita?") reply = 'yuck' se comida == 'cordeiro' else 'yum'
```
The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either 'yuck' or 'yum'. It's equivalent to the following: 
```

python food = input ("Qual é a sua comida favorita?") se comida == 'cordeiro': reply = 'yuck' outro: reply = 'yum' \`\` \`

As expressões condicionais são geralmente mais curtas do que as declarações if / else correspondentes, embora não sejam tão flexíveis ou fáceis de ler. Em geral, você deve usá-los quando eles tornarem seu código mais simples.

[Documentação Python - Indentação](https://docs.python.org/3/reference/lexical_analysis.html#indentation)