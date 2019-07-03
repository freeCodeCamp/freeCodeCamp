---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1

videoUrl: ''
localeTitle: Prevent Object Mutation
---

## Description
<section id='description'>
通过之前的挑战可以看出,<code>const</code>声明并不会真的保护你的数据不被改变。为了确保数据不被改变，JavaScript 提供了一个函数<code>Object.freeze</code>来防止数据改变。
当一个对象被冻结的时候，你不能再对它的属性再进行增、删、改的操作。任何试图改变对象的操作都会被阻止，却不会报错。
<blockquote>let obj = {<br>&nbsp;&nbsp;name:"FreeCodeCamp",<br>&nbsp;&nbsp;review:"Awesome"<br>};<br>Object.freeze(obj);<br>obj.review = "bad"; // obj 对象被冻结了，这个操作会被忽略<br>obj.newProp = "Test"; // 也会被忽略，不允许数据改变<br>console.log(obj); <br>// { name: "FreeCodeCamp", review:"Awesome"}</blockquote>
</section>

## Instructions
<section id='instructions'>
在这个挑战中，你将使用<code>Object.freeze</code>来防止数学常量被改变。你需要冻结<code>MATH_CONSTANTS</code>对象，使得没有人可以改变<code>PI</code>的值，抑或增加或删除属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要替换<code>const</code>关键字。
    testString: getUserInput => assert(getUserInput('index').match(/const/g), '不要替换<code>const</code>关键字。');
  - text: <code>MATH_CONSTANTS</code>应该为一个常量 (使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g), '<code>MATH_CONSTANTS</code>应该为一个常量 (使用<code>const</code>)。');
  - text: 不要改变原始的<code>MATH_CONSTANTS</code>。
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g), "不要改变原始的<code>MATH_CONSTANTS</code>。");'
  - text: <code>PI</code>等于<code>3.14</code>。
    testString: assert(PI === 3.14, '<code>PI</code>等于<code>3.14</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              