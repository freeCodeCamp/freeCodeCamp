---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
videoUrl: ''
localeTitle: 扩展构造函数以接收参数
---

## Description
<section id="description">最后一次挑战的<code>Bird</code>和<code>Dog</code>建设者运作良好。但是，请注意，所有的<code>Birds</code>与该创建<code>Bird</code>构造自动命名伟业，颜色为蓝色，有两条腿。如果您希望鸟类的名称和颜色具有不同的值，该怎么办？可以手动更改每只鸟的属性，但这将是很多工作： <blockquote>让swan = new Bird（）; <br> swan.name =“卡洛斯”; <br> swan.color =“white”; </blockquote>假设您正在编写一个程序来跟踪鸟舍中数百甚至数千种不同的鸟类。创建所有鸟类需要花费大量时间，然后将每个属性的属性更改为不同的值。为了更轻松地创建不同的<code>Bird</code>对象，您可以设计Bird构造函数来接受参数： <blockquote> function Bird（名称，颜色）{ <br> this.name = name; <br> this.color = color; <br> this.numLegs = 2; <br> } </blockquote>然后传入值作为参数，将每个独特的鸟定义到<code>Bird</code>构造函数中： <code>let cardinal = new Bird(&quot;Bruce&quot;, &quot;red&quot;);</code>这给出了一个<code>Bird</code>的新实例，其名称和颜色属性分别设置为Bruce和red。 <code>numLegs</code>属性仍设置为2. <code>cardinal</code>具有以下属性： <blockquote> cardinal.name // =&gt;布鲁斯<br> cardinal.color // =&gt;红色<br> cardinal.numLegs // =&gt; 2 </blockquote>构造函数更灵活。现在可以在创建时为每个<code>Bird</code>定义属性，这是JavaScript构造函数如此有用的一种方式。他们根据共享的特征和行为将对象组合在一起，并定义一个自动创建的蓝图。 </section>

## Instructions
<section id="instructions">创建另一个<code>Dog</code>构造函数。这次，将其设置为采用参数<code>name</code>和<code>color</code> ，并将属性<code>numLegs</code>固定为4.然后创建一个保存在变量<code>terrier</code>的新<code>Dog</code> 。将两个字符串作为<code>name</code>和<code>color</code>属性的参数传递给它。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code>应该收到<code>name</code>的论据。
    testString: 'assert((new Dog("Clifford")).name === "Clifford", "<code>Dog</code> should receive an argument for <code>name</code>.");'
  - text: <code>Dog</code>应该收到<code>color</code>的论据。
    testString: 'assert((new Dog("Clifford", "yellow")).color === "yellow", "<code>Dog</code> should receive an argument for <code>color</code>.");'
  - text: <code>Dog</code>应该将属性<code>numLegs</code>设置为4。
    testString: 'assert((new Dog("Clifford")).numLegs === 4, "<code>Dog</code> should have property <code>numLegs</code> set to 4.");'
  - text: 应该使用<code>Dog</code>构造函数创建<code>terrier</code> 。
    testString: 'assert(terrier instanceof Dog, "<code>terrier</code> should be created using the <code>Dog</code> constructor.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {

}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
