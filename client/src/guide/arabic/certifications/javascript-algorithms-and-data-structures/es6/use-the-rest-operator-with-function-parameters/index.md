---
title: Use the Rest Operator with Function Parameters
localeTitle: استخدم المشغل الباقي مع معلمات الدالة
---
## استخدم المشغل الباقي مع معلمات الدالة

### تفسير المعلمة الباقية

[شبكة مطوري موزيلا](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "شبكة مطوري موزيلا")

### انتشار عامل مقارنة مع المعلمة بقية

[تجاوز المكدس](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Stack Overflow")

### فيديو يشرح الانتشار والراحة

[!["صورة](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[### مثال

هذا الرمز

 `const product = (function() { 
    "use strict"; 
    return function product(n1, n2, n3) { 
        const args = [n1, n2, n3]; 
        return args.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 
` 

يمكن كتابتها على هذا النحو

 `const product = (function() { 
    "use strict"; 
    return function product(...n) { 
        return n.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 
`](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)