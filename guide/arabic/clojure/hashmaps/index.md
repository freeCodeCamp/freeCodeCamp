---
title: Clojure Hashmaps
localeTitle: Clojure Hashmaps
---
الهاسماب عبارة عن مجموعة تقوم بتعيين مفاتيح القيم. لديهم أسماء مختلفة في اللغات الأخرى. بيثون يشير إليها كقواميس ، وعناصر جافا سكريبت تعمل بشكل أساسي مثل هاشمابس.

يمكن بناء هاسماب ، مثل العديد من المجموعات ، بطريقتين. هناك وظيفة منشئ:

 `;; Note that each argument is *prepended* to the hashmap, not appended. 
 (def a-hashmap (hash-map :a 1 :b 2 :c 3)) 
 a-hashmap 
 ; => {:c 3, :b 2, :a 1} 
` 

يمكنك أيضا تحديد لهم باستخدام hashmap الحرفية. هذا غالبا ما يكون أكثر إيجازا وواضحا. يوصى باستخدام الفواصل لفصل أزواج المفاتيح / القيم في هاشمابس ، حيث يمكن أن تجعل الحدود أكثر وضوحًا.

 `;; This hashmap is actually in the right order, unlike the one above. 
 (def another-hashmap {:a 1, :b 2, :c 3}) 
 another-hashmap 
 ; => {:a 1, :b 2, :c 3} 
` 

## الكلمات الأساسية واسترجاع القيم من hashmaps

أصمد. ما هذا؟ `:a` ؟ `:b` ؟ `:c` ؟ تلك تبدو غريبة. تلك ، كما ترى ، هي الكلمات الرئيسية. إنها تسمى _key_ -words لأنها غالباً ما تستخدم كمفاتيح في hashmaps.

لماذا غالباً ما تستخدم كمفاتيح؟ حسنا ، على عكس السلاسل ، يمكن استخدام الكلمات الأساسية كدالات لاستخراج القيم من hashmap؛ لا حاجة للحصول `get` أو `nth` !

 `(def string-hashmap {"a" 1, "b" 2, "c" 3}) 
 ("a" string-hashmap) 
 ; => ClassCastException java.lang.String cannot be cast to clojure.lang.IFn 
 
 (def keyword-hashmap {:a 1, :b 2, :c 3}) 
 (:a keyword-hashmap) 
 ; => 1 
 
 ;; You can also pass a keyword a default value in case it's not found, just like get. 
 (:not-in-the-hashmap keyword-hashmap "not found!") 
 ; => "not found!" 
` 

## تحويل مجموعات أخرى إلى hashmaps

تحويل إلى hashmap هو صعب. للتدليل ، دعنا نحاول استخدامه مثل `vec` أو `seq` .

 `(hash-map [:a 1 :b 2 :c 3]) 
 ; => IllegalArgumentException No value supplied for key: [:a 1 :b 2 :c 3] 
` 

تظن وظيفة `hash-map` أننا نحاول إنشاء hashmap مع `[:a 1 :b 2 :c 3]` كأحد المفاتيح. شاهد ما يحدث إذا أعطينا العدد الصحيح من الحجج:

 `(hash-map [:a 1 :b 2 :c 3] "foo") 
 ; => {[:a 1 :b 2 :c 3] "foo"} 
` 

لتحويل تسلسل إلى hashmap ، ستحتاج إلى استخدام وفهم `apply` . لحسن الحظ ، هذا بسيط جداً: `apply` أساسي تدمير مجموعة قبل تطبيق دالة عليه.

 `;; These two expressions are exactly the same. 
 (+ 1 2 3) 
 ; => 6 
 (apply + [1 2 3]) 
 ; => 6 
` 

هذه هي الطريقة التي من شأنها تحويل متجه إلى hashmap:

 `(apply hash-map [:a 1 :b 2 :c 3]) 
 ; => {:c 3, :b 2, :a 1} 
 
 ;; This is the same as: 
 (hash-map :a 1 :b 2 :c 3) 
 ; => {:c 3, :b 2, :a 1} 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/k9cOjo)

## تحديث hashmap

يمكنك تحديث القيم داخل hashmap باستخدام `assoc` . هذا يسمح لك بإلحاق أزواج مفاتيح / قيم جديدة أو تغيير الأزواج القديمة.

 `(def outdated-hashmap {:a 1, :b 2, :c 3}) 
 
 (def newer-hashmap (assoc outdated-hashmap :d 4)) 
 newer-hashmap 
 ; => {:a 1, :b 2, :c 3, :d 4} 
 
 (def newest-hashmap (assoc newer-hashmap :a 22)) 
 newest-hashmap 
 ; => {:a 22, :b 2, :c 3, :d 4} 
 
 ;; Note that outdated-hashmap has not been mutated by any of this. 
 ;; Assoc is pure and functional. 
 outdated-hashmap 
 ; => {:a 1, :b 2, :c 3} 
` 

## متى تستخدم hashmap؟

يعد hashmap مفيدًا عندما تريد إعطاء أسماء للمتغيرات الخاصة بك. إذا كنت تفكر في نفسك على الإطلاق ، _"ماذا لو استخدمت كائنًا ..."_ قبل أن تستخلص منه وتدرك أنك تستخدم Clojure ، حاول استخدام hashmap.

كما أنها مفيدة إذا كنت تريد ربط قيمتين مختلفتين مع بعضهما البعض. خذ على سبيل المثال ، تشفير ROT13: يمكنك إقران `\A` مع `\N` ، `\B` مع `\M` ، وما إلى ذلك (وهذا سيكون طويلاً ومملًا للكتابة في معظم اللغات ، ولكن Clojure لديه بعض الوظائف التي يمكن أن تولده لك وجعلها _ممتعة!_ )

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/clojure-vectors/18421) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:") |  
| [ناقلات](//forum.freecodecamp.com/t/clojure-vectors/18421) | [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | ليتم إضافتها |