---
title: Installation
localeTitle: التركيب
---
## التركيب

![التركيب](https://cdn-media-1.freecodecamp.org/imgr/9ILjA1q.jpg)

لتبدأ بنفسك ، فإن الأمرين اللذين ستحتاجهما هما مترجم TypeScript ومحرر يدعم TypeScript.

في لقطة الشاشة أعلاه ، أقوم بتثبيت كل من المترجم و [TSLint](https://github.com/palantir/tslint) (الذي يشبه [ESLint](https://eslint.org/) ) باستخدام `npm` في الطرفية المتكاملة في [Visual Studio Code](https://code.visualstudio.com/) .

### تثبيت TypeScript

سيقوم هذا الأمر بتثبيت حزمة TypeScript كاعتمادية في مشروعك باستخدام [`npm`](https://www.npmjs.com/) وهو مدير حزم شائع.

 `npm i typescript 
` 

_ملاحظة:_ هناك [عدة خيارات](https://docs.npmjs.com/cli/install) `npm` حسب المكان الذي تريد تثبيت TypeScript فيه.

*   `npm i -g typescript` لتثبيت حزمة TypeScript بشكل عام
*   `npm i -D typescript` لتثبيت حزمة TypeScript على أنها تبعية من نوع dev

### TSLint

معرفة كيفية إعداد خيارات linting للنسخة مطبوعة على الآلة الكاتبة في [نسخة مطبوعة على الآلة الكاتبة](./) > [اللنت](./linter) ضمن **دليل freeCodeCamp.**

### تجميع ملف واحد لأسفل إلى جافا سكريبت

 `tsc multiplication.ts 
` 

_إلى ملاحظة_ يمكنك تكوين عملية تجميع TypeScript هذه كبرنامج نصي npm مخصص في `package.json` الخاص بك.

### خيارات الإعداد

 `touch tsconfig.json 
` 

هناك أيضًا خيار إنشاء ملف [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) يحدد ملفات الجذر وخيارات المترجم.

في ملف [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) ، على سبيل المثال ، يمكنك تحديد أنك تريد أن يتحول TypeScript إلى ES5 بدلاً من ES6.

### مثال سريع

![عمليه الضرب](https://cdn-media-1.freecodecamp.org/imgr/V5nP3xj.jpg)

في لقطة الشاشة أعلاه ، يمكنك رؤية ملفين - `multiplication.js` و `multiplication.ts` .

يقوم هذا البرنامج فقط بطباعة منتج رقمين قمت بتحديدهما مسبقًا.

> `multiplication.ts`

 `let a: number = 10; 
 let b: number = 2; 
 
 function showProduct(first: number, second: number): void { 
  console.info("Mathematical! The result is " + first * second + "."); 
 } 
 
 showProduct(a, b); 
 
 // Mathematical! The result is 20. 
` 

وبمجرد أن تنتهي من إنشاء `multiplication.ts` ، ويمكنني أن ترجمة ذلك الى جافا سكريبت باستخدام `tsc` القيادة التي تقف على ترجمة نسخة مطبوعة على الآلة الكاتبة.

> `multiplication.js`

 `var a = 10; 
 var b = 2; 
 
 function showProduct(first, second) { 
    console.info("Mathematical! The result is " + first * second + "."); 
 } 
 
 showProduct(a, b); 
 
 // Mathematical! The result is 20. 
` 

بام - لقد جمعت بنجاح TypeScript إلى JavaScript!