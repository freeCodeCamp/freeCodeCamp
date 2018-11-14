---
title: Docker detached mode
localeTitle: دوكر وضع منفصلة
---
## دوكر وضع منفصلة

يعني الوضع المنفصل ، الموضح في الخيار `--detach` أو `-d` ، أن حاوية Docker تعمل في خلفية الجهاز الخاص بك. لا يتلقى مدخلات أو عرض الإخراج.

 `docker run -d IMAGE 
` 

إذا قمت بتشغيل حاويات في الخلفية ، يمكنك معرفة التفاصيل الخاصة بها باستخدام `docker ps` توصيل `docker ps` ، ثم إعادة توصيل الجهاز بمدخلات ومخرجاته.

#### معلومات اكثر:

*   [إرفاق وفصل من حاوية قيد التشغيل Docker Docs](https://docs.docker.com/engine/reference/commandline/attach/#examples)
*   [فصل مقابل في المقدمة مستندات Docker](https://docs.docker.com/engine/reference/run/#detached-vs-foreground)