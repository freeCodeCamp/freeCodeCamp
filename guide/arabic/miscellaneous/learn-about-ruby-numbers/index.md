---
title: Learn About Ruby Numbers
localeTitle: تعرف على أرقام روبي
---
### الأساسيات:

*   لدى روبي فئتين من الأرقام - الأعداد الصحيحة والنقطة العائمة (تسمى أيضًا العوامات).
*   الأعداد الصحيحة هي أعداد كاملة يمكن أن تكون موجبة أو سلبية ولكن لا يمكن أن تكون كسور.
*   اعتماداً على حجمها ، يمكن أن تحتوي الأعداد الصحيحة على `Fixnum` أو `Bignum` .
*   Floats عبارة عن أرقام بها مكان عشري.

## أمثلة:

 `x = 5.5 
 x.class 
 # returns 
 Float 
 
 x = 5 
 x.class 
 # returns 
 Fixnum 
 
 x = 11122233344455566677 
 x.class 
 # returns 
 Bignum # basically, Bignum is a very large number 
 # <a href='http://ruby-doc.org/core-2.0.0/Bignum.html' target='_blank' rel='nofollow'>read this article for more info</a> 
` 

## المراجع:

*   [وثائق روبي الرسمية للأعداد الصحيحة](http://ruby-doc.org/core-2.2.0/Integer.html) .
*   [وثائق روبي الرسمية للعوامات](http://ruby-doc.org/core-2.2.0/Float.html) .