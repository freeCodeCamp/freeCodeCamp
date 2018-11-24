---
title: Combinations
localeTitle: تركيبات
---
## تركيبات

المجموعة هي مجموعة مختارة من العناصر من مجموعة ، حيث لا يهم ترتيب التحديد. أكثر رسميا:

> A k-combination of a set S is a subset of k distinct elements of S. مميزة إذا كانت المجموعة تحتوي على عناصر n ، فإن عدد مجموعات k يساوي [المعامل ذو الحدين](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) 1

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f "معامل ذو الحدين")

أو إذا كنت تفضل استخدام [عامل التصنيع](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) :

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a "مضروب")

تشير التوليفات إلى مجموعة من الأشياء n المتخذة في كل مرة **دون** تكرار. للإشارة إلى المجموعات التي يسمح فيها بالتكرار ، غالبًا ما يتم استخدام المصطلحين k-selection أو k-combination مع التكرار ونستخدم الصيغ التالية:

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0 "معامل ذو الحدين")

## بعض الأمثلة:

تعد التوليفات مفيدة جدًا عندما تريد حل المشكلات التجميعية مثل المشاكل التالية:

 `Compute the probability to obtain a poker from 
 a standard fifty-two card deck drawing 5 cards 
 at the same time 
` 

من أجل حل هذه المشكلة البسيطة ، تحتاج إلى حساب عدد 5 أيدي بطاقة ممكن باستخدام مجموعات:

![alt text](https://latex.codecogs.com/gif.latex?%5Cfrac%7B13%5Cbinom%7B52%7D%7B4%7D%5Cbinom%7B48%7D%7B1%7D%7D%7B%5Cbinom%7B52%7D%7B5%7D%7D "مشكلة البوكر")

اهتم بذلك ![alt text](https://latex.codecogs.com/gif.latex?%5Cbinom%7B48%7D%7B1%7D "48 في 1") يساوي 48 حسب تعريف المعامل ذي الحدين.

### مصادر

1 [دخول تركيبة ويكيبيديا](https://en.wikipedia.org/wiki/Combination)