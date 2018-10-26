---
title: Bash Cat
localeTitle: Bash Cat
---
## Bash Cat

Cat es uno de los comandos más utilizados en los sistemas operativos Unix.

Cat se utiliza para leer un archivo de forma secuencial e imprimirlo en la salida estándar. El nombre se deriva de su función a los archivos Enate con **gato.**

### Uso

```bash
cat [options] [file_names] 
```

Opciones más utilizadas:

*   `-b` , número de líneas de salida no en blanco
*   `-n` , `-n` todas las líneas de salida
*   `-s` , exprime múltiples líneas en blanco adyacentes
*   `-v` , muestra caracteres no imprimibles, excepto las pestañas y el carácter de final de línea

### Ejemplo

Imprimir en la terminal el contenido de file.txt:

```bash
cat file.txt 
```

Concatene el contenido de los dos archivos y muestre el resultado en el terminal:

```bash
cat file1.txt file2.txt 
```

#### Más información:

*   Wikipedia: https://en.wikipedia.org/wiki/Cat\_(Unix)