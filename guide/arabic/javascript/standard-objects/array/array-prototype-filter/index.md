---
title: Array.prototype.filter
localeTitle: Array.prototype.filter
---
## Array.prototype.filter

تأخذ طريقة التصفية مصفوفة كمدخل. يأخذ كل عنصر في الصفيف ويطبق بيان شرطي ضده. إذا تم إرجاع هذا الشرطية true ، فسيتم "تنشيط" العنصر إلى صفيف الإخراج.

بمجرد أن يتم "ترشيح" كل عنصر في صفيف الإدخال على هذا النحو ، فإنه يخرج صفيفًا جديدًا يحتوي على كل عنصر يتم إرجاعه إلى true.

في هذا المثال أدناه ، هناك صفيف يحتوي على كائنات متعددة داخله. عادةً ، للتكرار من خلال هذا المصفوفة ، قد تستخدم حلقة for.

في هذه الحالة ، نريد الحصول على جميع الطلاب الذين تزيد درجاتهم عن 90 أو تساويها.

 `var students = [ 
  { name: 'Quincy', grade: 96 }, 
  { name: 'Jason', grade: 84 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Sam', grade: 65 }, 
  { name: 'Katie', grade: 90 } 
 ]; 
 //Define an array to push student objects to. 
 var studentsGrades = [] 
 for (var i = 0; i < students.length; i++) { 
  //Check if grade is greater than 90 
  if (students[i].grade >= 90) { 
    //Add a student to the studentsGrades array. 
    studentsGrades.push(students[i]) 
  } 
 } 
 
 return studentsGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 
` 

هذه الحلقة تعمل ، لكنها طويلة جدًا. كما يمكن أن تصبح مملة للكتابة عن الحلقات مرارًا وتكرارًا للعديد من المصفوفات التي تحتاج إلى تكرارها.

هذا هو حالة استخدام كبيرة للفلتر!

في ما يلي نفس المثال باستخدام الفلتر:

 `var students = [ 
  { name: 'Quincy', grade: 96 }, 
  { name: 'Jason', grade: 84 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Sam', grade: 65 }, 
  { name: 'Katie', grade: 90 } 
 ]; 
 
 var studentGrades = students.filter(function (student) { 
  //This tests if student.grade is greater than or equal to 90. It returns the "student" object if this conditional is met. 
  return student.grade >= 90; 
 }); 
 
 return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 
` 

طريقة التصفية أسرع بكثير للكتابة والنظافة للقراءة بينما لا تزال تحقق نفس الشيء. باستخدام تركيب ES6 ، يمكننا حتى تكرار تكرار حلقة 6-line مع الفلتر:

 `var students = [ 
  { name: 'Quincy', grade: 96 }, 
  { name: 'Jason', grade: 84 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Sam', grade: 65 }, 
  { name: 'Katie', grade: 90 } 
 ]; 
 
 var studentGrades = students.filter(student => student.grade >= 90); 
 return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 
` 

الفلتر مفيد جدًا وخيارًا رائعًا للصفحات لتصفية المصفوفات مقابل العبارات الشرطية.

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)