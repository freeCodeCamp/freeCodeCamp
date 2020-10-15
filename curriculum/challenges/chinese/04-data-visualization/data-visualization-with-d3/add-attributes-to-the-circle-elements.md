---
id: 587d7fab367417b2b2512bd8
challengeType: 6
forumTopicId: 301471
title: 给 Circle 元素添加属性
---

## Description
<section id='description'>
上个挑战为 <code>dataset</code> 中的每个点都创建了 <code>circle</code> 元素，并将它们添加到 SVG 画布上。但是 D3 需要更多关于位置和 <code>circle</code> 大小的信息来正确的显示它们。
在 SVG 中 <code>circle</code> 有三个主要的属性。<code>cx</code> 和 <code>cy</code> 属性是坐标，它们告诉 D3 将图形的<em>中心</em>放在 SVG 画布的何处。半径（ <code>r</code> 属性）给出 <code>circle</code> 的大小。
就像 <code>rect</code> 的 <code>y</code> 坐标，<code>circle</code> 的 <code>cy</code> 属性是从 SVG 画布的顶端开始测量的，而不是从底端。
所有的属性都可以用回调函数来动态设值。记住，所有串联在 <code>data(dataset)</code> 后面的方法为 <code>dataset</code> 中的每个对象都运行一次。回调函数中的 <code>d</code> 参数指在 <code>dataset</code> 中的当前对象，对每个点来说都是一个数组。就像 <code>d[0]</code>，你可以使用方括号的方式来访问数组中的值。
</section>

## Instructions
<section id='instructions'>
为 <code>circle</code> 元素添加 <code>cx</code>、<code>cy</code>、<code>r</code> 属性。<code>cx</code> 的值应该是 <code>dataset</code> 中每个对象的数组的第一个数，<code>cy</code> 的值应该根据数据中的第二个数，但是要确保正向显示图表而不是倒转。所有圆圈的 <code>r</code> 的值应该为 5。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有 10 个 <code>circle</code> 元素。
    testString: assert($('circle').length == 10);
  - text: 第一个 <code>circle</code> 元素的 <code>cx</code> 值应该为 34，<code>cy</code> 值应该为 422，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(0).attr('cx') == '34' && $('circle').eq(0).attr('cy') == '422' && $('circle').eq(0).attr('r') == '5');
  - text: 第二个 <code>circle</code> 元素的 <code>cx</code> 值应该为 109，<code>cy</code> 值应该为 220，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(1).attr('cx') == '109' && $('circle').eq(1).attr('cy') == '220' && $('circle').eq(1).attr('r') == '5');
  - text: 第三个 <code>circle</code> 元素的 <code>cx</code> 值应该为 310，<code>cy</code> 值应该为 380，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(2).attr('cx') == '310' && $('circle').eq(2).attr('cy') == '380' && $('circle').eq(2).attr('r') == '5');
  - text: 第四个 <code>circle</code> 元素的 <code>cx</code> 值应该为 79，<code>cy</code> 值应该为 89，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(3).attr('cx') == '79' && $('circle').eq(3).attr('cy') == '89' && $('circle').eq(3).attr('r') == '5');
  - text: 第五个 <code>circle</code> 元素的 <code>cx</code> 值应该为 420，<code>cy</code> 值应该为 280，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(4).attr('cx') == '420' && $('circle').eq(4).attr('cy') == '280' && $('circle').eq(4).attr('r') == '5');
  - text: 第六个 <code>circle</code> 元素的 <code>cx</code> 值应该为 233，<code>cy</code> 值应该为 355，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(5).attr('cx') == '233' && $('circle').eq(5).attr('cy') == '355' && $('circle').eq(5).attr('r') == '5');
  - text: 第七个 <code>circle</code> 元素的 <code>cx</code> 值应该为 333，<code>cy</code> 值应该为 404，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(6).attr('cx') == '333' && $('circle').eq(6).attr('cy') == '404' && $('circle').eq(6).attr('r') == '5');
  - text: 第八个 <code>circle</code> 元素的 <code>cx</code> 值应该为 222，<code>cy</code> 值应该为 167，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(7).attr('cx') == '222' && $('circle').eq(7).attr('cy') == '167' && $('circle').eq(7).attr('r') == '5');
  - text: 第九个 <code>circle</code> 元素的 <code>cx</code> 值应该为 78，<code>cy</code> 值应该为 180，<code>r</code> 值应该为 5。
    testString: assert($('circle').eq(8).attr('cx') == '78' && $('circle').eq(8).attr('cy') == '180' && $('circle').eq(8).attr('r') == '5');
  - text: 第十个 <code>circle</code> 元素的 <code>cx</code> 值应该为 21，<code>cy</code> 值应该为 377，<code>r</code> 值应该为 5。
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
       // 在下面添加你的代码



       // 在上面添加你的代码

  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

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
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>

```

</section>
