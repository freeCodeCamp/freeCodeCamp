---
title: Git Hooks
localeTitle: جيت هوكس
---
## جيت هوكس

Git Hooks هي مخطوطات موجودة في `.git/hooks/` دليل مستودع git. تعمل هذه البرامج النصية بعد تشغيلها بمراحل مختلفة في عملية التحكم في الإصدار.

### عينات

في هذا الدليل ، هناك عدد قليل من نماذج البرامج النصية ، مثل `pre-commit.sample` . يعمل هذا النموذج بعينه في كل مرة يقوم فيها المستخدم بتشغيل عملية `git commit` . إذا كان البرنامج النصي hook إنهاء مع حالة أخرى غير 0 ، ثم يتوقف الالتزام.

### كابل بيانات

*   [وثائق ل Git Hooks](https://git-scm.com/docs/githooks)
*   [دروس أتلاسيان على جيت هوكس](https://www.atlassian.com/git/tutorials/git-hooks)
*   [دليل Git Hooks](http://githooks.com/)