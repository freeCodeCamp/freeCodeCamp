---
title: Docker build
localeTitle: بناء عامل الميناء
---
## بناء عامل الميناء

`docker build` إنشاء صورة عامل ميناء من Dockerfile و "السياق". يمكن أن يكون السياق URL أو PATH محلي. يمكنك تسمية الصورة باستخدام العلامة `-t` الاختيارية.

سيقوم Dockerfile بتثبيت التبعيات أثناء أمر البناء ، من عنوان URL محدد أو PATH محلي. يجب تحديد أي تبعيات ضرورية في حاوياتك في Dockerfile.

يتم الآن تخزين صورتك في سجل صور Docker المحلي الخاص بجهازك.

عند إنشاء حاويات Docker ، يمكنك عندئذ تشغيل التطبيق باستخدام أوامر التشغيل المناسبة.

#### معلومات اكثر:

*   [Docker CLI docs: build](https://docs.docker.com/engine/reference/commandline/rm/)
*   [عامل بناء بناء التطبيق الخاص بك](https://docs.docker.com/get-started/part2/#build-the-app)