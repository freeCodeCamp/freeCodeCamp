---
title: 10 Simple and Useful Linux Commands
localeTitle: 10 comandos de Linux simples y útiles
---
# 10 comandos de Linux simples y útiles

Los comandos que se enumeran aquí son básicos y lo ayudarán a comenzar rápidamente. Pero también son poderosos, y seguirán siendo útiles a medida que se expanda su experiencia en Linux.

1.  `echo` Esto toma el texto que le das y lo envía a algún lugar: para volver a la pantalla, a un archivo u otro comando. Ejemplo: `echo "hello!"`
2.  `cat` Para mostrar el contenido de un archivo de texto, simplemente escriba `cat myfile` .
3.  `find` hace lo que dice, y es bueno en eso. Úselo para localizar archivos por ruta, tamaño, fecha, propietario y un montón de otros filtros útiles. Ejemplo: `find . -type f -mtime -1h # List files in this directory modified in the past hour` .
4.  `date` Simplemente escriba fecha cuando desee saber qué hora es. Ejemplo: `date "+It's %l:%m%p on %A"` . Úselo en un script para nombrar archivos de acuerdo con la fecha actual.
5.  `ls` ¿Qué hay en este directorio? Combine `ls` con algunas marcas útiles para mostrar y ordenar los contenidos del directorio por fecha y tamaño. También te da muchas opciones para formatear la salida.
6.  `pwd` donde estoy Linux puede ser implacable, especialmente cuando borras algo. Asegúrese de que sabe antes de emitir sus comandos.
7.  El programa de `mail` Linux no es atractivo, pero puede ser realmente útil. Puede crear un mensaje y agregar texto, destinatarios y archivos adjuntos en un solo comando. Ejemplo: `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
8.  `cut` Cuando tenga una cadena con separadores, use `cut` para filtrar ciertos campos. Ejemplo: `echo "this, that, and the other" | cut -d, -f2 # "that"`
9.  `grep` Para encontrar líneas de texto que contengan una determinada cadena, usa grep. Ejemplo: `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
10.  `sed` Utilice sed para buscar y cambiar una subcadena en un texto. Ejemplo: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
11.  `shutdown` uso apagar el sistema y apagar la alimentación. Ejemplo: `shutdown -h now` apaga el sistema inmediatamente. `shutdown -h +5` apaga el sistema después de cinco minutos.

Utilice estos comandos en scripts y en la línea de comandos. Todos son comandos muy poderosos, y la página del manual de Linux tiene mucha más información sobre cada uno.

* * *

Además, los comandos importantes utilizados para los administradores del sistema son los siguientes:

1.  Comando de `uptime` En Linux, el comando uptime muestra cuánto tiempo se está ejecutando su sistema y la cantidad de usuarios que han iniciado sesión y también muestra el promedio de carga para intervalos de 1,5 y 15 minutos.
    
2.  comando `w` Mostrará los usuarios que han iniciado sesión y su proceso junto con los promedios de carga. también muestra el nombre de inicio de sesión, nombre de tty, host remoto, tiempo de inicio de sesión, tiempo de inactividad, JCPU, PCPU, comando y procesos.
    
3.  comando de `users` El comando de usuarios muestra usuarios actualmente conectados. Este comando no tiene otros parámetros aparte de la ayuda y la versión.
    
4.  `who` manda quién comando simplemente devuelve el nombre de usuario, la fecha, la hora y la información del host. who command es similar a w command. A diferencia de w, el comando no imprime lo que hacen los usuarios. Permite ilustrar y ver los diferentes comandos de who y w.
    
5.  Comando `whoami` El comando whoami imprime el nombre del usuario actual. También puede usar el comando "quién soy yo" para mostrar el usuario actual. Si ha iniciado sesión como root, utilice el comando sudo "whoami" y devuelva root como usuario actual. Use el comando "quién soy yo" si desea conocer el usuario exacto que inició sesión.
    
6.  `ls` comando El comando ls muestra la lista de archivos en formato legible por humanos.
    
7.  Comando `crontab` Listar trabajos de programación para el usuario actual con el comando crontab y la opción -l.
    
8.  `less` Comando menos comando permite ver rápidamente el archivo. Puedes subir y bajar la página. Presione 'q' para salir de la ventana inferior.
    
9.  `more` Comando Un comando más permite ver rápidamente el archivo y muestra los detalles en porcentaje. Puedes subir y bajar la página. Presione 'q' para salir de más ventana.
    
10.  Comando `cp` Copie el archivo desde el origen al destino conservando el mismo modo.
    

Aquí está la lista de comandos utilizados con frecuencia por un eliminador. Esto no es una completa, pero es una lista compacta de comandos para consultar cuando sea necesario.