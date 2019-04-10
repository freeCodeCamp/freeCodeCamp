---
title: Interfaces
localeTitle: واجهات
---# واجهات

أحد المبادئ الأساسية لـ TypeScript هو أن التحقق من الكتابة يركز على الشكل الذي تحتويه القيم. وهذا ما يسمى أحيانًا "كتابة البطة" أو "النمط الفرعي الهيكلي". في TypeScript ، تملأ `interfaces` دور تسمية هذه الأنواع ، وتعتبر طريقة فعالة لتعريف العقود داخل التعليمة البرمجية بالإضافة إلى العقود مع التعليمات البرمجية خارج المشروع.

 `interface User = { 
    firstName: string; 
    lastName: string; 
 } 
 
 function printUserInfo(user: User) { 
    console.log(user.firstName); 
 } 
 
 let myObj = {firstName: 'John', lastName: 'Doe'} 
 printUserInfo(myObj); 
` 

يمكن أن تحتوي الواجهات على معلمات اختيارية

 `interface User = { 
    email?: string; 
 } 
`