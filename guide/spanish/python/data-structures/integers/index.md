---
title: Python Integers
localeTitle: Enteros de Python
---
El dominio teórico para enteros en python es infinito negativo a infinito. En la práctica, los valores enteros están limitados por la cantidad de memoria disponible.

En Python 2, había una distinción entre **`int`** , números que caben en números de 32 o 64 bit _C_ , y **`long`** , limitados por la memoria disponible. Python 3 unificó los dos tipos en solo **`int`** , más información en [PEP 237](https://www.python.org/dev/peps/pep-0237/) .

**creación `int` utilizando literales enteros**

[Literales enteros](https://docs.python.org/3/reference/lexical_analysis.html#integer-literals)

_Los objetos enteros_ se pueden crear utilizando literales enteros. Los números sin adornos sin decimales son literales enteros:
```
>>> 1234567890           # Unadorned numbers are integer literals 
 1234567890 
 >>> type(1234567890) 
 <class 'int'> 
```

Los literales numéricos no contienen un signo, sin embargo, es posible crear _objetos enteros_ negativos prefijando con un operador unario `-` (menos) sin espacio antes del literal:
```
>>> -1234567890 
 -1234567890 
 >>> type(-1234567890) 
 <class 'int'> 
```

Del mismo modo, los objetos enteros positivos se pueden crear prefijando un operador unario `+` (más) sin espacio antes de los dígitos. Por lo general, `+` es omitido:
```
>>> +1234 
 1234 
```

Los enteros binarios (base 2, prefijo: `0b` o `0B` ), octal (base 8, prefijo: `0o` o `0O` ) y hexadecimal (base 16, prefijo: `0x` o `0X` ) también pueden crearse utilizando literales enteros:
```
>>> 0b1, 0b10, 0b11 
 (1, 2, 3) 
 >>> 0o1, 0o10, 0o11 
 (1, 8, 9) 
 >>> 0x1, 0x10, 0x11 
 (1, 16, 17) 
```

Tenga en cuenta que los 0 iniciales para los literales enteros distintos de cero **no** están **permitidos** :
```
>>> 0     # Zero by itself is okay. 
 0 
 >>> 01    # Leading zero(s) cause SyntaxError. 
  File "<stdin>", line 1 
    01 
     ^ 
 SyntaxError: invalid token 
```

El [constructor](https://docs.python.org/3/library/functions.html#int) `int` es otra forma de crear _objetos enteros_ .
```
class int(x=0) 
 class int(x, base=10) 
```

La creación de _objetos enteros_ con literales enteros se prefiere cuando es posible:
```
>>> a = 1         # Prefer integer literal when possible. 
 >>> type(a) 
 <class 'int'> 
 >>> b = int(1)    # Works but unnecessary. 
 >>> type(b) 
 <class 'int'> 
```

Sin embargo, el constructor permite crear _objetos enteros_ de otros tipos de números:
```
>>> a = 1.123 
 >>> type(a) 
 <class 'float'> 
 >>> print(a) 
 1.123 
 >>> b = int(1.123) 
 >>> type(b) 
 <class 'int'> 
 >>> print(b) 
 1 
```

El uso del constructor `int` para los números de punto flotante truncará el número hacia cero:
```
>>> int(-1.23) 
 -1 
 >>> int(1.23) 
 1 
```

Las constantes `boolean` integradas son instancias de la clase `bool` , y son subclases de la clase `int` , lo que las convierte en un tipo de tipo numérico:
```
>>> type(True) 
 <class 'bool'> 
 >>> issubclass(bool, int) 
 True 
```

Si eso no tiene sentido para ti, no te preocupes. Por ahora solo recuerda que llamar al constructor int con objetos `boolean` devolverá _objetos enteros_ :
```
>>> int(True) 
 1 
 >>> int(False) 
 0 
```

El constructor `int` también creará _objetos enteros a_ partir de cadenas:
```
>>> a = "10" 
 >>> type(a) 
 <class 'str'> 
 >>> b = int("10") 
 >>> type(b) 
 <class 'int'> 
```

_Las cadenas_ para el constructor `int` deben representar un literal entero:

El segundo parámetro del constructor `int` es especificar una base (por defecto: 10). Las bases válidas son 0 y 2-36.

Si se proporciona una base explícita, el primer argumento debe ser una cadena.
```
>>> int("111", 2) 
 7 
 >>> int(111, 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: int() can't convert non-string with explicit base 
```

La cadena utilizada para el constructor `int` con una base explícita debe ser un literal entero válido para esa base:
```
>>> int('11', 2) 
 3 
 >>> int('12', 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: invalid literal for int() with base 2: '12' 
```

Se pueden usar tanto cadenas prefijadas como no prefijadas de literales enteros, sin embargo, si se usan, el prefijo debe coincidir con la base proporcionada.
```
>>> int('1101', 2) 
 13 
 >>> int('0b1101', 2) 
 13 
 >>> int('0x1101', 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: invalid literal for int() with base 2: '0x1101' 
```

Si se usa una cadena prefijada y una base 0, el objeto entero creado usará la base especificada por el prefijo. Si no se usa ningún prefijo, entonces se supone que la base 10
```
>>> int('100', 0) 
 100 
 >>> int('0b100', 0) 
 4 
 >>> int('0o100', 0) 
 64 

```