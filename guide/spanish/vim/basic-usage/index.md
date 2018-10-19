---
title: Basic Usage
localeTitle: Uso básico
---
## Uso básico de VIM

### Abrir documento

Ejecute `vim` o `vi` y abra el nombre de archivo dado.

En modo terminal esto se realiza tal cómo:

```
$~ # abrir un documento
$~ vim fichero_a_editar.txt
```
La siguiente captura de pantalla muestra a Vim una vez iniciado en el terminal.

[Pantalla de bienvenida en Vim](vim_basic_001.png)

### Modo de inserción

Una vez en Vim, teclear `i` (el texto `i` aparecera en la esquina inferior-izquierda) y pulsar "retorno". Esto ingrea en el _modo de inserción_ (aparecera el texto `--INSERT--` en la esquina inferor-izquierda). A partir de aqui, se puedenn realizar los cambios deseados en el contenido del fichero.

Para salir del _modo de inserción_ basta con pulsar la tecla escape (`ESC`).

### Guardar el archivo

Una vez fuera del _modo de inserción_ introducir el comando `:w` permite guardar los cambios en el fichero. 

* `:w`

Si en vez de abrir un fichero hemos abierto Vim y hemos creado un fichero desde zero, el comando debe incluir el nombre a dar al nuevo fichero.

* `:w nombre_fichero.txt`

### Salir del archivo y deshacer los cambios realizados

Para cerrar Vim basta con usar el comando `:q!`. Si se han realizado cambios en el fichero, estos no seran guardados.

### Salir del archivo si no hay cambios realizados

Para cerrar Vim basta con usar el comando `:q`.

### Salir del archivo y guardar los cambios realizados

El comando `:x` permite guardar los cambios y cerrar `Vim` de manera directa (se trata de un atajo del comando `:wq` que une `:w` con `:q`). Al igual que con el comando `:x`, al crear un fichero nuevo se debe incluir el nombre a dar al nuevo fichero.

### Mostrar números de línea

* `:set number`

### No mostrar números de línea

* `: set nonumber`

### Agregue color de sintaxis en función del lenguaje de programación utilizado.

* `: sintaxis en`
