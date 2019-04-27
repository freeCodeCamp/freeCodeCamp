---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: ''
localeTitle: 创建媒体查询
---

## Description
<section id="description">媒体查询是CSS3中引入的一种新技术，它根据不同的视口大小更改内容的显示。视口是用户在网页上的可见区域，根据用于访问网站的设备而不同。媒体查询由媒体类型组成，如果该媒体类型与显示文档的设备类型匹配，则应用样式。您可以根据需要在媒体查询中包含尽可能多的选择器和样式。以下是媒体查询的示例，当设备的宽度小于或等于100px时返回内容： <code>@media (max-width: 100px) { /* CSS Rules */ }</code>并且以下媒体查询返回内容时设备的高度大于或等于350px： <code>@media (min-height: 350px) { /* CSS Rules */ }</code>请记住，仅当媒体类型与正在使用的设备的媒体类型匹配时，才应用媒体查询中的CSS。 </section>

## Instructions
<section id="instructions">添加媒体查询，以便当设备的高度小于或等于800px时， <code>p</code>标签的<code>font-size</code>为10px。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 为<code>height</code>小于或等于800px的设备声明<code>@media</code>查询。
    testString: assert($(“style”).text().replace(/\s/g ,‘’).match(/@media\(max-height:800px\)/g), “Declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.“);
  - 当设备<code> height </ code>小于或等于800px时，<code> p </ code>元素的<code> font-size </ code>应为10px.
    testString: assert($(“style”).text().replace(/\s/g ,‘’).match(/@media\(max-height:800px\){p{font-size:10px;?}}/g), “Your <code>p</code> element should have the <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.“);’
  - text: 当设备<code>height</code>大于800px时，您的<code>p</code>元素的<code>font-size</code>初始值应为20px。
    testString: assert($(“style”).text().replace(/\s/g ,‘’).replace(/@media.*}/g, ‘’).match(/p{font-size:20px;?}/g), Your <code>p</code> element should have an initial <code>font-size</code> of 20px when the device <code>height</code> is more than 800px);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 20px;
  }

  /* Add media query below */

</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
