---
title: Execute Brain****
id: 59e0a8df964e4540d5abe599
challengeType: 5
videoUrl: ''
localeTitle: 执行大脑****
---

## Description
<section id="description"><p>编写一个函数来实现Brain ****解释器。该函数将字符串作为参数，并应返回一个字符串作为输出。更多细节如下： </p><p> <a href="http://rosettacode.org/wiki/Brainf***" title="Brainf ***">RCBF</a>是一套为各种语言的Rosetta Code编写的<a href="http://rosettacode.org/wiki/Brainf***" title="Brainf ***">Brainf ***</a>编译器和解释器。 </p><p>以下是RCBF每个版本的链接。 </p><p>实现只需要正确实现以下指令： </p><p> {| </p><p> ！命令</p><p> ！描述</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>&gt;</code> ||将指针向右移动</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>&lt;</code> ||将指针移到左侧</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>+</code> ||增加指针下的内存单元格</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>-</code> ||减少指针下的内存单元格</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>.</code> ||输出指针处单元格表示的字符</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>,</code> ||输入一个字符并将其存储在指针的单元格中</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>[</code> ||如果指针下的单元格为0，则跳过匹配<code>]</code> </p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>]</code> ||跳回匹配<code>[</code>如果指针下的单元格非零</p><p> |} </p><p>允许任何单元格大小，EOF（ <u>E</u> nd- <u>O</u> - <u>F</u> ile）支持是可选的，无论您是否有有界或无界内存。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>brain(bye)</code>应该重新调整一个字符串
    testString: assert(typeof brain(bye) === 'string');
  - text: <code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"
    testString: assert.equal(brain("++++++[>++++++++++<-]>+++++."),"A");
  - text: <code>brain(bye)</code>应该回归<code>Goodbye, World!\\r\\n</code>
    testString: assert.equal(brain(bye), 'Goodbye, World!\r\n');
  - text: <code>brain(hello)</code>应该回归<code>Hello World!\\n</code>
    testString: assert.equal(brain(hello), "Hello World!\n");
  - text: <code>brain(fib)</code>应该返回<code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>
    testString: assert.equal(brain(fib), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function brain (prog) {
  // Good luck!
}

```

</div>

### Before Test
<div id='js-setup'>

```js
let fib=`+

++

+++

++++

+>+>>

>>++++

+++++++

++++++++

+++++++++

++++++++++

++++++>++++

++++++++++++

+++++++++++++

+++<<<<<<[>[>>

>>>>+>+<<<<<<<-

]>>>>>>>[<<<<<<<

+>>>>>>>-]<[>++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++.[-]]++++++++++<[

->-<]>+++++++++++++++++++++

+++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
let bye='++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.';

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
