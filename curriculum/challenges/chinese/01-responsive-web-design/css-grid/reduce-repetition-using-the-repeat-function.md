---
id: 5a94fe3669fb03452672e45f
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
title: 使用 repeat 函数减少重复
---

## Description
<section id='description'>
当使用<code>grid-template-columns</code>和<code>grid-template-rows</code>定义网格结构时，你需要为添加的每一行和每一列都输入一个值。
如果一个网格共有 100 行，每行高度相同，就得输入 100 个值，这不太实际。幸运的是，有一种更好的方法——使用<code>repeat</code>方法指定行或列的重复次数，后面加上逗号以及需要重复的值。
这里有一个添加 100 行网格的例子，使每行高度均为 50px：

```css
grid-template-rows: repeat(100, 50px);
```

你还可以用 repeat 方法重复多个值，并在定义网格结构时与其他值一起使用。举个例子：

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

效果相当于：

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

<strong>注意：</strong><br><code>1fr 50px</code>重复了两次，后面跟着 20px。
</section>

## Instructions
<section id='instructions'>
用<code>repeat</code>代替<code>grid-template-columns</code>属性值中的重复代码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该带有<code>grid-template-columns</code>属性且设置为重复 3 列，宽为<code>1fr</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi));

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
  .item5{background:PaleGreen;}
  
  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* 请修改本行以下的代码 */
    
    grid-template-columns: 1fr 1fr 1fr;
    
    /* 请修改本行以上的代码*/
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
              