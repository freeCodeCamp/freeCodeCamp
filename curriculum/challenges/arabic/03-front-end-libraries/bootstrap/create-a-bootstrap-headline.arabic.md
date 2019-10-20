---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
videoUrl: ''
localeTitle: قم بإنشاء عنوان Bootstrap
---

## Description
<section id="description"> الآن دعونا نبني شيئًا ما من الصفر لممارسة مهارات HTML و CSS و Bootstrap. سنقوم ببناء ملعب jQuery ، والذي سنستخدمه قريبًا في تحديات jQuery. للبدء ، أنشئ عنصر <code>h3</code> ، باستخدام <code>jQuery Playground</code> للنص. قم <code>h3</code> عنصر <code>h3</code> الخاص بك مع فئة Bootstrap <code>text-primary</code> ، وقم بتوسيطها مع فئة Bootstrap في مركز <code>text-center</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: أضف عنصر <code>h3</code> إلى صفحتك.
    testString: 'assert($("h3") && $("h3").length > 0, "Add a <code>h3</code> element to your page.");'
  - text: تأكد من أن عنصر <code>h3</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length, "Make sure your <code>h3</code> element has a closing tag.");'
  - text: يجب أن يكون لون عنصر <code>h3</code> الخاص بك عن طريق تطبيق الفصل الدراسي <code>text-primary</code>
    testString: 'assert($("h3").hasClass("text-primary"), "Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>");'
  - text: يجب توسيط عنصر <code>h3</code> الخاص بك من خلال تطبيق <code>text-center</code> الفصل
    testString: 'assert($("h3").hasClass("text-center"), "Your <code>h3</code> element should be centered by applying the class <code>text-center</code>");'
  - text: ''
    testString: 'assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()), "Your <code>h3</code> element should have the text <code>jQuery Playground</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
