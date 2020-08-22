---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
videoUrl: ''
localeTitle: 应用样式直到满足@while的条件
---

## Description
<section id="description"> <code>@while</code>指令是一个与JavaScript <code>while</code>循环具有类似功能的选项。它会创建CSS规则，直到满足条件。 <code>@for</code>挑战给出了一个创建简单网格系统的示例。这也适用于<code>@while</code> 。 <blockquote> $ x：1; <br> @while $ x &lt;13 { <br> .col  - ＃{$ x} {width：100％/ 12 * $ x;} <br> $ x：$ x + 1; <br> } </blockquote>首先，定义变量<code>$x</code>并将其设置为1.接下来，使用<code>@while</code>指令创建网格系统， <i>而</i> <code>$x</code>小于13.在设置<code>width</code>的CSS规则后， <code>$x</code>增加1以避免无限循环。 </section>

## Instructions
<section id="instructions">使用<code>@while</code>创建一系列具有不同<code>font-sizes</code>的类。从<code>text-1</code>到<code>text-10</code>应该有10个不同的类。然后将<code>font-size</code>设置为5px乘以当前索引号。确保避免无限循环！ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>@while</code>指令。
    testString: 'assert(code.match(/@while /g), "Your code should use the <code>@while</code> directive.");'
  - text: 您的代码应将索引变量设置为1才能启动。
    testString: 'assert(code.match(/\$.*:\s*?1;/gi), "Your code should set an index variable to 1 to start.");'
  - text: 您的代码应该递增计数器变量。
    testString: 'assert(code.match(/\$(.*):\s*?\$\1\s*?\+\s*?1;/gi), "Your code should increment the counter variable.");'
  - text: 您的<code>.text-1</code>类的<code>font-size</code>为5px。
    testString: 'assert($(".text-1").css("font-size") == "5px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.");'
  - text: 您的<code>.text-2</code>类的<code>font-size</code>为10px。
    testString: 'assert($(".text-2").css("font-size") == "10px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.");'
  - text: 您的<code>.text-3</code>类的<code>font-size</code>为15px。
    testString: 'assert($(".text-3").css("font-size") == "15px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.");'
  - text: 您的<code>.text-4</code>类的<code>font-size</code>为20px。
    testString: 'assert($(".text-4").css("font-size") == "20px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.");'
  - text: 您的<code>.text-5</code>类的<code>font-size</code>为25px。
    testString: 'assert($(".text-5").css("font-size") == "25px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.");'
  - text: 您的<code>.text-6</code>类的<code>font-size</code>为30px。
    testString: 'assert($(".text-6").css("font-size") == "30px", "Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.");'
  - text: 您的<code>.text-7</code>类的<code>font-size</code>为35px。
    testString: 'assert($(".text-7").css("font-size") == "35px", "Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.");'
  - text: 您的<code>.text-8</code>类的<code>font-size</code>为40px。
    testString: 'assert($(".text-8").css("font-size") == "40px", "Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.");'
  - text: 您的<code>.text-9</code>类的<code>font-size</code>为45px。
    testString: 'assert($(".text-9").css("font-size") == "45px", "Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.");'
  - text: 您的<code>.text-10</code>类的<code>font-size</code>为50px。
    testString: 'assert($(".text-10").css("font-size") == "50px", "Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
