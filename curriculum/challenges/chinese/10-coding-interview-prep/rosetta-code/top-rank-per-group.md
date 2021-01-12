---
id: 595011cba5a81735713873bd
title: 每组排名最高
challengeType: 5
videoUrl: ''
dashedName: top-rank-per-group
---

# --description--

任务：

在每个组中查找排名前N位的数据，其中N作为参数提供。等级和组的名称也作为参数提供。

鉴于以下数据：

```
 [
{姓名：'Tyler Bennett'，id：'E10297'，薪水：32000，部门：'D101'}，
{姓名：'John Rappl'，id：'E21437'，薪水：47000，部门：'D050'}，
{姓名：'George Woltman'，id：'E00127'，薪水：53500，部门：'D101'}，
{name：'Adam Smith'，id：'E63535'，薪水：18000，部门：'D202'}，
{姓名：'Claire Buckman'，id：'E39876'，薪水：27800，部门：'D202'}，
{姓名：'David McClellan'，id：'E04242'，薪水：41500，部门：'D101'}，
{name：'Rich Holcomb'，id：'E01234'，薪水：49500，dept：'D202'}，
{姓名：'Nathan Adams'，id：'E41298'，薪水：21900，部门：'D050'}，
{姓名：'Richard Potter'，id：'E43128'，薪水：15900，部门：'D101'}，
{姓名：'David Motsinger'，id：'E27002'，薪水：19250，dept：'D202'}，
{姓名：'Tim Sampair'，id：'E03033'，薪水：27000，部门：'D101'}，
{姓名：'Kim Arlich'，id：'E10001'，薪水：57000，部门：'D190'}，
{name：'Timothy Grove'，id：'E16398'，薪水：29900，部门：'D190'}
]。
```

</pre>通过调用<code>topRankPerGroup(10, data, 'dept', 'salary')</code>可以对每个部门的前10名员工进行排名。给出以下数据： <pre> [
  {name：'Friday 13th'，类型：'恐怖'，评分：9.9}，
  {姓名：“榆树街上的梦魇”，类型：'恐怖'，等级：5.7}，
  {name：'Titanic'，类型：'drama'，评分：7.3}，
  {name：'Maze Runner'，类型：'scifi'，评级：7.1}，
  {name：'Blade runner'，类型：'scifi'，评分：8.9}
]。
</pre>通过调用<code>topRankPerGroup(1, data, 'genre', 'rating')</code>可以在每个类型中对排名最高的电影进行排名

# --hints--

`topRankPerGroup`是一个函数。

```js
assert(typeof topRankPerGroup === 'function');
```

`topRankPerGroup`在负n值上返回undefined。

```js
assert(typeof topRankPerGroup(-1, []) === 'undefined');
```

第一部门必须​​是D050

```js
assert.equal(res1[0][0].dept, 'D050');
```

第一部门必须​​是D050

```js
assert.equal(res1[0][1].salary, 21900);
```

最后一个部门必须是D202

```js
assert.equal(res1[3][3].dept, 'D202');
```

`topRankPerGroup(1, ...)`必须仅返回每组的排名最高的结果。

```js
assert.equal(res2[2].length, 1);
```

`topRankPerGroup(1, ...)`必须仅返回每组的排名最高的结果。

```js
assert.equal(res3[2][1].name, 'Maze Runner');
```

# --seed--

## --after-user-code--

```js
const testData1 = [
  { name: 'Tyler Bennett', id: 'E10297', salary: 32000, dept: 'D101' },
  { name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050' },
  { name: 'George Woltman', id: 'E00127', salary: 53500, dept: 'D101' },
  { name: 'Adam Smith', id: 'E63535', salary: 18000, dept: 'D202' },
  { name: 'Claire Buckman', id: 'E39876', salary: 27800, dept: 'D202' },
  { name: 'David McClellan', id: 'E04242', salary: 41500, dept: 'D101' },
  { name: 'Rich Holcomb', id: 'E01234', salary: 49500, dept: 'D202' },
  { name: 'Nathan Adams', id: 'E41298', salary: 21900, dept: 'D050' },
  { name: 'Richard Potter', id: 'E43128', salary: 15900, dept: 'D101' },
  { name: 'David Motsinger', id: 'E27002', salary: 19250, dept: 'D202' },
  { name: 'Tim Sampair', id: 'E03033', salary: 27000, dept: 'D101' },
  { name: 'Kim Arlich', id: 'E10001', salary: 57000, dept: 'D190' },
  { name: 'Timothy Grove', id: 'E16398', salary: 29900, dept: 'D190' }
];

const res1 = topRankPerGroup(10, testData1, 'dept', 'salary');

const testData2 = [
  { name: 'Friday 13th', genre: 'horror', rating: 9.9 },
  { name: "Nightmare on Elm's Street", genre: 'horror', rating: 5.7 },
  { name: 'Titanic', genre: 'drama', rating: 7.3 },
  { name: 'Maze Runner', genre: 'scifi', rating: 7.1 },
  { name: 'Blade runner', genre: 'scifi', rating: 8.9 }
];

const res2 = topRankPerGroup(1, testData2, 'genre', 'rating');
const res3 = topRankPerGroup(2, testData2, 'genre', 'rating');
```

## --seed-contents--

```js
function topRankPerGroup(n, data, groupName, rankName) {

  return true;
}
```

# --solutions--

```js
const collectDept = function (arrOfObj, groupName) {
  const collect = arrOfObj.reduce((rtnObj, obj) => {
    if (rtnObj[obj[groupName]] === undefined) {
      rtnObj[obj[groupName]] = [];
    }
    rtnObj[obj[groupName]].push(obj);
    return rtnObj;
  }, {} // initial value to reduce
  );

  return Object.keys(collect).sort().map(key => collect[key]);
};

const sortRank = function (arrOfRankArrs, rankName) {
  return arrOfRankArrs.map(item => item.sort((a, b) => {
    if (a[rankName] > b[rankName]) { return -1; }
    if (a[rankName] < b[rankName]) { return 1; }
    return 0;
  }));
};

function topRankPerGroup(n, data, groupName, rankName) {
  if (n < 0) { return; }
  return sortRank(collectDept(data, groupName),
    rankName).map(list => list.slice(0, n));
}
```
