---
title: Combine Arrays with the Spread Operator
localeTitle: الجمع بين المصفوفات مع المشغل انتشار
---
## الجمع بين المصفوفات مع المشغل انتشار

*   الحل هو بالضبط مثل المثال المعطى. ما عليك سوى إدخال المصفوفة `fragment[]` في مصفوفة `sentence[]` في الفهرس المرغوب.

## حل:

 `function spreadOut() { 
  let fragment = ['to', 'code']; 
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line 
  return sentence; 
 } 
 
 // do not change code below this line 
 console.log(spreadOut()); 
`