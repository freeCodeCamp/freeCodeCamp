---
title: How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux
localeTitle: كيفية شوكة والحفاظ على مثيل المحلية من مخيم رمز الحرة على ماك ولينكس
---
إذا كنت تخطط لكتابة طلب سحب لمختبر Free Code Camp ، فستحتاج بالتأكيد إلى نسخة محلية من الموقع. إن امتلاك نسخة محلية من الموقع سوف يمنحك إمكانات إضافية مع Git غير متوفرة عبر واجهة متصفح GitHub ، بما في ذلك تحديث التقاطعات وطلبات الرفض / الرفض.

سيغطي هذا الدليل كيفية تفرع مشروع FCC ، واستنساخ نسخة محلية ، وكيفية الحفاظ على شوكة الخاص بك. سيتم إعطاء جميع أوامر Git لسطر الأوامر ، والتي نوصي بشدة باستخدامها ، ولكن يمكن تنفيذ معظم الأوامر في بيئة Git رسومية أيضًا.

إذا كنت تستخدم نظام التشغيل Windows ، [فاستخدم هذا الدليل بدلاً من ذلك](https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366) .

## تحتاج مساعدة؟

Free Code Camp Issue Mods والموظفون متواجدون لمساعدتك في حل مشكلات الطلب Pull في [غرفة المحادثة للمساهمين](https://gitter.im/FreeCodeCamp/HelpContributors)

## إعداد النظام الخاص بك

1.  قم بتثبيت [Git](https://git-scm.com/) أو عميل Git المفضل لديك
2.  (اختياري) قم [بإعداد مفتاح SSH](https://help.github.com/articles/generating-ssh-keys/) لـ Github.  
    يمكن أن يؤدي استخدام SSH إلى زيادة سرعة تفاعلك مع GitHub ، حيث لن تتم مطالبتك بكلمة المرور الخاصة بك.
3.  قم بإنشاء دليل مشاريع رئيسية على نظامك. لأغراض هذه الوثيقة ، سنفترض أنها `/mean/`

## مخيم Forking Free Code

1.  انتقل إلى المستوى العلوي من مستودع Free Code Camp: `https://github.com/FreeCodeCamp/freecodecamp`
2.  انقر فوق الزر "Fork" في الزاوية العلوية اليمنى من الواجهة. [مزيد من التفاصيل هنا](https://help.github.com/articles/fork-a-repo/) .
3.  بعد تفرع المشروع ، سيتم نقلك إلى نسختك من repo FCC على `username/freecodecamp`

## استنساخ شوكة الخاص بك

1.  من شوكة FCC ، قم بنسخ عنوان HTTPS أو SSH (إذا قمت بتثبيت SSH)
2.  فتح Bash Shell / سطر الأوامر / الطرفية إلى دليل المشاريع الخاصة بك (IE: `/mean/` )
3.  استنساخ شوكتك من git:

`git clone https://github.com/yourUserName/FreeCodeCamp.git`

سيؤدي هذا إلى تنزيل نسخة FCC الكاملة إلى دليل المشاريع.

`bash $ git clone https://github.com/yourUserName/FreeCodeCamp.git Cloning into 'FreeCodeCamp'... remote: Counting objects: 37294, done. remote: Compressing objects: 100% (13/13), done. remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281 Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done. Resolving deltas: 100% (26053/26053), done. Checking connectivity... done. Checking out files: 100% (573/573), done.`

### إعداد Upstream الخاص بك

1.  تغيير الدليل إلى دليل `FreeCodeCamp` الجديد
2.  إضافة جهاز تحكم عن بُعد إلى rep FCC الرسمي:

`git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git`

تهانينا ، لديك الآن نسخة محلية من repo FCC!

## الحفاظ على شوكة الخاص بك

الآن بعد أن أصبح لديك نسخة من شوكة ، هناك عمل ستحتاج إلى القيام به للحفاظ على تواجده.

## Rebasing من Upstream

افعل ذلك في كل مرة قبل إنشاء فرع للعلاقات العامة:

1.  تأكد من أنك في فرع `staging`

`bash $ git status On branch staging Your branch is up-to-date with 'origin/staging'.`

1.  إذا لم تكن على التدريج ، قم بحل أي ملفات / احتفالات معلقة وتسجيل خروج  
    `git checkout staging`
2.  قم بسحب مع rebase ضد `upstream` :

`git pull --rebase upstream staging`

سيؤدي ذلك إلى إلغاء جميع التغييرات على التدريج الرسمي دون إجراء التزام إضافي في إعادة الشراء المحلية.  
4\. (اختياري) قوة دفع التحديث التدريجي الخاص بك إلى شوكة GitHub

`git push origin staging --force`

سيؤدي ذلك إلى الكتابة فوق فرع التدريج على شوكة الخاص بك.

`bash $ git push origin staging --force Counting objects: 99, done. Delta compression using up to 12 threads. Compressing objects: 100% (38/38), done. Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done. Total 38 (delta 25), reused 0 (delta 0) To git@github.com:yourUserName/FreeCodeCamp.git f7a525c..8a2271d staging -> staging`