---
title: Execute Brain****
id: 59e0a8df964e4540d5abe599
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof brain(bye) === "string", "<code>brain(bye)</code> should return a string");'
  - text: ''
    testString: 'assert.equal(brain("++++++[>++++++++++<-]>+++++."),"A", "<code>brain("++++++[>++++++++++<-]>+++++.")</code> should return "A"");'
  - text: ''
    testString: 'assert.equal(brain(bye), "Goodbye, World!\r\n", "<code>brain(bye)</code> should return <code>Goodbye, World!\\r\\n</code>");'
  - text: ''
    testString: 'assert.equal(brain(hello), "Hello World!\n", "<code>brain(hello)</code> should return <code>Hello World!\\n</code>");'
  - text: ''
    testString: 'assert.equal(brain(fib), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89", "<code>brain(fib)</code> should return <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>");'

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
</section>
