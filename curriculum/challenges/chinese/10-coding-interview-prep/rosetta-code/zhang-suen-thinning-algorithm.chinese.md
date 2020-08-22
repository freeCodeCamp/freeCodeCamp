---
title: Zhang-Suen thinning algorithm
id: 594810f028c0303b75339ad7
challengeType: 5
videoUrl: ''
localeTitle: 张素细化算法
---

## Description
<section id="description">这是用于稀释黑白的算法，即每像素一位图像。例如，输入图像为： <pre> ##############################
 ##################################
 #####################################
 ##################################
   ###### ####### ####### ######
   ###### ####### #######
   ########################
   #######################
   ########################
   ###### ####### #######
   ###### ####### #######
   ###### ####### ####### ######
 ##################################
 ######## #####################################
 ######## ###################################
 ######## ####### ###### ###################
                                                           </pre>它产生稀疏的输出： <pre>
<pre> <code># ########## ####### ## # #### # # # ## # # # # # # # # # ############ # # # # # # # # # # # # # # ## # ############ ### ### &lt;/pre&gt;</code> </pre>
<h2>算法</h2>
假设黑色像素是一个并且白色像素为零，并且输入图像是矩形N乘M的1和0阵列。
该算法对可以具有八个邻居的所有黑色像素P1进行操作。邻居按顺序安排为：
<table border="1">
  <tbody><tr><td> P9 </td><td> P2 </td><td> P3 </td></tr>
  <tr><td> P8 </td><td> <b>P1</b> </td><td> P4 </td></tr>
  <tr><td> P7 </td><td> P6 </td><td> P5 </td></tr>
</tbody></table>
显然，图像的边界像素不能具有完整的八个邻居。
<pre> <code>Define $A(P1)$ = the number of transitions from white to black, (0 -&gt; 1) in the sequence P2,P3,P4,P5,P6,P7,P8,P9,P2. (Note the extra P2 at the end - it is circular). Define $B(P1)$ = the number of black pixel neighbours of P1. ( = sum(P2 .. P9) )</code> </pre>
<h3>步骤1： </h3>
测试所有像素，并且在此阶段仅注意满足以下所有条件（同时）的像素。
  （0）像素是黑色的，有八个邻居
  （1）$ 2 &lt;= B（P1）&lt;= 6 $
  （2）$ A（P1）= 1 $
  （3）P2和P4和P6中的至少一个是白色
  （4）P4和P6和P8中的至少一个是白色
在迭代图像并收集满足所有步骤1条件的所有像​​素之后，将满足像素的所有这些条件设置为白色。
<h3>第2步： </h3>
再次测试所有像素，并且在此阶段仅注意满足以下所有条件的像素。
  （0）像素是黑色的，有八个邻居
  （1）$ 2 &lt;= B（P1）&lt;= 6 $
  （2）$ A（P1）= 1 $
  （3）P2和P4中的至少一个和“&#39;P8”&#39;是白色的
  （4）“&#39;P2”&#39;和P6和P8中的至少一个是白色
在迭代图像并收集满足所有步骤2条件的所有像​​素之后，将满足像素的所有这些条件再次设置为白色。
迭代：
如果在该轮步骤1或步骤2中设置了任何像素，则重复所有步骤直到没有图像像素如此改变。
<p>
任务：
编写一个例程，在1和0的图像矩阵上执行Zhang-Suen细化。
</p>
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>thinImage</code>必须是一个函数
    testString: assert.equal(typeof thinImage, 'function');
  - text: <code>thinImage</code>必须返回一个数组
    testString: assert(Array.isArray(result));
  - text: <code>thinImage</code>必须返回一个字符串数组
    testString: assert.equal(typeof result[0], 'string');
  - text: <code>thinImage</code>必须返回一个字符串数组
    testString: assert.deepEqual(result, expected);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const testImage = [
  '                                                          ',
  ' #################                   #############        ',
  ' ##################               ################        ',
  ' ###################            ##################        ',
  ' ########     #######          ###################        ',
  '   ######     #######         #######       ######        ',
  '   ######     #######        #######                      ',
  '   #################         #######                      ',
  '   ################          #######                      ',
  '   #################         #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######         #######       ######        ',
  ' ########     #######          ###################        ',
  ' ########     ####### ######    ################## ###### ',
  ' ########     ####### ######      ################ ###### ',
  ' ########     ####### ######         ############# ###### ',
  '                                                          '];

function thinImage(image) {
  // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
