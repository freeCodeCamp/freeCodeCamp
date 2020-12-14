---
id: 59f4eafba0343628bb682785
challengeType: 5
videoUrl: ''
title: Discordian日期
---

## Description
<section id="description">任务： <p>将给定日期从<a href="https://en.wikipedia.org/wiki/Gregorian calendar" title="wp：阳历">公历</a>转换为<a href="https://en.wikipedia.org/wiki/Discordian calendar" title="wp：Discordian日历">Discordian日历</a> 。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>discordianDate</code>是一个函数。
    testString: assert(typeof discordianDate === 'function');
  - text: <code>discordianDate(new Date(2010, 6, 22))</code> <code>"Pungenday, the 57th day of Confusion in the YOLD 3176"</code> <code>discordianDate(new Date(2010, 6, 22))</code>应该返回<code>"Pungenday, the 57th day of Confusion in the YOLD 3176"</code> 。
    testString: assert(discordianDate(new Date(2010, 6, 22)) === 'Pungenday, the 57th day of Confusion in the YOLD 3176');
  - text: <code>discordianDate(new Date(2012, 1, 28))</code>应该返回<code>"Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"</code> 。
    testString: assert(discordianDate(new Date(2012, 1, 28)) === 'Prickle-Prickle, the 59th day of Chaos in the YOLD 3178');
  - text: <code>discordianDate(new Date(2012, 1, 29))</code> <code>"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"</code> <code>discordianDate(new Date(2012, 1, 29))</code>应该返回<code>"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"</code> 。
    testString: assert(discordianDate(new Date(2012, 1, 29)) === 'Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!');
  - text: <code>discordianDate(new Date(2012, 2, 1))</code>应该返回<code>"Setting Orange, the 60th day of Chaos in the YOLD 3178"</code> 。
    testString: assert(discordianDate(new Date(2012, 2, 1)) === 'Setting Orange, the 60th day of Chaos in the YOLD 3178');
  - text: <code>discordianDate(new Date(2010, 0, 5))</code> <code>"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"</code> <code>discordianDate(new Date(2010, 0, 5))</code>应该返回<code>"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"</code> 。
    testString: assert(discordianDate(new Date(2010, 0, 5)) === 'Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!');
  - text: <code>discordianDate(new Date(2011, 4, 3))</code>应该返回<code>"Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"</code> 。
    testString: assert(discordianDate(new Date(2011, 4, 3)) === 'Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!');
  - text: <code>discordianDate(new Date(2015, 9, 19))</code> <code>"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"</code> <code>discordianDate(new Date(2015, 9, 19))</code>应该返回<code>"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"</code> 。
    testString: assert(discordianDate(new Date(2015, 9, 19)) === 'Boomtime, the 73rd day of Bureaucracy in the YOLD 3181');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function discordianDate (date) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
