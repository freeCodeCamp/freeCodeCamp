---
title: Discard Unstaged Changes in Git
localeTitle: Descartar cambios sin etapas en Git
---
Al usar Git, es común realizar cambios que desea eliminar por completo antes de la fase de preparación. Por ejemplo, después de trabajar en algunos archivos, se da cuenta de que desea revertir los cambios realizados en un archivo específico. Para descartar los cambios antes de poner en escena y confirmar, use el comando `$ git checkout` .

## Para descomponer un archivo:

`$ git checkout <path-to-file>`

_Recuerde reemplazar `<path-to-file>` con el nombre del archivo real._

## Para descomponer todos los archivos:

`$ git checkout -- .`