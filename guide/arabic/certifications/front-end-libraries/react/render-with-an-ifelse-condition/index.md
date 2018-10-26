---
title: Render with an If/Else Condition
localeTitle: تقديم مع حالة If / Else
---
## تقديم مع حالة If / Else

### طريقة

داخل طريقة تقديم المكون ، قم بكتابة / else عبارات تحتوي كل منها على طريقة إرجاع خاصة بها JSX مختلفة. وهذا يعطي المبرمجين القدرة على تقديم واجهة المستخدم المختلفة وفقا لظروف مختلفة.

أولاً ، قم بلف أسلوب الإرجاع الحالي داخل جملة if وقم بتعيين الشرط للتحقق مما إذا كان المتغير 'display' هو الصحيح. تذكر ، يمكنك الوصول إلى الحالة باستخدام `this.state` .

### حل

 `if (this.state.display === true) { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
      <h1>Displayed!</h1> 
    </div> 
  ); 
 } 
` 

بعد ذلك ، قم بإنشاء عبارة أخرى تقوم بإرجاع JSX نفسه **بدون** عنصر `h1` .

 `else { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
    </div> 
  ) 
 } 
`