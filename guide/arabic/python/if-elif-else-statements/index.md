---
title: If Elif Else Statements
localeTitle: إذا كانت بيانات Elif Else
---
## إذا كانت بيانات Elif Else

تعد بنية `if` / `elif` / `else` طريقة شائعة للتحكم في تدفق البرنامج ، مما يسمح لك بتنفيذ مقاطع محددة من الكود بناءً على قيمة بعض البيانات. إذا كانت الحالة التالية للكلمة الرئيسية في `if` تقييمها `true` ، فسيتم تنفيذ كتلة الرمز: لاحظ أنه لا يتم استخدام الأقواس قبل وبعد التحقق من الشروط كما هو الحال في اللغات الأخرى.

 `if True: 
  print('If block will execute!') 
` 

 `x = 5 
 
 if x > 4: 
  print("The condition was true!") #this statement executes 
` 

يمكنك إضافة اختياريا `else` ردا على ذلك سيتم تنفيذ إذا كان الشرط `false` :

 `if not True: 
  print('If statement will execute!') 
 else: 
  print('Else statement will execute!') 
` 

أو يمكنك أيضًا مشاهدة هذا المثال

 `y = 3 
 
 if y > 4: 
  print("I won't print!") #this statement does not execute 
 else: 
  print("The condition wasn't true!") #this statement executes 
` 

_لاحظ أنه لا يوجد شرط يتبع الكلمة الأساسية `else` - فإنه يضبط جميع الحالات التي يكون فيها الشرط `false`_

يمكن التحقق من الشروط المتعددة من خلال تضمين واحد أو أكثر من شيكات `elif` بعد العبارة الأولية `if` تنفيذ شرط واحد فقط:

 `z = 7 
 
 if z > 8: 
  print("I won't print!") #this statement does not execute 
 elif z > 5: 
  print("I will!") #this statement will execute 
 elif z > 6: 
  print("I also won't print!") #this statement does not execute 
 else: 
  print("Neither will I!") #this statement does not execute 
` 

_ملاحظة فقط الشرط الأول أن يقيم كما `true` سيتم تنفيذ. على الرغم من أن `z > 6` `true` ، فإن كتلة `if/elif/else` تنتهي بعد أول شرط حقيقي. هذا يعني أنه سيتم تنفيذ أمر `else` فقط إذا لم تكن أي من الشروط `true` ._

يمكننا أيضا إنشاء متداخلة إذا كان لصنع القرار. قبل السابق يرجى الرجوع إلى href = 'https: //guide.freecodecamp.org/python/code-blocks-and-indentation' target = '\_ blank' rel = 'nofollow'> دليل المسافة البادئة مرة واحدة قبل السابقة.

لنأخذ مثالاً على العثور على رقم أكبر من "10"

 `python 
 x = 34 
 if x %  2 == 0:  # this is how you create a comment and now, checking for even. 
  if x > 10: 
    print("This number is even and is greater than 10") 
  else: 
    print("This number is even, but not greater 10") 
 else: 
  print ("The number is not even. So point checking further.") 
` 

كان هذا مجرد مثال بسيط للتداخل. لا تتردد في استكشاف المزيد عبر الإنترنت.

في حين أن الأمثلة المذكورة أعلاه بسيطة ، يمكنك إنشاء شروط معقدة باستخدام [المقارنات](https://guide.freecodecamp.org/python/comparisons) [المنطقية والعوامل المنطقية](https://guide.freecodecamp.org/python/boolean-operations) .

**_مضمنة python if-else statement_**

يمكننا أيضًا استخدام عبارات if-else في وظائف python المضمنة يجب أن يتحقق المثال التالي إذا كان الرقم أكبر من أو يساوي 50 ، إذا كانت الإجابة نعم صحيح:

 `python 
 x = 89 
 is_greater = True if x >= 50 else False 
 
 print(is_greater) 
` 

انتاج |

 `> 
 True 
 > 
`