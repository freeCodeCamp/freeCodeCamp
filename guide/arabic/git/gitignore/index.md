---
title: Gitignore
localeTitle: .gitignore
---
## Gitignore

ملف `.gitignore` هو ملف نصي يخبر Git بالملفات أو المجلدات التي يجب تجاهلها في المشروع.

عادة ما يتم وضع ملف `.gitignore` محلي في الدليل الجذر للمشروع. يمكنك أيضًا إنشاء ملف `.gitignore` عالمي وسيتم تجاهل أي إدخالات في هذا الملف في جميع مستودعات Git الخاصة بك.

لإنشاء المحلي `.gitignore` الملف، إنشاء ملف نصي وتسميته `.gitignore` (تذكر لتشمل `.` في البداية). ثم قم بتحرير هذا الملف حسب الحاجة. يجب أن يسرد كل سطر جديد ملفًا أو مجلدًا إضافيًا تريد أن يتجاهله Git.

يمكن أن تتبع الإدخالات في هذا الملف أيضًا نمط تطابق.

*   `*` يستخدم كمباراة بدل
*   `/` يتم استخدامه لتجاهل أسماء `.gitignore` بملف `.gitignore`
*   `#` يستخدم لإضافة تعليقات إلى ملف `.gitignore`

هذا مثال لما قد يبدو عليه ملف `.gitignore` :

 `# Ignore Mac system files 
 .DS_store 
 
 # Ignore node_modules folder 
 node_modules 
 
 # Ignore all text files 
 *.txt 
 
 # Ignore files related to API keys 
 .env 
 
 # Ignore SASS config files 
 .sass-cache 
` 

لإضافة أو تغيير ملف .gitignore العام ، قم بتشغيل الأمر التالي:

 `git config --global core.excludesfile ~/.gitignore_global 
` 

سيؤدي ذلك إلى إنشاء الملف `~/.gitignore_global` . الآن يمكنك تحرير هذا الملف بنفس طريقة ملف `.gitignore` المحلي. ستتجاهل جميع مستودعات Git الملفات والمجلدات المدرجة في ملف `.gitignore` .

### معلومات اكثر:

*   وثائق جيت: [gitignore](https://git-scm.com/docs/gitignore)
*   تجاهل الملفات: [جيثب](https://help.github.com/articles/ignoring-files/)
*   قوالب `.gitignore` مفيدة: [جيثب](https://github.com/github/gitignore)