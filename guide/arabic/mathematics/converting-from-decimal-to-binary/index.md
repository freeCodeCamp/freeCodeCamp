---
title: Converting from Decimal to Binary
localeTitle: تحويل من عشري إلى ثنائي
---
## تحويل من عشري إلى ثنائي

يمكنك استخدام الأجزاء المتبقية لتحويل الأرقام العشرية إلى أرقام ثنائية.

### الطريقة العامة

1) قسمة العدد العشري الأصلي على 2 وسجل القاسم والباقي. 2) كرر الخطوة الأولى لتحل محل الرقم العشري الأصلي مع حاصل آخر وجدت حتى تحصل على حاصل تساوي 0. 3) خذ آخر باقية قمت بتسجيلها لتكون MSB الخاص بك (الأكثر أهمية) والباقي الأول الذي قمت بتسجيله ليكون LSB (الأقل أهمية). اكتب الباقي في عكس الترتيب من كيفية توليدها.

### أمثلة

تحويل الرقم العشري 30 إلى ثنائي.

 `30 / 2 = 15 r 0 
 15 / 2 = 7 r 1 
 7 / 2 = 3 r 1 
 3 / 2 = 1 r 1 
 1 / 2 = 0 r 1 
 
 Writing out the remainders bottom to top gives you the bit pattern: 
 
 11110 
 
 Checking your answer by converting the binary number back to decimal: 
 
 (1*2^4)+(1*2^3)+(1*2^2)+(1*2^1)+(0*2^0) = 30 
 
 So your answer is correct. 
` 

تحويل الرقم العشري 116 إلى ثنائي.

 `116 / 2 = 58 r 0 
 58 / 2 = 29 r 0 
 29 / 2 = 14 r 1 
 14 / 2 = 7 r 0 
 7 / 2 = 3 r 1 
 3 / 2 = 1 r 1 
 1 / 2 = 0 r 1 
 
 Writing out the remainders bottom to top gives you the bit pattern: 
 
 1110100 
 
 Checking your answer by converting the binary number back to decimal: 
 
 (1*2^6)+(1*2^5)+(1*2^4)+(0*2^3)+(1*2^2)+(0*2^1)+(0*2^0) = 116 
 
 So your answer is correct. 
`