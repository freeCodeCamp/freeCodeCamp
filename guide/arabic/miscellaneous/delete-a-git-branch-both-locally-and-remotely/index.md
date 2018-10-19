---
title: Delete a Git Branch Both Locally and Remotely
localeTitle: حذف فرع بوابة على حد سواء محليا وعن بعد
---
// محليًا ((إذا كنت تعرف ماذا تفعل!) فرع git -d localBranchName

 `// and then if you need to... 
 // on remote 
 git push origin :remoteBranchName 
` 

## متى تحذف الفروع؟

عادة في تدفق المساهمة `Branches` هي طريقة رائعة للعمل على ميزات مختلفة ، والإصلاحات ، وما إلى ذلك أثناء عزلهم عن مصدر قاعدة البيانات الرئيسي. لذلك قد يكون لشركة ريبو فرع `master` وفروع منفصلة للعمل على ميزات مختلفة.

عادة بمجرد الانتهاء من العمل على ميزة ومن المستحسن حذف الفرع.

## سير العمل حذف:

دعنا نقول لديك repo تسمى `AwesomeRepo` ، واستضافته على Github ، في موقع مثل `https://github.com/my_username/AwesomeRepo` .

دعونا أيضا نفترض أن لديها فروع مثل:  
`master`  
`feature/some-cool-new-stuff`  
`fix/authentication`  
`staging`

ﻟﻼﺗﺳﺎق ، ﺳوف ﻧﻔﺗرض أن أﺳﻣﺎء اﻟﻔروع ھﻲ ﻧﻔﺳﮭﺎ ﻋﻟﯽ `local` وﮐذﻟك ﻋﻟﯽ وﺣدة `remote` .

الآن ، لنفترض أنك انتهيت من هذا الإصلاح للمصادقة وتريد إزالة `fix/authentication` الفرعية.

## حذف فرع REMOTELY:

ببساطة قم بما يلي:

`git push --delete <remote> <branch>` .

على سبيل المثال: `git branch --delete origin fix/authentication`

إذا كنت تحصل على الخطأ

 `error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name' 
` 

ربما قام شخص آخر بالفعل بحذف الفرع. حاول مزامنة قائمة فروعك باستخدام

 `git fetch -p 
` 

دليل git يقول -p ، -rune بعد إحضار ، إزالة أي فروع تتبع عن بعد والتي لم تعد موجودة على جهاز التحكم عن بعد.

## حذف الفرع محليًا:

أول دفعة إلى فرع آخر غير الفرع الذي تريد حذفه:

`git checkout <branch>` .

على سبيل المثال: `git checkout master`

لن يسمح لك Git بحذف الفرع الذي تعمل عليه حاليًا.

ثم تابع مع الحذف:

`git branch -D <branch>` .

على سبيل المثال: `git branch -D fix/authentication`