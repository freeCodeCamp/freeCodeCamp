---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: حدد رأس ونص مستند HTML
---

## Description
<section id="description"> يمكنك إضافة مستوى آخر من التنظيم في مستند HTML الخاص بك داخل علامات <code>html</code> مع عناصر <code>head</code> <code>body</code> . أي ترميز يحتوي على معلومات حول صفحتك ، سينتقل إلى علامة <code>head</code> . ثم أي الترميز مع محتوى الصفحة (ما يعرض للمستخدم) سيذهب الى <code>body</code> علامة. عادةً ما يتم إدخال عناصر البيانات <code>meta</code> ، مثل <code>link</code> والبيانات <code>meta</code> <code>title</code> <code>style</code> ، داخل عنصر <code>head</code> . إليك مثال لتخطيط الصفحة: <blockquote style=";text-align:right;direction:rtl"> &lt;! DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;رئيس&gt; <br> &lt;! - عناصر البيانات التعريفية -&gt; <br> &lt;/ head&gt; <br> &lt;body&gt; <br> &lt;! - محتويات الصفحة -&gt; <br> &lt;/ body&gt; <br> &lt;/ HTML&gt; </blockquote></section>

## Instructions
<section id="instructions"> تحرير الترميز بحيث يكون هناك <code>head</code> <code>body</code> . و <code>head</code> وينبغي أن تتضمن عنصرا فقط <code>title</code> ، و <code>body</code> عنصر يجب أن يشمل فقط <code>h1</code> و <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون هناك عنصر <code>head</code> واحد فقط على الصفحة.
    testString: 'assert($("head").length == 1, "There should be only one <code>head</code> element on the page.");'
  - text: ''
    testString: 'assert($("body").length == 1, "There should be only one <code>body</code> element on the page.");'
  - text: ''
    testString: 'assert($("html").children("head").length == 1, "The <code>head</code> element should be a child of the <code>html</code> element.");'
  - text: في <code>body</code> يجب أن يكون العنصر طفل من <code>html</code> العنصر.
    testString: 'assert($("html").children("body").length == 1, "The <code>body</code> element should be a child of the <code>html</code> element.");'
  - text: يجب أن يلف عنصر <code>head</code> حول عنصر <code>title</code> .
    testString: 'assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), "The <code>head</code> element should wrap around the <code>title</code> element.");'
  - text: ''
    testString: 'assert($("body").children("h1").length == 1 && $("body").children("p").length == 1, "The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
