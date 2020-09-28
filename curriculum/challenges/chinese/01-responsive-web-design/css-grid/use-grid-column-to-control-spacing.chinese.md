---
id: 5a90372638fddaf9a66b5d38
title: Use grid-column to Control Spacing
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cnzkDSr'
forumTopicId: 301136
localeTitle: 使用 grid-column 来控制空间大小
---

## Description
<section id='description'>
到目前为止，所有的讨论都是围绕网格容器的。<code>grid-column</code>属性是第一个用于网格项本身的属性。
网格的假想水平线和垂直线被称为<dfn>线（lines）</dfn>。这些线在网格的左上角从 1 开始编号，垂直线向右、水平线向下累加计数。
这是一个 3x3 网格的线条：
<div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;">column lines</p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">1</p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">2</p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">3</p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">4</p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;">row lines</p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;">1</p><p style="left:-10%;top:21%;font-size:130%;position:absolute;">2</p><p style="left:-10%;top:53%;font-size:130%;position:absolute;">3</p><p style="left:-10%;top:85%;font-size:130%;position:absolute;">4</p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;"></div></div>
你可以用<code>grid-column</code>属性定义网格项开始和结束的位置，进而控制每个网格项占用的列数。
示例如下：

```css
grid-column: 1 / 3;
```

这会让网格项从左侧第一条线开始到第三条线结束，占用两列。
</section>

## Instructions
<section id='instructions'>
使类为<code>item5</code>的网格项占用网格的最后两列。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item5</code>类应该有<code>grid-column</code>属性且其值为<code>2 / 4</code>。'
    testString: assert($('style').text().replace(/\s/g, '').match(/\.item5{.*grid-column:.*}/g));
  - text: '<code>item5</code> 类应该有 <code>grid-column</code> 属性使其占用网格最后两列。'
    testString: "
      const colStart = getComputedStyle($('.item5')[0]).gridColumnStart;
      const colEnd = getComputedStyle($('.item5')[0]).gridColumnEnd;
      const result = colStart.toString() + colEnd.toString();
      const correctResults = ['24', '2-1', '2span 2', '2span2', 'span 2-1', '-12', 'span 2span 2', 'span 2auto', 'autospan 2'];
      assert(correctResults.includes(result));
    "

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
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
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


```html
// solution required
```

</section>
              