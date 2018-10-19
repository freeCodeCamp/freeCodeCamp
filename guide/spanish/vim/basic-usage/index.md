---
title: Basic Usage
localeTitle: Uso básico
---
## Uso básico de VIM

### Abrir documento

*   Ejecute vim o vi y abra el nombre de archivo dado.

### Modo de inserción

*   Una vez que abra la página, ingrese I y verá el texto "Modo de inserción" en la parte inferior de la pantalla. Desde aquí puede realizar los cambios que desee en el texto de su archivo.

### Habilitar inserción comenzando en el siguiente carácter

*   a

### Habilitar inserción comenzando en la siguiente línea

*   o

### Reemplazar el carácter seleccionado

*   r

### Deshacer el último cambio

*   u

### Salir de modo de inserción
Es necesario presinar la tecla escape (ESC). 
*   ESC

### Ir al final del archivo

*   G

### Seleccionar una palabra a buscar
*   \#

La letra n permite ir a la siguiente palabra que sea idéntica a la palabra seleccionada, si la letra n es mayúscula la busqueda es en reversa.
*   n
*   N

### Guardar el archivo

*   : w

### Guardar y Salir

*   :X
*   SHIFT ZZ
*   : wq

### Salir del archivo si no hay cambios realizados

*   : q

### Salir del archivo y deshacer los cambios realizados

*   : q!

### Buscar una palabra
Debe de estar fuera de estado de inserción, despues escriber diagolar "/" seguida de la palabra a buscar

*   /palabra

### Substituir una cadena de carácteres
El comando debe comenzar con dos puntos s, seguido de dos palabras separadas por diagonales "/" la primera palabra es la que va a ser reemplazada por la segunda palabra, despues de el último diagonal, pueden agregar algunas propiedades, pero ejemplo: ignorar si mayúsculas o minusculas, otra opción es remplazar todas las palabras que sea igual a la palabra a buscar, por default solo la primera coincidencia será modificada.

*   :s/perro/gato/ig

### Mostrar números de línea

*   : set nu

### Mostrar números de línea

*   : set nu

### No mostrar números de línea

*   : set nonu

### Agregue color de sintaxis en función del lenguaje de programación utilizado

*   : sintaxis en

### Habilitar el cursor del mouse o ratón

*   : set mouse=a

### Abrir una nueva pestaña

*   : tabe nombre_del_archivo.txt


### Mover a la pestaña anterior

*   : tabp

### Mover a la pestaña siguiente

*   : tabn

## Acerca de Vim

Vim es el editor de texto que se usa básicamente en el modo CLI. Pero ahora el editor también está disponible en varias versiones. Allí tienen También GVIM que es la versión gráfica de VIM. vi fue el editor principal, luego se mejoró y lo llamó VI mejorado Vim.

vim cuenta con varios estados y dependiendo del estado las acciones a realizar difieren.
1. **Normal (default)**, permite ver el texto de un archivo y buscar alguna palabra.
2. **inserción**, permite editar un archivo, (agregar o borrar el contenido).
3. **Línea de comandos**, permite realizar acciones mas complejas como substituir, habilitar número de línea, entre otros. 
