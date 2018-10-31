---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: ''
localeTitle: عد بطاقات
---

## Description
<section id="description"> في لعبة الكازينو Blackjack ، يمكن للاعب الحصول على ميزة على المنزل من خلال تتبع العدد النسبي للبطاقات العالية والمنخفضة المتبقية في سطح السفينة. وهذا ما يسمى <a href="https://en.wikipedia.org/wiki/Card_counting" target="_blank">حساب البطاقة</a> . وجود المزيد من البطاقات العالية المتبقية في سطح السفينة تفضل اللاعب. يتم تعيين قيمة لكل بطاقة وفقًا للجدول أدناه. عندما يكون العد موجبًا ، يجب أن يراهن اللاعب عالياً. عندما يكون العدد صفرًا أو سلبيًا ، يجب على اللاعب الرهان منخفضًا. <table class="table table-striped" style=";text-align:right;direction:rtl"><thead><tr><th> عد التغيير </th><th> بطاقات </th></tr></thead><tbody><tr><td> +1 </td><td> 2 و 3 و 4 و 5 و 6 </td></tr><tr><td> 0 </td><td> 7 و 8 و 9 </td></tr><tr><td> -1 </td><td> 10 ، &#39;J&#39; ، &#39;Q&#39; ، &#39;K&#39; ، &#39;A&#39; </td></tr></tbody></table> ستكتب وظيفة حساب البطاقة. سيحصل على معلمة <code>card</code> ، والتي يمكن أن تكون رقمًا أو سلسلة ، وزيادة أو إنقاص متغير <code>count</code> العالمي وفقًا لقيمة البطاقة (انظر الجدول). ستقوم الدالة بعد ذلك بإرجاع سلسلة مع العدد الحالي وسلسلة <code>Bet</code> إذا كان العدد موجبًا ، أو <code>Hold</code> إذا كان العدد صفراً أو سالباً. يجب فصل العدد الحالي وقرار اللاعب ( <code>Bet</code> أو <code>Hold</code> ) بمسافة واحدة. <strong>ناتج المثال</strong> <br> <code>-3 Hold</code> <br> <code>5 Bet</code> <strong>تلميح</strong> <code>5 Bet</code> <br> لا تقم بإعادة تعيين <code>count</code> إلى 0 عندما تكون القيمة 7 أو 8 أو 9. <br> لا ترجع مصفوفة. <br> لا تقم بتضمين علامات الاقتباس (مفردة أو مزدوجة) في الإخراج. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تعود تسلسلات البطاقات 2 و 3 و 4 و 5 و 6 إلى <code>5 Bet</code>
    testString: 'assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })(), "Cards Sequence 2, 3, 4, 5, 6 should return <code>5 Bet</code>");'
  - text: يجب أن تعود تسلسلات البطاقات 7 و 8 و 9 <code>0 Hold</code>
    testString: 'assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })(), "Cards Sequence 7, 8, 9 should return <code>0 Hold</code>");'
  - text: يجب أن تعود تسلسلات البطاقات 10 و J و Q و K و A إلى <code>-5 Hold</code>
    testString: 'assert((function(){ count = 0; cc(10);cc("J");cc("Q");cc("K");var out = cc("A"); if(out === "-5 Hold") {return true;} return false; })(), "Cards Sequence 10, J, Q, K, A should return <code>-5 Hold</code>");'
  - text: يجب أن تعود تسلسلات البطاقات 3 و 7 و Q و 8 و A إلى <code>-1 Hold</code>
    testString: 'assert((function(){ count = 0; cc(3);cc(7);cc("Q");cc(8);var out = cc("A"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 7, Q, 8, A should return <code>-1 Hold</code>");'
  - text: يجب أن تعيد بطاقات التسلسل 2 ، J ، 9 ، 2 ، 7 <code>1 Bet</code>
    testString: 'assert((function(){ count = 0; cc(2);cc("J");cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, J, 9, 2, 7 should return <code>1 Bet</code>");'
  - text: يجب أن تعيد بطاقات التسلسل 2 و 2 و 10 <code>1 Bet</code>
    testString: 'assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, 2, 10 should return <code>1 Bet</code>");'
  - text: يجب أن تعود تسلسلات البطاقات 3 ، 2 ، A ، 10 ، K <code>-1 Hold</code>
    testString: 'assert((function(){ count = 0; cc(3);cc(2);cc("A");cc(10);var out = cc("K"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 2, A, 10, K should return <code>-1 Hold</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
