---
title: Split
localeTitle: División
---
# Apertura de archivos en Vim con Split

En Vim, los archivos se pueden abrir o `split` horizontal y verticalmente para crear una ventana o ventana adicional para un archivo determinado.

### Teclas de comando

Los comandos para crear una división horizontal:

: `[N]split` `[file]`

: `[N]sp` `[file]`

donde `sp` es la abreviatura corta para `split` .

Los comandos para crear una división vertical:

: `[N]vsplit` `[file]`

: `[N]vs` `[file]`

donde `vs` es la abreviatura corta de `vsplit` y ...

*   `[N]` es la altura (por defecto es la mitad de la ventana actual).
*   `[file]` es el archivo que se abrirá en la nueva ventana dividida (el archivo actual se usa si no hay ninguno).

### Ejemplos

Algunos ejemplos de usar split en Vim:

*   : `sp` Divide la ventana actual en ventanas horizontales iguales para el archivo actual.
*   : `10sp` la ventana actual creando una nueva ventana con altura 10 para el archivo actual.
*   : `sp` `index.html` Divide la ventana actual en ventanas horizontales iguales y abre `index.html` en la nueva ventana.
*   : `vs` `main.css` la ventana actual en ventanas verticales iguales y abre `main.css` en la nueva ventana.