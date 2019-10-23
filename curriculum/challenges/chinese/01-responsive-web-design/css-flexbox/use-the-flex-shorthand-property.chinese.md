---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: ''
localeTitle: 使用flex速记属性
---

## Description
<section id="description">有一个快捷方式可以同时设置多个flex属性。通过使用<code>flex</code>属性，可以将<code>flex-grow</code> ， <code>flex-shrink</code>和<code>flex-basis</code>属性设置在一起。例如， <code>flex: 1 0 10px;</code>将项目设置为<code>flex-grow: 1;</code> ， <code>flex-shrink: 0;</code> ，和<code>flex-basis: 10px;</code> 。默认属性设置为<code>flex: 0 1 auto;</code> 。 </section>

## Instructions
<section id="instructions">将CSS属性<code>flex</code>添加到<code>#box-1</code>和<code>#box-2</code> 。给<code>#box-1</code>赋值，使<code>flex-grow</code>为2， <code>flex-shrink</code>为2， <code>flex-basis</code>为150px。给<code>#box-2</code>赋值，使<code>flex-grow</code>为1， <code>flex-shrink</code>为1，其<code>flex-basis</code>为150px。这些值将导致<code>#box-1</code>增长以在容器大于300px时以<code>#box-2</code>两倍速率填充额外空间，并在容器小于300px时以<code>#box-2</code>的速率缩小两倍。 300px是两个框的<code>flex-basis</code>值的组合大小。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-1</code>元素的<code>flex</code>属性应设置为2 2 150px。'
    testString: 'assert($("#box-1").css("flex-grow") == "2" && $("#box-1").css("flex-shrink") == "2" && $("#box-1").css("flex-basis") == "150px", "The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.");'
  - text: '<code>#box-2</code>元素的<code>flex</code>属性应设置为1 1 150px。'
    testString: 'assert($("#box-2").css("flex-grow") == "1" && $("#box-2").css("flex-shrink") == "1" && $("#box-2").css("flex-basis") == "150px", "The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.");'
  - text: '您的代码应该使用<code>#box-1</code>和<code>#box-2</code>的<code>flex</code>属性。'
    testString: 'assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2, "Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
