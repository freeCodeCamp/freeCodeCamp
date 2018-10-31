---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
videoUrl: ''
localeTitle: تجاوز الأساليب الموروثة
---

## Description
<section id="description"> في الدروس السابقة ، تعلمت أن الكائن يمكن أن يرث سلوكه (أساليب) من كائن آخر عن طريق استنساخ كائن <code>prototype</code> الخاص به: <blockquote style=";text-align:right;direction:rtl"> ChildObject.prototype = Object.create (ParentObject.prototype)؛ </blockquote> ثم تلقت <code>ChildObject</code> الخاصة عن طريق <code>ChildObject</code> <code>prototype</code> : <blockquote style=";text-align:right;direction:rtl"> ChildObject.prototype.methodName = function () {...}؛ </blockquote> من الممكن تجاوز طريقة وراثية. ويتم ذلك بنفس الطريقة - عن طريق إضافة طريقة إلى <code>ChildObject.prototype</code> باستخدام نفس اسم الأسلوب الذي يتم تجاوزه. في ما يلي مثال <code>Bird</code> يتفوق على طريقة <code>eat()</code> الموروثة من <code>Animal</code> : <blockquote style=";text-align:right;direction:rtl"> وظيفة الحيوان () {} <br> Animal.prototype.eat = function () { <br> return &quot;nom nom nom&quot;؛ <br> }؛ <br> وظيفة الطيور () {} <br><br> // وراثة جميع الطرق من الحيوان <br> Bird.prototype = Object.create (Animal.prototype)؛ <br><br> // Bird.eat () يتخطى Animal.eat () <br> Bird.prototype.eat = function () { <br> عودة &quot;بيك بيك بيك&quot;؛ <br> }؛ </blockquote> إذا كان لديك مثيل ، <code>let duck = new Bird();</code> واستدعاء <code>duck.eat()</code> ، هذه هي الطريقة التي يبدو جافا سكريبت لأسلوب على <code>duck&#39;s</code> <code>prototype</code> سلسلة: 1. بطة =&gt; هل تأكل () المعرفة هنا؟ رقم 2. الطيور =&gt; هل تناول الطعام () المعرفة هنا؟ =&gt; نعم. تنفيذ ذلك ووقف البحث. 3. يتم تعريف Animal =&gt; eat () أيضًا ، لكن JavaScript توقفت عن البحث قبل الوصول إلى هذا المستوى. 4. Object =&gt; توقف JavaScript عن البحث قبل الوصول إلى هذا المستوى. </section>

## Instructions
<section id="instructions"> تجاوز طريقة <code>fly()</code> لـ <code>Penguin</code> بحيث تُرجع &quot;Alas ، هذا طائر بلا <code>fly()</code> &quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع <code>penguin.fly()</code> السلسلة &quot;للأسف ، هذا طائر بلا طيار&quot;.
    testString: 'assert(penguin.fly() === "Alas, this is a flightless bird.", "<code>penguin.fly()</code> should return the string "Alas, this is a flightless bird."");'
  - text: يجب أن ترجع طريقة <code>bird.fly()</code> &quot;أنا <code>bird.fly()</code> !&quot;
    testString: 'assert((new Bird()).fly() === "I am flying!", "The <code>bird.fly()</code> method should return "I am flying!"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
