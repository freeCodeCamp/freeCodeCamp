---
title: Hello World In Ionic 
localeTitle: مرحبا العالم في الأيونية
---
# مرحبا العالم في الأيونية !!

### هذه هي المقالة الافتتاحية التي ستتم من خلالك لجعل برنامج Hello World simlple في Ionic.

### خطوات

#### 1\. تثبيت `ionic` ، `npm` ، `angular` و `cordova` إذا لم يتم تثبيت. \[انظر المقدمة [الأولى](https://guide.freecodecamp.org/ionic) لمزيد من المعلومات\]

 `sudo apt-get install nodejs 
 sudo apt-get install npm 
 sudo npm install -g ionic cordova 
` 

#### 2\. قم بإنشاء مجلد باسم `helloworld`

 `ionic start helloworld blank 
` 

ملحوظة: حيث أن هذا هو مشروع صغير أدخل لا أو N عند المطالبة أثناء تنفيذ البرنامج.

#### 3\. قم بتغيير الدليل إلى `helloworld` \[هذا هو دليلك الأيوني\]

 `cd helloworld 
` 

#### 4\. افتح المجلد في محرر النص الخاص بك. سترى مختلف الملفات والمجلدات الفرعية.

لا داعي للذعر يتم إنشاء هذه الملفات تلقائيًا بواسطة npm. اذهب إلى `src` -> `page` -> `home` -> `home.html` .

#### 5\. تنسيق الملف الأساسي

 `` `home.html` is the html page where you can write html syntax.<br/> 
 
 `home.scss` is the css page to write css syntax.<br/> 
 
 `home.ts` is the typescript page to write typescript code. 
`` 

#### 6\. احذف القالب وأضف بناء الجملة html كما هو موضح في الصورة.

 `
 <ion-header> 
  <ion-navbar> 
    <ion-title> 
      Ionic Project 
    </ion-title> 
   </ion-navbar> 
  </ion-header> 
 
  <ion-content padding> 
   <h2>Hello World </h2> 
  </ion-content> 
 ``` 
 
 
 #### 7. Save the code and run 
` 

الصدف خدمة الأيونية \`\` \`

#### 8\. لمشاهدة الرمز الخاص بك قيد التشغيل ، انتقل إلى المتصفح وافتح localhost: 8100 في عنوان url.