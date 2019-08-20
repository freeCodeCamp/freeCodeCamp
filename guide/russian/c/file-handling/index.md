---
title: File Handling
localeTitle: Работа с файлами
---
## Работа с файлами

### Введение

Если вы уже написали программу `helloworld`, вы уже использовали файловый ввод/вывод (input/output, IO) в C! Поздравляем! :tada:

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

Работа с файлами - один из важнейших аспектов программирования. В языке C для объявления файла используется указатель на структуру типа FILE.

```c
FILE *fp; 
```

C предоставляет ряд встроенных функций для выполнения основных операций с файлами

**fopen() - создать новый файл или открыть существующий файл**

**fclose() - закрыть файл**

**getc() - считывает символ из файла**

**putc() - записывает символ в файл**

**fscanf() - считывает набор данных из файла**

**fprintf - записывает набор данных в файл**

**getw() - считывает целое число из файла**

**putw() - записывает целое число в файл**

**fseek() - установить позицию в желаемую точку**

**ftell() - показывает текущую позицию в файле**

**rewind() - установить позицию в начальную точку**

### Открытие файла

Функция **fopen()** используется для создания файла или открытия существующего файла

`c fp = fopen(const char filename,const char mode);`

В C существует множество режимов открытия файла:

**r - открывает файл в режиме чтения**

**w - открывает файл в режиме записи (удаляя его содержимое) или создает его в случае отсутствия**

**a - открывает файл в режиме добавления в конец или создает его в случае отсутствия***

**r+ - открывает файл в режиме чтения и записи**

**a+ - открывает файл в режиме чтения и записи (добавляет в случае существования)**

**w+ - открывает файл в режиме чтения и записи (удаляя его содержимое)**

Вот пример чтения и записи данных в файл

```c 
#include<stdio.h>
#include<conio.h>

int main()
{
   FILE *fp;
   char ch;
   fp = fopen("hello.txt", "w");
   printf("Enter data");
   while( (ch = getchar()) != EOF) {
      putc(ch,fp);
   }
   fclose(fp);
   fp = fopen("hello.txt", "r");

  while( (ch = getc(fp)! = EOF)
     printf("%c",ch);
  
  fclose(fp);
}
```
Должно быть, вы думаете: "Это всего лишь выводит текст на экран. С какой стати это файловый ввод/вывод"? Ответ кажется поначалу неочевидным и требует некоторых знаний о системе UNIX. С точки зрения UNIX все является файлом, в том смысле, что вы можете читать из него и записывать в него. Это значит, что принтер может быть отождествлен с файлом, так как все, что вы делаете с принтером - пишете в него. Также полезно думать об этих файлах как о потоках, поскольку, как будет показано позже, их можно перенаправлять с помощью оболочки.
 
Как все это связано с `helloworld` и файловым вводом/выводом? 
 
 Когда вы вызываете `printf`, на самом деле происходит запись в специальный файл `stdout`, сокращение от __standard output (стандартный вывод)__. 
 `stdout` представляет собой, что неудивительно, средство стандартного вывода по выбору вашей оболочки, роль которой чаще всего играет терминал. Это объясняет почему он выводит символы на экран. 
 
 Существуют два других потока (т.е. файла) с которыми тоже при желании можно работать, `stdin` и `stderr`. 
 `stdin` представляет собой __standard input (стандартный ввод)__, которую оболочка обычно привязывает к клавиатуре. 
 `stderr` представляет собой __standard error (стандартный вывод ошибок)__ , который оболочка обычно привязывает к терминалу. 
 
 ### Rudimentary File IO, or How I Learnt to Lay Pipes 
 Enough theory, let's get down to business by writing some code! 
 The easist way to write to a file is to redirect the output stream using the output redirect tool, `>`. 
 If you want to append, you can use `>>`. _N.b. these redirection operators are in_ `bash` _and similar shells._ 
```

удар

# Это будет выводиться на экран ...

./Привет, мир

# ... но это будет записываться в файл!

./helloworld> hello.txt
```
The contents of `hello.txt` will, not surprisingly, be 
```

Привет, мир!
```
Say we have another program called `greet`, similar to `helloworld`, that greets you given your name. 
```

с

# включают

# включают

int main () { // Инициализировать массив для хранения имени. char name \[20\]; // Прочитайте строку и сохраните ее для ее имени. scanf ("% s", имя); // Печать приветствия. printf («Привет,% s!», имя); return EXIT\_SUCCESS; }
```
Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool. 
```

удар

# Напишите файл с именем.

echo Kamala> name.txt

# Это будет читать имя из файла и распечатывать приветствие на экране.

./greet <имя.txt

# \==> Привет, Камала!

# Если вы хотите также записать приветствие в файл, вы можете сделать это, используя «>».
```
### The Real Deal 
 The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell. 
 To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode. 
 Mode is basically permissions, so `r` for read, `w` for write, `a` for append.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used. 
 
 After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer. 
 For example, `printf`'s file version is `fprintf`. 
 
 Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings. 
```

с

# включают

# включают

int main () { // Создаем указатели файлов. FILE \* names = fopen ("names.txt", "r"); FILE \* greet = fopen ("greet.txt", "w");
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

Камала логан Кэрол
```
Then after running `greetings` the file `greet.txt` will contain: 
```

Привет, Камала! Привет, Логан! Привет, Кэрол! \`\` \`

Супер удивительный, верно! :улыбка:

### Дополнительная информация:

*   [Страница Wikibooks в файле IO](https://en.wikibooks.org/wiki/C_Programming/File_IO)
