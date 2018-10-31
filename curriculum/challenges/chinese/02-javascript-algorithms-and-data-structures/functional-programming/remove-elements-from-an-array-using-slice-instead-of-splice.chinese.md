---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
videoUrl: ''
localeTitle: 使用切片从阵列中删除元素而不是拼接
---

## Description
<section id="description">使用数组时的常见模式是当您想要删除项目并保留数组的其余部分时。 JavaScript为此提供了<code>splice</code>方法，该方法接受索引的参数，该索引指示从何处开始删除项目，然后是要删除的项目数。如果未提供第二个参数，则默认为通过结尾删除项目。但是， <code>splice</code>方法会改变调用它的原始数组。这是一个例子： <blockquote> var cities = [“芝加哥”，“德里”，“伊斯兰堡”，“伦敦”，“柏林”]; <br> cities.splice（3,1）; //返回“London”并从cities数组中删除它<br> //现在是城市[“芝加哥”，“德里”，“伊斯兰堡”，“柏林”] </blockquote>正如我们在上一次挑战中看到的那样， <code>slice</code>方法不会改变原始数组，而是返回一个可以保存到变量中的新数组。回想一下， <code>slice</code>方法为索引开始和结束<code>slice</code>采用两个参数（结束是非包含的），并在新数组中返回这些项。使用<code>slice</code>方法而不是<code>splice</code>有助于避免任何阵列变异的副作用。 </section>

## Instructions
<section id="instructions">使用<code>slice</code>而不是<code>splice</code>重写函数<code>nonMutatingSplice</code> 。它应该将提供的<code>cities</code>数组限制为3的长度，并返回仅包含前三项的新数组。不要改变提供给函数的原始数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>slice</code>方法。
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: 您的代码不应使用<code>splice</code>方法。
    testString: 'assert(!code.match(/\.splice/g), "Your code should not use the <code>splice</code> method.");'
  - text: <code>inputCities</code>数组不应更改。
    testString: 'assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]), "The <code>inputCities</code> array should not change.");'
  - text: '<code>nonMutatingSplice([&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;London&quot;, &quot;Berlin&quot;])</code>应该返回<code>[&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;]</code> 。'
    testString: 'assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]), "<code>nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])</code> should return <code>["Chicago", "Delhi", "Islamabad"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.splice(3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
