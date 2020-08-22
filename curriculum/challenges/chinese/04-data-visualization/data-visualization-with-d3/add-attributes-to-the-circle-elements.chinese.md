---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
videoUrl: ''
localeTitle: 将属性添加到圆形元素
---

## Description
<section id="description">最后一项挑战为<code>dataset</code>每个点创建了<code>circle</code>元素，并将它们附加到SVG画布。但D3需要更多关于每个<code>circle</code>的位置和大小的信息才能正确显示它们。 SVG中的<code>circle</code>有三个主要属性。 <code>cx</code>和<code>cy</code>属性是坐标。它们告诉D3在SVG画布上定位形状<em>中心</em>的位置。半径（ <code>r</code>属性）给出<code>circle</code>的大小。就像<code>rect</code> <code>y</code>坐标一样， <code>circle</code>的<code>cy</code>属性是从SVG画布的顶部测量的，而不是从底部测量的。所有这三个属性都可以使用回调函数动态设置其值。请记住，后链接的所有方法<code>data(dataset)</code>每个项目在运行一次<code>dataset</code> 。回调函数中的<code>d</code>参数指的是<code>dataset</code>的当前项，它是每个点的数组。您可以使用括号表示法（如<code>d[0]</code> ）来访问该数组中的值。 </section>

## Instructions
<section id="instructions">将<code>cx</code> ， <code>cy</code>和<code>r</code>属性添加到<code>circle</code>元素。在<code>cx</code>值应为阵列中的每个项目中的第一个数字<code>dataset</code> 。 <code>cy</code>值应基于数组中的第二个数字，但请确保图表正面向上显示而不是反转。所有圈子的<code>r</code>值应为5。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有10个<code>circle</code>元素。
    testString: assert($('circle').length == 10);
  - text: 第一个<code>circle</code>元素的<code>cx</code>值应为34， <code>cy</code>值为422， <code>r</code>值为5。
    testString: assert($('circle').eq(0).attr('cx') == '34' && $('circle').eq(0).attr('cy') == '422' && $('circle').eq(0).attr('r') == '5');
  - text: 第二个<code>circle</code>元素的<code>cx</code>值应为109， <code>cy</code>值为220， <code>r</code>值为5。
    testString: assert($('circle').eq(1).attr('cx') == '109' && $('circle').eq(1).attr('cy') == '220' && $('circle').eq(1).attr('r') == '5');
  - text: 第三个<code>circle</code>元素的<code>cx</code>值应为310， <code>cy</code>值为380， <code>r</code>值为5。
    testString: assert($('circle').eq(2).attr('cx') == '310' && $('circle').eq(2).attr('cy') == '380' && $('circle').eq(2).attr('r') == '5');
  - text: 第四个<code>circle</code>元素的<code>cx</code>值应为79， <code>cy</code>值为89， <code>r</code>值为5。
    testString: assert($('circle').eq(3).attr('cx') == '79' && $('circle').eq(3).attr('cy') == '89' && $('circle').eq(3).attr('r') == '5');
  - text: 第五个<code>circle</code>元素的<code>cx</code>值应为420， <code>cy</code>值为280， <code>r</code>值为5。
    testString: assert($('circle').eq(4).attr('cx') == '420' && $('circle').eq(4).attr('cy') == '280' && $('circle').eq(4).attr('r') == '5');
  - text: 第六个<code>circle</code>元素的<code>cx</code>值应为233， <code>cy</code>值为355， <code>r</code>值为5。
    testString: assert($('circle').eq(5).attr('cx') == '233' && $('circle').eq(5).attr('cy') == '355' && $('circle').eq(5).attr('r') == '5');
  - text: 第七个<code>circle</code>元素的<code>cx</code>值应为333， <code>cy</code>值为404， <code>r</code>值为5。
    testString: assert($('circle').eq(6).attr('cx') == '333' && $('circle').eq(6).attr('cy') == '404' && $('circle').eq(6).attr('r') == '5');
  - text: 第八个<code>circle</code>元素的<code>cx</code>值应为222， <code>cy</code>值为167， <code>r</code>值为5。
    testString: assert($('circle').eq(7).attr('cx') == '222' && $('circle').eq(7).attr('cy') == '167' && $('circle').eq(7).attr('r') == '5');
  - text: 第九个<code>circle</code>元素的<code>cx</code>值应为78， <code>cy</code>值为180， <code>r</code>值为5。
    testString: assert($('circle').eq(8).attr('cx') == '78' && $('circle').eq(8).attr('cy') == '180' && $('circle').eq(8).attr('r') == '5');
  - text: 第十个<code>circle</code>元素的<code>cx</code>值应为21， <code>cy</code>值为377， <code>r</code>值为5。
    testString: assert($('circle').eq(9).attr('cx') == '21' && $('circle').eq(9).attr('cy') == '377' && $('circle').eq(9).attr('r') == '5');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

  </script>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
