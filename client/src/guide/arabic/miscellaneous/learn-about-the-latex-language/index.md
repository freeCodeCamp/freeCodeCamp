---
title: Learn About the Latex Language
localeTitle: تعرف على لغة اللاتكس
---
تم تصميم LaTeX (وضوحا LAH-tekh أو LAY-tekh) لإنتاج الوثائق التقنية والعلمية. يمكنك بسهولة إنشاء المصفوفات والمصفوفات ووظائف الرياضيات الأخرى باستخدام نظام التنضيد هذا. يمكن للمستخدمين تنسيق المستندات الخاصة بهم باستخدام التعليمات البرمجية بدلاً من واجهة المستخدم الرسومية (GUI).

`$$ (latex language) $$`

يمكنك تضمين Latex في GitterIM. أمثلة:

## مجموعة مصفوفة

 `$$\begin{array} {cc} 
 arr11 & arr12\\ 
 arr21 & arr22\\ 
 \end{array}$$ 
` 

## مصفوفة

 `$$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$ 
` 

## التنسيق

 `$$\huge\textstyle\color{#F00}{BigRed}\small\textstyle\color{#0F0}{SmallGreen}$$ 
` 

[دعم الوظائف](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)

## تفاصيل

[KaTeX Github Repo](https://github.com/Khan/KaTeX) LaTeX هو نظام تنضيد عالي الجودة. يتضمن ميزات مصممة لإنتاج الوثائق التقنية والعلمية. LaTeX هو المعيار الواقعي للاتصال ونشر الوثائق العلمية. مزاياه ملحوظة في وثائق طويلة مثل الكتب والأوراق أو الأطروحة.

يستخدم Gitter Katex (تنفيذ مخصص لـ LaTeX) ويمكن استخدامه لتقديم الكود التالي:

 `$$\begin{array} {cc} 
 item11 & item12\ 
 item21 & item 22\ 
 \end{array} 
 $$ 
` 

نص:

*   `$$\huge\textstyle{some text}$$` -> $$ \\ huge \\ textstyle {some text} $$
*   `$$\color{#F90}{some text}$$` -> $$ \\ color {# F90} {some text} $$