---
title: Partitions
localeTitle: Particiones
---## PARTICIONES

*   Sin crear particiones en el disco duro, no podemos crear carpetas.
    
*   Particiones en Linux-
    
    *   **df**
    *   **df -h** (legible por humanos)
*   Muestra tamaño en MiB, GiB
    
*   **lvdisplay**
    
*   Muestra información sobre la partición del disco -
    
*   **fdisk -l**
    
*   **fdisk -l / dev / sda** (sda es el nombre del disco duro)
    
*   Para practicar la partición, inserte el disco duro virtual en Linux usando virtual-box.
    
*   Algunos puntos para recordar
    
*   El disco duro no entiende GB o MB, su unidad es sector.  
    1 sector = 512 bytes.  
    Para encontrar el tamaño real del disco duro, busque el número de sectores \* 512.  
    Asigna espacio en disco duro en sectores.
    
*   Solo se pueden crear 4 particiones en un solo disco duro.
    

  

## HACIENDO PARTICIONES EN DISCO DURO

1.  Abre el indicador de disco duro.
    
    *   **fdisk / dev / sdb**
2.  Imprimir información de particiones del disco duro.
    
    *   **pag**
3.  Crear una nueva partición.
    
    *   **norte**
4.  Elija la partición primaria.
    
5.  Presione 1 (1ra partición)
    
6.  Inicial algunos sectores (0-2047 = 2048 sectores = 1 MB) están reservados en el disco duro.
    
7.  El espacio real comienza con el sector 2048.
    
8.  **\+ 1G**
    
9.  Crea 4 particiones como esta.
    
10.  Después de la 4ta partición no puedes crear más particiones.
    
11.  Presione **w** para guardar.
    
12.  Presione **q** para salir sin guardar ninguna partición. Esto eliminará todas las particiones hechas porque eso fue temporal.
    
13.  Para borrar partición -
    
    *   **re**

  

## ¿POR QUÉ HAY LÍMITE DE 4?

*   Porque donde almacenamos la información de particiones, metadatos de particiones, es fija y de 64 bytes. Esta información se almacena en la tabla de particiones.
*   Se requiere 1 partición de 16 bytes, por lo que solo se pueden crear 4 particiones.
*   En 1 MB (2048 sectores) reservado en disco duro, 64 bytes están reservados para almacenar esta información.
*   Para ver la tabla de particiones-
*   **fdisk -l**
*   Cuando usamos el disco duro por primera vez, se inicializa o formatea. Ese formato decide el número de particiones en el disco duro.
*   El sistema operativo crea un formato de disco duro cuando se inicializó por primera vez y ese formato decide la cantidad de particiones.
*   El formato de partición que utilizamos es formato DOS = 64 bytes.
*   Formato GPT = Se pueden crear 128 particiones.
*   Tabla de particiones -> formato: DOS -> 4 particiones
*   Tabla de particiones -> formato: GPT -> 128 particiones

  

## AUMENTO DEL NÚMERO DE PARTICIONES

*   Crear una nueva tabla de particiones en el disco duro.
    
*   La partición P4 se creará de tal manera que sea un disco duro separado.
    
*   Esta partición es una partición extendida en la que podemos crear más particiones.
    
*   La partición lógica ocupa espacio en la partición extendida. La información o la tabla de particiones se almacenarán en la partición extendida.
    
*   Crear 3 particiones primarias y 1 última extendida.
    
*   Total 64 particiones se pueden hacer ahora. 3 primarias + 60 lógicas + 1 extendida.
    
*   Pero se pueden usar 63 particiones para el almacenamiento de datos (eliminar 1 partición extendida).
    
*   No hay diferencia entre la partición primaria y la lógica, excepto que nadie controla la primaria, pero la lógica se controla mediante la extensión. Entonces, si eliminamos la partición extendida, todas las particiones lógicas serán eliminadas.
    
*   Para ver información de particiones -
    
*   **lsblk** (lista de dispositivos de bloque)
    
*   El disco duro también se conoce como dispositivos de bloque.
    
*   La partición extendida no se puede usar para el almacenamiento de datos, solo se puede usar la lógica y la primaria
    
*   Si la partición debe usarse para almacenamiento, siga estos 3 pasos:
    

1.  Crear partición física.
2.  Formatearlo
3.  Activar / montar.

  

## FORMACIÓN DE FORMATO

*   La partición debe crear un índice para cada archivo nuevo para un procesamiento más rápido.
    
*   Siempre que se abra un archivo, busque ese archivo en el índice.
    
*   Este índice se forma en la partición cuando se formatea por primera vez. También se le llama sistema de archivos.
    
*   Esta tabla de índice se conoce como tabla de inodo (nodo de índice).  Por lo tanto, cada partición tiene que ser formateada.
    
*   El sistema operativo solo lee la tabla de inodos para mostrar los tamaños de carpetas, archivos, unidades, etc.
    
*   Esta tabla de inodo se puede cambiar, luego el sistema operativo mostrará diferentes tamaños y luego el tamaño real.
    
*   Cuando eliminamos un archivo, solo elimina la entrada de inodo de ese archivo.
    
*   Por ejemplo, elimine un archivo de tamaño 1GB y 100 GB, el tiempo será el mismo.
    
*   Cuando formateamos una partición, solo elimina la página de índice, los datos no se eliminarán. Entonces, podemos recuperar datos de esa partición.
    
*   El sistema de archivos crea una tabla de inodos para gestionar archivos.
    
*   Para formatear la partición -
    
*   **mkfs.ext4 / dev / sdb1**
    
*   Ejemplo: NTFS, ext2, ext3, ext4, xfs, etc.
    

  

## Montaje o activación

*   Solo se pueden usar dos tipos de cosas en un sistema operativo: archivo y carpeta
    
*   No podemos ir directamente en un dispositivo. Por lo tanto, el dispositivo creado debe convertirse en una carpeta O vincular con una carpeta O montar con una carpeta para poder usar esto.
    
*   **mkdir / datos**
    
*   **mount / dev / sdb1 / data** (estos datos son como un montaje de unidad de lápiz y desmontaje)
    
*   **cd / datos**
    
*   **gato> adarsh.txt**
    
*   **umount / dev / sdb1**
    
*   **cd / datos /**
    
*   **ls**
    
*   Montar de nuevo
    
*   Para saber sobre qué partición está montada en qué carpeta.
    
*   **df -h**
    
*   Muestra tabla de inodo.
    
*   **ls -l**
    
*   Muestra el número de inodo.
    
*   ls -il