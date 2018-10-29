---
title: Clojure Create Local Variables with Let
localeTitle: Clojure إنشاء متغيرات محلية مع دعونا
---
`let` جزء أساسي من Clojure. بينما يخلق `def` متغيرًا عالميًا ، `let` بإنشاء متغير محلي.

 `(def x 5) 
 (println x) 
 ; => 5 
 ;    nil 
 (let [x 2] 
  (println x)) 
 ; => 2 
 ;    nil 
 (println x) 
 ; => 5 
 ;    nil 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/xcNth2)

`x` في هذا المثال لن يتم تغييره في الواقع. `x` يشير فقط إلى شيء مختلف داخل لدينا `let` ملزمة. هذا يمكن أن يكون وسيلة مفيدة لتجنب التكرار داخل وظيفة.

هذا مفيد بشكل لا يصدق. وجود العديد من المتغيرات العالمية يمكن أن يؤدي إلى أخطاء سيئة وسلوك غير مقصود.

 `(def x 5) 
 (defn add-5 [y] (+ xy)) 
 (add-5 5) 
 ; => 10 
 (defn change-x [] 
  (def x 6)) 
 (change-x) 
 ; => nil 
 (add-5 5) 
 ; => 11 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/MFjA3C)

اه! هذا لا يضيف 5 بعد الآن! بطبيعة الحال ، هذا المثال سخيف قليلاً ، ولكن استخدام الكثير من المتغيرات العالمية يمكن أن يؤدي إلى خلل مروع مثل هذا.

**ملاحظة:** نحن لا نعيد _تعيين_ `x` هنا ، كما هو الحال في لغة C-like. نحن فقط بصدد إنشاء متغير جديد يحدث أيضًا باسم x. هذه فكرة سيئة _**للغاية**_ .

## ربط متعددة

`let` أيضا تحديد متغيرات متعددة في وقت واحد ، ويمكن أن يعين المتغيرات على التعبيرات.

 `(let [spam "foo" 
      ham (str "b" "ar")] ; str is a function that concatenates strings 
  (println spam ham))      ; or converts variables into strings. 
 ; => foo bar 
 ;    nil 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/y5EBIM)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/clojure-conditionals/18412) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |  
| [شرطي](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | [حلقة وتكرار](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |