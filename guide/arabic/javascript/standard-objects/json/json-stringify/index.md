---
title: JSON Stringify
localeTitle: JSON Stringify
---
## JSON Stringify

تحوّل طريقة `JSON.stringify()` قيمة جافا سكريبت _آمنة_ JSON إلى سلسلة JSON متوافقة.

ما هي قيم JSON الآمنة التي قد يطرحها المرء! دعونا نجعل قائمة بجميع قيم JSON-unsafe وأي شيء غير موجود في القائمة يمكن اعتباره آمنًا من JSON.

#### قيم JSON-unsafe:

*   `undefined`
*   `function(){}`
*   (ES6 +) `Symbol`
*   كائن ذو مرجع (مراجع) دائرية فيه

#### بناء الجملة

 `  JSON.stringify( value [, replacer [, space]]) 
` 

في أبسط أشكالها وأكثرها استخدامًا:

 `  JSON.stringify( value ) 
` 

#### المعلمات

`value` : `value` جافا سكريبت "stringified".

`replacer` : (اختياري) وظيفة أو مصفوفة تعمل كمرشح لخصائص كائن القيمة المراد تضمينها في سلسلة JSON.

`space` (اختياري) قيمة رقمية أو سلسلة لتوفير المسافة البادئة لسلسلة JSON. إذا تم توفير قيمة رقمية ، فأن العديد من المسافات (حتى 10) تعمل كحاشية indentaion في كل مستوى. إذا تم توفير قيمة سلسلة ، فإن هذه السلسلة (تصل إلى 10 أجهزة chracters أولية) تعمل كمسافات عند كل مستوى.

#### نوع العودة

نوع إرجاع الأسلوب: `string` .

## وصف

يتم تحويل قيم JSON الآمنة إلى نموذج سلسلة JSON المقابل لها. تظهر قيم JSON-unsafe من جهة أخرى:

*   `undefined` إذا تم تمريرها كقيم إلى الأسلوب
*   `null` إذا تم تمريرها كعنصر صفيف
*   لا شيء إذا تم تمريره كخصائص على كائن
*   يرمي خطأ إذا كان كائن مع مراجع (مراجع) دائرية عليه.

 ``  //JSON-safe values 
  JSON.stringify({});                  // '{}' 
  JSON.stringify(true);                // 'true' 
  JSON.stringify('foo');               // '"foo"' 
  JSON.stringify([1, 'false', false]); // '[1,"false",false]' 
  JSON.stringify({ x: 5 });            // '{"x":5}' 
  JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))  // '"2006-01-02T15:04:05.000Z"' 
 
  //JSON-unsafe values passed as values to the method 
  JSON.stringify( undefined );                    // undefined 
  JSON.stringify( function(){} );                    // undefined 
 
  //JSON-unsafe values passed as array elements 
  JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });  // '{"x":[10,null,null,null]}' 
 
 //JSON-unsafe values passed as properties on a object 
  JSON.stringify({ x: undefined, y: Object, z: Symbol('') });  // '{}' 
 
  //JSON-unsafe object with circular reference on it 
  var o = { }, 
    a = { 
      b: 42, 
      c: o, 
      d: function(){} 
    }; 
 
  // create a circular reference inside `a` 
  oe = a; 
 
  // would throw an error on the circular reference 
  // JSON.stringify( a ); 
`` 

`JSON.stringify(...)` بشكل مختلف إذا كان الكائن الذي تم تمريره إليه يحتوي على طريقة `toJSON()` محددة عليه. سيتم إجراء تسلسل قيمة الإرجاع من أسلوب `toJSON()` بدلاً من الكائن نفسه.

يأتي هذا في متناول اليد بشكل استثنائي عندما يحتوي الكائن على أي قيمة JSON غير قانونية.

 ``   //JSON-unsafe values passed as properties on a object 
   var obj = { x: undefined, y: Object, z: Symbol('') }; 
 
   //JSON.stringify(obj);  logs '{}' 
   obj.toJSON = function(){ 
    return { 
      x:"undefined", 
      y: "Function", 
      z:"Symbol" 
    } 
   } 
   JSON.stringify(obj);  //"{"x":"undefined","y":"Function","z":"Symbol"}" 
 
  //JSON-unsafe object with circular reference on it 
  var o = { }, 
    a = { 
      b: 42, 
      c: o, 
      d: function(){} 
    }; 
 
  // create a circular reference inside `a` 
  oe = a; 
 
  // would throw an error on the circular reference 
  // JSON.stringify( a ); 
 
  // define a custom JSON value serialization 
  a.toJSON = function() { 
    // only include the `b` property for serialization 
    return { b: this.b }; 
  }; 
 
  JSON.stringify( a ); // "{"b":42}" 
`` 

#### `replacer`

`replacer` ، كما ذكرنا سابقًا ، هو مرشح يشير إلى الخصائص التي سيتم تضمينها في سلسلة JSON. يمكن أن يكون إما صفيف أو وظيفة. عند المصفوفة ، يحتوي البديل على تمثيلات السلسلة الخاصة بتلك الخصائص فقط التي سيتم تضمينها في سلسلة JSON.

 `  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties 
` 

إذا كان " `replacer` " دالة ، فسيتم استدعاؤه مرة واحدة للعنصر نفسه ، ثم مرة واحدة لكل خاصية في الكائن ، وفي كل مرة يتم تمرير وسيطين ، _مفتاح_ _وقيمة_ . لتخطي _مفتاح_ في التسلسل ، يجب أن يتم إرجاع `undefined` . خلاف ذلك ، يجب إرجاع _القيمة_ المقدمة. إذا كانت أي من هذه _القيم_ عبارة عن كائنات بحد ذاتها ، فإن وظيفة `replacer` تسلسلها بشكل متكرر كذلك.

 `  function replacer(key, value) { 
    // Filtering out properties 
    if (typeof value === 'string') { 
      return undefined; 
    } 
    return value; 
  } 
 
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, replacer);  // '{"week":45,"month":7}' 
` 

إذا كان يتم تمرير صفيف إلى `JSON.stringify()` و `replacer` عوائد `undefined` لأي من عناصره، يتم استبدال قيمة العنصر مع `null` . لا تستطيع وظائف `replacer` إزالة القيم من صفيف.

 `  function replacer(key, value) { 
    // Filtering out properties 
    if (typeof value === 'string') { 
      return undefined; 
    } 
    return value; 
  } 
 
  var foo = ['Mozilla', 'box', 45, 'car', 7]; 
  JSON.stringify(foo, replacer);  // "[null,null,45,null,7]" 
` 

#### `space`

معلمة `space` المستخدمة في المسافة البادئة تجعل نتيجة `JSON.stringify()` أجمل.

 `  var a = { 
    b: 42, 
    c: "42", 
    d: [1,2,3] 
  }; 
 
  JSON.stringify( a, null, 3 ); 
  // "{ 
  //    "b": 42, 
  //    "c": "42", 
  //    "d": [ 
  //       1, 
  //       2, 
  //       3 
  //    ] 
  // }" 
 
  JSON.stringify( a, null, "-----" ); 
  // "{ 
  // -----"b": 42, 
  // -----"c": "42", 
  // -----"d": [ 
  // ----------1, 
  // ----------2, 
  // ----------3 
  // -----] 
  // }" 
` 

#### معلومات اكثر:

الرجوع إلى [مستندات MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) .