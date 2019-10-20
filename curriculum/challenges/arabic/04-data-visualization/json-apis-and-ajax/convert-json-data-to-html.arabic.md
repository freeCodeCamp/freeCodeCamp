---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
challengeType: 6
videoUrl: ''
localeTitle: تحويل JSON Data إلى HTML
---

## Description
<section id="description"> الآن بعد أن حصلت على بيانات من JSON API ، يمكنك عرضها في HTML. يمكنك استخدام طريقة <code>forEach</code> خلال البيانات حيث يتم الاحتفاظ بكائنات صور القطة في صفيف. عند الوصول إلى كل عنصر ، يمكنك تعديل عناصر HTML. أولاً ، قم بتعريف متغير html بـ <code>var html = &quot;&quot;;</code> . ثم ، قم بالتكرار عبر JSON ، مع إضافة HTML إلى المتغير الذي يلف أسماء المفاتيح في علامات <code>strong</code> ، متبوعًا بالقيمة. عند الانتهاء من الحلقة ، يمكنك جعلها. إليك الرمز الذي يفعل هذا: <blockquote style=";text-align:right;direction:rtl"> json.forEach (وظيفة (val) { <br> مفاتيح var = Object.keys (val)؛ <br> html + = &quot;&lt;div class = &#39;cat&#39;&gt;&quot;؛ <br> keys.forEach (وظيفة (مفتاح) { <br> html + = &quot;&lt;strong&gt;&quot; + key + &quot;&lt;/ strong&gt;:&quot; + val [key] + &quot;&lt;br&gt;&quot;؛ <br> })؛ <br> html + = &quot;&lt;/ div&gt; &lt;br&gt;&quot;؛ <br> })؛ </blockquote></section>

## Instructions
<section id="instructions"> إضافة أسلوب <code>forEach</code> لحلقة عبر بيانات JSON وإنشاء عناصر HTML لعرضه. إليك بعض الأمثلة على JSON <blockquote style=";text-align:right;direction:rtl"> [ <br> { <br> &quot;الهوية&quot;: 0، <br> &quot;IMAGELINK&quot;: &quot;https://s3.amazonaws.com/freecodecamp/funny-cat.jpg&quot; <br> &quot;altText&quot;: &quot;قطة بيضاء ترتدي خوذة خضراء على شكل البطيخ على رأسها.&quot;، <br> &quot;codeNames&quot;: [&quot;Juggernaut&quot;، &quot;Mrs. Wallace&quot;، &quot;Buttercup&quot; <br> ] <br> } <br> ] </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم كودك بتخزين البيانات في متغير <code>html</code>
    testString: 'assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g), "Your code should store the data in the <code>html</code> variable");'
  - text: يجب أن تستخدم <code>forEach</code> أسلوب <code>forEach</code> لإجراء <code>forEach</code> عبر بيانات JSON من واجهة برمجة التطبيقات.
    testString: 'assert(code.match(/json\.forEach/g), "Your code should use a <code>forEach</code> method to loop over the JSON data from the API.");'
  - text: ''
    testString: 'assert(code.match(/<strong>.+<\/strong>/g), "Your code should wrap the key names in <code>strong</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        // Add your code below this line



        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
    };
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
