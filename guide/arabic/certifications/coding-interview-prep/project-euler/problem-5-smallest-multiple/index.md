---
title: Smallest multiple
localeTitle: أصغر متعددة
---
## المشكلة 5: أصغر متعددة

### طريقة:

*   في هذا التحدي ، نحتاج إلى العثور على LCM من 1 إلى n من الأرقام.
*   للعثور على LCM لأحد الأعداد ، نستخدم الصيغة التالية:
*   ![لكم]](https://wikimedia.org/api/rest_v1/media/math/render/svg/9453a93953efe119b7502c1827aeeb869ab121d6)
*   لإيجاد GCD (القاسم المشترك الأكبر) من رقمين نستخدم خوارزمية Euclidean.
*   بعد الحصول على LCM من رقمين ، يمكننا الحصول على LCM من الأرقام من 1 إلى n.

### حل:

 `//LCM of two numbers 
 function lcm(a, b){ 
  return (a*b)/gcd(a, b); 
 } 
 
 //Euclidean recursive algorithm 
 function gcd(a, b){ 
  if (b === 0) return a; 
  return gcd(b, a%b); 
 } 
 
 function smallestMult(n){ 
  let maxLCM = 1; 
 
  //Getting the LCM in the range 
  for (let i = 2; i <= n; i++){ 
    maxLCM = lcm(maxLCM, i); 
  } 
  return maxLCM; 
 } 
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Problem-5-Smallest-multiple)

### المراجع:

*   [خوارزمية Euclidean](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [LCM](https://en.wikipedia.org/wiki/Least_common_multiple)