---
title: Bash Cat
localeTitle: Bash Cat
---
## Bash cat


El comando cat es uno de los más utilizados en sistemas Unix.

Usaremos el comando ```cat``` para leer un archivo de forma secuencial e imprimirlo en la salida estándar(normalmente la pantalla). El nombre de este comando deriva de su función para con**cat**enar archivos.

### Uso

```bash
cat [opciones] [nombre_del_fichero] 
```

Opciones más utilizadas:

*   `-b` , número de líneas de salida que no esten vacias
*   `-n` , muestra los numeros de linea
*   `-s` , comprime múltiples líneas en blanco adyacentes de manera que no quedan multiples espacios.
*   `-v` , muestra caracteres no imprimibles como retorno de carro o salto de linea, excepto las pestañas y el carácter de final de línea.

### Ejemplo

Imprimir en la terminal el contenido de file.txt:

```bash
cat file.txt 
```

Concatenar el contenido de los dos archivos mostrando el resultado en la terminal:

```bash
cat file1.txt file2.txt 
```

#### Más información:

*   Wikipedia: https://en.wikipedia.org/wiki/Cat\_(Unix)
