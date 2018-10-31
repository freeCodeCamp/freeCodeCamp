---
title: Nest CSS with Sass
localeTitle: عش المغلق مع ساس
---
## عش المغلق مع ساس

*   في Sass ، يتيح تداخل قواعد CSS تحديد محددات التسلسل الهرمي.
*   يمكنك تنظيم أوراق الأنماط الخاصة بك عن طريق تضمين قواعد CSS.

## مثال

 `.title{ 
  strong{} 
  em{} 
 } 
 
 // This will be compiled into: 
 
 .title{} 
 .title strong{} 
 .title em{} 
` 

## تلميح 1:

*   قد ترغب في تغيير موضع "}" في السطر 4.

## حل

 `<style type='text/sass'> 
  .blog-post { 
    h1 { 
     text-align: center; 
     color: blue; 
    } 
    p { 
        font-size: 20px; 
    } 
  } 
 </style> 
`