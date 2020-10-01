---
id: 594fa2746886f41f7d8bf225
challengeType: 5
videoUrl: ''
title: 拓扑排序
---

## Description
<section id="description"><p>给定项目之间的映射以及它们所依赖的项目， <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp：拓扑排序">拓扑排序</a>会对项目进行<a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp：拓扑排序">排序</a> ，以使项目不在其所依赖的项目之前。 </p><p>用<a href="https://en.wikipedia.org/wiki/VHDL" title="wp：VHDL">VHDL</a>语言编译库有一个限制，即必须在它依赖的库之后编译库。 </p>任务： <p>编写一个函数，该函数将从其依赖项返回VHDL库的有效编译顺序。 </p>假设库名称是单个单词。仅作为家属提及的项目没有自己的家属，但必须给出他们的编制顺序。任何自我依赖都应该被忽略。应忽略任何不可订购的依赖项。 <p>使用以下数据作为示例： </p><pre>图书馆图书馆依赖
======= ====================
des_system_lib std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
dw01 ieee dw01 dware gtech
dw02 ieee dw02 dware
dw03 std synopsys dware dw03 dw02 dw01 ieee gtech
dw04 dw04 ieee dw01 dware gtech
dw05 dw05 ieee dware
dw06 dw06 ieee dware
dw07 ieee dware
dware ieee dware
gtech ieee gtech
ramlib std ieee
std_cell_lib ieee std_cell_lib
新思
</pre><p> <small>注意：如果将<code>dw04</code>添加到<code>dw01</code>的依赖项列表中，则上述数据将无法订购。</small> </p> CF卡： <pre> <code>&lt;a href=&quot;http://rosettacode.org/wiki/Topological sort/Extracted top item&quot; title=&quot;Topological sort/Extracted top item&quot;&gt;Topological sort/Extracted top item&lt;/a&gt;.</code> </pre><p>拓扑排序有两种流行的算法： </p><p> Kahn的1962拓扑排序和深度优先搜索： <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp：拓扑排序">拓扑排序</a> </p><p> Jason Sachs： <a href="http://www.embeddedrelated.com/showarticle/799.php" title="链接：http：//www.embeddedrelated.com/showarticle/799.php">“十个小算法，第四部分：拓扑排序”</a> 。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topologicalSort</code>是一个函数。
    testString: assert(typeof topologicalSort === 'function');
  - text: <code>topologicalSort</code>必须返回正确的库顺序..
    testString: assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
  - text: <code>topologicalSort</code>必须返回正确的库顺序..
    testString: assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL);
  - text: <code>topologicalSort</code>必须返回正确的库顺序..
    testString: assert.deepEqual(topologicalSort(libsCustom), solutionCustom);
  - text: <code>topologicalSort</code>必须忽略不可共享的依赖项。
    testString: assert.deepEqual(topologicalSort(libsUnorderable), solutionUnorderable);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topologicalSort(libs) {
  // Good luck!
  return true;
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
