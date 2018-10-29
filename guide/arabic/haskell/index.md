---
title: Haskell
localeTitle: هاسكل
---
## ما هو هاسكل؟

هاسكل هي لغة برمجة موحدة وعامة الغرض ، بحتة مع كتابة ثابتة وقوية ثابتة.

لدى هاسكل جذور عميقة في الرياضيات ، وسوف تتعلم قريباً تقدير الآثار المترتبة عليها.

## الإصدار

الإصدار الأخير حاليًا من GHC هو 8.6 (اعتبارًا من 12 تشرين الأول 2018)

## التركيب

الطريقة الموصى بها لتثبيت Haskell هي باستخدام مكدس stack: [تنزيل](https://docs.haskellstack.org/en/stable/README/#how-to-install) برنامج Stack هو برنامج متعدد المنصات لتطوير مشاريع هاسكل. ويهدف إلى Haskellers على حد سواء الجديدة وذوي الخبرة.

للبدء فعليًا في استخدام Haskell فأنت بحاجة إلى GHC (The Glasgow Haskell Compiler) ، وذلك لإعداد: [إعداد المكدس](https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide)

 `stack new my-project 
 cd my-project 
 stack setup 
 stack build 
 stack exec my-project-exe 
` 

كلمة الحذر ، حاول عدم استخدام تثبيت مكدس على الرغم من أنه سيتم تثبيت الحزمة على مستوى العالم ، إلا أنه لا يوصى بهذا لأن إصدارات مختلفة من الحزم متوافقة مع الإصدارات المختلفة من GHC. وبالتالي ، فإن استخدام النسخة المحلية من الحزمة باستخدام بنية المكدس هو أفضل طريقة للمتابعة.

## مرحبا بالعالم

 `main :: IO () 
 main = print "Hello Haskell :)" 
` 

احفظ فوق الرمز في ملف يسمى "hello.hs" واحفظه.

لتجميع مثال Hello World ، سيؤدي هذا إلى تحويل شفرة haskell الخاصة بنا إلى رموز بايت مفهومة.

 `stack ghc hello.hs 
 ./hello 
` 

## كابل بيانات

يوفر Hackage وثائق لـ Haskell

## تريد معرفة المزيد؟

*   هاسكل [رابط](https://wiki.haskell.org/Haskell) ويكي