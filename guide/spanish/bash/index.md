---
title: Bash
localeTitle: Golpetazo
---
## ¿Qué es Bash?

Bash (abreviatura de Bourne Again SHell) es un shell de Unix y un intérprete de lenguaje de comandos. Un shell es simplemente un procesador de macros que ejecuta comandos. Es el shell más utilizado de forma predeterminada en la mayoría de las distribuciones de Linux, y un sucesor para el shell Korn (ksh) y el shell C (csh).

Muchas cosas que se pueden hacer con el sistema operativo Linux se pueden hacer a través de la línea de comandos. Algunos ejemplos son…

*   Editando archivos
*   Ajuste del volumen del sistema operativo.
*   Obtención de páginas web desde internet.
*   Automatiza el trabajo que haces todos los días.

Puede leer más sobre bash [aquí](https://www.gnu.org/software/bash/) , a través de la [Documentación GNU](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents) , y a través de la [guía tldp](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10) .

## Usando bash en la línea de comando (Linux, OS X)

Puede comenzar a usar bash en la mayoría de los sistemas operativos Linux y OS X abriendo un terminal. Consideremos un ejemplo simple de hola mundo. Abra su terminal y escriba la siguiente línea (todo después del signo $):
```
zach@marigold:~$ echo "Hello world!" 
 Hello world! 
```

Como puede ver, usamos el comando echo para imprimir la cadena "¡Hola mundo!" a la terminal.

## Escribiendo un guión de bash

También puede poner todos sus comandos de bash en un archivo .sh y ejecutarlos desde la línea de comandos. Digamos que tienes un script de bash con los siguientes contenidos:
```
#!/bin/bash 
 echo "Hello world!" 
```

Vale la pena señalar que la primera línea del script comienza con `#!` . Es una directiva especial que Unix trata de manera diferente.

#### ¿Por qué usamos #! / Bin / bash al principio del archivo de script?

Esto se debe a que es una convención que permite a la shell interactiva saber qué tipo de intérprete debe ejecutar para el programa que sigue. La primera línea le dice a Unix que el archivo debe ser ejecutado por / bin / bash. Esta es la ubicación estándar del shell Bourne en casi todos los sistemas Unix. Al agregar #! / Bin / bash como la primera línea de su script, se le indica al sistema operativo que invoque el shell especificado para ejecutar los comandos que siguen en el script. `#!` a menudo se le conoce como "hash-bang", "she-bang" o "sha-bang". Aunque solo se ejecuta si ejecuta su script como un ejecutable. Por ejemplo, cuando escribe `./scriptname.extension` , buscará en la línea superior el intérprete, mientras que, al ejecutar el script como `bash scriptname.sh` , se ignora la primera línea.

Entonces podrías ejecutar el script así: Para hacer el archivo ejecutable, debe llamar a este comando bajo sudo chmod + x "nombre de archivo".
```
zach@marigold:~$ ./myBashScript.sh 
 Hello world! 
```

El script solo tiene dos líneas. El primero indica qué intérprete usar para ejecutar el archivo (en este caso, bash). La segunda línea es el comando que queremos usar, echo, seguido de lo que queremos imprimir, que es "Hola Mundo".

A veces, la secuencia de comandos no se ejecutará y el comando anterior devolverá un error. Es debido a los permisos establecidos en el archivo. Para evitar ese uso:
```
zach@marigold:~$ chmod u+x myBashScript.sh 
```

\` Y luego ejecutar el script.

### Más información:

*   Wikipedia: https://en.wikipedia.org/wiki/Bash _(_ shell de _Unix_ )
*   tldp.org Guide to Bash: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2
*   gnu.org Bash manual: https://www.gnu.org/software/bash/manual/html _node / index.html # SEC_ Contents
*   Tutorial de shell scripting para comenzar: https://www.shellscript.sh/