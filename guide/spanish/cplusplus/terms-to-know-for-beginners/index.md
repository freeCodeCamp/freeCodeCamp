---
title: IDE and Printing different text 
localeTitle: IDE y la impresión de diferentes textos
---
# Introducción a un IDE e impresión de diferentes textos:

*   En el último artículo, algunos enlaces de descarga de software requeridos para la programación. Software como este es conocido como un IDE. **IDE significa Ambiente de Desarrollo Integrado**

## Los IDE consisten principalmente en 3 tipos de software:

**1 Editor:** un editor de texto ligeramente modificado para facilitar la codificación. Un ejemplo de un editor para la codificación es Notepad ++.

**2 Depurador:** software que le ayuda a encontrar errores en su programa y a resolverlos antes de la ejecución. Imagina que FaceBook se cuelga al cargar una aplicación o un juego que se estrella de repente. Para evitar la ejecución defectuosa de un programa, el depurador es el mejor amigo de un programador.

**3 Compilador:** Un compilador es la parte de la computadora que convierte su código de programa de alto nivel en código de máquina simple: 0s y 1s; Para que una computadora entienda los comandos y los ejecute. A partir de ahora, estaremos repitiendo la palabra **compilador con** frecuencia.

_P: Intente buscar un IDE en Google y ejecute su primer programa en él. Comprueba la salida_

Ahora, instale el IDE e intente cambiar el texto del programa en el último artículo.

### Cambio de texto en C ++

*   Para cambiar el texto, cambie lo que está escrito en `""` después de `cout<<`

Un programa de muestra:

```cpp
#include <iostream> 
 using namespace std : 
 int main() 
 { 
    cout << "I Love freeCodeCamp ! "; 
 } 
```

El código anterior devuelve un error porque en la línea 2, hemos usado dos puntos (:) en lugar de un punto y coma (;) Entonces, vamos a depurar el error:
```cpp
#include <iostream> 
 using namespace std ; 
 int main() 
 { 
    cout << "I Love freeCodeCamp ! "; 
    return 0; 
 } 
```

Tenga en cuenta que ahora el programa se ejecuta perfectamente. La salida será: `I Love freeCodeCamp!`

### Ahora, cambiemos el texto a algo como esto:

```cpp
    cout << "Hello World!\t I love freeCodeCamp!"; 
```

La salida será algo diferente esta vez:
```
Hello World!     I love freeCodeCamp! 
```

Si se dio cuenta, el comando `\t` creó un _espacio de tabulación_ entre los dos textos. Este es un tipo de comando especial en C ++. Estos comandos especiales se conocen como _secuencias de escape_ . Se utilizan para imprimir ciertos caracteres especiales que un compilador no puede mostrar.

#### Secuencias de escape útiles:

*   `\'` para imprimir una sola coma invertida
*   `\"` para imprimir una coma doble invertida
*   `\n` para imprimir en una nueva línea
*   `\t` para una pestaña horizontal
*   `\f` para una nueva página
*   `\\` para una barra invertida
*   `\?` para un signo de interrogación

##### Ahora, intentemos imprimir números y caracteres especiales con algunas secuencias de escape:

```cpp
    cout << "40158 \t 236708 ! \n \\ @ \?" << endl; 
```

La salida cambia a:
```
40158      236708 ! 
 \ @ ? 
```

##### Probemos algunas otras formas de imprimir:

```cpp
    cout << "1+2" << endl; 
    cout << 1+2 << endl; 
```

Salida:

*   La primera declaración de salida es `1+2`
*   La segunda declaración de salida es `3`

Esto se debe a que no agregamos las comillas invertidas para la segunda declaración de impresión y, por lo tanto, el compilador agregó los números antes de imprimirlos.

#### Comentarios:

*   Los comentarios son una característica importante de muchos lenguajes de programación. Permiten que el programador tome notas para la autoayuda y no afectará la ejecución del programa.

**Los diferentes tipos de comentarios y la sintaxis de un comentario** :

1 `//` ~ _Comentarios de una sola línea_ : La longitud de estos comentarios es de 1 línea (la línea en la que se escribe). 2 `/* */` ~ _Comentarios de líneas múltiples_ : estos comentarios pueden ocupar un espacio de más de una línea.

#### Ejemplo de uso de comentarios:

\`\` \`cpp cout << "Hello Comment" << endl; // cout << "Hello Comment" << endl; , Comentario de una sola línea.
```
/* This is an example of a multi line comment. No output is generated for this . 
 I now end the comment.  :) */ 
```

\`\` \`

La salida será:

`Hello Comment`

Como puede observar, los comentarios se ignoran durante la ejecución del programa y no aparecen al verificar la salida del programa. Debe tenerse en cuenta que si bien los comentarios agregan un nivel adicional de legibilidad al código, es un mal hábito confiar demasiado en los comentarios para describir la lógica de su código. En general, su código debe hablar por sí mismo y reflejar la intención del programador.

Como puede observar, los comentarios se ignoran durante la ejecución del programa y no aparecen al verificar la salida del programa.

#### Los operadores

*   Los operadores te permiten comparar dos o más expresiones
*   `==` igual a
*   `!=` no es igual a
*   `<` menos que
*   `>` mayor que
*   `<=` menor o igual que
*   `>=` mayor que o igual a

```cpp
    (7==5); 
```

Esto se evalúa como falso

`cpp (7!=5);` Esto se evalúa como verdadero

[Un resumen de todas las declaraciones impresas utilizadas en este artículo. ¡Siéntase libre de modificar el código! :)](https://repl.it/L4ox)
