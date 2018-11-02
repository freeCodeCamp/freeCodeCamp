---
title: Bash Head
localeTitle: Bash Head
---
## Bash command: head

Head se utiliza para imprimir las primeras diez líneas (de forma predeterminada) o cualquier otra cantidad especificada de un archivo o archivos. Cat se utiliza para leer un archivo de forma secuencial e imprimirlo en la salida estándar. es decir, imprime todo el contenido de todo el archivo. - eso no siempre es necesario, tal vez solo desee verificar el contenido de un archivo para ver si es el correcto, o verificar que no esté vacío. El comando head le permite ver las primeras N líneas de un archivo.

si se llama a más de un archivo, se muestran las primeras diez líneas de cada archivo, a menos que se especifique un número específico de líneas. Elegir mostrar el encabezado del archivo es opcional usando la opción a continuación

### Uso

```bash
head [options] [file_name(s)] 
```

Opciones más utilizadas:

*   `-n N` , imprime las primeras N líneas del archivo (s)
*   `-q` , no imprime los encabezados del archivo
*   `-v` , siempre imprime los encabezados de archivo

### Ejemplo

```bash
head file.txt 
```

Imprime en la terminal las primeras diez líneas de file.txt (por defecto)

```bash
head -n 7 file.txt 
```

Imprime en terminal las primeras siete líneas de file.txt.

```bash
head -q -n 5 file1.txt file2.txt 
```

Imprima en la terminal las primeras 5 líneas de file1.txt, seguidas de las primeras 5 líneas de file2.txt

### Más información:

*   [Wikipedia](https://en.wikipedia.org/wiki/Head_(Unix))