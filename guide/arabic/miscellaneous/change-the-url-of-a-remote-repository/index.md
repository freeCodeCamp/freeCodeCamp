---
title: Change the Url of a Remote Repository
localeTitle: قم بتغيير عنوان Url لمستودع عن بعد
---
يقوم الأمر `git remote set-url` بتغيير عنوان URL مستودع موجود عن بعد.

**يأخذ هذا الأمر الوسيطتين:**

1.  اسم بعيد موجود. على سبيل المثال ، الأصل أو المنبع هما خياران شائعان.
    
2.  عنوان URL جديد لجهاز التحكم عن بعد. على سبيل المثال ، `https://github.com/USERNAME/OTHERREPOSITORY.git`
    

**لذلك ، لتغيير عنوان URL لمستودع بعيد ، يمكنك فعل شيء كالتالي:**

1.  عرض مستودع موجود عن بعد:

`git remote -v`

1.  تغيير عنوان URL للمستودع البعيد:

`git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git`

1.  ويمكنك التحقق من مستودع بعيد جديد عن طريق القيام بما يلي:

`git remote -v`

_لمزيد من المعلومات راجع [هذا المقال جيثور.](https://help.github.com/articles/changing-a-remote-s-url/)_