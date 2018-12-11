---
title: Basic Usage
localeTitle: Uso básico
---
## Uso básico de VIM

* Ademas de este documentacion, puede ingresar 'vimtutor' en el terminal para abrir un tutorial comprehensivo del uso de VIM. 

### Abrir documento

*   Ejecute vim o vi y abra el nombre de archivo dado.

### Modo de inserción

*   Una vez que abra la página, ingrese I y verá el texto "Modo de inserción" en la parte inferior de la pantalla. Desde aquí puede realizar los cambios que desee en el texto de su archivo.
*   Otra opcion para agregar texto es ingresar 'a' para entrar en el modo de insercion.
*   Ingrese 'o' para añadir una linea nueva debajo del cursor y entrar en el modo de insercion.
*   Ingrese 'O' para añadir una linea nueva arriba del cursor y entrar en el modo de insercion. 

### Regresar a modo 'normal'

*   Para escapar del modo de insercion o modo visual, use CTRL-C o <esc>. 

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

### Mostrar números de línea

*   : set nu

### No mostrar números de línea

*   : set nonu

### Agregue color de sintaxis en función del lenguaje de programación utilizado.

*   : sintaxis en

## Acerca de Vim

Vim es el editor de texto que se usa básicamente en el modo CLI. Pero ahora el editor también está disponible en varias versiones. Allí tienen También GVIM que es la versión gráfica de VIM. vi fue el editor principal, luego se mejoró y lo llamó VI mejorado Vim.
