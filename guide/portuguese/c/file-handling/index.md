---
title: File Handling
localeTitle: Manipulação de arquivos
---
## Manipulação de arquivos

### Introdução

Se você já escreveu o programa C `helloworld` antes, você já fez o IO do arquivo em C! Parabéns! : tada:

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

A manipulação de arquivos é a parte mais importante de um programador. Na linguagem C, usamos um ponteiro de estrutura de um tipo de arquivo para declarar um arquivo

```c
FILE *fp; 
```

C fornece um número de funções internas para executar a operação básica do arquivo

**fopen ()** **\-** **cria um novo arquivo ou abre um arquivo existente**

**fclose ()** **\-** **fecha um arquivo**

**getc ()** **\-** **lê um caractere de um arquivo**

**putc ()** **\-** **escreve um caractere em um arquivo**

**fscanf ()** **\-** **lê um conjunto de dados de um arquivo**

**fprintf ()** **\-** **grava um conjunto de dados em um arquivo**

**getw ()** **\-** **lê um inteiro de um arquivo**

**putw ()** **\-** **escreve um inteiro em um arquivo**

**fseek ()** **\-** **defina a posição para o ponto de desejo**

**ftell ()** **\-** **dá posição atual no arquivo**

**rebobinar ()** **\-** **definir a posição para o ponto inicial**

### Abrindo um arquivo

A função **fopen ()** é usada para criar um arquivo ou abrir um arquivo existente

`c fp = fopen(const char filename,const char mode);`

Em C há muitos modos para abrir um arquivo **r** **\-** **abre um arquivo no modo de leitura**

**w** **\-** **abre ou cria um arquivo de texto no modo de escrita**

**a** **\-** **abre um arquivo no modo de acréscimo**

**r +** **\-** **abre um arquivo no modo de leitura e escrita**

**a +** **\-** **abre um arquivo no modo de leitura e escrita**

**w +** **\-** **abre um arquivo no modo de leitura e escrita**

Aqui está um exemplo de leitura e gravação de dados em um arquivo

\`\` \`c #incluir

# incluir

a Principal() { ARQUIVO \* fp; char ch; fp = fopen ("hello.txt", "w"); printf ("Enter data"); while ((ch = getchar ())! = EOF) { putc (ch, fp); } fclose (fp); fp = fopen ("hello.txt", "r");

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

bater

# Isto irá produzir para a tela ...

./Olá Mundo

# … Mas isso vai gravar em um arquivo!

./helloworld> hello.txt
```
The contents of `hello.txt` will, not surprisingly, be 
```

Olá Mundo!
```
Say we have another program called `greet`, similar to `helloworld`, that greets you given your name. 
```

c

# incluir

# incluir

int main () { // Inicialize uma matriz para conter o nome. nome do caractere \[20\]; // Leia uma string e salve-a no nome. scanf ("% s", nome); // Imprima a saudação. printf ("Olá,% s!", nome); return EXIT\_SUCCESS; }
```
Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool. 
```

bater

# Escreva um arquivo contendo um nome.

echo Kamala> name.txt

# Isso lerá o nome do arquivo e imprimirá a saudação na tela.

./greet <nome.txt

# \==> Olá, Kamala!

# Se você quisesse também escrever a saudação em um arquivo, poderia fazê-lo usando ">".
```
### The Real Deal 
 The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell. 
 To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode. 
 Mode is basically permissions, so `r` for read, `w` for write, `a` for append.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used. 
 
 After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer. 
 For example, `printf`'s file version is `fprintf`. 
 
 Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings. 
```

c

# incluir

# incluir

int main () { // Cria ponteiros de arquivo. Nomes FILE \* = fopen ("names.txt", "r"); FILE \* greet = fopen ("greet.txt", "w");
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

Kamala Logan Carol
```
Then after running `greetings` the file `greet.txt` will contain: 
```

Olá Kamala! Olá, Logan! Olá Carol! \`\` \`

Super incrível, certo! :sorriso:

### Mais Informações:

*   [Página do Wikilivros no arquivo IO](https://en.wikibooks.org/wiki/C_Programming/File_IO)