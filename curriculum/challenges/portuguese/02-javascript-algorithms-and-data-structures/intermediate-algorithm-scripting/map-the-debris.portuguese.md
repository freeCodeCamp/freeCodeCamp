---
id: af4afb223120f7348cdfc9fd
title: Map the Debris
challengeType: 5
videoUrl: ''
localeTitle: Mapeie os detritos
---

## Description
<section id="description"> Retorna uma nova matriz que transforma a altitude média dos elementos em seus períodos orbitais (em segundos). A matriz conterá objetos no formato <code>{name: &#39;name&#39;, avgAlt: avgAlt}</code> . Você pode ler sobre períodos orbitais <a href="http://en.wikipedia.org/wiki/Orbital_period" target="_blank">na Wikipedia</a> . Os valores devem ser arredondados para o número inteiro mais próximo. O corpo que está sendo orbitado é a Terra. O raio da terra é 6367.4447 quilômetros, e o valor de GM da terra é 398600.4418 km <sup>3</sup> s <sup>-2</sup> . Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>orbitalPeriod([{name : &quot;sputnik&quot;, avgAlt : 35873.5553}])</code> deve retornar <code>[{name: &quot;sputnik&quot;, orbitalPeriod: 86400}]</code> .'
    testString: 'assert.deepEqual(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), [{name: "sputnik", orbitalPeriod: 86400}], "<code>orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])</code> should return <code>[{name: "sputnik", orbitalPeriod: 86400}]</code>.");'
  - text: '<code>orbitalPeriod([{name: &quot;iss&quot;, avgAlt: 413.6}, {name: &quot;hubble&quot;, avgAlt: 556.7}, {name: &quot;moon&quot;, avgAlt: 378632.553}])</code> deve retornar <code>[{name : &quot;iss&quot;, orbitalPeriod: 5557}, {name: &quot;hubble&quot;, orbitalPeriod: 5734}, {name: &quot;moon&quot;, orbitalPeriod: 2377399}]</code> .'
    testString: 'assert.deepEqual(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]), [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}], "<code>orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])</code> should return <code>[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]</code>.");'

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
</section>
