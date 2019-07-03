---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1

videoUrl: ''
localeTitle: Create Strings using Template Literals
---

## Description
<section id='description'>
模板字符串是 ES6 的另外一项新的功能。这是一种可以轻松构建复杂字符串的方法。
请看以下代码：
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Zodiac Hasbro",<br>&nbsp;&nbsp;age: 56<br>};<br><br>// string interpolation<br>const greeting = `Hello, my name is ${person.name}!<br>I am ${person.age} years old.`;<br><br>console.log(greeting); // 打印出<br>// Hello, my name is Zodiac Hasbro!<br>// I am 56 years old.<br></blockquote>
这段代码有许多的不同：
首先，上面使用的<code>${variable}</code>语法是一个占位符。这样一来，你将不再需要使用<code>+</code>运算符来连接字符串。当需要在字符串里增加变量的时候，你只需要在变量的外面括上<code>${</code>和<code>}</code>，并将其放在字符串里就可以了。
其次，在例子使用了反引号（<code>`</code>），而不是引号（<code>'</code>或者<code>"</code>）将字符串括了起来，并且这个字符串可以换行。
这个新的方式使你可以更灵活的创建复杂的字符串。
</section>

## Instructions
<section id='instructions'>
使用模板字符串的反引号的语法来展示<code>result</code>对象的<code>failure</code>数组内的每个条目。每个条目应该括在带有<code>text-warning</code>类属性的<code>li</code>标签中，并赋值给<code>resultDisplayArray</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code> 是一个包含了 <code>result failure</code> 内的消息的数组。
    testString: assert(typeof makeList(result.failure) === 'object' && resultDisplayArray.length === 3, '<code>resultDisplayArray</code> 是一个包含了 <code>result failure</code> 内的消息的数组。');
  - text: <code>resultDisplayArray</code> 要有正确的输出。
    testString: assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>`), '<code>resultDisplayArray</code> 要有正确的输出。');
  - text: 应使用模板字符串。
    testString: getUserInput => assert(getUserInput('index').match(/`.*`/g), '应使用模板字符串。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              