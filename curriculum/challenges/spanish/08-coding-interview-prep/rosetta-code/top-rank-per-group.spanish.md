---
title: Top rank per group
id: 595011cba5a81735713873bd
localeTitle: 595011cba5a81735713873bd
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Encuentre los mejores datos clasificados de N en cada grupo, donde se proporciona N como parámetro. El nombre del rango y el grupo también se proporcionan como parámetro. </p> 
Teniendo en cuenta los siguientes datos: 
<pre> 
[ 
{nombre: &#39;Tyler Bennett&#39;, id: &#39;E10297&#39;, salario: 32000, departamento: &#39;D101&#39;}, 
{nombre: &#39;John Rappl&#39;, id: &#39;E21437&#39;, salario: 47000, departamento: &#39; D050 &#39;}, 
{nombre:&#39; George Woltman &#39;, id:&#39; E00127 &#39;, salario: 53500, dept:&#39; D101 &#39;}, 
{nombre:&#39; Adam Smith &#39;, id:&#39; E63535 &#39;, salario: 18000, dept : &#39;D202&#39;}, 
{nombre: &#39;Claire Buckman&#39;, id: &#39;E39876&#39;, salario: 27800, dept: &#39;D202&#39;}, 
{nombre: &#39;David McClellan&#39;, id: &#39;E04242&#39;, salario: 41500 , departamento: &#39;D101&#39;}, 
{nombre: &#39;Rich Holcomb&#39;, id: &#39;E01234&#39;, salario: 49500, departamento: &#39;D202&#39;}, 
{nombre: &#39;Nathan Adams&#39;, id: &#39;E41298&#39;, salario : 21900, depto: &#39;D050&#39;}, 
{nombre: &#39;Richard Potter&#39;, id: &#39;E43128&#39;, salario: 15900, depto: &#39;D101&#39;}, 
{nombre: &#39;David Motsinger&#39;, id: &#39;E27002&#39; , salario: 19250, departamento: &#39;D202&#39;}, 
{nombre: &#39;Tim Sampair&#39;, id: &#39;E03033&#39;, salario: 27000, departamento: &#39;D101&#39;}, 
{nombre: &#39;Kim Arlich&#39;, id: &#39; E10001 &#39;, salario: 57000, departamento:&#39; D190 &#39;}, 
{nombre:&#39; Timothy Grove &#39;, id:&#39; E16398 &#39;, salario: 29900, departamento:&#39; D190 &#39;} 
]; 
</pre> 
se podrían clasificar los 10 empleados principales en cada departamento llamando a 
<code>topRankPerGroup(10, data, &#39;dept&#39;, &#39;salary&#39;)</code> 
Dados los siguientes datos: 
<pre> 
[ 
{nombre: &#39;Viernes 13&#39;, género: &#39;horror&#39;, calificación: 9.9}, 
{nombre: &quot;Nightmare on Elm&#39;s Street&quot;, género: &#39;horror&#39;, calificación: 5.7}, 
{nombre: &#39;Titanic &#39;, género:&#39; drama &#39;, calificación: 7.3}, 
{nombre:&#39; Maze Runner &#39;, género:&#39; scifi &#39;, ​​calificación: 7.1}, 
{nombre:&#39; Blade runner &#39;, género:&#39; scifi &#39;, ​​calificación: 8.9} 
]; 
</pre> 
uno podría clasificar la película mejor calificada en cada género llamando a 
<code>topRankPerGroup(1, data, &#39;genre&#39;, &#39;rating&#39;)</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topRankPerGroup</code> es una función.
    testString: 'assert(typeof topRankPerGroup === "function", "<code>topRankPerGroup</code> is a function.");'
  - text: <code>topRankPerGroup</code> devuelve undefined en n valores negativos.
    testString: 'assert(typeof topRankPerGroup(-1, []) === "undefined", "<code>topRankPerGroup</code> returns undefined on negative n values.");'
  - text: El primer departamento debe ser D050
    testString: 'assert.equal(res1[0][0].dept, "D050", "First department must be D050");'
  - text: El primer departamento debe ser D050
    testString: 'assert.equal(res1[0][1].salary, 21900, "First department must be D050");'
  - text: El último departamento debe ser D202.
    testString: 'assert.equal(res1[3][3].dept, "D202", "The last department must be D202");'
  - text: &#39; <code>topRankPerGroup(1, ...)</code> debe devolver solo el resultado de clasificación superior por grupo.&#39;
    testString: 'assert.equal(res2[2].length, 1, "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'
  - text: &#39; <code>topRankPerGroup(1, ...)</code> debe devolver solo el resultado de clasificación superior por grupo.&#39;
    testString: 'assert.equal(res3[2][1].name, "Maze Runner", "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'

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

</section>
