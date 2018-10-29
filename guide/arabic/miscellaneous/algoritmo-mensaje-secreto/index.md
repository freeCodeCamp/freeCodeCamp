---
title: Algoritmo Mensaje Secreto
localeTitle: خوارزمية الرسائل السرية
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

### التفسير:

هذه المشكلة بسيطة للغاية ، ستحصل على سلسلة تمثل عبارة في الشفرة الثنائية ، وسيكون عليك ترجمتها إلى كلمات. لا توجد طريقة مباشرة للقيام بذلك ، لذلك عليك أن تترجم مرتين.

## فكرة: 1

يجب عليك أولاً التحويل من **ثنائي** إلى **عشري** ومن ثم ترجمتها إلى أحرف.

## فكرة: 2

تكون الأمور أسهل إذا ركزت على أجزاء صغيرة ، وقم بتقسيم الرسالة إلى ما تتلقاه والتركيز على حرف واحد في كل مرة.

## فكرة: 3

تأكد بعد تحويل الشفرة الثنائية إلى الحرف العشري لإعادة تعيين أي من المتغيرات التي استخدمتها لتنفيذ الترجمة. أيضا ، لا تنس أن تضع كل شيء مرة أخرى على سلسلة واحدة.

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل أدناه!**

## حل الرمز:

 `function binaryAgent(str) { 
  biString = str.split(' '); 
  uniString = []; 
 
  // Utilizando el parámetro base en parseInt podemos convertir el número 
  // binario a número decimal mientras simultáneamente lo convertimos a carácter. 
 
  for(i=0;i < biString.length;i++){ 
    uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
  } 
  // Simplemente unimos la cadena. 
  return uniString.join(''); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLnm/0)

# شرح الكود:

*   نحن نفصل السلسلة في صفيف من السلاسل المفصولة بفراغات.
*   نخلق متغيرًا سيكون ضروريًا على طول الطريق ، وهذا الاسم لا يحتاج إلى شرح.
*   نكرر من خلال المصفوفة الثنائية الجديدة.
*   نقوم بتحويلها إلى قيمة عشرية باستخدام parseInt ( _binary_ ، 2) (مع المعلمة الثانية نخبرك على أي أساس لدينا أرقام حاليا)
*   في النهاية ، نعيد الرسالة المحولة.

## الحل الثاني:

 `function binaryAgent(str) { 
  // Separamos el código binario por sus espacios. 
  str = str.split(' '); 
  var power; 
  var decValue = 0; 
  var sentence = ''; 
 
  // Comprobamos cada número binario de la matriz. 
  for (var s = 0; s < str.length; s++) { 
    // Comprobamos cada bit del número binario. 
    for (var t = 0; t < str[s].length; t++) { 
      // Esto solo toma en consideración los activos. 
      if (str[s][t] == 1) { 
        // Esto es equivalente a 2 ** posición. 
        power = Math.pow(2, +str[s].length - t - 1); 
        decValue += power; 
 
        // Guardamos el valor decimal sumándolo al anterior. 
      } 
    } 
 
    // Luego de que el número binario es convertido a decimal, lo convertimos en una cadena y lo guardamos. 
    sentence += (String.fromCharCode(decValue)); 
 
    // Reseteamos el valor decimal para el próximo número binario. 
    decValue = 0; 
  } 
 
  return sentence; 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLno/0)

# شرح الكود:

*   لكل سلسلة ثنائية نتحقق منها وتجاهل الأصفار.
*   لأولئك الذين هم واحد أو نشط نقوم بتحويلها إلى عشري. هذا يأخذ في الاعتبار الموقف والسلطة المناسبة التي يجب أن تكون مرتفعة.
*   نقوم بحفظ الطاقة في الطاقة المتغيرة مضيفًا إلى **الطاقة** السابقة في متغير **القيمة decValue** . سيستمر هذا المتغير في إضافة صلاحيات الأصول إلى نهاية الحلقة ثم إرجاع رقم عشري.
*   نقوم بتحويل الرقم العشري النهائي إلى ASCII وإضافته إلى متغير **الجملة** مع أي سلسلة نصية أخرى تم تحويلها وتخزينها بالفعل.
*   نقوم بإعادة تعيين قيمة متغير **decValue** لتجنب الأرقام العشرية الخاطئة قبل الاستمرار في الحلقة الخارجية.

## الحل الثالث:

 `function binaryAgent(str) { 
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLnp/0)

# شرح الكود:

*   أولاً نستخدم `split()` لكي نتمكن من عمل كل حرف كعنصر مصفوفة.
*   ثم نستخدم `map()` لمعالجة كل عنصر ثنائي إلى عشري باستخدام `pareseInt()`
*   وأخيرًا ، يمكننا استخدام `String.fromCharCode()` لتحويل كل رقم ASCII إلى الحرف المطابق له.
*   ومع ذلك ، يتوقع `fromCharCode()` سلسلة من الأرقام بدلاً من مصفوفة. يمكننا استخدام ES6 Spread Operator لتمرير مجموعة من الأرقام كأرقام فردية. مزيد من المعلومات: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread\_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## الحل الرابع:

 `function binaryAgent(str) { 
  var re = /(\d+)(\s?)/g; 
  function convertToChar(match,p1,p2){ 
    return String.fromCharCode(parseInt(p1, 2)); 
  } 
  return str.replace(re, convertToChar); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLnr/0)

# شرح الكود:

*   في هذا الحل نستخدم `String.replace()` للعثور على جميع الأرقام الثنائية وتحويلها إلى أحرف.
*   نستخدم أولاً تعبيرًا عاديًا للعثور على جميع الأرقام الثنائية والمساحات النهائية الاختيارية.
*   بعد ذلك ، نقوم بتعريف دالة تقوم بتحويل كل أول subcoincidence إلى رقم مع `parseInt()` ثم حرف مع `String.fromCharCode()` . عن طريق عدم استخدام subcoincidence الثاني نترك جانبا جميع المسافات التي بين كل رقم ثنائي.
*   وأخيرًا نستخدم تعبيرنا المعتاد والوظيفة المحددة كمعلمة من `String.replace()` .

> **ملاحظة:** الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة **محتوى ذي صلة** إلى المقالة. (يرجى عدم إزالة أي اسم موجود).