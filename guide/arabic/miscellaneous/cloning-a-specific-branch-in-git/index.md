---
title: Cloning a Specific Branch in Git
localeTitle: استنساخ فرع معين في جيت
---
لاستنساخ فرع ، أدخل ما يلي في المحطة:

 `git clone -b <branch> <remote_repo> 
` 

إذا كنت تريد فقط جلب الفرع المحدد:

 `git clone -b <branch> --single-branch <remote_repo> 
` 

إليك مثال لجلب فرع `staging` من FreeCodeCamp:

 `git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git 
`