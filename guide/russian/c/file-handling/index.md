---
title: File Handling
localeTitle: Обработка файлов
---
## Обработка файлов

### Введение

Если вы уже написали программу C `helloworld` , вы уже сделали файл IO в C! Поздравляем! : Тада:

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

Обработка файлов - важная часть программиста. В языке C мы используем указатель структуры типа файла для объявления файла

```c
FILE *fp; 
```

C предоставляет ряд встроенных функций для выполнения основной операции с файлами

**fopen ()** **\-** **создать новый файл или открыть существующий файл**

**fclose ()** **\-** **закрыть файл**

**getc ()** **\-** **считывает символ из файла**

**putc ()** **\-** **записывает символ в файл**

**fscanf ()** **\-** **считывает набор данных из файла**

**fprintf ()** **\-** **записывает набор данных в файл**

**getw ()** **\-** **считывает целое число из файла**

**putw ()** **\-** **записывает целое число в файл**

**fseek ()** **\-** **установить позицию для желаемой точки**

**ftell ()** **\-** **показывает текущую позицию в файле**

**rewind ()** **\-** **установить позицию в начальную точку**

### Открытие файла

Функция **fopen ()** используется для создания файла или открытия существующего файла

`c fp = fopen(const char filename,const char mode);`

В C существует много режимов открытия файла **r** **\-** **открыть файл в режиме чтения**

**w** **\-** **открывает или создает текстовый файл в режиме записи**

**a** **\-** **открывает файл в режиме добавления**

**r +** **\-** **открывает файл в режиме чтения и записи**

**a +** **\-** **открывает файл в режиме чтения и записи**

**w +** **\-** **открывает файл в режиме чтения и записи**

Вот пример чтения и записи данных в файл

\`\` \`с #включают

# включают

главный() { FILE \* fp; char ch; fp = fopen ("hello.txt", "w"); printf («Введите данные»); while ((ch = getchar ())! = EOF) { putc (ч, FP); } fclose (FP); fp = fopen ("hello.txt", "r");

while ((ch = getc (fp)! = EOF) Е ( "% С", ч);

fclose (FP); }
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