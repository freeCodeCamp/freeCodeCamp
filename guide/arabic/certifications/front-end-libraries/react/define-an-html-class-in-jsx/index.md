---
title: Define an HTML Class in JSX
localeTitle: تحديد فئة HTML في JSX
---
## تحديد فئة HTML في JSX

*   قد يبدو HTML و JSX أنهما متطابقان تمامًا ولكن هناك بعض الاختلافات بينهما.
*   أحد هذه الاختلافات هو اصطلاح التسمية.
*   تصبح سمات HTML ومراجع الأحداث في JSX camelCase (onclick => onClick).
*   قد تكون هناك أيضًا بعض الكلمات المحجوزة في JavaScript. على سبيل المثال ، لا يمكن استخدام الكلمة "class" لتعريف فئات HTML في JSX.Therefore بدلا من استخدام "class" ، يمكنك استخدام "className".

## تلميح 1:

*   قد ترغب في تغيير "class" إلى "className".

## حل

 `const JSX = ( 
  <div className = "myDiv"> 
    <h1>Add a class to this div</h1> 
  </div> 
 ); 
`