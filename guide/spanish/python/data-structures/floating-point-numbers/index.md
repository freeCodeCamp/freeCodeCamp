---
title: Python Floating Point Numbers
localeTitle: Números de punto flotante de Python
---
[Aquí](https://docs.python.org/3/tutorial/floatingpoint.html) se puede encontrar información general sobre los números de punto flotante y cómo funcionan en Python.

Casi todas las implementaciones de Python siguen la especificación IEEE 754: Estándar para aritmética de punto flotante binario. Más información se encuentra en el [sitio IEEE](http://grouper.ieee.org/groups/754/) .

Los objetos flotantes se pueden crear utilizando [literales de punto flotante](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals) :
```
>>> 3.14 
 3.14 
 >>> 314\.    # Trailing zero(s) not required. 
 314.0 
 >>> .314    # Leading zero(s) not required. 
 0.314 
 >>> 3e0 
 3.0 
 >>> 3E0     # 'e' or 'E' can be used. 
 3.0 
 >>> 3e1     # Positive value after e moves the decimal to the right. 
 30.0 
 >>> 3e-1    # Negative value after e moves the decimal to the left. 
 0.3 
 >>> 3.14e+2 # '+' not required but can be used for exponent part. 
 314.0 
```

Los literales numéricos no contienen un signo, sin embargo, es posible crear objetos flotantes negativos prefijando con un operador unario `-` (menos) sin espacio antes del literal
```
>>> -3.141592653589793 
 -3.141592653589793 
 >>> type(-3.141592653589793) 
 <class 'float'> 
```

Del mismo modo, los objetos flotantes positivos se pueden prefijar con un operador unario `+ (` más) sin espacio antes del literal. Normalmente se omite `+`
```
>>> +3.141592653589793 
 3.141592653589793 
```

Tenga en cuenta que los cero iniciales y finales son válidos para literales de punto flotante
```
>>> 0.0 
 0.0 
 >>> 00.00 
 0.0 
 >>> 00100.00100 
 100.001 
 >>> 001e0010      # Same as 1e10 
 10000000000.0 
```

El [constructor `float`](https://docs.python.org/3/library/functions.html#float) es otra forma de crear objetos `float` .

La creación de `float` objetos con los literales de punto flotante se prefiere cuando sea posible:
```
>>> a = 3.14         # Prefer floating point literal when possible. 
 >>> type(a) 
 <class 'float'> 
 >>> b = int(3.14)    # Works but unnecessary. 
 >>> type(b) 
 <class 'float'> 
```

Sin embargo, el constructor flotante permite crear objetos flotantes de otros tipos de números:
```
>>> a = 4 
 >>> type(a) 
 <class 'int'> 
 >>> print(a) 
 4 
 >>> b = float(4) 
 >>> type(b) 
 <class 'float'> 
 >>> print(b) 
 4.0 
 >>> float(400000000000000000000000000000000) 
 4e+32 
 >>> float(.00000000000000000000000000000004) 
 4e-32 
 >>> float(True) 
 1.0 
 >>> float(False) 
 0.0 
```

El constructor `float` también creará objetos `float` partir de cadenas que representan números literales:
```
>>> float('1') 
 1.0 
 >>> float('.1') 
 0.1 
 >>> float('3.') 
 3.0 
 >>> float('1e-3') 
 0.001 
 >>> float('3.14') 
 3.14 
 >>> float('-.15e-2') 
 -0.0015 
```

El constructor `float` también se puede usar para hacer una representación numérica de `NaN` (No es un número), `infinity` negativo e `infinity` (las cadenas de notas para estas son insensibles a mayúsculas y minúsculas):
```
>>> float('nan') 
 nan 
 >>> float('inf') 
 inf 
 >>> float('-inf') 
 -inf 
 >>> float('infinity') 
 inf 
 >>> float('-infinity') 
 -inf 

```