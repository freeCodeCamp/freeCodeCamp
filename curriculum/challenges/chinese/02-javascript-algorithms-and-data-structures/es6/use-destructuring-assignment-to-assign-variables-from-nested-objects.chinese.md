---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1

videoUrl: ''
localeTitle: Use Destructuring Assignment to Assign Variables from Nested Objects
---

## Description
<section id='description'>
同样，我们可以将 <em>嵌套的对象</em>解构到变量中。
请看以下代码：
<blockquote>const a = {<br>&nbsp;&nbsp;start: { x: 5, y: 6},<br>&nbsp;&nbsp;end: { x: 6, y: -9 }<br>};<br>const { start : { x: startX, y: startY }} = a;<br>console.log(startX, startY); // 5, 6</blockquote>
在上面的例子里，<code>a.start</code>将值赋给了变量<code>start</code>，<code>start</code>同样也是个对象。
</section>

## Instructions
<section id='instructions'>
使用解构赋值来得到<code>forecast.tomorrow</code>的<code>max</code>，并将其赋值给<code>maxOfTomorrow</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maxOfTomorrow</code>等于<code>84.6</code>
    testString: assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, '<code>maxOfTomorrow</code>等于<code>84.6</code>');
  - text: 使用嵌套解构
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*\{\s*max\s*:\s*maxOfTomorrow\s*\}\s*\}\s*=\s*forecast/g),"使用嵌套解构");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              