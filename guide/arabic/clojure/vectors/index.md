---
title: Clojure   Vectors
localeTitle: متجهات Clojure
---
ربما يكون المتجه هو أبسط أنواع المجموعات في Clojure. يمكنك التفكير في الأمر مثل صفيف في جافا سكريبت. دعونا تحديد ناقل بسيط:

 `(def a-vector [1 2 3 4 5]) 
 ;; Alternatively, use the vector function: 
 (def another-vector (vector 1 2 3 4 5)) 
 ;; You can use commas to separate items, since Clojure treats them as whitespace. 
 (def comma-vector [1, 2, 3, 4, 5]) 
` 

سترى أنه يستخدم الأقواس المربعة ، تماما مثل مصفوفة في JS. بما أن كلوureور ، مثل JS ، يتم كتابتها بشكل ديناميكي ، يمكن أن تحمل المتجهات عناصر من أي نوع ، بما في ذلك متجهات أخرى.

 `(def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"]) 
` 

## إضافة عناصر إلى متجه

يمكنك إلحاق عناصر إلى متجه باستخدام `conj` . يمكنك أيضا إلحاقها في قائمة باستخدام `into` ، ولكن لاحظ أن `into` ويهدف لدمج متجهين، لذلك كل حججها يجب أن يكون ناقلات، واستخدام `into` أبطأ من استخدام `conj` .

 `(time (conj [1 2] 3)) 
 ; => "Elapsed time: 0.032206 msecs" 
 ;    [1 2 3] 
 (time (into [1] [2 3])) 
 ; => "Elapsed time: 0.078499 msecs" 
 ;    [1 2 3] 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/wBSUEd)

## استرجاع العناصر من المتجه

يمكنك استرداد العناصر من ناقلات باستخدام `get` . هذا يعادل استخدام تدرج قوس لتتمكن من الوصول إلى العناصر في مصفوفة بالعديد من اللغات الضرورية. العناصر في المتجه هي 0-indexed ، العد من اليسار.

 `var arr = [1, 2, 3, 4, 5]; 
 arr[0]; 
 // => 1 
` 

في Clojure ، سيكتب هذا على النحو التالي:

 `(def a-vector [1 2 3 4 5]) 
 (get a-vector 0) 
 ; => 1 
` 

يمكنك أيضًا `get` على قيمة افتراضية ، إذا أعطيتها فهرسًا غير موجود في الصفيف.

 `;; the list doesn't have 2147483647 elements, so it'll return a string instead. 
 (get a-vector 2147483646 "sorry, not found!") 
 ; => "sorry, not found!" 
` 

## تحويل مجموعات أخرى إلى متجهات

يمكن تحويل هياكل البيانات غير الموجهة إلى متجهات باستخدام وظيفة `vec` . مع hashmaps ، هذا ينتج ناقل ثنائي الأبعاد يحتوي على أزواج من المفاتيح والقيم.

 `(vec '(1 2 3 4 5)) 
 ; => [1 2 3 4 5] 
 (vec {:jack "black" :barry "white"}) 
 ; => [[:jack "black"] [:barry "white"]] 
` 

## متى تستخدم ناقلات الأمراض؟

يجب استخدام المتجه في جميع الحالات تقريبًا إذا كنت في حاجة إلى مجموعة ، لأن لديهم أقصر أوقات وصول عشوائي ، مما يجعل من السهل استرداد العناصر من المتجه. لاحظ أنه يتم طلب المتجهات. إذا لم يكن الأمر مهمًا ، فقد يكون من الأفضل استخدام مجموعة. لاحظ أيضًا أن المتجهات مصممة لإلحاق العناصر ؛ إذا كنت بحاجة إلى إضافة عناصر مسبقًا ، فقد ترغب في استخدام قائمة.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |  
| [القوائم](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | [Hashmaps](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |