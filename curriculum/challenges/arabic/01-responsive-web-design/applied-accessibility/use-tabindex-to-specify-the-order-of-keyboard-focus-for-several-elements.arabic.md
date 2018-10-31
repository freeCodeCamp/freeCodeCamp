---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: ''
localeTitle: استخدم tabindex لتحديد ترتيب التركيز على لوحة المفاتيح للعديد من العناصر
---

## Description
<section id="description"> <code>tabindex</code> السمة <code>tabindex</code> أيضًا ترتيب علامات التبويب الدقيق للعناصر. يتحقق ذلك عندما يتم تعيين قيمة السمة إلى عدد موجب من 1 أو أعلى. سيؤدي تعيين tabindex = &quot;1&quot; إلى تركيز لوحة المفاتيح على هذا العنصر أولاً. ثم يمر عبر تسلسل قيم <code>tabindex</code> المحددة (2 ، 3 ، وما إلى ذلك) ، قبل الانتقال إلى <code>tabindex=&quot;0&quot;</code> الافتراضية و <code>tabindex=&quot;0&quot;</code> . من المهم ملاحظة أنه عند تعيين ترتيب علامة التبويب بهذه الطريقة ، فإنه يتجاوز الترتيب الافتراضي (الذي يستخدم مصدر HTML). قد يؤدي ذلك إلى إرباك المستخدمين الذين يتوقعون بدء التنقل من أعلى الصفحة. قد تكون هذه التقنية ضرورية في بعض الظروف ، ولكن فيما يتعلق بإمكانية الوصول ، يجب توخي الحذر قبل تطبيقها. إليك مثال على ذلك: <code>&lt;div tabindex=&quot;1&quot;&gt;I get keyboard focus, and I get it first!&lt;/div&gt;</code> <code>&lt;div tabindex=&quot;2&quot;&gt;I get keyboard focus, and I get it second!&lt;/div&gt;</code> </section>

## Instructions
<section id="instructions"> يحتوي &quot;كامبر كات&quot; على حقل بحث في صفحة &quot;اقتباسات ملهمة&quot; التي ينوي وضعها في الزاوية اليمنى العليا باستخدام CSS. يريد <code>input</code> البحث وإرسال عناصر تحكم نموذج <code>input</code> ليكون أول عنصرين في ترتيب الجدولة. إضافة سمة <code>tabindex</code> مضبوطة على &quot;1&quot; إلى <code>input</code> البحث ، <code>tabindex</code> مضبوطة على &quot;2&quot; إلى <code>input</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تضيف الكود الخاص بك سمة <code>tabindex</code> إلى علامة <code>input</code> البحث.
    testString: 'assert($("#search").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the search <code>input</code> tag.");'
  - text: يجب أن تضيف الكود الخاص بك سمة <code>tabindex</code> إلى علامة <code>input</code> <code>tabindex</code> .
    testString: 'assert($("#submit").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the submit <code>input</code> tag.");'
  - text: يجب أن تحدد <code>tabindex</code> سمة <code>tabindex</code> في علامة <code>input</code> البحث إلى قيمة 1.
    testString: 'assert($("#search").attr("tabindex") == "1", "Your code should set the <code>tabindex</code> attribute on the search <code>input</code> tag to a value of 1.");'
  - text: يجب أن تحدد <code>tabindex</code> سمة <code>tabindex</code> على علامة <code>input</code> <code>tabindex</code> إلى قيمة 2.
    testString: 'assert($("#submit").attr("tabindex") == "2", "Your code should set the <code>tabindex</code> attribute on the submit <code>input</code> tag to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
