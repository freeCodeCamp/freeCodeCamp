---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
videoUrl: ''
localeTitle: Currying和Partial Application简介
---

## Description
<section id="description">函数的<code>arity</code>是它需要的参数数量。 <code>Currying</code>一个功能装置，以n的函数转换<code>arity</code>为N的功能<code>arity</code> 1。换言之，它重构的功能，因此采用一个参数，然后返回另一个函数，它的下一个参数，依此类推。这是一个例子： <blockquote> //非咖喱功能<br> function unCurried（x，y）{ <br>返回x + y; <br> } <br><br> // Curried功能<br> function curried（x）{ <br> return函数（y）{ <br>返回x + y; <br> } <br> } <br> curried（1）（2）//返回3 </blockquote>如果您无法一次为函数提​​供所有参数，则在程序中这很有用。您可以将每个函数调用保存到一个变量中，该变量将保存返回的函数引用，该引用在可用时接受下一个参数。以下是使用上面示例中的<code>curried</code>函数的示例： <blockquote> //在部分中调用curried函数： <br> var funcForY = curried（1）; <br>的console.log（funcForY（2））; //打印3 </blockquote>类似地， <code>partial application</code>可以描述为一次向函数应用一些参数并返回应用于更多参数的另一个函数。这是一个例子： <blockquote> //公正的功能<br>功能公正（x，y，z）{ <br> return x + y + z; <br> } <br> var partialFn = impartial.bind（this，1,2）; <br> partialFn（10）; //返回13 </blockquote></section>

## Instructions
<section id="instructions">填写<code>add</code>函数的主体，以便使用currying来添加参数<code>x</code> ， <code>y</code>和<code>z</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add(10)(20)(30)</code>应该返回<code>60</code> 。
    testString: 'assert(add(10)(20)(30) === 60, "<code>add(10)(20)(30)</code> should return <code>60</code>.");'
  - text: <code>add(1)(2)(3)</code>应该返回<code>6</code> 。
    testString: 'assert(add(1)(2)(3) === 6, "<code>add(1)(2)(3)</code> should return <code>6</code>.");'
  - text: <code>add(11)(22)(33)</code>应该返回<code>66</code> 。
    testString: 'assert(add(11)(22)(33) === 66, "<code>add(11)(22)(33)</code> should return <code>66</code>.");'
  - text: 您的代码应包含返回<code>x + y + z</code>的final语句。
    testString: 'assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g), "Your code should include a final statement that returns <code>x + y + z</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add(x) {
  // Add your code below this line


  // Add your code above this line
}
add(10)(20)(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
