---
title: Basic Linux Commands
localeTitle: Comandos básicos de Linux
---
## Comandos básicos de Linux

Al comenzar con Linux, hay algunos comandos básicos que todos deben conocer. Probablemente el comando mas importante es `man`, el cual te muestra el funcionamiento, opciones y parametros de los diferentes comandos. La sintaxis para usarlo es la siguiente:
Si se quiere conocer el funcionamiento de el comando `cd` utilizamos `man cd` para que nos muestre el manual.

1.  **cd** - cambiar directorio

*   cd seguido de una ruta de directorio o archivo lo llevará dentro de ese directorio (carpeta).

1.  **ls** - comando de lista

*   Escriba `ls` y se mostrarán los contenidos del directorio actual.

1.  **man** - comando manual

*   Te muestra el manual para el siguiente comando. Esto es muy útil cuando se trata de averiguar cómo funciona un comando desconocido. Por ejemplo, escriba `man ls` para todo lo que necesita saber sobre el comando ls. Teclea `q` para salir.

1.  **pwd** - camino

*   Escriba `pwd` para mostrar la ruta a su directorio actual.

1.  **mkdir** - hacer directorio

*   Este comando, seguido del nombre que desea nombrar en su directorio, crea un nuevo directorio. `mkdir folder1` creará un nuevo directorio llamado folder1.

1.  **rmdir** - eliminar directorio

*   Elimina el directorio que sigue al comando. `rmdir folder1` eliminará el directorio llamado folder1 si existe.

1.  **rm** - remover

*   Este comando elimina archivos, no directorios. `rm file.txt` eliminará el archivo llamado file.txt mientras exista y se encuentre en el directorio actual.

1.  **touch** - crea un archivo

*   El comando `touch` se utiliza para crear un archivo. Puede ser cualquier cosa, desde un archivo txt vacío a un archivo zip vacío. 'touch new.txt' creará un nuevo archivo con el nombre nuevo.

1.  **mv** - mover

*   Utilice el comando `mv` para mover archivos a través de la línea de comandos. También podemos usar el comando `mv` para renombrar un archivo. Por ejemplo, si queremos cambiar el nombre del archivo "texto" a "nuevo", podemos usar 'mv texto nuevo'.

1.  **click-derecho** - copiar y pegar

*   Este no es comando, se refiere al click derecho del mouse. Es muy útil para hacer casi cualquier cosa en un terminal en Linux. Para comenzar, resalta el texto y luego haz click con el botón derecho en su mouse para copiar una selección. Deberías ver que la parte resaltada no está resaltada, esto significa que copió la selección. Ahora haz click derecho en el lugar donde desees pegar la selección y listo.

1.  **less** - ver el contenido del archivo

*   Usa `less filename.txt` para ver el contenido de un archivo y navegar a través de ellos. Por defecto, `less` irá a través del archivo página a página.

## Comandos básicos para diagnostico de redes en Linux
- `ifconfig` - Es util para configurar los parametros de la interfaz de redes
- `traceroute` - Muestra la ruta que los paquetes de datos utilizan para llegar al destino. El IP destino es un parametro necesario para este comando
- `dig` - Se utiliza para saber el nombre de los servidores DNS
- `telnet` - Utiliza el protocolo telnet y es util para establecer una conexion entre dos servidores o hosts
- `netstat` - Muestra informacion acerca de las conexiones de red y de los puertos abiertos
