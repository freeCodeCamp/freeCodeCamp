---
title: Use an IIFE to Create a Module
localeTitle: استخدم IIFE لإنشاء وحدة نمطية
---
## استخدم IIFE لإنشاء وحدة نمطية

### طريقة

يجب أن تكون ملفوفة في كلا `Mixin` 's في `funModule` جديدة لذا نقطة بداية esay للتعليق خارج الكود حتى الآن.

 `/*let isCuteMixin = function(obj) { 
  obj.isCute = function() { 
    return true; 
  }; 
 }; 
 let singMixin = function(obj) { 
  obj.sing = function() { 
    console.log("Singing to an awesome tune"); 
  }; 
 }; 
 */ 
` 

ثم أدناه ابدأ بكتابة كود `funModule` الجديد. داخل الوحدة النمطية الجديدة ، تحتاج إلى كتابة بيان إرجاع لإرجاع كتل التعليمات البرمجية `Mixin` . ما عليك سوى نسخ كل من الكود الأصلي لكتل `Mixin` إلى كود الوحدة الجديدة ، ولكن تذكر أن تفصل كل من المزيج مع `,`

### حل

 `let funModule = (function() { 
  return { 
    isCuteMixin: function(obj) { 
      obj.isCute = function() { 
        return true; 
      }; 
    }, 
    singMixin: function(obj) { 
      obj.sing = function() { 
         console.log("Singing to an awesome tune"); 
      }; 
    } 
  } 
 })(); 
`