---
title: Algoritmo De Argumentos Opcionales
localeTitle: خوارزمية من الحجج الاختيارية
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

### التفسير:

يمكن أن يكون الأمر معقدًا بعض الشيء لفهم ما يجب فعله. عندما نبرمج هناك طرق مختلفة للقيام بشيء ما. بغض النظر عن الخوارزمية المستخدمة ، نحتاج إلى إنشاء وظيفة تقوم بما يلي:

*   يجب عليك إضافة رقمين يتم تلقيهما كمعلمات وإرجاع النتيجة.
*   عليك أن تتحقق من أن كلا الرقمين عبارة عن أرقام فعلية ، وإلا يتم **إرجاعهما** وإيقاف الوظيفة في ذلك الوقت.
*   يجب أن تتحقق من أن الوسيطات المستلمة هي واحدة أو اثنتين. إذا كان هناك أكثر من ذلك ، ينبغي تجاهلها.
*   إذا تم تلقي وسيطة واحدة فقط ، فيجب إرجاع الدالة التي تقبل وسيطة أخرى ثم يتم إجراء الإضافة.

## فكرة: 1

في كل مرة تعمل فيها حجة ، يجب عليك التحقق مما إذا كانت رقمًا أم لا. لتجنب تكرار التعليمات البرمجية ، يجب إنشاء وظيفة تتعامل مع هذه المهمة.

## فكرة: 2

عندما يكون من الضروري إرجاع الدالة ، فمن المستحسن التحقق مما إذا كانت الوسيطة الأولى والوحيدة عبارة عن رقم جديد وتربط الشفرة في ذلك.

## فكرة: 3

في حالة تلقي وسيطة واحدة فقط ، لا تقلق بشأن كيفية طلب الحجة الثانية ، ببساطة قم بتعريف الوظيفة بشكل صحيح وسيعمل كل شيء كما ينبغي.

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل أدناه!**

## حل الرمز:

 `function addTogether() { 
  // Función para comprobar si un número es realmente un número 
  // y retornar undefined en caso contrario. 
  var checkNum = function(num) { 
    if (typeof num !== 'number') { 
      return undefined; 
    } else 
      return num; 
  }; 
 
  // Comprobar si tenemos dos parámetros y si ambos son números 
  // En caso que no lo sean retornamos undefined 
  // retornamos la suma 
  if (arguments.length > 1) { 
    var a = checkNum(arguments[0]); 
    var b = checkNum(arguments[1]); 
    if (a === undefined || b === undefined) { 
      return undefined; 
    } else { 
      return a + b; 
    } 
  } else { 
    // Si solo es encontrado un parámetro retornamos una nueva función para solicitar un segundo parámetro 
    // Guardamos el primer argumento antes de entrar al scope de la nueva función 
    var c = arguments[0]; 
 
    // Comprobamos que sea número de nuevo, debe ser fuera del objeto que retornaremos 
    // en lugar de undefined. 
    if (checkNum(c)) { 
      // // Retornamos la función que espera el segundo parámetro. 
      return function(arg2) { 
        // Comprobamos que no sean números. 
        if (c === undefined || checkNum(arg2) === undefined) { 
          return undefined; 
        } else { 
          // Si lo son, sumamos. 
          return c + arg2; 
        } 
      }; 
    } 
  } 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLnz/0)

### شرح الكود:

*   أولاً نقوم بإنشاء دالة لغرض وحيد هو التحقق مما إذا كان الرقم رقمًا فعليًا ونعود غير محدد إذا لم يكن. استخدم **typeof** للتحقق.
*   نتحقق مما إذا كان لدينا **معلمتان** ، إذا كان لدينا ، فإننا نتحقق من أنها إذا كانت أرقامًا أو لا تستخدم الدالة **checkNum** .
*   إذا لم تكن المعلمات غير **محددة ،** نضيفها ونرجع المبلغ. إذا كان أحدهم غير معروف ، فإننا نرجع غير محدد.
*   في حالة وجود وسيطة واحدة فقط ، فإننا نقوم بإرجاع دالة جديدة تتوقع معلمتين. لهذا نقوم بتخزين المعلمة الثانية قبل إدخال الدالة لتجنب الكتابة فوق الوسيطة.
*   حتى داخل الجزء الأول _آخر ،_ نحتاج إلى التحقق من أن الوسيطة المحفوظة عبارة عن رقم ، إذا كان الأمر كذلك ، فإننا نعيد الدالة في انتظار الوسيطة الثانية.
*   الآن داخل الوظيفة التي سنقوم بها يجب أن نتحقق من أن المعلمة الجديدة هي رقم يستخدم **checkNum** ، إذا لم يتم **تحديدها فسنعيد** ذلك وإلا سنقوم بإضافة الأرقام وإرجاع النتيجة.

## الحل الثاني:

 `function addTogether() { 
  var args = new Array(arguments.length); 
  // Almacenamos los argumentos en un array. 
  for(var i = 0; i < args.length; ++i) { 
    args[i] = arguments[i]; 
  } 
  // Comprobamos la cantidad de argumentos. 
  if(args.length == 2){ 
    // Si hay dos argumentos, comprobamos el tipo de ambos 
    // Utiliza typeof para comprobar el tipo de argumentos. (ambos deben ser números) 
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
      return undefined; 
    } 
    return args[0]+args[1]; 
  } 
  // Cuando solo un argumento es provisto. 
  if(args.length == 1){ 
    a = args[0]; 
    // Comprobamos el tipo utilizando typeof. 
    if(typeof a!=='number'){ 
      return undefined; 
    } 
    else{ 
      // Hacemos uso de las funciones internas. 
      return function(b){ 
      // Comprobamos el segundo parámetro. 
      if(typeof b !=='number'){ 
        return undefined; 
      } 
      else 
        return a+b; 
      }; 
    } 
  } 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLoA/0)

## الحل الثالث:

 `//jshint esversion: 6 
 function addTogether() { 
  var args = Array.from(arguments); 
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ? 
      args.reduce((acc, n) => acc += n, 0): 
      (n) => typeof n === "number" ? 
        n + args[0]: 
        undefined; 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLoB/0)

### شرح الكود:

*   أولاً نكرر الحجج ونحقق أنها أرقام ، وإذا لم نعد نعيدها.
*   ثم نتحقق من أن قيمة الوسيطة أكبر من 1 ، إذا تم إضافة الوسيطات باستخدام `Array.prototype.reduce`
*   وإلا فإننا نعيد دالة تتحقق من أن المعلمة المستلمة هي رقم ويضيفها ، إذا لم نرد غير محدد.

> **ملاحظة:** الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة **محتوى ذي صلة** إلى المقالة. (يرجى عدم إزالة أي اسم موجود).