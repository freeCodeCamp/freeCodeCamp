---
title: touch
---
       touch - modifica la marca de tiempo de un archivo.
       
```
       touch [OPCIONES]... ARCHIVO...
```
**DESCRIPCION**
       Actualiza el tiempo de acceso y modificacion de cada uno de los archivos a la fecha actual.

       Si se pasa el argumento ARCHIVO y este no existe, entonces es creado un archivo vacio, unless -c  or  -h
       is supplied.

       **OPCIONES**

       -a     cambia unicamente el tiempo de acceso

       -c, --no-create
              no crea el archivo

       -d, --date=CADENADETEXTO
              la CADENADETEXTO pasada es usada en vez de la feca actual.

       -t STAMP
              usa [[CC]YY]MMDDhhmm[.ss] en vez de la fecha actual
              
              
 ```
 Ejemplo:
 $touch nombrearchivo
 ```
 Si el archivo "nombrearchivo" no existe crear uno vacio, sino actualiza la marca de tiempo del archivo a la fecha actual.


###**Mas informacion**

       [Documentacion completa en](http://www.gnu.org/software/coreutils/touch)
