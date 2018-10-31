---
id: 5900f54c1000cf542c51005f
challengeType: 5
title: 'Problem 480: The Last Question'
videoUrl: ''
localeTitle: 'المشكلة 480: السؤال الأخير'
---

## Description
<section id="description"> النظر في جميع الكلمات التي يمكن تشكيلها عن طريق اختيار الحروف ، في أي ترتيب ، من جملة: thereisetsetinsufficientdataforameaningfulanswer افترض أن هؤلاء مع 15 حرفا أو أقل يتم سردها في الترتيب الأبجدي وترقيمها بالتسلسل ابتداء من 1. وتشمل القائمة: 1: a 2: aa 3: aaa 4: aaaa 5: aaaaa 6: aaaaaa 7: aaaaaac 8: aaaaaacd 9: aaaaaacde 10: aaaaaacdee 11: aaaaaacdeee 12: aaaaaacdeeee 13: aaaaaacdeeeee 14: aaaaaacdeeeeee 15: aaaaaacdeeeeeef 16: aaaaaacdeeeeeeg 17: aaaaaacdeeeeeeh ... 28 : aaaaaacdeeeeeey 29: aaaaaacdeeeeef 30: aaaaaacdeeeeefe ... 115246685191495242: euleoywuttttsss 115246685191495243: euler 115246685191495244: eulera ... 525069350231428029: ywuuttttssssrrrDefine P (w) as the position of the word w. تعريف W (p) ككلمة في الموضع p. يمكننا أن نرى أن P (w) و W (p) عبارة عن inverses: P (W (p)) = p و W (P (w)) = w. أمثلة: W (10) = aaaaaacdee P (aaaaaacdee) = 10 W (115246685191495243) = euler P (euler) = 115246685191495243Find W (P (Legionary) + P (calorimeters) - P (annihilate) + P (مدبرة) - P ( التصفيق)). قم بإعطاء إجابتك باستخدام أحرف صغيرة (بدون علامات ترقيم أو مساحة). </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع euler480 <code>euler480()</code> turnthestarson.
    testString: 'assert.strictEqual(euler480(), turnthestarson, "<code>euler480()</code> should return turnthestarson.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler480() {
  // Good luck!
  return true;
}

euler480();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
