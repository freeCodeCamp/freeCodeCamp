---
id: 59f4eafba0343628bb682785
title: Diskordianisches Datum
challengeType: 1
forumTopicId: 302250
dashedName: discordian-date
---

# --description--
The Gregorian calendar is a solar calendar with 12 months of 28-31 days each. A week consists of seven days, and there are 52 weeks and 1 day per year. The year consists of 365 days with a leap day added to February every leap year. A leap year occurs every four years, except for the first three centurial years of every 400 years.

Der <a href="http://www.rosettacode.org/wiki/Discordian_date" target="_blank" rel="noopener noreferrer nofollow">Diskordianische Kalender</a> orientiert sich am Gregorianischen Kalender und beginnt am 1. Januar. Die Woche besteht aus fünf Tagen, und es gibt 73 Wochen pro Jahr. Das Jahr besteht ebenfalls aus 365 Tagen, wobei in jedem Schaltjahr zwischen Chaos 59 und Chaos 60 ein zusätzlicher Tag eingefügt wird.

Die Monate, Wochentage, Apostelereignisse und Feiertage im diskordianischen Kalender werden angegeben durch:

Saisonen: `'Chaos', 'Discord', 'Confusion', 'Bureaucracy', 'The Aftermath'`.

Wochentage: `'Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange'`.

Apostel: `'Mungday', 'Mojoday', 'Syaday', 'Zaraday', 'Maladay'`.

Feiertage: `'Chaoflux', 'Discoflux', 'Confuflux', 'Bureflux', 'Afflux'`.

# --instructions--

Konvertiert ein gegebenes Datum vom Gregorianischen Kalender in den Diskordianischen Kalender.

Beachte, dass der Tag Chaos 1, 3188 YOLD im Diskordianischen Kalender der Tag des 1. Januar 2022 im Gregorianischen Kalender entspricht.

# --hints--

`discordianDate` sollte eine Funktion sein.

```js
assert(typeof discordianDate === 'function');
```

`discordianDate(new Date(2010, 6, 22))` sollte `"Pungenday, the 57th day of Confusion in the YOLD 3176"` zurückgeben.

```js
assert(
  discordianDate(new Date(2010, 6, 22)) ===
    'Pungenday, the 57th day of Confusion in the YOLD 3176'
);
```

`discordianDate(new Date(2012, 1, 28))` sollte `"Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"` zurückgeben.

```js
assert(
  discordianDate(new Date(2012, 1, 28)) ===
    'Prickle-Prickle, the 59th day of Chaos in the YOLD 3178'
);
```

`discordianDate(new Date(2012, 1, 29))` should return `"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!"`.

```js
assert(
  discordianDate(new Date(2012, 1, 29)) ===
    "Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"
);
```

`discordianDate(new Date(2012, 2, 1))` sollte `"Setting Orange, the 60th day of Chaos in the YOLD 3178"` zurückgeben.

```js
assert(
  discordianDate(new Date(2012, 2, 1)) ===
    'Setting Orange, the 60th day of Chaos in the YOLD 3178'
);
```

`discordianDate(new Date(2010, 0, 5))` should return `"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"`.

```js
assert(
  discordianDate(new Date(2010, 0, 5)) ===
    'Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!'
);
```

`discordianDate(new Date(2011, 4, 3))` should return `"Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"`.

```js
assert(
  discordianDate(new Date(2011, 4, 3)) ===
    'Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!'
);
```

`discordianDate(new Date(2015, 9, 19))` sollte `"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"` zurückgeben.

```js
assert(
  discordianDate(new Date(2015, 9, 19)) ===
    'Boomtime, the 73rd day of Bureaucracy in the YOLD 3181'
);
```

# --seed--

## --seed-contents--

```js
function discordianDate(date) {

  return true;
}
```

# --solutions--

```js
/**
 * All Hail Discordia! - this script prints Discordian date using system date.
 *
 * lang: JavaScript
 * author: jklu
 * contributors: JamesMcGuigan
 *
 * source: https://rosettacode.org/wiki/Discordian_date#JavaScript
 */
const seasons = [
  'Chaos', 'Discord', 'Confusion',
  'Bureaucracy', 'The Aftermath'
];
const weekday = [
  'Sweetmorn', 'Boomtime', 'Pungenday',
  'Prickle-Prickle', 'Setting Orange'
];

const apostle = [
  'Mungday', 'Mojoday', 'Syaday',
  'Zaraday', 'Maladay'
];

const holiday = [
  'Chaoflux', 'Discoflux', 'Confuflux',
  'Bureflux', 'Afflux'
];


Date.prototype.isLeapYear = function() {
  const year = this.getFullYear();
  if ((year & 3) !== 0) { return false; }
  return ((year % 100) !== 0 || (year % 400) === 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
  const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const mn = this.getMonth();
  const dn = this.getDate();
  let dayOfYear = dayCount[mn] + dn;
  if (mn > 1 && this.isLeapYear()) { dayOfYear += 1; }
  return dayOfYear;
};

Date.prototype.isToday = function() {
  const today = new Date();
  return this.getDate() === today.getDate()
      && this.getMonth() === today.getMonth()
      && this.getFullYear() === today.getFullYear()
  ;
};

function discordianDate(date) {
  if (!date) { date = new Date(); }

  const y = date.getFullYear();
  const yold = y + 1166;
  let dayOfYear = date.getDOY();
  let celebrateHoliday = null;

  if (date.isLeapYear()) {
    if (dayOfYear === 60) {
      celebrateHoliday = 'St. Tib\'s Day';
    }
    else if (dayOfYear > 60) {
      dayOfYear--;
    }
  }
  dayOfYear--;

  const divDay = Math.floor(dayOfYear / 73);

  const seasonDay = (dayOfYear % 73) + 1;
  if (seasonDay === 5) {
    celebrateHoliday = apostle[divDay];
  }
  if (seasonDay === 50) {
    celebrateHoliday = holiday[divDay];
  }

  const season = seasons[divDay];
  const dayOfWeek = weekday[dayOfYear % 5];

  const nth = (seasonDay % 10 === 1) ? 'st'
          : (seasonDay % 10 === 2) ? 'nd'
          : (seasonDay % 10 === 3) ? 'rd'
                                  : 'th';

  return ''
         + dayOfWeek
         + ', the ' + seasonDay + nth
         + ' day of ' + season
         + ' in the YOLD ' + yold
         + (celebrateHoliday ? '. Celebrate ' + celebrateHoliday + '!' : '')
    ;
}
```
