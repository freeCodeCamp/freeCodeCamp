---
title: Files and IO
localeTitle: الملفات و IO
---
## الملفات و IO

الملف هو موقع مسمى على القرص لتخزين المعلومات ذات الصلة. يتم استخدامه لتخزين البيانات بشكل دائم في الذاكرة غير المتطايرة (على سبيل المثال القرص الثابت). نظرًا لأن ذاكرة الوصول العشوائي (RAM) متقلبة والتي تفقد بياناتها عند إيقاف تشغيل الكمبيوتر ، فنحن نستخدم ملفات للاستخدام المستقبلي للبيانات.

عندما نريد القراءة من ملف أو الكتابة فيه ، نحتاج إلى فتحه أولاً. عندما ننتهي ، يجب إغلاقها ، بحيث يتم تحرير الموارد المرتبطة بالملف.

وبالتالي ، في بيثون ، تتم عملية الملف بالترتيب التالي: 1) افتح ملفًا 2) القراءة أو الكتابة (تنفيذ العملية) 3) أغلق الملف

لدى بايثون العديد من الطرق لعمليات الإدخال والإخراج. يمكن لبعض عمليات الإخراج أن تطبع نصًا ، وسجلات وحدة التحكم ، وحتى إخراج ملف نصي أو جدول بيانات.

### الناتج على الشاشة

يوفر Python أبسط طريقة لإنتاج الإخراج على الشاشة.

 `print "Python is a powerful language.","It is easy to learn." 
` 

انتاج:

 `Python is a powerful language.It is easy to learn. 
` 

### المدخلات من المستخدم

هناك طريقتان لأخذ المدخلات من المستخدم.

raw\_input (\[موجه\])

تستخدم لقراءة سطر واحد من الإدخال القياسي وإعادته كسلسلة

 `str = raw_input("Enter your name: ") 
 print "Welcome ", str 
` 

انتاج:

 `Enter your name: John Doe 
 Welcome John Doe 
` 

المدخلات (موجه)

وظيفة مشابهة لـ raw\_input () ، ولكن يفترض أن الإدخال عبارة عن تعبير بايثون صالح

 `str = input("Enter input: ") 
 print "Input: ", str 
` 

انتاج:

 `Enter input: [x*5 for x in range(2,10,2)] 
 Input: [10,20,30,40] 
` 

### التفاعل مع الملفات في بايثون

باستخدام Python ، يمكن فتح الملفات بسهولة وقراءتها وكتابتها وإغلاقها. مع الوظائف المتاحة:

1.  `open()`
2.  `read()`
3.  `write()`
4.  `close()`

مثال:

 `file1 = open("foo.txt", "r+")     # Opens the file with read permission. 
 file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file. 
 data = file1.read(15)     # Reads first 15 characters in the file. 
 print "First 15 characters are:\n", data     # Prints output 
 file1.close()     # Closes the opened file. 
` 

انتاج:

 `First 15 characters are: 
 Python is a pow 
` 

#### فتح الملفات

يمكن استخدام أسلوب python open () لإرجاع كائن ملف. هو الأكثر استخدامًا مع وسيطتين هما اسم الملف وطريقة الوصول. يُستخدم أسلوب الوصول لوصف طريقة الوصول إلى الملف أو استخدامه.

أكثر الأوضاع شيوعًا هي "w" وهي للكتابة في الملف و "r" والتي تستخدم لقراءة الملف بينما يتم استخدام "r +" لقراءة الملف وكتابته. "a" هو الوضع المستخدم لإلحاق النص في الملف. تعتبر وسيطة الوضع اختيارية أيضًا ، وسيتم افتراض أنها "r" إذا تم غلقها.

يجب إغلاق الملف بعد اكتمال عملية الإدخال والإخراج لتحرير أي موارد.

نموذج كود لفتح ملف نصي:

\`\` \`الثعبان file = open ('hello\_world.txt'، 'w') file.write ('Hello World!') file.close ()

 ``##### Using with 
 An alternative to using the `open()` function in standalone is to make use of the `with` statement to open a file. This is considered best practice as it allows the Python framework to manage the context of opening the file, and will autmoatically perform any required resource cleanup. 
 
 This is adventageous in the fact that it takes the onus off the programmer to close every file that is opened, and that the file will still be closed even if an exception was encountered during an IO operation. 
 
 When using the `with` statement is important to note that access to the file will only available within the scope of the `with` block. 
 
 To open a file using the `with` statement the `with` keyword is entered, followed by the call to `open(file)`. Following this the variable used as a handle to the open file is declared after the `as` keyword. Once the programs execution returns from this block, the file will be closed automatically. 
 
 Sample code to open a text file using the `with` statement: 
`` 

مع فتح ('hello\_world.txt' ، 'w') كـ f: f.write ('Hello World!') \`\` \`

#### معلومات اكثر:

[توثيق بايثون - IO](https://docs.python.org/2/tutorial/inputoutput.html) [أتمتة أشياء مملة](https://automatetheboringstuff.com/chapter8/) [نقطة دروس - بيثون IO](https://www.tutorialspoint.com/python/python_files_io.htm) [8 PEP 343: بيان "مع"](https://docs.python.org/2.5/whatsnew/pep-343.html)