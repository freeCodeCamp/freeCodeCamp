---
title: Lambda Expressions
localeTitle: Expresiones lambda
---
## Expresiones lambda

Las expresiones Lambda se utilizan idealmente cuando tenemos algo simple que hacer y estamos más interesados ​​en realizar el trabajo rápidamente en lugar de nombrar formalmente la función. Expresiones lambda también conocidas como funciones anónimas. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md) .

Las expresiones Lambda en Python son una forma breve de declarar funciones pequeñas y anónimas (no es necesario proporcionar un nombre para las funciones lambda). Las funciones Lambda se comportan como funciones regulares declaradas con la palabra clave `def` . Son útiles cuando se desea definir una función pequeña de manera concisa. Solo pueden contener una expresión, por lo que no son los más adecuados para las funciones con declaraciones de flujo de control. dominar

#### Sintaxis de la función Lambda

`lambda arguments: expression`

Las funciones Lambda pueden tener cualquier número de argumentos pero solo una expresión

#### Código de ejemplo

```py
# Lambda function to calculate square of a number 
 square = lambda x: x ** 2 
 print(square(3)) # Output: 9 
 
 # Traditional function to calculate square of a number 
 def square1(num): 
  return num ** 2 
 print(square(5)) # Output: 25 
```

En el ejemplo `lambda x: x ** 2` anterior, lambda `lambda x: x ** 2` produce un objeto de función anónimo que puede asociarse con cualquier nombre. Entonces, asociamos el objeto de función con el `square` y, por lo tanto, a partir de ahora podemos llamar al objeto `square` como cualquier función tradicional. por ejemplo, `square(10)`

## Ejemplos

### Principiante

```py
lambda_func = lambda x: x**2 # Function that takes an integer and returns its square 
 lambda_func(3) # Returns 9 
```

### Intermedio

```py
lambda_func = lambda x: True if x**2 >= 10 else False 
 lambda_func(3) # Returns False 
 lambda_func(4) # Returns True 
```

### Complejo

```py
my_dict = {"A": 1, "B": 2, "C": 3} 
 sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B'] 
```

### Caso de uso

Digamos que quiere filtrar los números impares de una `list` . Podrías usar un bucle `for` :

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 filtered = [] 
 
 for num in my_list: 
     if num % 2 != 0: 
         filtered.append(num) 
 
 print(filtered)      # Python 2: print filtered 
 # [1, 3, 5, 7, 9] 
 ``` 
 
 You could write this as a one liner with list-comprehensions 
```

pitón filtrado = \[x para x en \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\] si x% 2! = 0\] \`\` \`

Pero es posible que tenga la tentación de utilizar la función de `filter` integrada. ¿Por qué? El primer ejemplo es un poco detallado, el de una sola línea puede ser más difícil de entender, donde el `filter` ofrece lo mejor de ambas palabras. Además, las funciones integradas suelen ser más rápidas.

\`\` \`pitón my\_list = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

filtrada = filtro (lambda x: x% 2! = 0, my\_list)

lista (filtrada)

# \[1, 3, 5, 7, 9\]

` `` NOTE: in Python 3 built in function return generator objects, so you have to call` lista `, while in Python 2 they return a` lista `,` tupla `or` cadena\`.

¿Que pasó? Le dijiste a `filter` que tomara cada elemento en `my_list` y aplicara las expresiones lambda. Los valores que devuelven `False` se filtran.

#### Más información:

*   [Doc oficial](https://docs.python.org/3/reference/expressions.html#lambda)
*   [Leer más](https://dbader.org/blog/python-lambda-functions)