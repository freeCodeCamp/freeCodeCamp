---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: ''
localeTitle: 使用flex-basis属性设置项的初始大小
---

## Description
<section id="description"> <code>flex-basis</code>属性指定CSS在使用<code>flex-shrink</code>或<code>flex-grow</code>进行调整之前的项的初始大小。 <code>flex-basis</code>属性使用的单位与其他大小属性（ <code>px</code> ， <code>em</code> ， <code>%</code>等）相同。该值根据内容<code>auto</code>项目大小。 </section>

## Instructions
<section id="instructions">使用<code>flex-basis</code>设置框的初始大小。将CSS属性<code>flex-basis</code>添加到<code>#box-1</code>和<code>#box-2</code> 。给<code>#box-1</code>一个值为<code>10em</code> ， <code>#box-2</code>给一个值为<code>20em</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-1</code>元素应该具有<code>flex-basis</code>属性。'
    testString: 'assert($("#box-1").css("flex-basis") != "auto", "The <code>#box-1</code> element should have a <code>flex-basis</code> property.");'
  - text: '<code>#box-1</code>元素的<code>flex-basis</code>值应为<code>10em</code> 。'
    testString: 'assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g), "The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.");'
  - text: '<code>#box-2</code>元素应该具有<code>flex-basis</code>属性。'
    testString: 'assert($("#box-2").css("flex-basis") != "auto", "The <code>#box-2</code> element should have the <code>flex-basis</code> property.");'
  - text: '<code>#box-2</code>元素的<code>flex-basis</code>值应为<code>20em</code> 。'
    testString: 'assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g), "The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.");'

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
