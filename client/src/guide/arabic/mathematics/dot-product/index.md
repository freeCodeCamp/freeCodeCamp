---
title: Dot Product
localeTitle: المنتج نقطة
---
## المنتج نقطة

منتج نقطة هو طريقة بضرب متجهين معاً للحصول على رقم واحد. منتجات دوت شائعة في الفيزياء والجبر الخطي.

يمكنك كتابة منتج نقطة من متجهين **a** و **b** مثل **a** · **b** .

يجب أن يكون المتشعبان من نفس الطول ليكون لهما منتج نقطي.

للعثور على منتج النقطة ، اضرب العنصر `nth` في المتجه الأول بواسطة عنصر `nth` في المتجه الثاني. افعل هذا لجميع العناصر. ثم ، ابحث عن مجموع كل هذه المنتجات. هذا المجموع هو منتج نقطة!

### خصائص منتجات Dot

يمكن أيضًا التعبير عن المنتج النقطي لنقطتين على أنه `a · b = ||a|| * ||b|| * cos(theta)` . في هذه الصيغة ، `||a||` هو مقدار المتجه **a** ، و `theta` هي الزاوية بين الموجهين.

سيكون لدى المتعامدين المتعامدين (المتعامدين مع المتعامدين) دائمًا منتج نقطة 0.

### مثال على العمل

على سبيل المثال ، لنفترض أن لديك المتجهات **a** و **b** . دع `a = (1 2 3 4)` و `b = (-1 0 1 2)` .

سيكون منتج النقطة `(1)(-1) + (2)(0) + (3)(1) + (4)(2) = -1 + 0 + 3 + 8 = 12` . حتى في هذه الحالة، لن أقول لكم **أن** · **ب** = 12.

### مثال الكود

وهنا مثال على وظيفة في جافا سكريبت. تقوم بإرجاع المنتج نقطة اثنين من الوسيطات متجه:

 `/** 
 * @param {array} a - A vector/array of numbers 
 * @param {array} b - A vector/array of numbers with the same length as a 
 * @returns {number} - The dot product of a and b 
 */ 
 function dotProduct(a, b) { 
  // Check if the lengths are the same - if not, there can't be a dot product 
  if (a.length !== b.length) { 
    throw "vector lengths must be equal"; 
  } 
 
  // Create a variable to store the sum as we calculate it 
  let product = 0; 
 
  // Loop through the vectors, calculate products, and add them to the total 
  for (let i = 0; i < a.length; i++) { 
    // You may want to ensure that a[i] and b[i] are both finite numbers 
    product += a[i] * b[i]; 
  } 
 
  return product; 
 } 
` 

### معلومات اكثر:

[ثلاثة أبعاد](../vectors/index.md)