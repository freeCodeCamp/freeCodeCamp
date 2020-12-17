---
id: 59f4eafba0343628bb682785
title: Discordian日期
challengeType: 5
videoUrl: ''
---

# --description--

任务：

将给定日期从[公历](<https://en.wikipedia.org/wiki/Gregorian calendar> "wp：阳历")转换为[Discordian日历](<https://en.wikipedia.org/wiki/Discordian calendar> "wp：Discordian日历") 。

# --hints--

`discordianDate`是一个函数。

```js
assert(typeof discordianDate === 'function');
```

`discordianDate(new Date(2010, 6, 22))` `"Pungenday, the 57th day of Confusion in the YOLD 3176"` `discordianDate(new Date(2010, 6, 22))`应该返回`"Pungenday, the 57th day of Confusion in the YOLD 3176"` 。

```js
assert(
  discordianDate(new Date(2010, 6, 22)) ===
    'Pungenday, the 57th day of Confusion in the YOLD 3176'
);
```

`discordianDate(new Date(2012, 1, 28))`应该返回`"Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"` 。

```js
assert(
  discordianDate(new Date(2012, 1, 28)) ===
    'Prickle-Prickle, the 59th day of Chaos in the YOLD 3178'
);
```

`discordianDate(new Date(2012, 1, 29))` `"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"` `discordianDate(new Date(2012, 1, 29))`应该返回`"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"` 。

```js
assert(
  discordianDate(new Date(2012, 1, 29)) ===
    "Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"
);
```

`discordianDate(new Date(2012, 2, 1))`应该返回`"Setting Orange, the 60th day of Chaos in the YOLD 3178"` 。

```js
assert(
  discordianDate(new Date(2012, 2, 1)) ===
    'Setting Orange, the 60th day of Chaos in the YOLD 3178'
);
```

`discordianDate(new Date(2010, 0, 5))` `"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"` `discordianDate(new Date(2010, 0, 5))`应该返回`"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"` 。

```js
assert(
  discordianDate(new Date(2010, 0, 5)) ===
    'Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!'
);
```

`discordianDate(new Date(2011, 4, 3))`应该返回`"Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"` 。

```js
assert(
  discordianDate(new Date(2011, 4, 3)) ===
    'Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!'
);
```

`discordianDate(new Date(2015, 9, 19))` `"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"` `discordianDate(new Date(2015, 9, 19))`应该返回`"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"` 。

```js
assert(
  discordianDate(new Date(2015, 9, 19)) ===
    'Boomtime, the 73rd day of Bureaucracy in the YOLD 3181'
);
```

# --solutions--

