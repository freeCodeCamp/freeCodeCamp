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

جميع ما ذكر أعلاه يعتبر طريقة فعالة لحالات بسطية فقط. للقيام بعمل أعمال أكبر و أكثر تعقيداً يجب علينا العمل مع المفات داخل اللغة (كتابة برنامج) وليس من خلال شاشة أوامر. للقيام بذلك عليك القيام بأستخدام دالّة فتح الملفات. هذه الدالّة تستقبل (كمدخل دالّة) مقدارين نصيين ‘ فيكون الأول اسم الملف المراد فتحه (العمل به) و الثاني يكون الوضع (صلاحيات) ‘ أشهرها:

الوضع | الوظيفة
:------:|:-------:
`r` | للقراءه
`w` | للكتابه
`a` | للأضافه
`rw` | للقراءه و الكتابه معاً

تقوم دالّة فتح الملف بأرجاع مؤشر ملف. يتم استخدام نفس أوامر الأدخال و الأخراج التي قد تستخدمها ولكن يجب اضافة حرف `f` قبل الأمر.
أشهرها:

`fprintf`
يكون هذا الأمر مشتق من الأمر المشابه `printf`.

فيما يلي برنامج يقوم بكتابة مقدار نصي في ملف
`int main(void)
{
	FILE *fileptr = fopen("hello.txt", "w");
    fprintf(fileptr, "Hello, World!");
	fclose(fileptr);
}ذ
سينشأ البرنامج أعلاه ملف بالأسم المحدد و سيكون به المقدار النصي المحدد.

فيما يلي برنامج أكثر تعقيدً يعمل على ألقاء التحية على عشرين أسماً موجودين في ملف الأسماء
علماً أن
names.txt:
names.txt:
`Josh
George
Logan
Mike
Peter
Clive
Jessica
Meghan
Monica
Mohammad`

`int main (void)
{
	FILE *names = fopen ("names.txt", "r");
	FILE *greet = fopen ("greet.txt", "w");

	// Check that everything is OK.
	if (!names || !greet)
	{
	fprintf(stderr, "File opening failed!\n");
	return 1;
	}

	// Greetings time!
	char name[20];
	// Basically keep on reading untill there's nothing left.
	while (fscanf(names, "%s\n", name) > 0)
	{
	    fprintf(greet, "Hello, %s!\n", name);
	}

	// When reached the end, print a message to the terminal to inform the user.
	if (feof(names))
		printf("Greetings are done!\n");
}`

greet.txt:
`Hello, Josh!
Hello, George!
Hello, Logan!
Hello, Mike!
Hello, Peter!
Hello, Clive!
Hello, Jessica!
Hello, Meghan!
Hello, Monica!
Hello, Mohammad!`


### معلومات اكثر:

*   [صفحة Wikibooks على ملف IO](https://en.wikibooks.org/wiki/C_Programming/File_IO)
