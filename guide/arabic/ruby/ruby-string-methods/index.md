---
title: Ruby String Methods
localeTitle: طرق سلسلة روبي
---
## طرق سلسلة روبي

لدى Ruby العديد من الأساليب المضمنة للعمل مع السلاسل. تكون السلاسل في Ruby بشكل افتراضي قابلة للتغيير ، ويمكن تغييرها في المكان أو يمكن إرجاع سلسلة جديدة من طريقة.

### الطول:

*   الخاصية `.length` بإرجاع عدد الأحرف في سلسلة بما في ذلك المسافة البيضاء. `ruby "Hello".length #=> 5 "Hello World!".length #=> 12`

### فارغة:

*   . `.empty?` إرجاع الأسلوب `true` إذا كان طول سلسلة صفرية. `ruby "Hello".empty? #=> false "!".empty? #=> false " ".empty? #=> false "".empty? #=> true`

### عدد المشاهدات:

*   `.count` طريقة `.count` عدد المرات التي يتم فيها العثور على حرف (أحرف) معينة في سلسلة.
*   هذه الطريقة حساسة لحالة الأحرف. `ruby "HELLO".count('L') #=> 2 "HELLO WORLD!".count('LO') #=> 1`

### إدراج:

*   إدراج الأسلوب `.insert` سلسلة في سلسلة أخرى قبل فهرس معين. `ruby "Hello".insert(3, "hi5") #=> Helhi5lo # "hi5" is inserted into the string right before the second 'l' which is at index 3`

### الاستهلالية:

*   تقوم طريقة `.upcase` بتحويل كل الحروف في سلسلة إلى أحرف كبيرة. `ruby "Hello".upcase #=> HELLO`

### Downcase:

*   `.downcase` أسلوب `.downcase` كل الحروف في سلسلة إلى أحرف صغيرة. `ruby "Hello".downcase #=> hello`

### Swapcase

*   `.swapcase` أسلوب `.swapcase` الأحرف الكبيرة في سلسلة إلى أحرف صغيرة `.swapcase` صغيرة إلى أحرف كبيرة. `ruby "hELLO wORLD".swapcase #=> Hello World`

### الاستفادة:

*   تجعل طريقة `.capitalize` الحرف الأول في سلسلة أحرف كبيرة وبقية السلسلة الصغيرة. `ruby "HELLO".capitalize #=> Hello "HELLO, HOW ARE YOU?".capitalize #=> Hello, how are you?`

_لاحظ أن الحرف الأول يتم تكبيره فقط إذا كان في بداية السلسلة._ `ruby "-HELLO".capitalize #=> -hello "1HELLO".capitalize #=> 1hello`

### عكس:

*   يعكس الأسلوب `.reverse` ترتيب الأحرف في سلسلة. `ruby "Hello World!".reverse #=> "!dlroW olleH"`

### انشق، مزق:

*   و `.split` يأخذ سلاسل _ويقسم_ أنه في صفيف، ثم إرجاع مجموعة.
    
     `"Hello, how are you?".split #=> ["Hello,", "how", "are", "you?"] 
    ` 
    
*   تقسم الطريقة الافتراضية السلسلة استنادًا إلى مسافة بيضاء ، ما لم يتم توفير فاصل مختلف (راجع المثال الثاني). `ruby "Hello".split('-') #=> ["H", "e", "l", "l", "o"]`
    

### يقطع:

*   الأسلوب `.chop` يزيل الحرف الأخير من السلسلة.
    
*   يتم إرجاع سلسلة جديدة ، ما لم تستخدم `.chop!` الطريقة التي تحور السلسلة الأصلية.
    
     `"Name".chop #=> Nam 
    ` 
    
     `name = "Batman" 
     name.chop 
     name == "Batma" #=> false 
    ` 
    
     `name = "Batman" 
     name.chop! 
     name == "Batma" #=> true 
    ` 
    

### قطاع:

*   يقوم أسلوب `.strip` بإزالة المسافات البيضاء `.strip` على السلاسل ، بما في ذلك علامات الجدولة ، والخطوط الجديدة ، وإرجاع `.strip` ( `\t` ، `\n` ، `\r` ). `ruby " Hello ".strip #=> Hello`

### أقضم بصوت عالي:

*   يزيل الأسلوب `.chomp` الحرف الأخير في سلسلة ، فقط إذا كان حرف إرجاع أو سطر جديد ( `\r` ، `\n` ).
*   يتم استخدام هذه الطريقة بشكل شائع مع الأمر `gets` لإزالة العوائد من إدخال المستخدم. ``ruby "hello\r".chomp #=> hello "hello\t".chomp #=> hello\t # because tabs and other whitespace remain intact when using `chomp` ``

### إلى عدد صحيح:

*   تحويل الأسلوب `.to_i` سلسلة إلى عدد صحيح. `ruby "15".to_i #=> 15 # integer`

### Gsub:

*   يستبدل `gsub` كل مرجع للمعلمة الأولى للمعلمة الثانية في سلسلة.

 `"ruby is cool".gsub("cool", "very cool") #=> "ruby is very cool" 
` 

*   يقبل `gsub` أيضًا الأنماط (مثل _regexp_ ) كمعلمة أولى ، مما يسمح بأشياء مثل:

 `"ruby is cool".gsub(/[aeiou]/, "*") #=> "r*by *sc**l" 
` 

### سلسلة:

*   يطبق روبي بعض الأساليب لسَلسَط سلسلتين معاً:
    
*   طريقة `+` :
    
     `"15" + "15" #=> "1515" # string 
    ` 
    
*   الطريقة `<<`
    
     `"15" << "15" #=> "1515" # string 
    ` 
    
*   طريقة `concat` : `ruby "15".concat "15" #=> "1515" # string`
    

### فهرس:

*   في `index` الأسلوب بإرجاع موقف مؤشر occurrance الأول من سلسلة فرعية أو العادية مباراة نمط التعبير في سلسلة.
    
*   في حالة عدم وجود تطابق ، يتم إرجاع `nil` .
    
*   تشير المعلمة الاختيارية الثانية إلى موضع الفهرس في السلسلة لبدء البحث عن مطابقة.
    
     `"information".index('o') #=> 3 
     "information".index('mat') #=> 5 
     "information".index(/[abc]/) #=> 6 
     "information".index('o', 5) #=> 9 
     "information".index('z') #=> nil 
    ` 
    

### واضح:

*   يزيل محتوى السلسلة. `ruby a = "abcde" a.clear #=> ""`