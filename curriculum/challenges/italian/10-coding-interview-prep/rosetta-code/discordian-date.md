---
id: 59f4eafba0343628bb682785
title: Data discordiana
challengeType: 1
forumTopicId: 302250
dashedName: discordian-date
---

# --description--
Il calendario Gregoriano è un calendario solare con 12 mesi di 28-31 giorni ognuno. Una settimana consiste in sette giorni e ci sono 52 settimane e 1 giorno ogni anno. L'anno è composto da 365 giorni con un giorno bisestile aggiunto a febbraio in ogni anno bisestile. Un anno bisestile si verifica ogni quattro anni, tranne per i primi tre anni secolari di ogni 400 anni.

Il <a href="http://www.rosettacode.org/wiki/Discordian_date" target="_blank" rel="noopener noreferrer nofollow">calendario Discordiano</a> è allineato con il calendario Gregoriano e inizia il primo di gennaio. Una settimana consiste di cinque giorni e ci sono 73 settimane in un anno. L'anno è composto da 365 giorni, con una giornata in più inserita tra Caos 59 e Caos 60 ogni anno bisestile.

I mesi, i giorni della settimana, gli eventi apostolici e i giorni sacri nel calendario Discordiano sono:

Settimane: `'Chaos', 'Discord', 'Confusion', 'Bureaucracy', 'The Aftermath'`.

Giorni della settimana: `'Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange'`.

Apostoli: `'Mungday', 'Mojoday', 'Syaday', 'Zaraday', 'Maladay'`.

Giorni sacri: `'Chaoflux', 'Discoflux', 'Confuflux', 'Bureflux', 'Afflux'`.

# --instructions--

Converti una certa data dal calendario Discordiano al calendario Gregoriano.

Nota che il giorno Chaos 1, 3188 YOLD nel calendario Discordiano è il giorno 1 gennaio 2022 del calendario Gregoriano.

# --hints--

`discordianDate` dovrebbe essere una funzione.

```js
assert(typeof discordianDate === 'function');
```

`discordianDate(new Date(2010, 6, 22))` dovrebbe restituire `"Pungenday, the 57th day of Confusion in the YOLD 3176"`.

```js
assert(
  discordianDate(new Date(2010, 6, 22)) ===
    'Pungenday, the 57th day of Confusion in the YOLD 3176'
);
```

`discordianDate(new Date(2012, 1, 28))` dovrebbe restituire `"Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"`.

```js
assert(
  discordianDate(new Date(2012, 1, 28)) ===
    'Prickle-Prickle, the 59th day of Chaos in the YOLD 3178'
);
```

`discordianDate(new Date(2012, 1, 29))` dovrebbe restituire `"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!"`.

```js
assert(
  discordianDate(new Date(2012, 1, 29)) ===
    "Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib's Day!"
);
```

`discordianDate(new Date(2012, 2, 1))` dovrebbe restituire `"Setting Orange, the 60th day of Chaos in the YOLD 3178"`.

```js
assert(
  discordianDate(new Date(2012, 2, 1)) ===
    'Setting Orange, the 60th day of Chaos in the YOLD 3178'
);
```

`discordianDate(new Date(2010, 0, 5))` dovrebbe restituire `"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"`.

```js
assert(
  discordianDate(new Date(2010, 0, 5)) ===
    'Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!'
);
```

`discordianDate(new Date(2011, 4, 3))` dovrebbe restituire `"Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"`.

```js
assert(
  discordianDate(new Date(2011, 4, 3)) ===
    'Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!'
);
```

`discordianDate(new Date(2015, 9, 19))` dovrebbe restituire `"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"`.

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
