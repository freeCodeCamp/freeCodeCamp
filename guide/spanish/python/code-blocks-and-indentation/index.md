---
title: Python Code Blocks and Indentation
localeTitle: Bloques de código de Python y sangría
---
En general, es una buena práctica no mezclar tabulaciones y espacios al codificar en Python. Hacer esto puede causar un `TabError` , y su programa se bloqueará. Sea coherente al codificar: elija sangrar utilizando tabulaciones o espacios y siga la convención elegida en todo su programa.

#### Bloques de código y sangría

Una de las características más distintivas de Python es su uso de la sangría para marcar bloques de código. Considere la sentencia if de nuestro sencillo programa de comprobación de contraseñas:

\`\` \`pitón si pwd == 'apple': imprimir ('Iniciar sesión en ...') más: imprimir ('Contraseña incorrecta')

Imprimir ('¡Todo listo!')
```
The lines print('Logging on ...') and print('Incorrect password.') are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements. 
 
 To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python. 
 
 In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print('All done!') is not indented, and so is not part of the else-block. 
 
 Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation. 
 
 #### If/elif-statements 
 An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay: 
```

pitón

# tarifa aérea.py

age = int (input ('¿Cuántos años tienes?')) Si la edad <= 2: imprimir ('gratis') elif 2 <edad <13: imprimir ('tarifa de niño) más: imprimir ('tarifa de adulto')
```
After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block. 
 
 #### Conditional expressions 
 Python has one more logical operator that some programmers like (and some don't!). It's essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code: 
```

pitón comida = entrada ("¿Cuál es tu comida favorita?") respuesta = 'yuck' si comida == 'cordero' else 'yum'
```
The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either 'yuck' or 'yum'. It's equivalent to the following: 
```

pitón comida = entrada ("¿Cuál es tu comida favorita?") si la comida == 'cordero': respuesta = 'yuck' más: respuesta = 'yum' \`\` \`

Las expresiones condicionales suelen ser más cortas que las sentencias if / else correspondientes, aunque no son tan flexibles o fáciles de leer. En general, debe usarlos cuando simplifican su código.

[Documentación Python - Indentación](https://docs.python.org/3/reference/lexical_analysis.html#indentation)