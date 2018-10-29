---
title: Mac OS Terminal
localeTitle: Mac OS Terminal
---
# Usando la Terminal en Mac OS

La mayoría de las veces, los usuarios interactúan a través de una interfaz gráfica de usuario para interactuar con la computadora. Utiliza el mouse para apuntar y hacer clic para abrir, mover o crear nuevos archivos o abrir aplicaciones. Pero, también puede usar la aplicación de terminal para interactuar con su máquina a través de comandos escritos. Cuando usa el terminal, le permite profundizar y personalizar de una manera que no es posible a través de la GUI.

### Abrir la terminal y navegar por los directorios

Su terminal existe en el directorio de aplicaciones. Abra su aplicación Terminal. Debería ver un aviso en la ventana del terminal. debería tener el nombre de la computadora (Macbook de ABC), seguido del nombre de usuario (ABC) y luego un '$'. Si está en el directorio raíz, el último carácter será un '#'.

Para ver en qué directorio está trabajando, simplemente escriba el comando

`pwd`

pwd significa "Directorio de trabajo de impresión". Directorio es otra palabra para carpeta.

Si desea listar el contenido de su directorio, use el comando:

`ls`

Para cambiar a un nuevo directorio, use el comando:

`cd`

que significa cambio de directorio.

Aquí hay una lista de comandos comunes:

Comando | Uso ------------ | ------------- pwd Imprimir el directorio de trabajo (¿Dónde estoy?) ls | Lista de contenidos del directorio actual. mkdir | Crear un nuevo directorio tocar | Crear un nuevo archivo cp | Copiar un archivo rm | Eliminar un archivo rm -rf | Eliminar un directorio

### Ejemplos de uso

Algunos de los comandos antes mencionados no están claros sin ejemplos. A continuación se muestran algunos ejemplos de uso para ayudarlo a proporcionarle algún contexto.

#### Hacer un directorio

`mkdir #YOUR-NEW-FOLDER-NAME-HERE`

#### Haciendo un archivo

`touch YOUR-FILE-NAME.JS`

Puedes hacer un archivo con cualquier extensión que elijas. Mientras esté en un formato aceptado por la carpeta o la máquina.

#### Copiando un archivo

Use la siguiente sintaxis para copiar un archivo desde el terminal:

**cp _destino de_ _origen_**

Por ejemplo, si tenemos un archivo, _'test.txt'_ que está almacenado en nuestro directorio _/ Desktop_ y queremos copiarlo en la carpeta _/ Documentos_ , nuestro comando se vería así:
```
cp ~/Desktop/test.txt ~/Documents 
```

#### Borrando un archivo

Usa la siguiente sintaxis para borrar un archivo

**rm _#PATH_ TO _FILE_**