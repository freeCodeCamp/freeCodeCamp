---
title: Clojure the Basics
localeTitle: Clojure the Basics
---
### ابدء

قبل أن نبدأ ، قد ترغب في [تثبيت Clojure](http://clojure.org/guides/getting_started) و [Leiningen](http://leiningen.org/#install) (وهي أداة لإدارة المشاريع في Clojure). سيسمح لك هذا بتشغيل Clojure في سطر الأوامر باستخدام REPL (قراءة - تقييم - تكرار - حلقة).

## تعريف المتغيرات

الخبز والزبدة لأي لغة برمجة هي متغيرات ووظائف. دعونا تحديد المتغير!

 `(def our-string "Hello world!") 
` 

سهل جدا. يستخدم هذا الجزء من التعليمات البرمجية الماكرو `def` لربط سلسلة ( `"Hello world!"` ) إلى رمز ( `our-string` ). يمكننا أيضًا تحديد رقم ، مثل `1` أو `1.1` ، أو حرف ، مثل `\a` أو `\Z` ، أو شيء أكثر تعقيدًا مثل قائمة أو تعبير عادي ( _uuuugh_ ).

لاحظ أن الكود الخاص بنا موجود داخل أقواس ، مثل قائمة ، لأن كل شيء موجود في اللسب هو قائمة! (سيكون ذلك مهمًا جدًا عندما نبدأ الحديث عن وحدات الماكرو).

## تحديد وظائف

الآن ، دعونا تحديد وظيفة!

 `(defn hello-world [] (println our-string)) 
` 

هذا أكثر تعقيدًا بعض الشيء. مثل `def` ، فإنه يستخدم الماكرو ( `defn` ) لإنشاء متغير - على الرغم من هذه المرة ، هذا المتغير هو وظيفة. المتجه الفارغ (المتجه هو نوع من القائمة - فكر فيه كصفيف) بعد أن يحدد `hello-world` الحجج لتلك الوظيفة - في هذه الحالة ، ليس لدينا أي. الرمز بعد ذلك هو ما تقوم به الوظيفة. يقوم بتقييم `our-string` ، والتي تساوي `"Hello world!"` ، وطباعته إلى وحدة التحكم. دعونا تشغيلها!

 `(hello-world) 
 ; => Hello world! 
 ;    nil 
` 

يمكنك أيضًا كتابة هذا:

 `(def hello-world (fn [] (println our-string))) 
` 

`defn` هو مجرد اختصار للمساعدة في الحفاظ على التعليمات البرمجية الخاصة بك موجزة. `(defn ...)` و `(def ... (fn ...))` هي نفسها في الممارسة.

## المعلمات

حسنًا ، كان ذلك لطيفًا ، لكنه لم يكن مثيرًا حقًا. دعونا نحاول وظيفة مع المعلمات. ماذا عن واحد يضيف 3 أرقام؟

 `(defn add [xyz] (+ xyz)) 
 (add 1 2 3) 
 ; => 6 
` 

…انتظر. `(+ xyz)` ؟ هذا يبدو مضحكا. حسنا ، يتم كتابة Lisps باستخدام "تدوين البادئة" ، مما يعني أن الوظيفة تأتي دائما في المقام الأول. نظرًا لأن جميع العوامل الرياضية في Lisp ( `+ - * /` ) هي مجرد وظائف ، فإنها تأتي أيضًا قبل حججها (في هذه الحالة ، `xyz` ).

ستلاحظ أن متجهنا لديه بعض الأشياء فيه الآن: `[xyz]` ! عندما تحتوي الدالة على معلمات ، تقوم بتعريفها في هذا المتجه بجوار اسم الدالة.

### الإتلاف

وهناك ميزة كبيرة حول الحجج في Clojure هي تدمير. يتيح لك إمكانية سحب العناصر من قائمة.

 `(defn add [[xy] z] (+ xyz)) 
 (add [1 2] 3) 
 ; => 6 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/SWlvKn)

الوسيطات لهذه الوظيفة هي مجموعة ( `[xy]` ) ورقم ( `z` ). يمكننا استخدام عملية التدمير لسحب العناصر الأولى والثانية من القائمة ، وسنطلق عليها `x` و `y` .

### وظائف مع أي عدد من المعلمات

يمكنك أيضًا تحديد وظيفة ذات عدد تعسفي من الوسيطات باستخدام `&` .

 `(defn demonstrate-rest [first & rest] 
  (println first) 
  (println rest)) 
 (demonstrate-rest 1 "foo" ["bar" 22]) 
 ; => 1 
 ;    ("foo" ["bar" 22]) 
 ;    nil 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [IDEOne ذلك!](https://ideone.com/VftymP)

كما ترون ، استخدم `&` فصل حجج الدالة الخاصة بنا إلى متغير واحد يسمى `first` وقائمة المتغيرات تسمى `rest` . هذا يعني أن وظيفتنا يمكن أن يكون لها أي عدد من الحجج!

## عودة

ربما لاحظت بعض الأشياء الغريبة. عندما نستخدم `println` ، يبدو أن `nil` يظهر في مخرجاتنا. علاوة على ذلك ، ترجع الدالة `add` `6` ، ولكننا لم نخبرها أبداً بإعادة أي شيء.

في Clojure ، تكون العوائد "ضمنية". إذا كنت قد استخدمت روبي ، فأنت على الأرجح على دراية بهذا المفهوم. وبدلاً من إخبارنا عن وظيفتنا لإعادة شيء ما ، فإنه يقيّم جميع الشفرات داخل جسمه ، ويعيد النتيجة. تقوم وظيفة `add` لدينا ، على سبيل المثال ، بتقييم `(+ xyz)` ، ثم تقوم بإرجاع تلك النتيجة.

السبب في وظائفنا التي تستخدم إخراج `println` `nil` لأنه يتم تقييم `println` إلى `nil` . ( `nil` مثل `null` أو `None` - إنه لا يمثل أي شيء).

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق](//forum.freecodecamp.com/t/what-is-clojure/18419) [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-conditionals/18412) |  
| [ملخص](//forum.freecodecamp.com/t/what-is-clojure/18419) | [جدول المحتويات](//forum.freecodecamp.com/t/clojure-resources/18422) | [شرطي](//forum.freecodecamp.com/t/clojure-conditionals/18412) |