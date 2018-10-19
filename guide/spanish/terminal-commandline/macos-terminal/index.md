---
title: Mac OS Terminal
localeTitle: Mac OS Terminal
---
# Usando el Terminal en Mac OS

La mayoría de las veces, los usuarios usan una interfaz gráfica de usuario para interactuar con la computadora. Utilizan el mouse para apuntar y hacen clic para abrir, mover o crear nuevos archivos o abrir aplicaciones. Pero, también pueden usar la aplicación Terminal para interactuar con su máquina a través de comandos escritos. Al usar el terminal, el usuario puede profundizar y personalizar su maquina de una manera que no es posible a través de la GUI.

### Abrir el Terminal y navegar por los directorios

La aplicación Terminal existe en el directorio de aplicaciones. Abra su aplicación Terminal. Debería de poder ver una linea de comandos en la ventana del Terminal. La linea de comandos debería tener el nombre de la computadora (`Macbook de ABC`), seguido del nombre de usuario (`ABC`) y luego un '`$`'. Si está en el directorio raíz, el último carácter será un '`#`'.

Para ver en qué directorio está trabajando, simplemente escriba el comando

`pwd`

pwd, por sus siglas en inglés "Print Working Directory", significa "Imprimir Directorio de Trabajo". Directorio es otra palabra para carpeta.

Si desea listar el contenido de su directorio, use el comando:

`ls`

Para cambiar a un nuevo directorio, use el comando:

`cd`

que significa cambio de directorio.

Aquí hay una lista de comandos comunes:

Comando | Uso 
------------ | -------------
`pwd` | Imprimir el directorio de trabajo (¿Dónde estoy?)
`ls` | Lista de contenidos del directorio actual.
`mkdir` | Crear un nuevo directorio
`touch` | Crear un nuevo archivo
`cp` | Copiar un archivo
`rm` | Eliminar un archivo
`rm -rf` | Eliminar un directorio

### Ejemplos de uso

Algunos de los comandos antes mencionados no están claros sin ejemplos. A continuación se muestran algunos ejemplos de uso para darle contexto a los comandos.

#### Crear un directorio

`mkdir EL-NOMBRE-DE-TU-NUEVA-CARPETA`

#### Crear un archivo

`touch EL-NOMBRE-DE-TU-ARCHIVO.JS`

Puedes hacer un archivo con cualquier extensión que elijas. Siempre y cuando este sea un formato aceptado por la carpeta o la máquina.

#### Copiando un archivo

Use la siguiente sintaxis para copiar un archivo desde el terminal:

**cp _destino de_ _origen_**

Por ejemplo, si tenemos un archivo, _'prueba.txt'_ que está almacenado en nuestro directorio _/ Escritorio y queremos copiarlo en la carpeta _/ Documentos_ , nuestro comando se vería así:
```
cp ~/Escritorio/test.txt ~/Documentos 
```

#### Borrando un archivo

Usa la siguiente sintaxis para borrar un archivo

**rm _#PATH_ TO _FILE_**
