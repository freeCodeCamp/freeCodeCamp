---
title: Clojure More on Functions
localeTitle: Clojure More on Functions
---
المهام! انهم مهم جدا. من الصعب جدًا القيام بأي شيء بدون وظيفة. فهي جزء لا يتجزأ من أي لغة ، ولكن بشكل خاص Clojure ، لأنها لغة برمجة وظيفية ترفض التصميم الموجه للكائنات. دعونا نتعلم المزيد عنها!

## Arity

يشير **Arty** إلى عدد الوسيطات التي **تتوقعها** الدالة الخاصة بك.

 `;; add expects 2 arguments. Its arity is 2. 
 (defn add [xy] (+ xy)) 
 (add 2 2) 
 ; => 4 
 
 ;; + itself is a function, and it can have any number of arguments. 
 (+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16) ;; and so on... 
 ; => 136 
` 

تحتوي لغة Clojure على بعض الصيغ الخاصة التي تسمح لك بترك وظيفتك تختلف باختلاف عدد الحجج التي تتلقاها. وهذا ما يسمى arity متغير.

 `(defn foo 
  ([]                               ; if this function gets no arguments... 
    (println "Lisa needs braces!")) ; do this. 
  ([arg1]                           ; if this function gets 1 argument... 
    (println "Dental plan!")))      ; do this instead! 
 (foo) 
 ; => Lisa needs braces! 
 ;    nil 
 (foo "this is a placeholder argument.") 
 ; => Dental plan! 
 ;    nil 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/sXGplb)

## وظائف مجهولة

دعونا ننظر إلى وظيفة بسيطة حقا: وظيفة تضيف 1 إلى رقم.

 `;; I've called this function "my-inc" so you don't confuse it with inc. 
 ;; inc is a built-in function that already does this for us. 
 (defn my-inc [n] (+ 1 n)) 
 (inc' 5) 
 ; => 6 
` 

هذا يبدو بسيطا جدا. يأخذ معلمة واحدة - `n` - ويعيد `n + 1` . دعونا نختارها.

 `(def my-inc-2 (fn [n] (+ 1 n))) 
 (inc' 5) 
 ; => 6 
` 

يمكنك أن ترى من هذا أن استخدام `defn` هو مجرد اختزال لاستخدام `(def ... (fn ...))` . لكن هذا يكشف عن شيء مثير للاهتمام. ما نقوم به في الواقع ليس "تحديد وظيفة" ، إنه مجرد ربط وظيفة مجهولة باسم خاص - `inc'` . ماذا لو لم نعطيه اسما؟

 `((fn [n] (+ 1 n)) 5) 
 ; => 6 
` 

بام! فقاعة! Kapow! وظائف مجهولة. قد يبدو هذا غير ذي جدوى الآن ، ولكنه يأتي في وقت لاحق مفيد جدًا لتطبيق الوظائف على القوائم باستخدام `map` `reduce` `filter` . إعطاء كل وظيفة تكتب اسمها يصبح مملاً ومرهق وسريع.

هناك طريقة أقصر لكتابة الوظائف المجهولة ، والمخصصة لوظائف قصيرة للغاية وبسيطة. لا يسمح للتدمير أو متغير المتعري. ومع ذلك ، فمن موجزة للغاية.

 `(#(+ 1 %) 5) 
 ; => 6 
` 

`#(...)` هي طريقة اختصار لتعريف وظيفة مجهولة. تشير `%` إلى الوسيطة الأولى إلى الدالة. إذا كانت وظيفتك تتوقع العديد من الوسيطات ، فيمكنك استخدام `%1, %2, ... %n` .

 `(#(str %1 %2 %3) "foo" "bar" "baz") 
 ; => "foobarbaz" 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/roYRgS)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/clojure-loop-recur/18418) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-collections/18411) |  
| [حلقة وتكرار](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | [مجموعات](/http://forum.freecodecamp.com/t/clojure-collections/18411) |