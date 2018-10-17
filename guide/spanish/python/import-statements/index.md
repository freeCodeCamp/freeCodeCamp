---
title: Python Import Statements
localeTitle: Declaraciones de importación de Python
---
Mientras aprendía a programar y leer algunos recursos, habrías encontrado esta palabra 'abstracción' que simplemente significa reducir y reutilizar el código tanto como sea posible.

Funciones y módulos facilitan la abstracción. Usted crea funciones cuando quiere hacer algo repetidamente dentro de un archivo.

Los módulos entran en escena cuando desea reutilizar un grupo de funciones en diferentes archivos de origen. Los módulos también son útiles para estructurar bien el programa.

*   Usando bibliotecas estándar y otros módulos de terceros:
*   Estructurando el programa

## Uso de bibliotecas estándar

Ejemplo: puede leer en detalle los métodos / funciones de todas las bibliotecas estándar en los documentos oficiales de Python.
```
import time 
 for i in range(100): 
    time.sleep(1)   # Waits for 1 second and then executes the next command 
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CS6C)
```
# To calculate the execution time of a part of program 
 import time 
 start = time.time() 
 # code here 
 end = time.time() 
 print('Execution time:' , end-start) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CS6C/1)
```
# Using math Module 
 import math 
 print(math.sqrt(100))   # prints 10 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CS6C/2)

## Uso de módulos de terceros

Los módulos de terceros no vienen incluidos con Python, pero tenemos que instalarlos externamente utilizando administradores de paquetes como [`pip`](https://bootstrap.pypa.io/get-pip.py) y [`easy install`](https://bootstrap.pypa.io/ez_setup.py)
```
# To make http requests 
 import requests 
 rq = requests.get(target_url) 
 print(rq.status_code) 
```

Obtenga más información sobre el módulo de solicitudes de python [aquí](http://docs.python-requests.org/en/master/)

## Estructurar programas

Queremos hacer un programa que tenga varias funciones con respecto a los números primos. Así que vamos a empezar. Definiremos todas las funciones en `prime_functions.py`
```
# prime_functions.py 
 from math import ceil, sqrt 
 def isPrime(a): 
    if a == 2: 
        return True 
    elif a % 2 == 0: 
        return False 
    else: 
        for i in range(3,ceil(sqrt(a)) + 1,2): 
            if a % i == 0: 
                return False 
        return True 
 
 def print_n_primes(a): 
    i = 0 
    m = 2 
    while True: 
        if isPrime(m) ==True: 
            print(m) 
            i += 1 
        m += 1 
        if i == a: 
            break 
```

Ahora queremos usar las funciones que acabamos de crear en `prime_functions.py` así que creamos un nuevo archivo `playground.py` para usar esas funciones.

> _Tenga en cuenta que este programa es demasiado simple para hacer dos archivos separados, solo para demostrarlo. Pero cuando hay grandes programas complejos, hacer archivos diferentes es realmente útil._
```
# playground.py 
 import prime_functions 
 print(prime_functions.isPrime(29)) # returns True 
```

## Clasificación de importaciones

Una buena práctica es ordenar `import` módulos de `import` en tres grupos: importaciones de bibliotecas estándar, importaciones de terceros relacionadas e importaciones locales. Dentro de cada grupo es sensato ordenar alfabéticamente por nombre de módulo. Puedes encontrar [más información en PEP8](https://www.python.org/dev/peps/pep-0008/?#imports) .

Una de las cosas más importantes para el lenguaje Python es la legibilidad, y los módulos de clasificación alfabética son más rápidos de leer y buscar. También es más fácil verificar que algo se importe y evitar las importaciones duplicadas.