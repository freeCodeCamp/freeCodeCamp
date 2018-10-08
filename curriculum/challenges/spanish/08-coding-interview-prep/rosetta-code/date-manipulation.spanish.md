---
title: Date manipulation
id: 5966c21cf732a95f1b67dd28
localeTitle: 5966c21cf732a95f1b67dd28
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Dada una cadena de fecha en EST, genera la fecha dada como una cadena con 12 horas agregadas a la hora. </p> 
<p> La zona horaria debe ser preservada. </p> 
<p> Ejemplo de entrada: </p> 
<p> <code>&quot;March 7 2009 7:30pm EST&quot;</code> </p> 
<p> Ejemplo de salida: </p> 
<p> <code>&quot;March 8 2009 7:30am EST&quot;</code> </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add12Hours</code> es una función.
    testString: 'assert(typeof add12Hours === "function", "<code>add12Hours</code> is a function.");'
  - text: <code>add12Hours(dateString)</code> debe devolver una cadena.
    testString: 'assert(typeof add12Hours(tests[0]) === "string", "<code>add12Hours(dateString)</code> should return a string.");'
  - text: &#39; <code>add12Hours(&quot;&quot; + tests[0] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[0] + &quot;&quot;</code> &#39;
    testString: 'assert(add12Hours(tests[0]) === answers[0], "<code>add12Hours("" + tests[0] + "")</code> should return <code>"" + answers[0] + ""</code>");'
  - text: Debería cambiar el día. <code>add12Hours(&quot;&quot; + tests[1] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[1] + &quot;&quot;</code> &#39;
    testString: 'assert(add12Hours(tests[1]) === answers[1], "Should handel day change. <code>add12Hours("" + tests[1] + "")</code> should return <code>"" + answers[1] + ""</code>");'
  - text: &#39;Debe cambiar el mes en un año bisiesto. <code>add12Hours(&quot;&quot; + tests[2] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[2] + &quot;&quot;</code> &#39;
    testString: 'assert(add12Hours(tests[2]) === answers[2], "Should handel month change in a leap years. <code>add12Hours("" + tests[2] + "")</code> should return <code>"" + answers[2] + ""</code>");'
  - text: &#39;Debería cambiar el mes en un año común. <code>add12Hours(&quot;&quot; + tests[3] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[3] + &quot;&quot;</code> &#39;
    testString: 'assert(add12Hours(tests[3]) === answers[3], "Should handel month change in a common years. <code>add12Hours("" + tests[3] + "")</code> should return <code>"" + answers[3] + ""</code>");'
  - text: Debería cambiar de año. <code>add12Hours(&quot;&quot; + tests[4] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[4] + &quot;&quot;</code> &#39;
    testString: 'assert(add12Hours(tests[4]) === answers[4], "Should handel year change. <code>add12Hours("" + tests[4] + "")</code> should return <code>"" + answers[4] + ""</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add12Hours (dateString) {
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
function add12Hours (dateString) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  // Get the parts of the string
  const parts = dateString.split(' ');
  const month = months.indexOf(parts[0]);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  const time = parts[3].split(':');
  let hours = parseInt(time[0], 10);
  if (time[1].slice(-2) === 'pm') {
    hours += 12;
  }
  const minutes = parseInt(time[1].slice(0, -2), 10);

  // Create a date with given parts, and updated hours
  const date = new Date();
  date.setFullYear(year, month, day);
  date.setHours(hours + 12);  // Add 12 hours
  date.setMinutes(minutes);

  let hoursOutput = date.getHours();
  let abbreviation = 'am';
  if (hoursOutput > 12) {
    hoursOutput -= 12;
    abbreviation = 'pm';
  }

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hoursOutput}:${date.getMinutes()}${abbreviation} EST`;
}

```

</section>
