---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1

videoUrl: ''
localeTitle: Mutate an Array Declared with const
---

## Description
<section id='description'>
在现代的 JavaScript 里，<code>const</code>声明有很多用法。
一些开发者倾向默认使用<code>const</code>来声明所有变量，但如果它们打算在后续的代码中修改某个值，那在声明的时候就会用<code>let</code>。
然而，你要注意，对象（包括数组和函数）在使用<code>const</code>声明的时候依然是可变的。使用<code>const</code>来声明只会保证它的标识不会被重新赋值。
<blockquote>"use strict";<br>const s = [5, 6, 7];<br>s = [1, 2, 3]; // 试图给 const 变量赋值，报错<br>s[2] = 45; // 与用 var 或 let 声明的数组一样，这个操作也会成功<br>console.log(s); // 返回 [5, 6, 45]</blockquote>
从以上代码看出，你可以改变<code>[5, 6, 7]</code>自身，所以<code>s</code>变量指向了改变后的数组<code>[5, 6, 45]</code>。和所有数组一样，数组<code>s</code>中的数组元素是可以被改变的，但是因为使用了<code>const</code>关键字，你不能使用赋值操作符将变量标识<code>s</code>指向另外一个数组。
</section>

## Instructions
<section id='instructions'>
这里有一个使用<code>const s = [5, 7, 2]</code>声明的数组。使用对各元素赋值的方法将数组改成<code>[2, 5, 7]</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要替换<code>const</code>关键字。
    testString: getUserInput => assert(getUserInput('index').match(/const/g), '不要替换<code>const</code>关键字。');
  - text: <code>s</code>应该为常量 (通过使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+s/g), '<code>s</code>应该为常量 (通过使用<code>const</code>)。');
  - text: 不要改变原数组的声明。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g), '不要改变原数组的声明。');
  - text: <code>s</code>应该等于<code>[2, 5, 7]</code>。
    testString: assert.deepEqual(s, [2, 5, 7], '<code>s</code>应该等于<code>[2, 5, 7]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              