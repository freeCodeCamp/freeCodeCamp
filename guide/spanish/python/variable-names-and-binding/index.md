---
title: Python Variables Names and Binding
localeTitle: Nombres y vinculación de variables de Python
---
Tener _objetos_ no es útil a menos que haya una manera de usarlos. Para poder usar un _objeto_ , debe haber una forma de referenciarlo. En Python esto se hace **vinculando** objetos a **nombres** . Una descripción detallada de se puede encontrar [aquí](https://docs.python.org/3/reference/executionmodel.html)

Una forma en que esto se hace es mediante el uso de una [_instrucción de asignación_](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements) . Esto comúnmente se denomina _asignar una variable_ en el contexto de Python. Si se habla de programación en el contexto de otros lenguajes, **vincular** un _objeto_ a un **nombre** puede ser más preciso.
```
>>> some_number = 1 
 >>> print(some_number) 
 1 
```

En el ejemplo anterior, el destino de la instrucción de asignación es un nombre (identificador), `some_number` . El _objeto que_ se asigna es el número 1. La declaración **vincula** el _objeto_ al **nombre** . En la segunda declaración, usamos este enlace para `print` el _objeto al_ que se refiere `some_number` .

El identificador no está precedido por un _tipo_ . Eso es porque Python es un lenguaje de tipo dinámico. El identificador está vinculado a un _objeto_ que tiene un _tipo_ , sin embargo, el identificador en sí mismo puede rebotar a otro _objeto_ de un _tipo_ diferente:
```
>>> some_variable = 1 
 >>> print(some_variable) 
 1 
 >>> some_variable = "Hello campers!" 
 >>> print(some_variable) 
 Hello campers! 
```

Al nombrar variables, debe seguir estas reglas:

*   Un nombre de variable debe comenzar con una letra o el carácter de subrayado
*   Un nombre de variable no puede comenzar con un número o caracteres especiales (! @ #% ^ & \*, Etc.)
*   Un nombre de variable solo puede contener caracteres alfanuméricos y guiones bajos (Az, 0-9 y \_)
*   Los nombres de las variables distinguen entre mayúsculas y minúsculas (num, NUM y Num son tres variables diferentes)