---
title: Basic Linux Commands
localeTitle: Comandos básicos de Linux
---
## Comandos básicos de Linux

Al comenzar con Linux, hay algunos comandos básicos que todos deben conocer.

1.  **cd** - cambiar directorio

*   cd seguido de una ruta de directorio o archivo lo llevará dentro de ese directorio (carpeta).

2.  **ls** - comando lista del directorio

*   Escriba `ls` y se mostrarán los contenidos del directorio actual.

3.  **man** - comando manual

*   Te muestra el manual para el siguiente comando. Esto es muy útil cuando se trata de averiguar cómo funciona un comando desconocido. Por ejemplo, escriba `man ls` para todo lo que necesita saber sobre el comando ls. Teclea `q` para salir.

4.  **pwd** - Mostrar ruta actual

*   Escriba `pwd` para mostrar la ruta a su directorio actual.

5.  **mkdir** - Crear Carpeta o Directorio

*   Este comando, seguido del nombre que desea nombrar en su directorio, crea un nuevo directorio. `mkdir folder1` creará un nuevo directorio llamado `folder1`.

6.  **rmdir** - eliminar Carpeta o Directorio

*   Elimina el directorio o la Carpeta que sigue al comando. `rmdir folder1` eliminará el directorio llamado folder1 si existe.

7.  **rm** - eliminar archivo

*   Este comando elimina archivos, no directorios. `rm file.txt` eliminará el archivo llamado file.txt mientras exista y se encuentre en el directorio actual.

8.  **touch** - crea un archivo.

*   El comando `touch` se utiliza para crear un archivo. Puede ser cualquier cosa, desde un archivo txt vacío a un archivo zip vacío. 'touch new.txt' creará un nuevo archivo con el nombre nuevo.

9.  **mv** - mover o renombrar un archivo.

*   Utilice el comando mv para mover archivos a través de la línea de comandos. También podemos usar el comando mv para renombrar un archivo. Por ejemplo, si queremos cambiar el nombre del archivo "texto" a "nuevo", podemos usar 'mv texto nuevo'.

10.  **clic derecho** - copiar y pegar

*   Este es un comando menos y más práctico, sin embargo, es muy útil para hacer casi cualquier cosa en un terminal en Linux. Para comenzar, resalte el texto como normal y luego haga clic con el botón derecho en su mouse para copiar una selección. Debería ver que la parte resaltada no está resaltada, esto significa que copió la selección. Ahora haga clic derecho en el lugar donde desea pegar la selección y listo.

11.  **less** - ver el contenido del archivo

*   Use `less filename.txt` para ver el contenido de un archivo y navegar a través de ellos. Por defecto, menos irá a través del archivo página a página.

12. **cat** - Muestra el contenido de un archivo de texto  
- Use este comando para acceder al contenido de un archivo de texto en una terminal. Insertando el comando `cat myFile.txt`, te mostraá el contenido del el archivo `myFile.txt` en la pantalla. El commando `cat` viene a ser una herramienta muy util cuando se utiliza con _pipes_.

 13. **clear** - Limpia la pantalla de la  terminal
- Usa el comando `clear` para limpiar todas las salidas de la ejecución de los commandos en la terminal.

 14. **cp** - copiar archivos y directorios
- Usa el commando `cp` para copiar un archivo o un directorio with archivos en su interios hacia otra lugar usando el comando 'cp CURRENT_FILE-LOCATION DESTINATION_FOLDER'. agrega el flag (bandera) '-r' para copiar un directorio que no esta vacio. 

15. **grep** -  El comando `grep` busca la salida a cualquier archivo dado seleccionando las lineas que coincidan con uno o mas patrones de busqueda.
- Usa el comando `grep` para encontrar un archivo, un directorio o algún texto dentro de un directorio o archivo.  
**Ejemplo:**
```sh
 $ ps ax | grep -w login
 25291 s000  Ss     0:00.11 login -pf <user>
 25467 s000  R+     0:00.00 grep -w login
 25409 s004  Ss     0:00.04 login -pf <user>
```

 15. **df -h** Muestra el espacio en la unidades de almacenamiento del equipo y los muestra en un formato legible para el ser humano.
- Muestra el tañamo, la cantidad de espacio usado, la cantidad de espacio disponible y la capacidad en porcentaje de las unidades o particiones montadas.


### Recursos útiles para practicar. 
- [JSLinux](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg): Corre una terminal dentro de tu navegador favorito. Muy útil para practicar comandos.
- [LearnShell](https://www.learnshell.org/): Tutorial interactivo para paracticar los comandos de un terminal.
- [LinuxJourney](https://linuxjourney.com/lesson/the-shell): Una colección de tutoriales amigables para principiantes.
