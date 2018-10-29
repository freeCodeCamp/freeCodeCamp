---
title: Erlang
localeTitle: Erlang
---
## Erlang

Erlang es un lenguaje de programación funcional, desarrollado por Ericsson para su uso en aplicaciones de telecomunicaciones. Debido a que consideraron que es inaceptable que un sistema de telecomunicaciones tenga un tiempo de inactividad significativo, Erlang fue creado para ser (entre otras cosas):

*   distribuido y tolerante a fallos _(una parte del software o hardware defectuoso no debería detener el sistema)_
*   concurrente _(puede generar muchos procesos, cada uno ejecutando un trabajo pequeño y bien definido, y aislado unos de otros pero capaz de comunicarse a través de mensajes)_
*   intercambiable en caliente _(el código puede intercambiarse en el sistema mientras se está ejecutando, lo que lleva a una alta disponibilidad y un tiempo mínimo de inactividad del sistema)_

### Sintaxis

Erlang hace un uso intensivo de la **recursión** . Dado que los datos son inmutables en Erlang, el uso de `while` y `for` bucles (donde una variable necesita seguir cambiando su valor) no está permitido.

Este es un ejemplo de recursión, que muestra cómo una función quita repetidamente la primera letra del frente de un nombre y la imprime, y se detiene solo cuando se encuentra la última letra.

```erlang
-module(name). 
 
 -export([print_name/1]). 
 
 print_name([RemainingLetter | []]) -> 
  io:format("~c~n", [RemainingLetter]); 
 print_name([FirstLetter | RestOfName]) -> 
  io:format("~c~n", [FirstLetter]), 
  print_name(RestOfName). 
```

Salida:
```
> name:print_name("Mike"). 
 M 
 i 
 k 
 e 
 ok 
```

También hay un gran énfasis en **la coincidencia de patrones** , que con frecuencia elimina la necesidad de una estructura `if` o una declaración de `case` . En el siguiente ejemplo, hay dos coincidencias para nombres específicos, seguidas de un catch-all para cualquier otro nombre.

```erlang
-module(greeting). 
 
 -export([say_hello/1]). 
 
 say_hello("Mary") -> 
  "Welcome back Mary!"; 
 say_hello("Tom") -> 
  "Howdy Tom."; 
 say_hello(Name) -> 
  "Hello " ++ Name ++ ".". 
```

Salida:
```
> greeting:say_hello("Mary"). 
 "Welcome back Mary!" 
 > greeting:say_hello("Tom"). 
 "Howdy Tom." 
 > greeting:say_hello("Beth"). 
 "Hello Beth." 
```

### Pruébalo

Hay sitios web donde puedes intentar ejecutar comandos de Erlang sin tener que instalar nada localmente, como estos:

*   [¡Darle una oportunidad! (un tutorial práctico)](http://www.tryerlang.org/)
*   [TutorialsPoint CodingGround](https://www.tutorialspoint.com/compile_erlang_online.php)

Si desea instalarlo en su máquina (o virtual), puede encontrar los archivos de instalación en [Erlang.org](https://www.erlang.org/downloads) o en [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html) .

#### Más información:

*   [Acerca de Erlang](https://www.erlang.org/about)
*   [¡Aprende algo de Erlang para un gran bien!](http://learnyousomeerlang.com/)
*   [¡Refugio engendrado!](http://spawnedshelter.com/) _(una colección de artículos, videos y libros para aprender Erlang)_
*   [Erlang (lenguaje de programación)](https://en.wikipedia.org/wiki/Erlang_(programming_language))