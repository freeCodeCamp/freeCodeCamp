---
title: Rename Local Branches in Git
localeTitle: إعادة تسمية الفروع المحلية في جيت
---
لإعادة تسمية فرع محلي ، أدخل ما يلي في المحطة:

> `-m` يقف للحركة ، مثلما تستخدم `mv` في linux لإعادة تسمية الملفات.

 `git branch -m <oldname> <newname> 
` 

إذا قمت بالفعل بفحص الفرع الذي تريد تغييره:

 `git branch -m <newname> 
` 

في ما يلي مثال على إعادة تسمية فرع `feature/react-challenges` `fix/react-hikes` من FreeCodeCamp:

 `git checkout feature/react-challenges 
 git branch -m fix/react-hikes 
`