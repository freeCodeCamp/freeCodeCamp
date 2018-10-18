---
id: 587d7fae367417b2b2512be7
title: Pre-filter JSON to Get the Data You Need
challengeType: 6
videoUrl: ''
localeTitle: 'تنفيذ تصفية مسبقة لـ JSON للحصول على المعلومات المطلوبة'
---

## Description
إذا لم تكن ترغب بإظهار كل صور القطط التي تحصل عليها باستخدام 

`API`

صور القطط من

`FreeCodeCamp`

يمكنك أن تقوم بتنفيذ تصفية مسبقة على

`JSON`

قبل البدء بحلقة تكرارية عليه.

بما أن بيانات

`JSON`

مخزنة في مصفوفة، يمكنك استخدام دالة

`filter`

للتخلص من كافة القطط الذين يملكون رقم معرف مساو لـ 1
الكود المستخدم في هذه العملية هو:
```
json = json.filter(function(val) {
  return (val.id !== 1);
});
```

## Instructions
قم بإضافة كود للقيام بعملية

`filter`

على بيانات

`json`

لحذف أي قطة تمتلك معرف ذو قيمة تساوي 1

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/json\.filter/g), "Your code should use the <code>filter</code> method.");'

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
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });
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
<p class="message box">
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
