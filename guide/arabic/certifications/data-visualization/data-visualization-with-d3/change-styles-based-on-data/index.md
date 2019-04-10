---
title: Change Styles Based on Data
localeTitle: تغيير الأنماط استنادًا إلى البيانات
---
## تغيير الأنماط استنادًا إلى البيانات

ذكر نفسك مرة أخرى ما هي وظيفة رد الاتصال مع [هذا](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

هناك طريقتان يمكنك من خلالهما إكمال هذا الجزء ، إما باستخدام المنطق أو المشغل الثلاثي إذا كان غير ذلك.

**إذا كان آخر المنطق**

مثال من [w3school](https://www.w3schools.com/js/js_if_else.asp)

\`\` \`جافا سكريبت

const const = 50؛

إذا (مال <50) {

عودة "أنا غني" ؛

}

else {

العودة "أنا فقير" ؛

}

 `What you need to remember is the bracket that the if-else logic associate with, (argument) and {statement} 
 
 **Try Yourself Now**  👩‍💻👨‍💻 
 
 
 
 **Ternary operator** 
 
 A more detailed explanation [here](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff). Ternary operator is a lot more concise and quicker to remember for a simple true or false statement. Read [this](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394) 
` 

جافا سكريبت

شرط ؟ القيمة إذا كانت صحيحة: value if false

 `For someone who still not sure here is a solution by using If-else statement 
` 

جافا سكريبت .style ("color"، (d) => { إذا ((د <20) { العودة "الحمراء" } else { العودة "الخضراء" } }) \`\` \`