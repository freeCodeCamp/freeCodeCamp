---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
localeTitle: 使用 minmax 函数限制项目大小
---

## Description
<section id='description'>
此外，内置函数<code>minmax</code>也可以可用于设置<code>grid-template-columns</code>和<code>grid-template-rows</code>的值。它的作用是在网格容器改变大小时限制网格项的大小。为此，你需要指定网格项允许的尺寸范围。例如：

```css
grid-template-columns: 100px minmax(50px, 200px);
```

在上面的代码中，通过<code>grid-template-columns</code>添加两列，第一列宽度为 100px，第二列宽度最小值是 50px，最大值是 200px。
</section>

## Instructions
<section id='instructions'>
用<code>minmax</code>函数替换<code>repeat</code>函数中的<code>1fr</code>，限定其最小值为<code>90px</code>，最大值为<code>1fr</code>，你可以调整最右侧的预览面板查看效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>grid-template-columns</code>属性且设置重复 3 列，每列宽度最小值为<code>90px</code>，最大值为<code>1fr</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    
    grid-template-columns: repeat(3, 1fr);
    
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
              