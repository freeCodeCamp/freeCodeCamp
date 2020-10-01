---
id: 587d8253367417b2b2512c6a
challengeType: 1
videoUrl: ''
title: 键入的数组
---

## Description
<section id="description">数组是可以容纳许多不同元素的JavaScript对象。 <code>var complexArr = [1, 5, &quot;2&quot;, &quot;Word&quot;, {&quot;name&quot;: &quot;James&quot;}];</code>基本上后台发生的事情是您的浏览器会自动为该阵列提供适当的内存空间。如果添加或删除数据，它也会根据需要进行更改。但是，在高性能和不同元素类型的世界中，有时您需要更具体地了解为阵列提供多少内存。 <dfn>类型化数组</dfn>是这个问题的答案。您现在可以说要为阵列提供多少内存。下面是可用的不同类型数组的基本概述，以及该数组中每个元素的大小（以字节为单位）。 <table class="table table-striped"><tbody><tr><th>类型</th><th>每个元素大小以字节为单位</th></tr><tr><td> <code>Int8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8ClampedArray</code> </td> <td> 1 </td></tr><tr><td> <code>Int16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Uint16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Int32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Uint32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float64Array</code> </td> <td> 8 </td></tr></tbody></table>创建这种类型的数组有两种方法。一种方法是直接创建它。下面是如何创建一个3长度的<code>Int16Array</code> 。 <blockquote> var i8 = new Int16Array（3）; <br>的console.log（I8）; <br> //返回[0,0,0] </blockquote>您还可以创建一个<dfn>缓冲区</dfn>来分配您希望数组占用多少数据（以字节为单位）。 <strong>注意</strong> <br>要使用缓冲区创建类型化数组，需要将字节数分配为上面列出的字节的倍数。 <blockquote> //以不同方式创建相同的Int16Array数组<br> var byteSize = 6; //需要是2的倍数<br> var buffer = new ArrayBuffer（byteSize）; <br> var i8View = new Int16Array（buffer）; <br> buffer.byteLength; //返回6 <br> i8View.byteLength; //返回6 <br>的console.log（i8View）; //返回[0,0,0] </blockquote> <dfn>缓冲区</dfn>是仅承载数据的通用对象。您无法正常访问它们。要访问它们，您需要先创建一个<dfn>视图</dfn> 。 <blockquote> i8View [0] = 42; <br>的console.log（i8View）; //返回[42,0,0] </blockquote> <strong>注意</strong> <br>类型化数组没有传统数组所具有的某些方法，如<code>.pop()</code>或<code>.push()</code> 。类型化数组也会失败<code>Array.isArray()</code> ，它会检查某些内容是否为数组。虽然更简单，但对于不太复杂的JavaScript引擎来说，这可能是一个优势。 </section>

## Instructions
<section id="instructions">首先创建一个64字节的<code>buffer</code> 。然后创建一个<code>Int32Array</code>类型数组，其中包含一个名为<code>i32View</code>的视图。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>buffer</code>应该是64字节大。
    testString: assert(buffer.byteLength === 64);
  - text: 您的缓冲区的<code>i32View</code>视图应该是64字节大。
    testString: assert(i32View.byteLength === 64);
  - text: 您的缓冲区的<code>i32View</code>视图应为16个元素长。
    testString: assert(i32View.length === 16);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var buffer;
var i32View;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
