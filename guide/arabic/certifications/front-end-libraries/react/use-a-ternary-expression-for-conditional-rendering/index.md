---
title: Use a Ternary Expression for Conditional Rendering
localeTitle: استخدم تعبير Ternary للعرض الشرطي
---
## استخدم تعبير Ternary للعرض الشرطي

هذا التحدي هو استخدام Ternary Expression فقط بدلاً من استخدام `If/Else` في التعليمات البرمجية ،

## ملحوظة

يتكون المشغل الثلاثي من ثلاثة أجزاء ، ولكن يمكنك الجمع بين عدة تعبيرات ثلاثية معًا. وإليك البنية الأساسية:

 `condition ? expressionIfTrue : expressionIfFalse 
` 

## حل

هنا هو الحل عينة من استخدام التعبير الثلاثي. أولا تحتاج إلى إعلان الدولة في منشئ مثل هذا

 `constructor(props) { 
    super(props); 
    // change code below this line 
      this.state = { 
        input: '', 
        userAge: '' 
      } 
    // change code above this line 
    this.submit = this.submit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
` 

ثم المشغل الثلاثي

 `{ 
    /* change code here */ 
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree 
 
 } 
`