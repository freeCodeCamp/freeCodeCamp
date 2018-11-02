---
title: JSX
localeTitle: JSX
---
# JSX

> JSX اختصاراً لـ JavaScript XML.

JSX هو تعبير يستخدم عبارات HTML صالحة داخل JavaScript. يمكنك تعيين هذا التعبير لمتغير واستخدامه في مكان آخر. يمكنك الجمع بين تعبيرات JavaScript سارية أخرى و JSX في عبارات HTML هذه من خلال وضعها ضمن أقواس ( `{}` ). تقوم Babel كذلك بتجميع JSX إلى مكوّن من النوع `React.createElement()` .

### تعبيرات أحادية السطر ومتعددة الأسطر

تعبير في سطر مفرد سهل الاستخدام.

 `const one = <h1>Hello World!</h1>; 
` 

عندما تحتاج إلى استخدام أسطر متعددة في تعبير JSX واحد ، اكتب شفرتك داخل قوس واحد.

 `const two = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
` 

### بإمكانك استخدام علامات HTML فقط

 `const greet = <h1>Hello World!</h1>; 
` 

### الجمع بين تعبير JavaScript مع علامات HTML

يمكننا استخدام متغيرات JavaScript في الأقواس.

 `const who = "Quincy Larson"; 
 const greet = <h1>Hello {who}!</h1>; 
` 

يمكننا أيضًا استدعاء وظائف JavaScript الأخرى داخل الأقواس.

 `function who() { 
  return "World"; 
 } 
 const greet = <h1>Hello {who()}!</h1>; 
` 

### يُسمح فقط بعلامة أصل واحدة

يجب أن يحيط تعبير JSX على عنصر رئيسي واحد فقط. يمكننا إضافة عدة علامات متداخلة داخل العنصر الأصل فقط.

 `// This is valid. 
 const tags = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
 
 // This is not valid. 
 const tags = ( 
  <h1>Hello World!</h1> 
  <h3>This is my special list:</h3> 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
` 

### معلومات اكثر

*   [تقديم JSX](https://reactjs.org/docs/introducing-jsx.html)
