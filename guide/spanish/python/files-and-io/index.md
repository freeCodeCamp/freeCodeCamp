---
title: Files and IO
localeTitle: Archivos y IO
---
## Archivos y IO

Archivo es una ubicación con nombre en el disco para almacenar información relacionada. Se utiliza para almacenar datos de forma permanente en la memoria no volátil (por ejemplo, disco duro). Dado que la memoria de acceso aleatorio (RAM) es volátil y pierde sus datos cuando la computadora está apagada, usamos archivos para el uso futuro de los datos.

Cuando queremos leer o escribir en un archivo, primero debemos abrirlo. Cuando hayamos terminado, debe cerrarse para que los recursos que están vinculados con el archivo se liberen.

Por lo tanto, en Python, una operación de archivo tiene lugar en el siguiente orden: 1) Abrir un archivo 2) Leer o escribir (realizar operación) 3) cerrar el archivo

Python tiene muchas formas de operaciones de entrada y salida. Algunas de las operaciones de salida pueden ser la impresión de un texto, los registros de la consola e incluso la salida de un archivo de texto o de hoja de cálculo.

### Salida a pantalla

Python proporciona la forma más sencilla de producir resultados en la pantalla.

```python
print "Python is a powerful language.","It is easy to learn." 
```

Salida:
```
Python is a powerful language.It is easy to learn. 
```

### Entrada del usuario

Hay dos formas de recibir información de un usuario.

raw\_input (\[prompt\])

Se utiliza para leer una línea de la entrada estándar y la devuelve como una cadena

```python
str = raw_input("Enter your name: ") 
 print "Welcome ", str 
```

Salida:
```
Enter your name: John Doe 
 Welcome John Doe 
```

entrada (aviso)

Funcionalidad similar a raw\_input (), pero asume que la entrada es una expresión de Python válida

```python
str = input("Enter input: ") 
 print "Input: ", str 
```

Salida:
```
Enter input: [x*5 for x in range(2,10,2)] 
 Input: [10,20,30,40] 
```

### Interactuando con archivos en Python

Con Python, los archivos se pueden abrir, leer, escribir y cerrar fácilmente. Con las funciones disponibles:

1.  `open()`
2.  `read()`
3.  `write()`
4.  `close()`

Ejemplo:

```python
file1 = open("foo.txt", "r+")     # Opens the file with read permission. 
 file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file. 
 data = file1.read(15)     # Reads first 15 characters in the file. 
 print "First 15 characters are:\n", data     # Prints output 
 file1.close()     # Closes the opened file. 
```

Salida:
```
First 15 characters are: 
 Python is a pow 
```

#### Abriendo archivos

El método de python open () se puede usar para devolver un objeto de archivo. Es más comúnmente usado con dos argumentos que son el nombre del archivo y el modo de acceso. El modo de acceso se utiliza para describir la forma en que se accede o se utiliza el archivo.

Los modos más utilizados son 'w' que es para escribir en el archivo y 'r' que se usa para leer el archivo, mientras que 'r +' se usa para leer y escribir el archivo. 'a' es el modo que se utiliza para agregar texto al archivo. El argumento de modo también es opcional y se asumirá que es 'r' si se omite.

Un archivo debe cerrarse después de que se haya completado la operación de entrada y salida para liberar recursos.

Código de muestra para abrir un archivo de texto:

\`\` \`pitón archivo = abrir ('hello\_world.txt', 'w') file.write ('Hello World!') archivo.close ()
```
##### Using with 
 An alternative to using the `open()` function in standalone is to make use of the `with` statement to open a file. This is considered best practice as it allows the Python framework to manage the context of opening the file, and will autmoatically perform any required resource cleanup. 
 
 This is adventageous in the fact that it takes the onus off the programmer to close every file that is opened, and that the file will still be closed even if an exception was encountered during an IO operation. 
 
 When using the `with` statement is important to note that access to the file will only available within the scope of the `with` block. 
 
 To open a file using the `with` statement the `with` keyword is entered, followed by the call to `open(file)`. Following this the variable used as a handle to the open file is declared after the `as` keyword. Once the programs execution returns from this block, the file will be closed automatically. 
 
 Sample code to open a text file using the `with` statement: 
```

con abierto ('hello\_world.txt', 'w') como f: f.write ('¡Hola mundo!') \`\` \`

#### Más información:

[Documentación Python - IO](https://docs.python.org/2/tutorial/inputoutput.html) [Automatizar las cosas aburridas](https://automatetheboringstuff.com/chapter8/) [Punto de tutoriales - Python IO](https://www.tutorialspoint.com/python/python_files_io.htm) [8 PEP 343: La declaración 'con'](https://docs.python.org/2.5/whatsnew/pep-343.html)