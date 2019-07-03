---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1

videoUrl: ''
localeTitle: Understand the Hazards of Using Imperative Code
---

## Description
<section id='description'>
FCC 团队需求有变更，现在想要两种茶：绿茶（green tea）和红茶（black tea）。事实证明，用户需求变更是很常见的。
基于以上信息，我们需要重构上一节挑战中的<code>getTea</code>函数来处理多种茶的请求。我们可以修改<code>getTea</code>接受一个函数作为参数，使它能够修改茶的类型。这让<code>getTea</code>更灵活，也使需求变更时为程序员提供更多控制权。
首先，我们将介绍一些术语：
<code>Callbacks</code>是被传递到另一个函数中调用的函数。你应该已经在其他函数中看过这个写法，例如在<code>filter</code>中，回调函数告诉 JavaScript 以什么规则过滤数组。
函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做<code>first class</code>函数。在 JavaScript 中，所有函数都是<code>first class</code>函数。
将函数为参数或返回值的函数叫做<code>higher order</code>函数。
当函数传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以叫做<code>lambda</code>。
</section>

## Instructions
<section id='instructions'>
准备 27 杯绿茶和 13 杯红茶，分别存入<code>tea4GreenTeamFCC</code>和<code>tea4BlackTeamFCC</code>变量。请注意，<code>getTea</code>函数已经变了，现在它接收一个函数作为第一个参数。
注意：数据（茶的数量）作为最后一个参数。我们将在后面的课程中对此进行更多讨论。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Move ahead to understand the error.
    testString: assert(true, 'Move ahead to understand the error.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              