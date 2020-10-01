---
id: 595011cba5a81735713873bd
challengeType: 5
videoUrl: ''
title: 每组排名最高
---

## Description
<section id="description">任务： <p>在每个组中查找排名前N位的数据，其中N作为参数提供。等级和组的名称也作为参数提供。 </p>鉴于以下数据： <pre> [
  {姓名：&#39;Tyler Bennett&#39;，id：&#39;E10297&#39;，薪水：32000，部门：&#39;D101&#39;}，
  {姓名：&#39;John Rappl&#39;，id：&#39;E21437&#39;，薪水：47000，部门：&#39;D050&#39;}，
  {姓名：&#39;George Woltman&#39;，id：&#39;E00127&#39;，薪水：53500，部门：&#39;D101&#39;}，
  {name：&#39;Adam Smith&#39;，id：&#39;E63535&#39;，薪水：18000，部门：&#39;D202&#39;}，
  {姓名：&#39;Claire Buckman&#39;，id：&#39;E39876&#39;，薪水：27800，部门：&#39;D202&#39;}，
  {姓名：&#39;David McClellan&#39;，id：&#39;E04242&#39;，薪水：41500，部门：&#39;D101&#39;}，
  {name：&#39;Rich Holcomb&#39;，id：&#39;E01234&#39;，薪水：49500，dept：&#39;D202&#39;}，
  {姓名：&#39;Nathan Adams&#39;，id：&#39;E41298&#39;，薪水：21900，部门：&#39;D050&#39;}，
  {姓名：&#39;Richard Potter&#39;，id：&#39;E43128&#39;，薪水：15900，部门：&#39;D101&#39;}，
  {姓名：&#39;David Motsinger&#39;，id：&#39;E27002&#39;，薪水：19250，dept：&#39;D202&#39;}，
  {姓名：&#39;Tim Sampair&#39;，id：&#39;E03033&#39;，薪水：27000，部门：&#39;D101&#39;}，
  {姓名：&#39;Kim Arlich&#39;，id：&#39;E10001&#39;，薪水：57000，部门：&#39;D190&#39;}，
  {name：&#39;Timothy Grove&#39;，id：&#39;E16398&#39;，薪水：29900，部门：&#39;D190&#39;}
]。
</pre>通过调用<code>topRankPerGroup(10, data, &#39;dept&#39;, &#39;salary&#39;)</code>可以对每个部门的前10名员工进行排名。给出以下数据： <pre> [
  {name：&#39;Friday 13th&#39;，类型：&#39;恐怖&#39;，评分：9.9}，
  {姓名：“榆树街上的梦魇”，类型：&#39;恐怖&#39;，等级：5.7}，
  {name：&#39;Titanic&#39;，类型：&#39;drama&#39;，评分：7.3}，
  {name：&#39;Maze Runner&#39;，类型：&#39;scifi&#39;，评级：7.1}，
  {name：&#39;Blade runner&#39;，类型：&#39;scifi&#39;，评分：8.9}
]。
</pre>通过调用<code>topRankPerGroup(1, data, &#39;genre&#39;, &#39;rating&#39;)</code>可以在每个类型中对排名最高的电影进行排名</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topRankPerGroup</code>是一个函数。
    testString: assert(typeof topRankPerGroup === 'function');
  - text: <code>topRankPerGroup</code>在负n值上返回undefined。
    testString: assert(typeof topRankPerGroup(-1, []) === 'undefined');
  - text: 第一部门必须​​是D050
    testString: assert.equal(res1[0][0].dept, 'D050');
  - text: 第一部门必须​​是D050
    testString: assert.equal(res1[0][1].salary, 21900);
  - text: 最后一个部门必须是D202
    testString: assert.equal(res1[3][3].dept, 'D202');
  - text: '<code>topRankPerGroup(1, ...)</code>必须仅返回每组的排名最高的结果。'
    testString: assert.equal(res2[2].length, 1);
  - text: '<code>topRankPerGroup(1, ...)</code>必须仅返回每组的排名最高的结果。'
    testString: assert.equal(res3[2][1].name, 'Maze Runner');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topRankPerGroup(n, data, groupName, rankName) {
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
