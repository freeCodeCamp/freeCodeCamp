---
title: Array.prototype.reduce
localeTitle: Array.prototype.reduce
---
## Array.prototype.reduce

`reduce()` طريقة `reduce()` مجموعة من القيم إلى قيمة واحدة فقط.

يمكن أن تكون القيمة المفردة التي يتم إرجاعها من أي نوع.

### مثال 1

تحويل مجموعة من الأعداد الصحيحة إلى مجموع كل الأعداد الصحيحة في الصفيف.

 `    var numbers = [1,2,3]; 
    var sum = numbers.reduce(function(total, current){ 
        return total + current; 
    }); 
    console.log(sum); 
` 

هذا سوف إخراج `6` إلى وحدة التحكم.

### وصف

وقد سميت طريقة `reduce()` بسكين الجيش السويسري ، أو متعدد الأدوات ، لطرق تحويل الصفيف. توفر الأخرى ، مثل `map()` و `filter()` ، تحويلات أكثر تحديدًا ، بينما يمكن استخدام `reduce()` لتحويل المصفوفات إلى أي إخراج ترغب فيه.

### بناء الجملة

 `    arr.reduce(callback[, initialValue]) 
` 

*   وسيطة `callback` هي دالة سيتم استدعاؤها مرة واحدة لكل عنصر في الصفيف. تأخذ هذه الدالة أربع حجج ، ولكن غالبًا ما يتم استخدام الأولين فقط.
    *   _تراكم_ - القيمة التي تم إرجاعها للتكرار السابق
    *   _currentValue_ - العنصر الحالي في الصفيف
    *   _index_ - فهرس العنصر الحالي
    *   _مجموعة_ - _الصفيف_ الأصلي الذي تم استدعاء الحد
*   وسيطة `initialValue` اختيارية. إذا تم توفيره ، فسيتم استخدامه كقيمة تراكم أولية في الاستدعاء الأول لوظيفة رد الاتصال (راجع المثال 2 أدناه).

### مثال 2

قم بتحويل صفيف من السلاسل إلى كائن واحد يُظهر عدد المرات التي تظهر فيها كل سلسلة في الصفيف. لاحظ هذه المكالمة لتقليل التمريرات إلى كائن فارغ `{}` كمعلمة `initialValue` . سيتم استخدام هذا كقيمة أولية للمجمع (الوسيطة الأولى) التي تم تمريرها إلى وظيفة رد الاتصال.

 `var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']; 
 
 var petCounts = pets.reduce(function(obj, pet){ 
    if (!obj[pet]) { 
        obj[pet] = 1; 
    } else { 
        obj[pet]++; 
    } 
    return obj; 
 }, {}); 
 
 console.log(petCounts); 
` 

انتاج: `js { dog: 2, chicken: 3, cat: 1, rabbit: 1 }`

## معلومات اكثر:

*   [كيفية عمل طريقة Reduce في JavaScript ، وقت استخدامها ، وبعض الأشياء الرائعة التي يمكنها القيام بها](https://medium.freecodecamp.org/reduce-f47a7da511a9)
*   [التقليل المتقدم](https://www.youtube.com/watch?v=1DMolJ2FrNY)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)