---
title: Ruby Number Methods
localeTitle: طرق عدد روبي
---
يوفر روبي مجموعة متنوعة من الأساليب المضمنة التي يمكنك استخدامها على الأرقام. فيما يلي قائمة غير كاملة من الأساليب [الصحيحة](https://ruby-doc.org/core-2.2.0/Integer.html) [والطافية](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) .

## [حتى](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F) :

استخدم `.even?` للتحقق مما إذا كان [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) حتى. لعرض **منطقية** `true` أو `false` .

 `    15.even? #=> false 
    4.even?  #=> true 
` 

## [غريب](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F) :

استخدم `.odd?` للتحقق مما إذا كان [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) فرديًا أم لا. لعرض **منطقية** `true` أو `false` .

 `    15.odd? #=> true 
    4.odd?  #=> false 
` 

## [السيل](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) :

و `.ceil` جولات طريقة [**يطفو**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **إلى** أقرب عدد. يرجع [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) .

 `    8.3.ceil #=> 9 
    6.7.ceil #=> 7 
` 

## [الكلمة](https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor) :

`.floor` [**الطوافات**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) `.floor` method **لأسفل** إلى أقرب رقم. يرجع [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) .

 `    8.3.floor #=> 8 
    6.7.floor #=> 6 
` 

## [التالي](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next) :

استخدم `.next` لإرجاع [**العدد الصحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) التالي المتتالي.

 `    15.next #=> 16 
    2.next  #=> 3 
    -4.next #=> -3 
` 

## [البادئة](https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred) :

استخدم `.pred` لإرجاع [**العدد الصحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) المتتابع السابق.

 `    15.pred #=> 14 
    2.pred  #=> 1 
    (-4).pred #=> -5 
` 

## [إلى سلسلة](https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s) :

باستخدام `.to_s` على عدد ( [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) ، [**عوامات**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) ، إلخ) بإرجاع [سلسلة](https://ruby-doc.org/core-2.2.0/String.html) من هذا الرقم.

 `    15.to_s  #=> "15" 
    3.4.to_s #=> "3.4" 
` 

## [أعظم مقام مشترك](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd) :

توفر طريقة `.gcd` القاسم المشترك الأكبر (دائمًا موجبًا) من رقمين. يرجع [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) .

 `    15.gcd(5) #=> 5 
    3.gcd(-7) #=> 1 
` 

## [الجولة](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round) :

استخدم `.round` لإرجاع [**عدد صحيح**](https://ruby-doc.org/core-2.2.0/Integer.html) مدور أو [**عائم**](https://ruby-doc.org/core-2.2.0/Float.html) .

 `    1.round        #=> 1 
    1.round(2)     #=> 1.0 
    15.round(-1)   #=> 20 
` 

## [الأوقات](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times) :

استخدم `.times` لتكرار أوقات `int` .

 `    5.times do |i| 
      print i, " " 
    end 
    #=> 0 1 2 3 4 
`