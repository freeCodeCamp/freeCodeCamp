---
title: Counting Cards
localeTitle: عد بطاقات
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

في لعبة الكازينو **Blackjack** ، يمكن للاعب الحصول على ميزة على المنزل من خلال تتبع العدد النسبي للبطاقات العالية والمنخفضة المتبقية في سطح السفينة. وهذا ما يسمى حساب البطاقات.

وجود المزيد من البطاقات العالية المتبقية في سطح السفينة تفضل اللاعب. يتم تعيين قيمة لكل بطاقة وفقًا للجدول أدناه. عندما يكون العد موجبًا ، يجب أن يراهن اللاعب عالياً. عندما يكون العدد صفرًا أو سلبيًا ، يجب على اللاعب الرهان منخفضًا.

القيمة | بطاقات  
\----- | : -------------------:  
+1 | 2 و 3 و 4 و 5 و 6  
0 | 7 و 8 و 9  
\-1 | 10 ، 'J' ، 'Q' ، 'K' ، 'A'

ستكتب وظيفة حساب البطاقة. سوف تتلقى معلمة **بطاقة** وزيادة أو إنقاص متغير **العد** العالمي وفقا لقيمة البطاقة (انظر الجدول). ستقوم الدالة بعد ذلك بإرجاع سلسلة مع العدد الحالي وسلسلة `Bet` إذا كان العدد موجبًا ، أو `Hold` إذا كان العدد صفراً أو سالباً. يجب فصل العدد الحالي وقرار اللاعب ( `Bet` أو `Hold` ) بمسافة واحدة.

*   تغيير الرمز أدناه `// Only change code below this line` وحتى `// Only change code above this line`
*   تأكد من أنك تقوم بتحرير داخل وظيفة `cc` .
*   استخدم ما تعلمته للتحقق من قيمة كل معلمة **بطاقة** تم تمريرها إلى الدالة.
*   احتفظ بحساب التشغيل لهذا الرقم.
*   إذا كان العدد النهائي 1 أو أكبر ، فأرجع **\# Hold** .
*   إذا كان العدد النهائي 0 أو أقل ، **فأرجع # Bet** .

**مثال على الناتج:**

*   \-3 عقد
*   5 الرهان

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

استخدم عبارة `switch` (أو `else if` ) لحساب قيمة كل بطاقة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

إضافة / طرح قيمة كل بطاقة إلى **عدد** المتغيرات. إذا كانت قيمة البطاقة تساوي 0 ، فلا تفعل أي شيء.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

بعد قيامك بحساب البطاقات ، استخدم العبارة `if` للتحقق من قيمة **العد** . أيضا، وتأكد من `return` لديها مساحة بين عدد والسلسلة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function cc(card) { 
      // Only change code below this line 
      switch(card){ 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
          count++; 
          break; 
        case 10: 
        case "J": 
        case "Q": 
        case "K": 
        case "A": 
          count--; 
          break; 
      } 
      if (count > 0){ 
        return count + " Bet"; 
      } else { 
        return count + " Hold"; 
      } 
      // Only change code above this line 
    } 
` 

### شرح الشفرة:

*   تحقق من قيمة كل بطاقة من خلال بيان `switch` .
*   **عدد** المتغيرات:
    *   يزيد بمقدار 1 إذا كانت البطاقة 2 أو 3 أو 4 أو 5 أو 6.
    *   نظرًا لأن 7 و 8 و 9 لا تستحق أي شيء ، فإننا نتجاهل تلك البطاقات في بيان `switch` بنا.
    *   تنخفض بمقدار 1 إذا كانت البطاقة 10 أو "J" أو "Q" أو "K" أو "A".
*   تحقق من قيمة **العد** وأعد الاستجابة المناسبة.

**مثال تشغيل**

*   `cc(2);` أشواط.
*   تصل العبارة `switch` إلى `case 2` ، وتقفز للأسفل وتضيف 1 إلى `count` المتغيرات.
*   ثم يقوم بيان `switch` بضرب `break` و `cc(3);` أشواط.
*   تستمر هذه الدورة حتى يتم إجراء المكالمة النهائية ، `cc('A');` .
*   بعد عبارة `switch` ، يتم `count` الشيك `if` كشف ، وهو الآن 0.
*   هذا يسقط بعد ذلك إلى العبارة `else` ، والتي سوف تعود **0 عقد** .

**_ملاحظة_** : كما ذكرنا سابقاً ، يمكن أن يكون بيان `switch` عبارةً أخرى `else if` عبارة.

## حل رمز إضافي:

 `function cc(card) { 
  // Only change code below this line 
  var regex = /[JQKA]/; 
  if (card > 1 && card < 7){count++;} 
  else if (card === 10 || String(card).match(regex)){count--;} 
 
  if (count > 0) return count + " Bet"; 
  return count + " Hold"; 
 
  // Only change code above this line 
 } 
` 

تشغيل الكود في [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Counting-cards)

### تفسير الشفرة

· وظيفة بتقييم أولا `if` شرط `card` هي قيمة أكبر من `1` وأقل من `7` ، وفي هذه الحالة فإنه بزيادة `count` تلو الآخر. · ثم إذا كانت البطاقة `10` أو أعلى هو التناقصات `count` من جانب واحد. · `regex` عبارة عن [تعبير عادي](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) يمثل القيم (الحروف) للبطاقات الأعلى. · يقوم البيان `else` بالتحقق من تلك القيم باستخدام `|| (logical OR)` مشغل `|| (logical OR)` ؛ أولاً لـ `10` ومن ثم لأي سلسلة تطابق التعبير العادي باستخدام [String.match ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) .

#### مصادر

*   [بطاقة العد في ويكيبيديا](https://en.wikipedia.org/wiki/Card_counting)
*   [التحدي: الاختيار من العديد من الخيارات مع تبديل البيانات](http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements)
*   [التحدي: تسلسل إذا كانت البيانات الأخرى](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [التحدي: زيادة رقم باستخدام جافا سكريبت](http://www.freecodecamp.com/challenges/increment-a-number-with-javascript)