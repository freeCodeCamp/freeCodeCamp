---
title: Clojure   Looprecur
localeTitle: كلوجور Looprecur
---
قد تحتاج إلى فهم [`if`](//forum.freecodecamp.com/t/clojure-conditionals/18412) [`let`](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) بالتعافي بشكل كامل في Clojure أم لا.

## `for` و `while`

ليس لدى Clojure الحلقات أو الحلقات. هذا منطقي ، إذا فكرت في الأمر. A `for` loop يغير المتغير ، وهذا غير مسموح به في Clojure.

 `for (var i = 0; i < 10; i++) { 
  console.log(i); 
 } 
` 

يعني `i++` أننا نضيف واحدًا إلى المتغير `i` كل مرة تنتهي الحلقة - مثال واضح على متغير يتم تحوره.

`while` الحلقات تعتمد بشكل أقل وضوحا على المتغيرات المتغيرة ، لكنها ، مثلها مثل الحلقات.

 `var i = 0; 
 while (i < 10) { 
  console.log(i); 
  i++; 
 } 
` 

`while` الحلقات دائمًا على شرط ، مثل `i < 10` ، وستتوقف إذا لم يعد هذا الشرط صحيحًا. هذا يعني أنه يجب أن يكون لديهم نوع من التأثير الجانبي (مثل إضافة 1 إلى `i` ) بحيث تكون الحالة في النهاية خاطئة. خلاف ذلك ، فإن حلقة تدوم إلى الأبد.

## العودية

لحسن الحظ ، لدى Clojure حلقة واحدة من نوع ما. هذه الحلقات تستخدم العودية - وظيفة التي تطلق على نفسها. أبسط خوارزمية متكررة هي واحدة للعثور على عامل موجب عدد (5 عامل ، على سبيل المثال ، يساوي `5 * 4 * 3 * 2` ).

 `(defn fact [x] 
  (loop [nx prod 1] ;; this works just like a 'let' binding. 
    (if (= 1 n)  ;; this is the base case. 
      prod 
      (recur (dec n) (* prod n))))) 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/3iP3tI)

ستلاحظ أن `(loop [nx prod 1] ...)` تبدو مشابهة جدا ل `let` ملزمة. إنه يعمل بالفعل بنفس الطريقة - هنا ، نربط `n` بـ `x` ، `prod` إلى 1.

كل وظيفة متكررة لها "حالة قاعدة". هذا هو الشرط الذي يجعل حلقة توقف الحلقة. في هذه الحالة ، تتوقف الحلقة لدينا إذا كانت `n = 1` ، ثم ترجع `prod` . إذا لم يكن `n` يساوي 1 ، فستتكرر الحلقة.

 `(recur (dec n) (* prod n)) 
` 

تقوم وظيفة `recur` هذه بإعادة تشغيل الحلقة ، ولكن مع روابط مختلفة. في هذه المرة ، لا يرتبط `n` بـ `x` ، ولكن بدلاً من ذلك يرتبط بـ `(dec n)` (والذي يعني `decrement n` أو `n - 1` ) ، `prod` `(* prod n)` .

لذلك عندما نسمي الوظيفة ، هذا ما يحدث:

 `(fact 5) 
 ; Loop 1: 5 != 1, so the loop recurs with 4 (5 - 1) and 5 (1 * 5). 
 ; Loop 2: 4 != 1, so the loop recurs with 3 (4 - 1) and 20 (5 * 4). 
 ; Loop 3: 3 != 1, so the loop recurs with 2 (3 - 1) and 60 (20 * 3). 
 ; Loop 4: 2 != 1, so the loop recurs with 1 (2 - 1) and 120 (60 * 2). 
 ; Loop 5: 1 == 1, so the function returns prod, which is now equal to 120. 
 ; => 120 
` 

الشيء المبتكر في التكرار هو أن المتغيرات نفسها لا تتغير أبداً. الشيء الوحيد الذي يتغير هو ما _تشير_ إليه `n` و `prod` . نحن لا نقول أبدًا ، `n--` ، أو `n += 2` .

## لماذا استخدام حلقة / تكرار؟

قد تتسائل عن سبب استخدامك `loop/recur` بدلاً من مجرد تحديد وظيفة تستدعي نفسها. يمكن أن تكون مكتوبة لدينا وظيفة عامل مثل هذا:

 `(defn fact-no-loop [n] 
  (if (= 1 n) 
    1 
    (* n (fact-no-loop (dec n))))) 
` 

هذا أكثر إيجازًا ، ويعمل بطريقة مماثلة. لماذا تستخدم حلقة تكرارًا من _أي وقت مضى_ ؟

### تحسين اتصال الذيل

إذا كنت تستخدم `loop/recur` ، فإن المحول البرمجي (البرنامج الذي يحول شفرة Clojure إلى bytecode JVM) يعرف أنك تريد إنشاء حلقة متكررة. هذا يعني أنه يحاول جاهداً تحسين التعليمات البرمجية الخاصة بك من أجل التكرار. دعونا نقارن بين سرعة `fact` `fact-no-loop` :

 `(time (fact 20)) 
 ; => "Elapsed time: 0.083927 msecs" 
 ;    2432902008176640000 
 (time (fact-no-loop 20)) 
 ; => "Elapsed time: 0.064937 msecs" 
 ;    2432902008176640000 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/tpC0Xo)

على هذا النطاق ، والفرق لا يكاد يذكر. في الواقع ، فإن `fact-no-loop` تكون أحيانًا أسرع من `fact` بسبب الطبيعة غير المتوقعة لذاكرة الكمبيوتر. ومع ذلك ، على نطاق أوسع ، يمكن لهذا النوع من التحسين أن يجعل التعليمات البرمجية الخاصة بك أكبر بكثير ، أسرع بكثير.

### التعشيش داخل وظائف

`fact-no-loop` يعمل `fact-no-loop` بدون `loop/recur` لأن الوظيفة بأكملها متكررة. ماذا لو أردنا أن يستخدم جزء من وظيفتنا حلقة تكرارية ، ثم ما تبقى منها للقيام بشيء غير تكراري؟ سيتعين علينا تحديد وظيفتين منفصلتين تمامًا. يتيح لنا استخدام `loop/recur` استخدام وظيفة صغيرة مجهولة بدلاً من ذلك.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:") |  
| [اسمحوا الارتباطات](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | ليتم إضافتها |