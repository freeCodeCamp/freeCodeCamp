---
title: Learn a Little About Latex
localeTitle: تعلم القليل عن اللاتكس
---
تم تصميم LaTeX لإنتاج الوثائق التقنية والعلمية. يمكنك إنشاء مصفوفة ، المصفوفات أو عدة وظائف الرياضيات الأخرى.

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