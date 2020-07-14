---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: رابط إلى الأقسام الداخلية لصفحة مع عناصر الارتساء
---

## Description
<section id="description"> يمكن أيضًا استخدام عناصر الربط لإنشاء روابط داخلية للانتقال إلى أقسام مختلفة داخل صفحة الويب. لإنشاء رابط داخلي ، يمكنك تعيين سمة <code>href</code> لرابط إلى رمز hash <code>#</code> plus وقيمة السمة <code>id</code> للعنصر الذي تريد ربطه داخليًا ، وعادةً ما يكون أسفل الصفحة. ستحتاج بعد ذلك إلى إضافة نفس سمة <code>id</code> إلى العنصر الذي تقوم بالارتباط إليه. <code>id</code> هو سمة تصف عنصرًا بشكل فريد. في ما يلي مثال لرابط الربط الداخلي والعنصر المستهدف: <blockquote style=";text-align:right;direction:rtl"> &lt;a href=&quot;#contacts-header&quot;&gt; جهات الاتصال &lt;/a&gt; <br> ... <br> &lt;h2 id = &quot;contacts-header&quot;&gt; جهات الاتصال &lt;/ h2&gt; </blockquote> عندما ينقر المستخدمون على رابط جهات الاتصال ، سيتم نقلك إلى قسم صفحة الويب باستخدام عنصر عنوان <b>جهات الاتصال</b> . </section>

## Instructions
<section id="instructions"> غيّر رابطك الخارجي إلى رابط داخلي عن طريق تغيير سمة <code>href</code> إلى &quot;#footer&quot; والنص من &quot;صور القط&quot; إلى &quot;الانتقال إلى أسفل&quot;. أزل السمة <code>target=&quot;_blank&quot;</code> من علامة الربط لأن هذا يؤدي إلى فتح المستند المرتبط في علامة تبويب نافذة جديدة. ثم أضف سمة <code>id</code> بقيمة &quot;تذييل&quot; إلى عنصر <code>&lt;footer&gt;</code> في أسفل الصفحة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون هناك علامة ارتساء واحدة فقط على صفحتك.
    testString: 'assert($("a").length == 1, "There should be only one anchor tag on your page.");'
  - text: يجب أن يكون هناك علامة <code>footer</code> واحدة فقط على صفحتك.
    testString: 'assert($("footer").length == 1, "There should be only one <code>footer</code> tag on your page.");'
  - text: 'و <code>a</code> ينبغي أن يكون سمة ل <code>href</code> السمة تعيين &quot;#footer&quot;.'
    testString: 'assert($("a").eq(0).attr("href") == "#footer", "The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".");'
  - text: و <code>a</code> لا ينبغي أن يكون العلامة <code>target</code> السمة
    testString: 'assert(typeof $("a").eq(0).attr("target") == typeof undefined || $("a").eq(0).attr("target") == true, "The <code>a</code> tag should not have a <code>target</code> attribute");'
  - text: و <code>a</code> ينبغي أن يكون النص &quot;الانتقال إلى أسفل&quot;.
    testString: 'assert($("a").eq(0).text().match(/Jump to Bottom/gi), "The <code>a</code> text should be "Jump to Bottom".");'
  - text: يجب أن تحتوي علامة <code>footer</code> سمة <code>id</code> تعيينها على &quot;تذييل الصفحة&quot;.
    testString: 'assert($("footer").eq(0).attr("id") == "footer", "The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
