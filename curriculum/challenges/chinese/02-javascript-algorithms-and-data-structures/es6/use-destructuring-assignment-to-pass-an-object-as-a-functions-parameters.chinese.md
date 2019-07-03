---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1

videoUrl: ''
localeTitle: Use Destructuring Assignment to Pass an Object as a Function's Parameters
---

## Description
<section id='description'>
在某些情况下，你可以在函数的参数里直接解构对象。
请看以下代码：
<blockquote>const profileUpdate = (profileData) => {<br>&nbsp;&nbsp;const { name, age, nationality, location } = profileData;<br>&nbsp;&nbsp;// 对这些变量执行某些操作<br>}</blockquote>
上面的操作解构了传给函数的对象。这样的操作也可以直接在参数里完成：
<blockquote>const profileUpdate = ({ name, age, nationality, location }) => {<br>&nbsp;&nbsp;/* 对这些参数执行某些操作 */<br>}</blockquote>
这样的操作去除了多余的代码，使代码更加整洁。
这样做还有个额外的好处：函数不需要再去操作整个对象，而仅仅是操作复制到函数作用域内部的参数。
</section>

## Instructions
<section id='instructions'>
对<code>half</code>的参数进行解构赋值，使得仅仅将<code>max</code>与<code>min</code>的值传进函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>stats</code>的类型应该是一个<code>object</code>。
    testString: assert(typeof stats === 'object', '<code>stats</code>的类型应该是一个<code>object</code>。');
  - text: <code>half(stats)</code>应该等于<code>28.015</code>
    testString: assert(half(stats) === 28.015, '<code>half(stats)</code>应该等于<code>28.015</code>');
  - text: 使用了解构赋值。
    testString: getUserInput => assert(getUserInput('index').match(/\(\s*\{\s*\w+\s*,\s*\w+\s*\}\s*\)/g), '使用了解构赋值。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              