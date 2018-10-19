---
title: Object Destructuring
localeTitle: Object Destructuring
---
# Object Destructuring

تعتبر عملية التصفية طريقة ملائمة لاستخلاص قيم متعددة من البيانات المخزنة في الكائنات. يمكن استخدامه في المواقع التي تتلقى البيانات (مثل الجانب الأيسر من الواجب). يتم تقديم هذه الميزة في `ECMAScript 6` .

يتم تحديد كيفية استخراج القيم عبر الأنماط (اقرأ على سبيل المثال).

### الواجب الأساسي

 `var userInfo = {name: 'neel', age: 22}; 
 var {name, age} = userInfo; 
 
 console.log(name); // neel 
 console.log(age); // 22 
` 

### التنازل دون تصريح

يمكن تعيين متغير قيمته مع التدمير المنفصل عن تصريحه.

 `var name, age; 
 
 ({name, age} = {name: 'neel', age: 22}); 
` 

> و `( .. )` حول جملة الواجب هو بناء جملة مطلوب عند استخدام التعيين الحرفي كائن الهدف دون تصريح.
> 
> `{name, age} = {name: 'neel', age: 22}` ليس بناء جملة مستقلًا صالحًا ، نظرًا لأن `{name, age}` على الجانب الأيسر يعتبر كتلة وليس حرجًا للكائن.
> 
> ومع ذلك ، `({name, age} = {name: 'neel', age: 22})` is valid، as `var {name, age} = {name: 'neel', age: 22}`

### تعيين لأسماء المتغيرات الجديدة

يمكن فك أي خاصية من أحد الكائنات وتخصيصها لمتغير باسم مختلف عن خاصية الكائن.

 `var userInfo = {a: 'neel', b: 22}; 
 var {a: name, b: bar} = userInfo; 
 
 console.log(name); // neel 
 console.log(bar); // 22 
` 

### قيم افتراضية

متغير يمكن تعيين الافتراضي، في حالة أن القيمة تفكيك من الكائن هو `undefined` .

 `var {name = 'ananonumys', age = 20} = {name: 'neel'}; 
 
 console.log(name); // neel 
 console.log(age); // 20 
` 

### تعيين أسماء المتغيرات الجديدة وتوفير القيم الافتراضية

يمكن أن يكون العقار على حد سواء

1.  تفكيكها من كائن وتعيين لمتغير مع اسم مختلف و
2.  تعيين قيمة افتراضية في حالة القيمة غير `undefined` غير `undefined` .

 `var {a:name = 'ananonumys', b:age = 20} = {age: 22}; 
 
 console.log(name); // ananonumys 
 console.log(age); // 22 
` 

### إعداد القيمة الافتراضية لعلامة دالة

#### ES5 الإصدار

 `function getUserInfo(data) { 
  data = data === undefined ? {} : data; 
  var name = data.name === undefined ? 'ananonumys' : data.name; 
  var age = data.age === undefined ? 20 : data.age; 
  var location = data.location === undefined ? 'india' : data.location; 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
` 

#### نسخة ES2015

 `function getUserInfo({name = 'ananonumys', age = 20, location = 'india'} = {}) { 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
` 

> في توقيع الدالة `getUserInfo` أعلاه ، يتم تعيين الجانب الأيسر المدمر إلى كائن حرفي فارغ على الجانب الأيمن: `{name = 'ananonumys', age = 20, location = 'india'} = {}` . كان بإمكانك أيضًا كتابة الوظيفة بدون تعيين الجانب الأيمن. ومع ذلك ، إذا قمت `getUserInfo()` تعيين الجانب الأيمن ، ستبحث الدالة عن وسيطة واحدة على الأقل `getUserInfo()` عند استدعاء ، بينما في شكلها الحالي ، يمكنك ببساطة استدعاء `getUserInfo()` دون توفير أي معلمات. يفيد التصميم الحالي إذا كنت تريد أن تكون قادرًا على استدعاء الدالة دون توفير أي معلمات ، يمكن أن يكون الآخر مفيدًا عندما تريد التأكد من تمرير كائن إلى الوظيفة.

### كائن متداخل ومجموعة المدمر

 `var metadata = { 
    title: 'Scratchpad', 
    translations: [ 
       { 
        locale: 'de', 
        localization_tags: [], 
        last_edit: '2014-04-14T08:43:37', 
        url: '/de/docs/Tools/Scratchpad', 
        title: 'JavaScript-Umgebung' 
       } 
    ], 
    url: '/en-US/docs/Tools/Scratchpad' 
 }; 
 
 var {title: englishTitle, translations: [{title: localeTitle}]} = metadata; 
 
 console.log(englishTitle); // "Scratchpad" 
 console.log(localeTitle);  // "JavaScript-Umgebung" 
` 

### للتكرار والتدمير

 `var people = [ 
  { 
    name: 'Mike Smith', 
    family: { 
      mother: 'Jane Smith', 
      father: 'Harry Smith', 
      sister: 'Samantha Smith' 
    }, 
    age: 35 
  }, 
  { 
    name: 'Tom Jones', 
    family: { 
      mother: 'Norah Jones', 
      father: 'Richard Jones', 
      brother: 'Howard Jones' 
    }, 
    age: 25 
  } 
 ]; 
 
 for (var {name: n, family: {father: f}} of people) { 
  console.log('Name: ' + n + ', Father: ' + f); 
 } 
 
 // "Name: Mike Smith, Father: Harry Smith" 
 // "Name: Tom Jones, Father: Richard Jones" 
` 

### تفريغ الحقول من الكائنات التي تم تمريرها كمعلمة دالة

 `function userId({id}) { 
  return id; 
 } 
 
 function whois({displayName, fullName: {firstName: name}}) { 
  console.log(displayName + ' is ' + name); 
 } 
 
 var user = { 
  id: 42, 
  displayName: 'jdoe', 
  fullName: { 
      firstName: 'John', 
      lastName: 'Doe' 
  } 
 }; 
 
 console.log('userId: ' + userId(user)); // "userId: 42" 
 whois(user); // "jdoe is John" 
` 

هذا unpacks `id` و `displayName` و `firstName` من كائن المستخدم `firstName` .

### أسماء خصائص كائن محسوب و destructuring

 `let key = 'z'; 
 let {[key]: foo} = {z: 'bar'}; 
 
 console.log(foo); // "bar" 
` 

انظر أيضا: **Object Destructuring** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)