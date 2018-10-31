---
title: Modes in Vim
localeTitle: Modos en vim
---
# Modos Vim

Porque Vim se enfoca en cambiar el código existente tanto como escribir nuevo Código, se divide en varios modos que cada uno tiene diferentes propósitos.

### Modo normal

Por defecto, Vim se inicia en modo "normal". Se puede acceder al modo normal desde otros modos presionando `Esc` o `<C-[>` .

En el modo normal, las pulsaciones de teclas no funcionan como uno esperaría. Es decir, no insertan texto en el documento; en lugar, ciertas pulsaciones de teclas pueden:

#### Mueve el cursor

*   **h** mover un caracter a la izquierda
*   **j** mover una fila hacia abajo
*   **k** mover una fila hacia arriba
*   **L** Mover un carácter a la derecha

Como muchos comandos vim, el movimiento de la fila puede ser prefijado por un número para mover s Everal líneas a la vez:

*   **4j** mover 4 filas hacia abajo
*   **6k** mover 6 filas hacia arriba

Movimientos básicos de palabras:

*   **w** pasar al principio de la siguiente palabra
*   **b** mover al principio anterior de la palabra
*   **e** mover al final de la palabra
*   **W** van al comienzo de la siguiente palabra después de un espacio en blanco
*   **B** pasar al principio de la palabra anterior antes de un espacio en blanco
*   **E** pasar al final de la palabra antes de un espacio en blanco

Movimiento de inicio / fin de línea:

*   **0** mover al principio de la línea
*   **$** mover al final de la línea

#### Manipular texto

#### Entrar en otros modos

**El modo normal** es donde uno debe pasar la mayor parte de su tiempo mientras usa Vim. Recuerda, esto es lo que hace diferente a Vim.

En el modo normal, hay varias formas de moverse alrededor de un archivo abierto. en adición Para usar las teclas del cursor para moverse, puede usar `h` (izquierda), `j` (abajo), `k` (arriba), y `l` (derecha) para moverte también. Esto ayuda especialmente a los mecanógrafos que No me gusta salir de la fila de casa al hacer cambios.

También puede realizar cambios en caracteres individuales en el modo normal. Por ejemplo, para reemplace un solo carácter, mueva el cursor sobre él y presione `r` , y luego Personaje con el que quieres reemplazarlo. Del mismo modo, puede eliminar caracteres individuales moviendo el cursor sobre él y presionando `x` .

Para realizar un deshacer, presione `u` en modo normal. Esto deshace los cambios hasta el último. Tiempo que estabas en modo normal. Si desea rehacer ( _es decir_ , deshacer su deshacer) presione `Ctrl+r` en modo normal.

### Modo de inserción

Este es el segundo modo más usado, y será el comportamiento más familiar a la mayoría de la gente Una vez en el modo de inserción, al escribir se insertan caracteres como si fuera un habitual editor de texto. Puede ingresarlo usando un comando de inserción desde el modo normal.

Los comandos de inserción incluyen:

*   `i` para ' **i** nsert', esto cambia inmediatamente vim al modo de inserción
*   `a` para ' **a** ppend', esto mueve el cursor después del carácter actual y entra en el modo de inserción
*   `o` inserta una nueva línea debajo de la línea actual e ingresa al modo de inserción en la nueva línea

Estos comandos tienen una variedad mayúscula también:

*   `I` mueve el cursor al principio de la línea y entra en el modo de inserción
*   `A` mueve el cursor al final de la línea y entra en el modo de inserción
*   `O` inserta una nueva línea por encima de la actual e ingresa al modo de inserción en la nueva línea

Hay muchas más formas de insertar texto en Vim que no se pueden enumerar aquí. Pero estos son los más simples. Además, tenga cuidado de permanecer en el modo de inserción durante demasiado tiempo; Vim es no está diseñado para ser utilizado en el modo de inserción todo el tiempo.

Para salir del modo de inserción y volver al modo normal, presione `Esc` o `<C-[>`

### Modo visual

El modo visual se usa para hacer selecciones de texto, similar a cómo hacer clic y arrastrar con una el ratón se comporta La selección de texto permite que los comandos se apliquen solo a la selección, como copiar, borrar, reemplazar, y así sucesivamente.

Para hacer una selección de texto:

*   Presione `v` para ingresar al modo visual, esto también marcará un punto de selección inicial
*   Mueva el cursor al punto de selección final deseado; vim proporcionará un visual Lo más destacado de la selección de texto.

El modo visual también tiene las siguientes variantes:

*   `V` para ingresar al modo de línea visual, esto hará selecciones de texto por línea
*   `<CV>` para ingresar al modo de bloque visual, esto hará selecciones de texto por bloques; moviendo el El cursor hará selecciones rectangulares del texto.

Para salir del modo visual y volver al modo normal, presione `Esc` o `<C-[>` .

El modo visual en realidad tiene múltiples subtipos: _visual_ , _visual en_ _bloque y visual en_ _línea._

*   _visual_ : como se describe arriba. Ingresa presionando `v`
*   _Bloque visual_ : selecciona cualquier región rectangular. Ingresa presionando `<ctrl>+v`
*   _linewise-visual_ : siempre seleccione líneas completas. Entra presionando `<shift>+v`

### Modo de comando

El modo de comando tiene una amplia variedad de comandos y puede hacer cosas que el modo normal no se puede hacer tan fácilmente Para ingresar al modo de comando, escriba ':' desde el modo normal y luego escriba su comando que debe aparecer en la parte inferior de la ventana. Por ejemplo, para hacer un tipo global de búsqueda y reemplazo `:%s/foo/bar/g` para reemplazar todo 'foo' con 'bar'

*   `:` Ingresa al modo comando
*   `%` medias en todas las líneas
*   `s` sustituto de medios
*   `/foo` es regex para encontrar cosas para reemplazar
*   `/bar/` es regex para reemplazar cosas con
*   `/g` significa global, de lo contrario solo se ejecutaría una vez por línea

Vim tiene varios otros métodos que puedes leer en la ayuda. documentación `:h` o `:help` .

### Modo de reemplazo

El modo Reemplazar le permite reemplazar el texto existente escribiendo directamente sobre él. Antes de ingresar a este modo, ingrese al modo normal y coloque el cursor en la parte superior del primer carácter que desea reemplazar. Luego presione 'R' (mayúscula R) para entrar en modo de reemplazo. Ahora todo lo que escriba reemplazará el texto existente. los el cursor se mueve automáticamente al siguiente carácter al igual que en el modo de inserción. los La única diferencia es que cada carácter que escriba reemplazará al existente.