---
title: Writing a Bash Script
localeTitle: Escribiendo un guión de Bash
---
# Escribiendo un guión de Bash

Al escribir comandos en la línea de comandos de Linux, puede dar instrucciones al servidor para que realice algunas tareas simples. Como el infierno El script es una forma de armar una serie de instrucciones para hacer esto más fácil. Los scripts de shell se vuelven aún más poderosos cuando agrega lógica como `if` y `while` para controlar automáticamente cómo se comportan a medida que cambian las circunstancias.

## ¿Qué es Bash?

Bash es el nombre de un intérprete de línea de comandos, un programa que da sentido a los comandos de Linux que ingresas al comando o en su guión.

## ¿Qué hay en un script?

Un script es solo un archivo. Un script básico se compone de una línea introductoria que le dice al servidor qué hacer con él, y uno o mas instrucciones para ejecutar. Aquí hay un ejemplo:
```
#!/bin/bash 
 echo "Hi. I'm your new favorite bash script." 
```

La primera línea tiene un significado especial, que discutiremos más adelante. La segunda línea es solo un comando de Linux, uno que podría escribir en la línea de comandos.

## ¿Qué es un comentario?

Los comentarios son texto que agregas a tu script y que pretendes que bash ignore. Los comentarios comienzan con un signo de libra y son útiles para anotando su código para que usted y otros usuarios puedan entenderlo. Para agregar un comentario, escriba el carácter `#` , seguido de cualquier texto eso te ayuda Bash ignorará el `#` y todo después de él.

**Nota:** la primera línea del script no es un comentario. Esta línea siempre es la primera, siempre comienza con `#!` y tiene especial lo que significa golpear.

Aquí está el guión de antes, comentó:
```
#!/bin/bash # Designates the path to the bash program. Must start with '#!' (but isn't a comment). 
 echo "Hi. I'm your new favorite bash script." # 'echo' is a program that sends a string to the screen. 
```

## Ejecutando un Script

Puedes abrir un editor de texto, pegar ese código de ejemplo y guardar el archivo, y tienes un script. Los scripts son convencionalmente cuyo nombre termina en '.sh', por lo que puede guardar ese código como myscript.sh.

El script no se ejecutará hasta que hagamos 2 cosas:

**Primero, hazlo ejecutable.** (Solo tendremos que hacer esto una vez.) Linux se basa ampliamente en los permisos de archivos. Ellos determinan mucho sobre cómo se comporta su servidor. Hay mucho que saber sobre permisos, pero por ahora solo necesitamos saber esto: no puede ejecutar su script hasta que se dé permisos de ejecución. A hacer eso, escriba:

`chmod +x my script.sh`

**Segundo, ejecútalo.** Ejecutamos el script desde la línea de comandos como cualquier otro comando como `ls` o `date` . La secuencia de comandos name es el comando, y debe precederlo con un './' cuando lo llame:

`./myscript.sh # Outputs "Hi. I'm your new favorite bash script." (This part is a comment!)`

## Condicionales

A veces quieres que tu script haga algo solo si otra cosa es cierta. Por ejemplo, imprima un mensaje solo si un valor es por debajo de un cierto límite. Aquí hay un ejemplo de usar `if` para hacer eso:
```
#!/bin/bash 
 
 count=1 # Create a variable named count and set it to 1 
 
 if [[ $count -lt 11 ]]; then # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block. 
    echo "$count is 10 or less" # This will print, because count = 1. 
 fi # Every if ends with fi 
```

De manera similar, podemos organizar el script para que ejecute una instrucción solo mientras algo sea verdadero. Cambiaremos el código para que el valor de la variable de cuenta cambia:
```
#!/bin/bash 
 
 count=1 # Create a variable named count and set it to 1 
 
 while [[ $count -lt 11 ]]; do # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block. 
    echo "$count is 10 or less" # This will print as long as count <= 10. 
    count=$((count+1)) # Increment count 
 done # Every while ends with done 
```

La salida de esta versión de myscript.sh se verá así:
```
"1 is 10 or less" 
 "2 is 10 or less" 
 "3 is 10 or less" 
 "4 is 10 or less" 
 "5 is 10 or less" 
 "6 is 10 or less" 
 "7 is 10 or less" 
 "8 is 10 or less" 
 "9 is 10 or less" 
 "10 is 10 or less" 
```

## Guiones del mundo real

Estos ejemplos no son terriblemente útiles, pero los principios son. Usando `while` , `if` y cualquier comando que de otro modo podría escribir manualmente, puede crear scripts que hacen un trabajo valioso.