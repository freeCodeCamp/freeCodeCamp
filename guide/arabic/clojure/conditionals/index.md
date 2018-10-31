---
title: Clojure Conditionals
localeTitle: الشرط Clojure
---
لن تحصل على أي مكان بلغة إذا كان كل ما يمكنك فعله هو تحديد الوظائف التي تطبع الأشياء وتجري حسابًا بسيطًا. تشكل الشروط والمنطق جزءًا أساسيًا من إنشاء الرموز التي تقدم أشياء مفيدة ومفيدة. حاول أن تتخيل عالما بدون منطق في البرامج: لن تستطيع حتى أن تكون قادرا على أشياء بسيطة ، مثل التحقق من وجود رقمين متساويين!

## العوامل المنطقية

Clojure ، مثل معظم اللغات ، لديه 3 عوامل منطقية: `and` ، `or` ، `or` `not` . هذه الدوال تأخذ booleans ( `true` أو `false` ) كحجج ، وتعيد booleans مبنية على ما booleans تلك. مثل كل شيء في Lisp ، يستخدم هؤلاء المشغلين تدوين البادئة ، مما يعني أنها قد تبدو غريبة بالنسبة لك.

 `(and true false) 
 ; => false 
 (and true true) 
 ; => true 
 (or false false) 
 ; => false 
 (or true false) 
 ; => true 
 (not true) 
 ; => false 
 (not false) 
 ; => true 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/XfXn8T)

## إذا

`if` سمح لك بتنفيذ التعليمة البرمجية استنادًا إلى ما إذا كانت كلمة منطقية `true` أم `false` . `if` في Clojure يبدو غريبا جدا ، وليس لأنه يستخدم بادئة الترميز ، ولكن لأنه لا يوجد أي شيء آخر. إذا كان الشرط صحيحًا ، فإنه يقوم بتقييم التعبير الأول. إذا كان غير صحيح ، فإنه ينفذ الثاني.

 `(if (= (+ 2 2) 4) 
  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4 
  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4 
 ; => Maths works! 
 ;    nil 
` 

هذا يمثل مشكلة: ماذا لو كنا نريد القيام بأشياء متعددة؟

 `(if (= (+ 2 2) 4) 
  (println "Maths works!") 
  (println "Maths still works!") 
  (println "UH OH")) 
 ; => CompilerException java.lang.RuntimeException: Too many arguments to if 
` 

لحسن الحظ ، لدينا وظيفة `do` لحل هذه المشكلة. `do` بتقييم تعبيرات متعددة، واحدا تلو الآخر.

 `(if (= (+ 2 2) 4) 
  (do                               ; all of this gets evaluated if 2 + 2 = 4 
    (println "Maths works!") 
    (println "Maths still works!")) 
  (println "UH OH")) 
 ; => Maths works! 
 ;    Maths still works! 
 ;    nil 
` 

**ملاحظة:** بما أنه `if` ، في حد ذاته ، تعبيرًا ، فلا توجد حاجة لمشغل ثلاثي مثل العديد من اللغات المشابهة لـ C.

 `var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH"; 
 console.log(doesMathsWork); 
 // => Maths works! 
` 

الآن بعد أن رأيت كيف يعمل ، لا يبدو الأمر غريبًا جدًا؟ هذا هو أسهل بكثير على قراءة وفهم (تجاهل لعدم وجود كلمة `else` ):

 `(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH")) 
 (println does-maths-work) 
 ; => Maths works! 
 ;    nil 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/5XhcAa)

## بدائل ل

يحتوي Clojure أيضًا على بعض وحدات الماكرو التي تتصرف بطريقة مماثلة `if` ، وفي بعض الأحيان قد تكون أكثر إيجازًا.

`if-not` هو المثال الأكثر بساطة - فهو `if` معكوسًا. هذان الجزءان من التعليمات البرمجية متطابقان تمامًا:

 `(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!")) 
 (def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!")) 
` 

يتم تقييم التعبير الأول إذا كان خطأًا ، ويتم تقييم الثاني إذا كان صحيحًا. لاحظ أن استخدام `if-not` يتجنب تعشيق وضعنا الداخلي `not` ، مما يساعد على تسهيل فهم الكود الخاص بنا.

`when` هو ماكرو مفيد آخر. هذان الجزءان من التعليمات البرمجية هي نفسها أيضًا:

 `(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!"))) 
 (when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!")) 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/tUVAw3)

**ملاحظة:** لا يوجد `when/else` . `when` ينفذ _فقط_ إذا كان الشرط صحيحًا.

`cond` يتيح لك الجمع بين العديد من الشروط في تعبير واحد. يتطلب الأمر تسلسلًا من أزواج التعبير والتعبير المنطقي وتقييم كل تعبير منطقي بالترتيب. عندما تعثر على تعبير منطقي يتم تقييمه إلى `true` ، فإنه يقوم بتقييم التعبير الثاني للزوج. بعد هذا ، يتم تقييم أي تعبيرات أخرى. يشبه هذا السلوك منطق الدائرة القصيرة في Javascript.

 `(cond (= 0 1) "I'm paired with a false expression and I don't evalute.." 
      (= 1 1) "I'm the first expression paired with a true expression!" 
      (= 2 2) "I don't evalute even though I'm also paired with true ;_;" 
      :else   "I evaluate if no other boolean expressions evaluate to true") 
 ; => "I'm the first expression paired with a true expression!" 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/zu5RCq)

يمكن استخدام الكلمة الأساسية `:else` بدلاً من تعبير منطقي في زوج التعبير الأخير في `cond` . وهو يشير إلى أنه يجب تقييم التعبير المطابق إذا تم تقييم جميع التعبيرات المنطقية الأخرى إلى false. إنه نفس وضع الصيغة `true` للتعبير المنطقي الأخير.

## أشكال خاصة و Evalution

ربما لاحظت أن قواعد تقييم التعبيرات الشرطية تختلف قليلاً عن تعبيرات أخرى. التعبير الشرطي جزء من مجموعة من التعبيرات تسمى _نماذج خاصة_ . هذا يعني أنهم لا يتبعون قواعد تقييم Clojure الطبيعية.

كما تعلم الآن ، فإن التعبير الشرطي يقوم فقط بتقييم الكتابة الفرعية التي تتوافق مع النتيجة المنطقية. وهذا يعني أنه لن يتم تقييم الرمز غير الصالح داخل تعبير شرطي في بعض الحالات. النظر في اثنين `if` تعبيرات أدناه. على الرغم من `(+ 1 "failure")` هو تعبير غير صالح ، إلا أن Clojure تثير استثناءً فقط عندما يكون الشرط `false` .

 `(if true "sucess" (+ 1 "failure")) 
 ; => "sucess" 
 (if false "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/n4Ug2S)

قارن هذا بسلوك `my-if` المعرّف أدناه:

 `(defn my-if [condition true-case false-case] 
  (if condition true-case false-case)) 
 
 (my-if true "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/U7cVI4)

`my-if` هي دالة ذات قواعد تقييم عادية ، لذلك يجب أن تكون كل علاماتها الفرعية مُعلمة قبل أن يتم تقييمها.

لدى Clojure الكثير من وحدات الماكرو المفيدة مثل هذه لجميع أنواع المهام. حاول إلقاء نظرة على [وثائق Clojure](https://clojuredocs.org/) ومعرفة ما إذا كان يمكنك العثور على المزيد!

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/clojure-the-basics/18410) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |  
| [ملخص](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | [شرطي](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |