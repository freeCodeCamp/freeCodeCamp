---
title: 10 Simple and Useful Linux Commands
localeTitle: 10 comandos de Linux simples y útiles
---
# 10 comandos de Linux simples y útiles

Los comandos que se enumeran aquí son básicos y lo ayudarán a comenzar rápidamente. Pero también son poderosos, y seguirán siendo útiles a medida tu experiencia en Linux se incremente.

1.  `echo` Este comando el texto que insertas y lo envía a una salida específica entre las cuales puede ser a la pantalla, a un archivo u otro comando. Ejemplo: `echo "hello!"`
2.  `cat` Sirve mostrar el contenido de un archivo de texto, por ejemplo, `cat myfile` te mostrará el contenido del archivo `myfile`.
3.  `find` Sirve para encontrar un archivo. Úsalo para localizar archivos por ruta, tamaño, fecha, propietario y un montón de otros filtros útiles. Ejemplo: `find . -type f -mtime -1h # Muestras los archivos en el Directorio actual que fueron modificados desde la última hora` .
4.  `date` Simplemente escriba este comando cuando desee saber la fecha y la hora actual. Ejemplo: `date "+It's %l:%m%p on %A"` . Este comando se puede usar en un script para nombrar archivos de acuerdo con la fecha actual.
5.  `ls` ¿Qué hay en este directorio? Combine `ls` con algunas Banderas (flags) útiles para mostrar y ordenar los contenidos del directorio por fecha y tamaño. También te da muchas opciones para proporcionar un orden del contenido a la salida.
6.  `pwd` ¿Donde estoy?. Linux puede ser implacable, especialmente cuando borras algo. Asegúrate de que sabes lo que estás haciendo antes de introducir tus comandos.
7.  El programa de `mail` del terminal Linux no es atractivo visualmente, pero puede ser realmente útil. Puede crear un mensaje y agregar texto, destinatarios y archivos adjuntos en un solo comando. Ejemplo: `echo "La estamos pasando geanial!." | mail -s "Deesaría que estuvieras aqui!!" -A postcard.png -t mom@example.com`
8.  `cut` Cuando tenga una cadena de caracteres contengan espacios entre palabras, usa `cut` para filtrar algunos campos entre la cadena de caracteres. Ejemplo: `echo "this, that, and the other" | cut -d, -f2 # "that"`
9.  `grep` sirve para encontrar líneas de texto que contengan una determinada cadena de caracteres. Por Ejemplo; `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
10.  `sed` Utilice sed para buscar y cambiar una subcadena de caracteres en un texto. Ejemplo: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
11.  `shutdown` se usa para apagar el sistema operativo. Ejemplo: `shutdown -h now` apaga el sistema inmediatamente. `shutdown -h +5` apaga el sistema después de cinco minutos.

Utilice estos comandos en scripts o en la línea de comandos. Todos son comandos muy poderosos, y la página del manual de Linux,  tiene mucha más información sobre cada uno. (recuerda que para acceder a manaul se usa el comando `man escribenombredelprograma`

* * *

Además, algunos de los comandos más importantes utilizados para los administradores del sistema son los siguientes:

1.  El comando de `uptime` En Linux, el comando uptime muestra cuánto tiempo se ha estado ejecutando su sistema operativo y la cantidad de usuarios que han iniciado sesión. También muestra la carga de uso promedio del sistema en intervalos de entre 1,5 y 15 minutos.
    
2.  El comando `w` Mostrará los usuarios que han iniciado sesión junto con la carga promedio que usan los procesos ejecutados por el usuario. También muestra el nombre de inicio de sesión, nombre de tty, host remoto, tiempo de inicio de sesión, tiempo de inactividad, JCPU, PCPU, los comandos y procesos.
    
3.  El comando de `users` muestra los usuarios actualmente conectados. Este comando no tiene otros parámetros aparte del  ayuda y versión.
    
4.  El comando `who` simplemente nos muestra el nombre de usuario, la fecha, la hora y la información del host con el que esta conectado la terminal. el cmoando `who` es similar al comando `w` con la única diferencia de este, no imprime lo que los usuarios están haciendo. COmo te ilustramos anteriormente estas son lad diferencias entre el comando `who` y `w`.
    
5.  El comando `whoami` imprime el nombre del usuario actual. También puede usar el comando `whoami` para mostrar el usuario actual. Si ha iniciado sesión como root (administrador), si utilizas el comando `sudo whoami,` te mostrará `root` como usuario actual. Use el comando `whoami` si desea conocer el usuario exacto que inició sesión.
    
6. El comando `ls` muestra la lista de archivos en formato legible para humanos.
    
7. El Comando `crontab` Listar trabajos de programación para el usuario actual con el comando crontab y la opción -l.
    
8. El comando `less` permite ver rápidamente el contenido de un archivo. Para subir o bajar la página, usa la tecla de direciones "arriba" o "abajo". Presiona 'q' para salir del documento y regresar a la consola de comandos.
    
9. El Comando `more` Un comando más permite ver rápidamente el contenido de un archivo muestra los detalles en porcentaje. usa la tecla de direciones "arriba" o "abajo". Presiona 'q' para salir del documento y regresar a la consola de comandos.
    
10. El comando `cp` copia un archivo desde el directorio origen al directorio destino conservando los mismos permisos.

11. El comando `systemctl`permite al administrador del sistema configurar los servicios que se inician. El uso común de este comando es `sudo systemclt [OPCIÓN] [NOMBREDELSERVICIO]` proveyendo una `[OPCIÓN]` (Ejemplo: `start`, `stop`,`status`) junto con el nombre del servicio. También puedes usar el comando para saber el estado general de los servicios cargados al inicio del sistema. Ten en cuenta que necesitas privilegios de administrador o usar los privilegios otorgados por el comando `sudo` para ejecutar el comando de manera correcta.

Aquí está la lista de comandos utilizados con frecuencia por un administrador. Esta lista no está completa, pero es una lista compacta de comandos para consultar cuando sea necesario.
