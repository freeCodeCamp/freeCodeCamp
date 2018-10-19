---
title: Shell scripting
localeTitle: البرمجة النصية شل
---
# البرمجة النصية شل

في سطر الأوامر ، برنامج نصي shell هو ملف قابل للتنفيذ يحتوي على مجموعة التعليمات التي ستنفذها shell. انها الهدف الرئيسي لخفضه مجموعة من التعليمات (أو الأوامر) في ملف واحد فقط. كما يمكن التعامل معها بعض المنطق لأنه لغة برمجة.

## كيفية إنشائه

1) قم بإنشاء الملف:

 `$ touch myscript.sh 
` 

2) إضافة [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) في بداية الملف. خط Shebang مسؤول عن السماح لمترجم الأوامر بمعرفة أي مترجم سيتم تشغيل البرنامج النصي shell مع:

 `$ echo "#!/bin/bash" > myscript.sh 
 # or 
 $ your-desired-editor myscript.sh 
 # write at the first line #!/bin/bash 
` 

3) إضافة بعض comands:

 `$ echo "echo Hello World!" >> myscript.sh 
` 

4) إعطاء وضع _تنفيذ_ الملف:

 `$ chmod +x myscript.sh 
` 

5) قم بتنفيذها!

 `$ ./myscript.sh 
 Hello World! 
` 

يمكن العثور على مزيد من المعلومات حول نصوص shell [هنا](https://www.shellscript.sh/)