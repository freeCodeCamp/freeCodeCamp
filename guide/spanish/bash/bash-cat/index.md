---
title: Bash Cat
localeTitle: Bash Cat
---
## Bash Cat

<code>cat</code> es uno de los comandos más utilizados en los sistemas operativos Unix.

<code>cat</code> se utiliza para leer un archivo de forma secuencial e imprimirlo en la salida estándar. El nombre se deriva de su función para con**cat**enar archivos.

### Uso

```bash
cat [opciones] [nombres_de_archivos] 
```

Opciones más utilizadas:

*   `-b` , número de líneas de salida no en blanco
*   `-n` , número de todas las líneas de salida
*   `-s` , suprime múltiples líneas en blanco adyacentes
*   `-v` , muestra caracteres ocultos, excepto los tabuladores y el carácter de final de línea

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
