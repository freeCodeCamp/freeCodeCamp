---
title: File Handling
localeTitle: Manejo de archivos
---
## Manejo de archivos

### Introducción

Si ha escrito el programa C `helloworld` anteriormente, ¡ya ha hecho el archivo IO en C! ¡Felicidades! tada

```c
/* A simple hello world in C. */ 
 #include <stdlib.h> 
 
 // Import IO functions. 
 #include <stdio.h> 
 
 int main() { 
    // This printf is where all the file IO magic happens! 
    // How exciting! 
    printf("Hello, world!\n"); 
    return EXIT_SUCCESS; 
 } 
```

El manejo de archivos es la parte más importante de un programador. En lenguaje C usamos un puntero de estructura de un tipo de archivo para declarar un archivo

```c
FILE *fp; 
```

C proporciona una serie de funciones incorporadas para realizar operaciones básicas de archivos

**fopen ()** **\-** **crea un nuevo archivo o abre un archivo existente**

**fclose ()** **\-** **cierra un archivo**

**getc ()** **\-** **lee un carácter de un archivo**

**putc ()** **\-** **escribe un carácter en un archivo**

**fscanf ()** **\-** **lee un conjunto de datos de un archivo**

**fprintf ()** **\-** **escribe un conjunto de datos en un archivo**

**getw ()** **\-** **lee un entero desde un archivo**

**putw ()** **\-** **escribe un entero en un archivo**

**fseek ()** **\-** **establece la posición para desear el punto**

**ftell ()** **\-** **da la posición actual en el archivo**

**rebobinar ()** **:** **establece la posición al punto de inicio**

### Abriendo un archivo

La función **fopen ()** se utiliza para crear un archivo o abrir un archivo existente

`c fp = fopen(const char filename,const char mode);`

En C hay muchos modos para abrir un archivo. **r** **\-** **abrir un archivo en modo de lectura**

**w** **\-** **abre o crea un archivo de texto en modo de escritura**

**a** **\-** **abre un archivo en modo agregado**

**r +** **\-** **abre un archivo en modo de lectura y escritura**

**a +** **\-** **abre un archivo en modo de lectura y escritura**

**w +** **\-** **abre un archivo en modo de lectura y escritura**

Aquí hay un ejemplo de leer y escribir datos en un archivo

\`\` \`c #incluir

# incluir

principal() { ARCHIVO \* fp; char ch; fp = fopen ("hello.txt", "w"); printf ("Introducir datos"); while ((ch = getchar ())! = EOF) { putc (ch, fp); } fclose (fp); fp = fopen ("hello.txt", "r");

while ((ch = getc (fp)! = EOF) printf ("% c", ch);

fclose (fp); }
```
Now you might be thinking, "this justs prints text to my screen.  How is this file IO?" 
 The answer isn't obvious at first, and needs some understanding about the UNIX system. 
 Under a UNIX system, everything is treated as a file, meaning you can read and write from it. 
 This means that your printer can be abstracted as a file since all you do with a printer is write with it. 
 It is also useful to think of these files as streams, since as you'll see later, you can redirect them with the shell. 
 
 So how does this relate to `helloworld` and file IO? 
 
 When you call `printf`, you are really just writing to a special file called `stdout`, short for __standard output__. 
 `stdout` represents, well, the standard output as decided by your shell, which is usually the terminal. 
 This explains why it printed to your screen. 
 
 There are two other streams (ie files) that are available to you with effort, `stdin` and `stderr`. 
 `stdin` represents the __standard input__, which your shell usually attaches to the keyboard. 
 `stderr` represents the __standard error__ output, which your shell usually attaches to the terminal. 
 
 ### Rudimentary File IO, or How I Learnt to Lay Pipes 
 Enough theory, let's get down to business by writing some code! 
 The easist way to write to a file is to redirect the output stream using the output redirect tool, `>`. 
 If you want to append, you can use `>>`. _N.b. these redirection operators are in_ `bash` _and similar shells._ 
```

intento

# Esto saldrá a la pantalla ...

./Hola Mundo

# ... pero esto va a escribir en un archivo!

./helloworld> hello.txt
```
The contents of `hello.txt` will, not surprisingly, be 
```

¡Hola Mundo!
```
Say we have another program called `greet`, similar to `helloworld`, that greets you given your name. 
```

do

# incluir

# incluir

int main () { // Inicializar una matriz para mantener el nombre. nombre de personaje \[20\]; // Lee una cadena y guárdala en un nombre. scanf ("% s", nombre); // Imprimir el saludo. printf ("Hola,% s!", nombre); devuelve EXIT\_SUCCESS; }
```
Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool. 
```

intento

# Escribe un archivo que contenga un nombre.

echo kamala> nombre.txt

# Esto leerá el nombre del archivo e imprimirá el saludo en la pantalla.

./greet <nombre.txt

# \==> Hola, Kamala!

# Si también desea escribir el saludo en un archivo, puede hacerlo usando ">".
```
### The Real Deal 
 The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell. 
 To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode. 
 Mode is basically permissions, so `r` for read, `w` for write, `a` for append.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used. 
 
 After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer. 
 For example, `printf`'s file version is `fprintf`. 
 
 Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings. 
```

do

# incluir

# incluir

int main () { // Crear punteros de archivo. ARCHIVO \* nombres = fopen ("names.txt", "r"); ARCHIVO \* greet = fopen ("greet.txt", "w");
```
// Check that everything is OK. 
 if (!names || !greet) { 
    fprintf(stderr, "File opening failed!\n"); 
    return EXIT_FAILURE; 
 } 
 
 // Greetings time! 
 char name[20]; 
 // Basically keep on reading untill there's nothing left. 
 while (fscanf(names, "%s\n", name) > 0) { 
    fprintf(greet, "Hello, %s!\n", name); 
 } 
 
 // When reached the end, print a message to the terminal to inform the user. 
 if (feof(names)) { 
    printf("Greetings are done!\n"); 
 } 
 
 return EXIT_SUCCESS; 
```

}
```
Suppose `names.txt` contains the following: 
```

Kamala Logan Villancico
```
Then after running `greetings` the file `greet.txt` will contain: 
```

Hola, Kamala! Hola logan Hola carol \`\` \`

Super impresionante, ¿verdad? :sonreír:

### Más información:

*   [Página de Wikilibros en archivo IO](https://en.wikibooks.org/wiki/C_Programming/File_IO)