---
id: 5966c21cf732a95f1b67dd28
title: Manipolazione delle date
challengeType: 1
forumTopicId: 302244
dashedName: date-manipulation
---

# --description--

Data una data in forma di stringa nel fuso orario EST (UTC-05), restituisci la data come stringa con 12 ore aggiunte all'orario. Il fuso orario deve essere mantenuto.

Input di esempio: `"March 6 2009 7:30pm EST"`

Esempio di output: `"March 7 2009 7:30am EST"`

# --hints--

`add12Hours` dovrebbe essere una funzione.

```js
assert(typeof add12Hours === 'function');
```

`add12Hours(dateString)` dovrebbe restituire una stringa.

```js
assert(typeof add12Hours('January 17 2017 11:43am EST') === 'string');
```

`add12Hours("January 17 2017 11:43am EST")` dovrebbe restituire `"January 17 2017 11:43pm EST"`

```js
assert(
  add12Hours('January 17 2017 11:43am EST') === 'January 17 2017 11:43pm EST'
);
```

Dovrebbe gestire il cambio di giorno. `add12Hours("March 6 2009 7:30pm EST")` dovrebbe restituire `"March 7 2009 7:30am EST"`

```js
assert(add12Hours('March 6 2009 7:30pm EST') === 'March 7 2009 7:30am EST');
```

Dovrebbe gestire il cambio di mese in un anno bisestile. `add12Hours("February 29 2004 9:15pm EST")` dovrebbe restituire `"March 1 2004 9:15am EST"`

```js
assert(add12Hours('February 29 2004 9:15pm EST') === 'March 1 2004 9:15am EST');
```

Dovrebbe gestire il cambio di mese in un anno qualsiasi. `add12Hours("February 28 1999 3:15pm EST")` dovrebbe restituire `"March 1 1999 3:15am EST"`

```js
assert(add12Hours('February 28 1999 3:15pm EST') === 'March 1 1999 3:15am EST');
```

Dovrebbe gestire il cambio di anno. `add12Hours("December 31 2020 1:45pm EST")` dovrebbe restituire `"January 1 2021 1:45am EST"`

```js
assert(
  add12Hours('December 31 2020 1:45pm EST') === 'January 1 2021 1:45am EST'
);
```

# --seed--

## --seed-contents--

```js
function add12Hours(dateString) {

  return true;
}
```

# --solutions--

```js
function add12Hours(dateString) {
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
