---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
videoUrl: ''
localeTitle: جعل رمز أكثر قابلة لإعادة الاستخدام مع هذه الكلمة الرئيسية
---

## Description
<section id="description"> قدم التحدي الأخير <code>method</code> إلى كائن <code>duck</code> . استخدم <code>duck.name</code> dot notation للوصول إلى قيمة خاصية <code>name</code> داخل العبارة return: <code>sayName: function() {return &quot;The name of this duck is &quot; + duck.name + &quot;.&quot;;}</code> بينما هذا صالح طريقة للوصول إلى خاصية الكائن ، هناك شرك هنا. في حالة تغيير اسم المتغير ، يجب تحديث أي شفرة تشير إلى الاسم الأصلي أيضًا. في تعريف كائن قصير ، ليست مشكلة ، ولكن إذا كان للكائن العديد من الإشارات إلى خصائصه ، فهناك فرصة أكبر للخطأ. تتمثل إحدى الطرق لتجنب هذه المشكلات في استخدام <code>this</code> الكلمة الرئيسية: <blockquote style=";text-align:right;direction:rtl"> دع بطة = { <br> الاسم: &quot;Aflac&quot; ، <br> numLegs: 2 ، <br> sayName: function () {return &quot;اسم هذه البطة هو&quot; + this.name + &quot;.&quot;؛} <br> }؛ </blockquote> <code>this</code> موضوع عميق ، والمثال أعلاه هو طريقة واحدة فقط لاستخدامه. في السياق الحالي ، يشير <code>this</code> إلى الكائن الذي ترتبط به الطريقة: <code>duck</code> . إذا تم تغيير اسم الكائن إلى <code>mallard</code> ، فليس من الضروري العثور على جميع الإشارات إلى <code>duck</code> في الشفرة. إنه يجعل الشفرة قابلة لإعادة الاستخدام وسهلة القراءة. </section>

## Instructions
<section id="instructions"> قم بتعديل طريقة <code>dog.sayLegs</code> لإزالة أي مراجع <code>dog</code> . استخدم مثال <code>duck</code> للإرشاد. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع <code>dog.sayLegs()</code> السلسلة المعطاة.
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string.");'
  - text: يجب أن تستخدم شفرتك <code>this</code> الكلمة الرئيسية للوصول إلى خاصية <code>numLegs</code> الخاصة <code>dog</code> .
    testString: 'assert(code.match(/this\.numLegs/g), "Your code should use the <code>this</code> keyword to access the <code>numLegs</code> property of <code>dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
