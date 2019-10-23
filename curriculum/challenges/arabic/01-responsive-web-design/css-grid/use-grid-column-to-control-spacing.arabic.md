---
id: 5a90372638fddaf9a66b5d38
title: Use grid-column to Control Spacing
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> حتى هذه النقطة ، جميع الخصائص التي تمت مناقشتها هي لحاويات الشبكة. الخاصية <code>grid-column</code> هي أول واحد للاستخدام على عناصر الشبكة نفسها. ويشار إلى <dfn>الخطوط</dfn> الأفقية والرأسية الافتراضية التي تنشئ الشبكة باسم <dfn>الخطوط</dfn> . يتم ترقيم هذه الأسطر بدءًا من 1 في أعلى الزاوية اليسرى للشبكة وتتحرك لليمين للأعمدة وأسفل الصفوف ، مع العد لأعلى. هذا ما تبدو عليه الخطوط لشبكة 3x3: <div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;;text-align:right;direction:rtl"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;;text-align:right;direction:rtl"> خطوط العمود </p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;;text-align:right;direction:rtl"> 1 </p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;;text-align:right;direction:rtl"> 2 </p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;;text-align:right;direction:rtl"> 3 </p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;;text-align:right;direction:rtl"> 4 </p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;;text-align:right;direction:rtl"> خطوط الصف </p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;;text-align:right;direction:rtl"> 1 </p><p style="left:-10%;top:21%;font-size:130%;position:absolute;;text-align:right;direction:rtl"> 2 </p><p style="left:-10%;top:53%;font-size:130%;position:absolute;;text-align:right;direction:rtl"> 3 </p><p style="left:-10%;top:85%;font-size:130%;position:absolute;;text-align:right;direction:rtl"> 4 </p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;;text-align:right;direction:rtl"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;;text-align:right;direction:rtl"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;;text-align:right;direction:rtl"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;;text-align:right;direction:rtl"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;;text-align:right;direction:rtl"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;;text-align:right;direction:rtl"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;;text-align:right;direction:rtl"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;;text-align:right;direction:rtl"></div></div> للتحكم في كمية الأعمدة التي سيستهلكها عنصر ما ، يمكنك استخدام خاصية <code>grid-column</code> بالاقتران مع أرقام الأسطر التي تريد أن يبدأ العنصر بها ويوقفها. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> عمود الشبكة: 1/3 ؛ </blockquote> سيؤدي هذا إلى بدء العنصر عند أول خط رأسي من الشبكة على اليسار والامتداد إلى السطر الثالث للشبكة ، ويستهلك عمودين. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-column\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-column</code> property that has the value of <code>2 / 4</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
