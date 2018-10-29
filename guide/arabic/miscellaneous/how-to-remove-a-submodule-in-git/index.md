---
title: How to Remove a Submodule in Git
localeTitle: كيفية إزالة Submodule في بوابة
---
تفيد إزالة أحد الأجزاء الفرعية عندما لا تكون مطلوبة. توضح الخطوات أدناه إزالة أحد الأجزاء الفرعية.

## إزالة Submodule

*   احذف القسم الذي يشير إلى الملف `.gitmodules` ملف `.gitmodules`
*   مرحلة التغييرات عن طريق `git add .gitmodules`
*   قم بحذف القسم ذو الصلة من الملف الفرعي من `.git/config` .
*   تشغيل `git rm --cached path_to_submodule` (بلا ​​شرطة مائلة)
*   تشغيل `rm -rf .git/modules/path_to_submodule`
*   الالتزام بالتغييرات مع "إزالة git -m" subodule "
*   حذف الملفات الفرعية `rm -rf path_to_submodule` الآن `rm -rf path_to_submodule`

## مصادر

*   [Stackoverflow - كيف أقوم بإزالة كائن ثانوي](http://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)
*   [git.wiki.kernel.org - Git subodule removal](https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial#Removal)