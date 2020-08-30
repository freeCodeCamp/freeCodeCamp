---
id: af4afb223120f7348cdfc9fd
title: Map the Debris
challengeType: 5
videoUrl: ''
localeTitle: 映射碎片
---

## Description
<section id="description">返回一个新数组，将元素的平均高度转换为轨道周期（以秒为单位）。该数组将包含<code>{name: &#39;name&#39;, avgAlt: avgAlt}</code>格式的对象。您可以<a href="http://en.wikipedia.org/wiki/Orbital_period" target="_blank">在维基百科上</a>阅读有关轨道周期的<a href="http://en.wikipedia.org/wiki/Orbital_period" target="_blank">信息</a> 。值应四舍五入到最接近的整数。轨道上的身体是地球。地球半径为6367.4447公里，地球的GM值为398600.4418 km <sup>3</sup> s <sup>-2</sup> 。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>orbitalPeriod([{name : &quot;sputnik&quot;, avgAlt : 35873.5553}])</code>应返回<code>[{name: &quot;sputnik&quot;, orbitalPeriod: 86400}]</code> 。'
    testString: 'assert.deepEqual(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), [{name: "sputnik", orbitalPeriod: 86400}]);'
  - text: '<code>orbitalPeriod([{name: &quot;iss&quot;, avgAlt: 413.6}, {name: &quot;hubble&quot;, avgAlt: 556.7}, {name: &quot;moon&quot;, avgAlt: 378632.553}])</code>应返回<code>[{name : &quot;iss&quot;, orbitalPeriod: 5557}, {name: &quot;hubble&quot;, orbitalPeriod: 5734}, {name: &quot;moon&quot;, orbitalPeriod: 2377399}]</code> 。'
    testString: 'assert.deepEqual(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]), [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
