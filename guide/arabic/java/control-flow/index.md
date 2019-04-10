---
title: Control Flow
localeTitle: تدفق التحكم
---
# تدفق التحكم

بيانات تدفق التحكم هي بالضبط ما يعني المصطلح. وهي عبارة عن عبارات تعمل على تغيير تدفق التنفيذ استنادًا إلى القرارات والحلقات والفروع بحيث يمكن للبرنامج تنفيذ مقاطع التعليمات البرمجية بشكل مشروط.

في المقام الأول ، تحتوي Java على التركيبات التالية للتحكم في التدفق:

*   `if`
    
     `if( <expression that results in a boolean> ){ 
        //code enters this block if the above expression is 'true' 
     } 
    ` 
    
*   `if...else`
    
     `if( <expression that results in a boolean> ){ 
        //execute this block if the expression is 'true' 
     } else{ 
        //execute this block if the expression is 'false' 
     } 
    ` 
    
*   `switch`
    

يعد التبديل خيارًا بديلًا `if...else` إنشاء `if...else` عند وجود قيم وحالات متعددة للتحقق منها.

 `switch( <integer / String / Enum > ){ 
    case <int/String/Enum>: 
        <statements> 
        break; 
    case <int/String/Enum>: 
        <statements> 
        break; 
    default: 
        <statements> 
 } 
` 

ملاحظة: `falls through` تدفق البرنامج `falls through` `case` التالية إذا كان بيان `break` مفقودًا. على سبيل المثال ، دعنا نقول أنك تقول "مرحباً" لكل شخص في المكتب ، لكنك لطيف جداً للفتاة التي تجلس إلى جانبك وتسمع صوت غاضب إلى رئيسك في العمل. طريقة التمثيل ستكون شيئًا مثل:

 `switch(person){ 
    case 'boss': 
        soundGrumpy(); 
        break; 
    case 'neighbour': 
        soundExtraNice(); 
        break; 
    case 'colleague': 
        soundNormal(); 
        break; 
    default: 
        soundNormal(); 
 } 
` 

 ``Note: The `default` case runs when none of the `case` matches. Remember that when a case has no `break` statement, it `falls through` to the next case and will continue to the subsequent `cases` till a `break` is encountered. Because of this, make sure that each case has a `break` statement. The `default` case does not require a `break` statement. 
`` 

*   `nested statements`

يمكن أن يتداخل أي من تدفقات التحكم السابقة. مما يعني أنه يمكن أن تكون متداخلة `if` ، `if` `if..else` ... بيانات `switch..case` . أي ، يمكن أن يكون لديك أي مجموعة من هذه العبارات داخل الآخر ولا يوجد أي قيود على عمق `nesting` .

على سبيل المثال ، دعنا نفكر في السيناريو التالي:

*   إذا كان لديك أقل من 25 دولارات ، يمكنك الحصول على كوب من القهوة.
*   إذا كان لديك أكثر من 25 دولارات ولكن أقل من 60 دولارات ، يمكنك الحصول على وجبة محترمة لنفسك.
*   إذا كان لديك أكثر من 60 دولارات ولكن أقل من 100 ، يمكنك الحصول على وجبة لائقة مع كوب من النبيذ.
*   ومع ذلك ، عندما يكون لديك أكثر من 100 دولار ، اعتمادا على من أنت معه ، إما الذهاب لتناول العشاء على ضوء الشموع (مع زوجتك) أو تذهب إلى شريط الرياضية (مع أصدقائك).

تتمثل إحدى الطرق لتمثيل ذلك في:

 `int cash = 150; 
 String company = "friends"; 
 
 if( cash < 25 ){ 
    getCoffee(); 
 } else if( cash < 60 ){ 
    getDecentMeal(); 
 } else if( cash < 100 ){ 
    getDecentMeal(); 
    getGlassOfWine(); 
 } else { 
    switch(company){ 
        case "wife": 
            candleLitDinner(); 
            break; 
        case "friends": 
            meetFriendsAtSportsBar(); 
            break; 
        default: 
            getDecentMeal(); 
    } 
 } 
` 

في هذا المثال ، سيتم تنفيذ `meetFriendsAtSportsBar()` .

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJZi/1)