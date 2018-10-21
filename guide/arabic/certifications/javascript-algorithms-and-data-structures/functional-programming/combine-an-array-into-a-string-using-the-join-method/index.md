---
title: Combine an Array into a String Using the join Method
localeTitle: دمج صفيف في سلسلة باستخدام طريقة الانضمام
---
## ضم مجموعة في سلسلة باستخدام أسلوب الانضمام

### شرح المشكلة

استخدم طريقة `join` (من بين آخرين) داخل الدالة `sentensify` لإنشاء جملة من الكلمات في `str` السلسلة. يجب على الدالة إرجاع سلسلة. على سبيل المثال ، سيتم تحويل "I-like-Star-Wars" إلى "I like Star Wars". لهذا التحدي ، لا تستخدم طريقة `replace` .

#### روابط ذات صلة:

*   [Array.prototype.join ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.prototype.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [التعبيرات العادية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Hint1

قد تحتاج إلى تحويل السلسلة إلى صفيف أولاً.

### Hint2

قد تحتاج إلى استخدام تعبير عادي لتقسيم السلسلة.

### حل:

 `function sentensify(str) { 
  // Add your code below this line 
  return str.split(/\W/).join(' '); 
  // Add your code above this line 
 } 
 sentensify("May-the-force-be-with-you"); 
`