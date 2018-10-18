---
title: If Elif Else Statements
localeTitle: Si Elif Else Declaraciones
---
## Si Elif Else Declaraciones

La estructura `if` / `elif` / `else` es una forma común de controlar el flujo de un programa, lo que le permite ejecutar bloques específicos de código dependiendo del valor de algunos datos. Si la condición que sigue a la palabra clave `if` evalúa como `true` , el bloque de código se ejecutará: Tenga en cuenta que el paréntesis no se usa antes y después de la verificación de condición como en otros idiomas.

```python
if True: 
  print('If block will execute!') 
```

```python
x = 5 
 
 if x > 4: 
  print("The condition was true!") #this statement executes 
```

Opcionalmente, puede agregar una respuesta `else` que se ejecutará si la condición es `false` :

```python
if not True: 
  print('If statement will execute!') 
 else: 
  print('Else statement will execute!') 
```

O también puedes ver este ejemplo.

```python
y = 3 
 
 if y > 4: 
  print("I won't print!") #this statement does not execute 
 else: 
  print("The condition wasn't true!") #this statement executes 
```

_Tenga en cuenta que no hay ninguna condición que siga a la palabra clave `else` : detecta todas las situaciones en las que la condición era `false`_

Se pueden verificar varias condiciones incluyendo una o más verificaciones `elif` después de su declaración inicial `if` , pero solo se ejecutará una condición:

```python
z = 7 
 
 if z > 8: 
  print("I won't print!") #this statement does not execute 
 elif z > 5: 
  print("I will!") #this statement will execute 
 elif z > 6: 
  print("I also won't print!") #this statement does not execute 
 else: 
  print("Neither will I!") #this statement does not execute 
```

_Tenga en cuenta que solo se ejecutará la primera condición que se evalúe como `true` . Aunque `z > 6` es `true` , el bloque `if/elif/else` termina después de la primera condición verdadera. Esto significa que otra `else` solo se ejecutará si ninguna de las condiciones es `true` ._

También podemos crear anidados si para la toma de decisiones. Antes de la anterior, consulte la guía de sangrado href = 'https: //guide.freecodecamp.org/python/code-blocks-and-indentation' target = '\_ blank' rel = 'nofollow'> una vez antes de la anterior.

Tomemos un ejemplo de encontrar un número que sea par y también mayor que '10 \`
```python 
 x = 34 
 if x %  2 == 0:  # this is how you create a comment and now, checking for even. 
  if x > 10: 
    print("This number is even and is greater than 10") 
  else: 
    print("This number is even, but not greater 10") 
 else: 
  print ("The number is not even. So point checking further.") 
```

Esto fue solo un ejemplo simple para anidar if's. Por favor, siéntase libre de explorar más en línea.

Si bien los ejemplos anteriores son simples, puede crear condiciones complejas utilizando [comparaciones](https://guide.freecodecamp.org/python/comparisons) [booleanas](https://guide.freecodecamp.org/python/boolean-operations) y [operadores booleanos](https://guide.freecodecamp.org/python/boolean-operations) .

**_Python en línea if-else instrucción_**

También podemos usar sentencias if-else en funciones de python en línea El siguiente ejemplo debe verificar si el número es mayor o igual a 50, si es así, devuelva Verdadero:
```python 
 x = 89 
 is_greater = True if x >= 50 else False 
 
 print(is_greater) 
```

Salida
```python
> 
 True 
> 

```
