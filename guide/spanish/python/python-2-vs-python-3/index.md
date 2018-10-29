---
title: Python 2 vs Python 3
localeTitle: Python 2 vs Python 3
---
No estamos tomando partido en el debate. Si está interesado en saber más sobre esto con fines académicos, tal vez [este artículo que compara Python 2 y Python 3](https://wiki.python.org/moin/Python2orPython3) lo intrigaría.

Pero tampoco podemos ignorar el hecho de que hay dos sabores principales de Python. ¿Por qué debería importarte, te preguntarás? Debido a que el código escrito para una versión de Python puede provocar un error de sintaxis en otra versión de Python.

La siguiente es una declaración de `print` válida en Python 2, pero no funciona en Python 3:

```py
print "Hello World" 
```

En Python 3, la misma declaración produce un error como este:
```
>>> print "hello" 
  File "<stdin>", line 1 
    print "hello" 
                ^ 
 SyntaxError: Missing parentheses in call to 'print' 
```

En Python 2, "imprimir" se trata como una declaración en lugar de una función. No es necesario envolver el texto que desea imprimir entre paréntesis, aunque puede hacerlo si lo desea. Python 3 trata explícitamente la "impresión" como una función, lo que significa que tiene que pasar los elementos que necesita para imprimir la función entre paréntesis de forma estándar, o recibirá un error de sintaxis

El uso de la función `print()` es 'seguro' en Python 2 y 3:

```python
print("Hello World") 
```

Otra diferencia entre Python 2 y Python 3 es la estructura de datos que devuelven cuando llama a la función `map()` .

En Python 2, `map()` devuelve una lista:
```
>>> result = map(int,['10','20','30','40']) 
 >>> print result 
 >>> [10,20,30,40] 
```

En Python 3, `map()` devuelve un iterador:
```
>>> result = map(int,['10','20','30','40']) 
 >>> print (result) 
 >>> <map object at 0x7f40896b4630> 
```

Para obtener una lista en Python 3, necesita convertirla:
```
>>> result = list(map(int,['10','20','30','40'])) 
 >>> print (result) 
 >>> [10,20,30,40] 
```

Por lo tanto, la única pregunta que debe preocuparse ahora mismo; ¿Cuál deberías elegir? Si eres nuevo en Python, debes elegir Python 3. Python 2 tiene su fecha de [fin de vida](https://www.python.org/dev/peps/pep-0373/#update) establecida en 2020. Lo que significa que las correcciones de errores regulares no están garantizadas en el futuro y sí, toma tiempo incluso para familiarizarse con los aspectos más comunes con cualquiera Pitón; y tu tiempo es importante. Entonces, invierte tu tiempo y esfuerzo sabiamente!

Si bien Python 2 es bien compatible y popular, las bibliotecas y los marcos más comunes en Python prefieren Python 3. Django [recomienda](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) oficialmente Python 3. Flask y todas sus dependencias también son [compatibles](http://flask.pocoo.org/docs/0.10/python3/#python3-support) con Python 3.

Tanto Python 2 como Python 3 son geniales. La mayoría de las distribuciones de Linux y macOS vienen preinstaladas con Python 2 como la versión predeterminada de Python. Y Python 3 nació de la búsqueda insaciable de construcciones de lenguaje más legibles y más bellas.

Este artículo utiliza Python 3 para configurar los marcos web en su entorno de desarrollo. Pero antes de eso, debes asegurarte de tener Python 3 y saber cómo usarlo.

#### Más información:

*   [Python 2 o 3 artículo](https://wiki.python.org/moin/Python2orPython3)