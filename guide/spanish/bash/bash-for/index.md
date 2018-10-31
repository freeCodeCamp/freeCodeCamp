
---
title: Ciclo For
---

Los ciclos for se repiten en un conjunto de veces hasta que la lista de agota.

El siguiente ejemplo procesa los numeros del 1 hasta el 10 {1..10} y escribe su valor por la salida estantar.

```bash
for i in {1..10}
  do 
   echo "esta es la linea $i"
  done
```
Supongamos que tenemos el archivo lista.txt con los nombre de los paises en una linea abajo y deseamos listar cada nombre de pais en una linea.

Colombia Venezuela Brasil Argentina Panamá Bolivia Ecuador

Entonces, vamos a escribir el script de bash "lista_pais.sh":

```bash
#!/bin/bash
#El comando cat devuelve al ciclo for la lista de paises contenidos en el archivo lista.txt.
for i in $(cat lista.txt)               
 do
#mostramos por la salida estandar (monitor) los paises contenidos en la lista 
  echo "el nombre del pais es:$i"
 done
```

Si quisieramos escribir el ciclo for directamente en la interfaz de línea de comandos de bash lo hariamos de la siguiente forma agregando un simbolo de ";" despues de cada comando: 

```
$for i in $(cat lista.txt);do echo "el nombre del pais es:$i";done
```

###Mas Información Shell Script
