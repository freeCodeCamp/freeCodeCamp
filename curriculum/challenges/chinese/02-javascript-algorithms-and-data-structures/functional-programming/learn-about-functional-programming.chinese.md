---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1

videoUrl: ''
localeTitle: Learn About Functional Programming
---

## Description
<section id='description'>
函数式编程是一种解决方案简单，功能独立，对作用域外没有任何副作用的编程范式。
<code>INPUT -> PROCESS -> OUTPUT</code>
函数式编程：
1）功能独立——不依赖于程序的状态（比如可能发生变化的全局变量）；
2）纯函数——同一个输入永远能得到同一个输出；
3）有限的副作用——可以严格地限制函数外部对状态的更改导致的状态变化。
</section>

## Instructions
<section id='instructions'>
freeCodeCamp 成员在 love tea 的故事。
在代码编辑器中，已经为你定义好了<code>prepareTea</code>和<code>getTea</code>函数。调用<code>getTea</code>函数为团队准备 40 杯茶，并将它们存储在<code>tea4TeamFCC</code>变量里。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tea4TeamFCC</code>变量里应有 40 杯为团队准备的茶。
    testString: assert(tea4TeamFCC.length === 40, '<code>tea4TeamFCC</code>变量里应有 40 杯为团队准备的茶。');
  - text: <code>tea4TeamFCC</code>变量里应有 greenTea。
    testString: assert(tea4TeamFCC[0] === 'greenTea', '<code>tea4TeamFCC</code>变量里应有 greenTea。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              