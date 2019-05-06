---
title: Python
localeTitle: Pitón
---
## ¿Qué es Python?

[Python](https://www.python.org) es un lenguaje de programación de propósito general que se escribe, interpreta y conoce dinámicamente por su fácil legibilidad con excelentes principios de diseño.

Para obtener más información sobre Python, consulte estas páginas en python.org:

[¿Qué es Python?](https://www.python.org/doc/essays/blurb/)

[Preguntas frecuentes sobre Python](https://docs.python.org/3/faq/general.html) .

## Python 2 o Python 3

*   Las dos versiones son similares, con el conocimiento de un cambio a escribir código para el otro es fácil.
*   [Python 2 o Python 3](https://wiki.python.org/moin/Python2orPython3)
    *   [Python 2.x no se mantendrá a partir de 2020.](https://www.python.org/dev/peps/pep-0373/)
    *   3.x esta en desarrollo activo. Esto significa que todas las mejoras recientes de la biblioteca estándar, por ejemplo, solo están disponibles de forma predeterminada en Python 3.x.
    *   El ecosistema de Python ha acumulado una cantidad significativa de software de calidad a lo largo de los años. La desventaja de romper la compatibilidad con versiones anteriores en 3.x es que parte de ese software (especialmente el software interno de las empresas) todavía no funciona en 3.x todavía.

## Instalación

La mayoría de los sistemas operativos basados ​​en \* nix vienen con Python instalado (generalmente Python 2, Python 3 en los más recientes). Reemplazar el sistema Python no se recomienda y puede causar problemas. Sin embargo, diferentes versiones de Python pueden instalarse de manera segura junto con el sistema Python. Consulte [Configuración y uso de Python](https://docs.python.org/3/using/index.html) .

Windows no viene con Python, el instalador y las instrucciones se pueden encontrar [aquí](https://docs.python.org/3/using/windows.html)

## Intérprete de Python

El intérprete de Python es lo que se utiliza para ejecutar los scripts de Python.

Si está disponible y en la ruta de búsqueda del shell de Unix, es posible iniciarlo escribiendo el comando `python` seguido del nombre del script, invocará al intérprete y ejecutará el script.

`hello_campers.py`

```python
print('Hello campers!') 
```

Desde la terminal:
```
$ python hello_campers.py 
 Hello campers! 
```

"Cuando se instalan varias versiones de Python, se puede llamar por versión dependiendo de la configuración de instalación. En el entorno personalizado de Cloud9 ide, se pueden invocar como:
```
$ python --version 
 Python 2.7.6 
 $ python3 --version 
 Python 3.4.3 
 $ python3.5 --version 
 Python 3.5.1 
 $ python3.6 --version 
 Python 3.6.2 
 $ python3.7 --version 
 Python 3.7.1 
```

## Modo interactivo de intérprete de Python

El modo interactivo puede iniciarse invocando al intérprete de Python con el indicador `-i` o sin ningún argumento.

El modo interactivo tiene un aviso donde se pueden ingresar y ejecutar los comandos de Python:
```
$ python3.5 
 Python 3.5.1 (default, Dec 18 2015, 00:00:00) 
 GCC 4.8.4 on linux 
 Type "help", "copyright", "credits" or "license" for more information. 
 >>> print("Hello campers!") 
 Hello campers! 
 >>> 1 + 2 
 3 
 >>> exit() 
 $ 
```

## El zen de Python

Algunos de los principios que influyeron en el diseño de Python se incluyen como un huevo de Pascua y se pueden leer usando el comando en el modo interactivo de intérprete de Python:
```
>>> import this 
 The Zen of Python, by Tim Peters 
 
 Beautiful is better than ugly. 
 Explicit is better than implicit. 
 Simple is better than complex. 
 Complex is better than complicated. 
 Flat is better than nested. 
 Sparse is better than dense. 
 Readability counts. 
 Special cases aren't special enough to break the rules. 
 Although practicality beats purity. 
 Errors should never pass silently. 
 Unless explicitly silenced. 
 In the face of ambiguity, refuse the temptation to guess. 
 There should be one-- and preferably only one --obvious way to do it. 
 Although that way may not be obvious at first unless you're Dutch. 
 Now is better than never. 
 Although never is often better than *right* now. 
 If the implementation is hard to explain, it's a bad idea. 
 If the implementation is easy to explain, it may be a good idea. 
 Namespaces are one honking great idea -- let's do more of those! 
```

### Traduccion
```
 El Zen of Python, por Tim Peters 
 
 Bello es mejor que feo.
 Explicito es mejor que implicito.
 Simple es mejor que complejo.
 Complejo es mejor que complicado.
 Plano es mejor que incrustado.
 Esparso es mejor que denso.
 La facilidad de lectura cuenta.
 Los casos especiales no son lo suficientemente especiales para romper las reglas.
 Aunque la practicalidad le gana a la pureza.
 Los errores nunca deben pasar silenciosamente.
 Al menos que sean explicitamente silenciados.
 Ante la ambiguedad, no caer en la tentacion de adivinar.
 Debe existir una-- y preferentemente solo una-- manera obvia de hacerlo
 Aunque esa manera no sea tan obvia al principio al menos que seas holandes.
 Ahora es mejor que nunca.
 Aunque nunca es mejor que *justo* ahora la mayoria del tiempo.
 Si la implementacion es dificil de explicar, es una mala idea.
 Si la implementacion es facil de explicar, talvez sea una buena idea.
 Los espacios nombrados son una idea resonante -- hagamos mas de esos!
```

## Pros y contras de Python

### Pros

1.  Lenguaje interactivo con soporte de módulo para casi todas las funcionalidades.
2.  Código abierto: Entonces, puede contribuir a la comunidad, las funciones que ha desarrollado para su uso futuro y para ayudar a otros
3.  Un montón de buenos intérpretes y cuadernos disponibles para una mejor experiencia como el cuaderno jupyter.

#### Contras

1.  Siendo de código abierto, se han desarrollado muchas formas diferentes a lo largo del año para la misma función. Esto a veces, crea un caos para que otros lean el código de otra persona.
2.  Es un lenguaje lento. Entonces, un lenguaje muy malo para usar en el desarrollo de algoritmos generales.

## Documentación

[Python está bien documentado](https://docs.python.org/3/) . Estos documentos incluyen tutoriales, guías, referencias y metainformación para el idioma.

Otra referencia importante son las Propuestas de mejora de Python ( [PEP](https://www.python.org/dev/peps/) ). En los PEP se incluye una guía de estilo para escribir el código Python, [`PEP 8`](https://www.python.org/dev/peps/pep-0008/) .

## Depuración

Las declaraciones de `print` línea se pueden utilizar para la depuración simple:

> **... a menudo, la forma más rápida de depurar un programa es agregar algunas declaraciones de impresión a la fuente: el rápido ciclo de edición-prueba-depuración hace que este enfoque simple sea muy efectivo.**
> 
> \- [Resumen ejecutivo](https://www.python.org/doc/essays/blurb/)

Python también incluye herramientas más potentes para la depuración, como:

*   módulo de [_registro_](https://docs.python.org/3/library/logging.html) , [_registro_](https://docs.python.org/3/library/logging.html)
*   módulo de depuración, [_pdb_](https://docs.python.org/3/library/pdb.html)

Sólo tenga en cuenta que estos existen por ahora.

## Hola Mundo!

Volviendo a los documentos, podemos leer acerca de la función de [`print`](https://docs.python.org/3/library/functions.html#print) , una [_función incorporada_](https://docs.python.org/3/library/functions.html) de la [biblioteca estándar de Python](https://docs.python.org/3/library/index.html) .
```
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) 
```

Las funciones incorporadas se enumeran en orden alfabético. El nombre va seguido de una lista entre paréntesis de parámetros formales con valores predeterminados opcionales. Debajo hay una breve descripción de la función y sus parámetros, y ocasionalmente un ejemplo.

La función de [`print`](https://docs.python.org/3/library/functions.html#print) en Python 3 reemplaza la declaración de [`print`](https://docs.python.org/2/reference/simple_stmts.html#print) en Python 2.
```
>>> print("Hello world!") 
 Hello world! 
```

Se llama a una función cuando el nombre de la función va seguido de `()` . Para el mundo Hola! Por ejemplo, la función de impresión se llama con una cadena como argumento para el primer parámetro. Para el resto de los parámetros se utilizan los valores por defecto.

El argumento con el que llamamos a la función de `print` es un objeto `str` o _cadena_ , uno de los [_tipos incorporados_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) de Python. Además, lo más importante de python es que no tiene que especificar el tipo de datos al declarar una variable, el compilador de python Lo hará por sí mismo en función del tipo de valor asignado.

El parámetro de los `objects` tiene un prefijo `*` que indica que la función tomará un número arbitrario de argumentos para ese parámetro.

## ¿Querer aprender más?

Free Code Camp tiene algunos grandes recursos. La web es un lugar grande, hay mucho más que explorar:

*   Libro de práctica de Python: http://anandology.com/python-practice-book/index.html
*   Piense Python: http://greenteapress.com/thinkpython/html/index.html
*   Practical Business Python: http://pbpython.com/
*   Otro curso: https://realpython.com/?utm _source = fsp & utm_ medium = promo & utm\_campaign = bestresources
*   General: https://www.fullstackpython.com/
*   Aprenda lo básico: https://www.codecademy.com/learn/learn-python
*   Informática utilizando Python: https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11?ref=hackernoon#!
*   Lista de más recursos para aprender python: https://github.com/vinta/awesome-python
*   Python interactivo: http://interactivepython.org/runestone/static/thinkcspy/index.html
*   Guía para desarrolladores de Python: https://devguide.python.org/
