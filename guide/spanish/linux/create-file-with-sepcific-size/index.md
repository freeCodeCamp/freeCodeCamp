---
title: Create a dummy file with a specific size
localeTitle: Crear un archivo ficticio con un tamaño específico
---
## Cómo crear archivos ficticios con un tamaño específico mediante el comando "dd":

El comando "dd" se puede usar para crear un archivo de un tamaño específico. Esto es útil si desea probar las velocidades de descarga, o cualquier otra prueba, y necesita un archivo de un tamaño específico.
```
dd if=/dev/zero of=file_name.txt bs=1024k count=10 
```

Esto creará un archivo de 1MB llamado file\_name.txt.

bs es su tamaño de byte y la cuenta representa el número de bloques. Una manera fácil de ver es 1024K X 10.

Aquí hay una forma aún más sencilla de crear un archivo de 1MB:
```
dd if=/dev/zero of=file_name.txt bs=1MB count=1 

```