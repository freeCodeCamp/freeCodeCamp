---
title: File Handling
localeTitle: التعامل مع الملف
---
## التعامل مع الملف

### المقدمة

إذا كنت قد قمت بكتابة برنامج C `helloworld` قبل ، فقد قمت بالفعل بإدخال ملف IO في C! تهانينا! : تادا:

 `/* A simple hello world in C. */ 
 #include <stdlib.h> 
 
 // Import IO functions. 
 #include <stdio.h> 
 
 int main() { 
    // This printf is where all the file IO magic happens! 
    // How exciting! 
    printf("Hello, world!\n"); 
    return EXIT_SUCCESS; 
 } 
` 

تعد معالجة الملفات الجزء الأكثر أهمية من المبرمج. في لغة C ، نستخدم مؤشر بنية لنوع الملف لإعلان ملف

 `FILE *fp; 
` 

يوفر C عددًا من وظائف البناء لتنفيذ عملية الملف الأساسية

**fopen ()** **\- قم** **بإنشاء ملف جديد أو افتح ملفًا موجودًا**

**fclose ()** **\-** **إغلاق ملف**

**getc ()** **\-** **يقرأ حرف من ملف**

**putc ()** **\-** **يكتب شخصية إلى ملف**

**fscanf ()** **\-** **يقرأ مجموعة من البيانات من ملف**

**fprintf ()** **\-** **يكتب مجموعة من البيانات إلى ملف**

**getw ()** **\-** **يقرأ عدد صحيح من الملف**

**putw ()** **\-** **يكتب عدد صحيح لملف**

**fseek ()** **\-** **ضبط الموقف لرغبة نقطة**

**ftell ()** **\-** **يعطي الموقع الحالي في الملف**

**الترجيع ()** **\-** **تعيين الموقف إلى نقطة البداية**

### فتح ملف

يتم استخدام الدالة **fopen ()** لإنشاء ملف أو فتح ملف موجود

`c fp = fopen(const char filename,const char mode);`

في C هناك العديد من الوضع لفتح الملف **ص** **\-** **فتح ملف في وضع القراءة**

**ث** **\-** **يفتح أو ينشئ ملفًا نصيًا في وضع الكتابة**

**أ** **\-** **يفتح ملف في وضع الإلحاق**

**ص +** **\-** **يفتح ملف في وضع القراءة والكتابة على حد سواء**

**a +** **\-** **يفتح ملفًا في وضع القراءة والكتابة**

**w +** **\-** **يفتح ملفًا في وضع القراءة والكتابة**

إليك مثال على قراءة البيانات وكتابتها في ملف

\`\` \`ج #تتضمن

# تتضمن

الأساسية() { الملف \* fp؛ char ch؛ fp = fopen ("hello.txt"، "w")؛ printf ("أدخل البيانات") ؛ while ((ch = getchar ())! = EOF) { putc (الفصل، FP)؛ } fclose (اف ب)؛ fp = fopen ("hello.txt"، "r")؛

بينما ((ch = getc (fp)! = EOF) printf ( "٪ ج"، الفصل)؛

fclose (اف ب)؛ }

 ``Now you might be thinking, "this justs prints text to my screen.  How is this file IO?" 
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
`` 

سحق

# هذا سوف يخرج إلى الشاشة ...

./مرحبا بالعالم

# ... ولكن هذا سوف يكتب إلى ملف!

./helloworld> hello.txt

 ``The contents of `hello.txt` will, not surprisingly, be 
`` 

مرحبا بالعالم!

 ``Say we have another program called `greet`, similar to `helloworld`, that greets you given your name. 
`` 

ج

# تتضمن

# تتضمن

انت مين() { // تهيئة صفيف لاحتواء الاسم. اسم شار \[20\] ؛ / / اقرأ سلسلة وحفظها على الاسم. scanf ("٪ s" ، الاسم) ؛ // اطبع التحية. printf ("مرحبًا ،٪ s!" ، الاسم) ؛ العودة EXIT\_SUCCESS ؛ }

 ``Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool. 
`` 

سحق

# اكتب ملفًا يحتوي على اسم.

صدى كمالا> name.txt

# سيقوم هذا بقراءة الاسم من الملف وطباعة التحيات على الشاشة.

./greet <name.txt

# \==> مرحبًا يا كمالا!

# إذا أردت أيضًا كتابة التحية إلى ملف ، فيمكنك القيام بذلك باستخدام ">".

 ``### The Real Deal 
 The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell. 
 To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode. 
 Mode is basically permissions, so `r` for read, `w` for write, `a` for append.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used. 
 
 After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer. 
 For example, `printf`'s file version is `fprintf`. 
 
 Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings. 
`` 

ج

# تتضمن

# تتضمن

انت مين() { // إنشاء مؤشرات الملف. FILE \* names = fopen ("names.txt"، "r")؛ FILE \* greet = fopen ("greet.txt"، "w")؛

 `// Check that everything is OK. 
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
` 

}

 ``Suppose `names.txt` contains the following: 
`` 

كامالا لوجان أغنية مرحة

 ``Then after running `greetings` the file `greet.txt` will contain: 
`` 

مرحبا يا كمالا! مرحبا ، لوغان! مرحبا يا كارول! \`\` \`

سوبر رائع ، أليس كذلك! :ابتسامة:

### معلومات اكثر:

*   [صفحة Wikibooks على ملف IO](https://en.wikibooks.org/wiki/C_Programming/File_IO)