---
id: 6723ced0ba0b42c2a0ac14d2
title: JavaScript Dates Review
challengeType: 31
dashedName: review-javascript-dates
---

# --interactive--

## The `date()` Object and Common Methods

- **Definition**: The `date()` object is used to create, manipulate, and format dates and times in JavaScript. In the following example, the `new` keyword is used to create a new instance of the `Date` object, and the `Date` object is then assigned to the variable `now`. If you were to log the value of `now` to the console, you would see the current date and time based on the system clock of the computer running the code.

:::interactive_editor

```js
const now = new Date();
console.log(now); // prints the current date and time
```

:::

- **`Date.now()` Method**: This method is used to get the current date and time. `Date.now()` returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. This is known as the Unix epoch time. Unix epoch time is a common way to represent dates and times in computer systems because it is an integer that can be easily stored and manipulated. UTC stands for Universal Time Coordinated, which is the primary time standard by which the world regulates clocks and time.
- **`getDate()` Method**: This method is used to get a day of the month based on the current date. `getDate()` will return an integer value between 1 and 31, depending on the day of the month. If the date is invalid, it will return `NaN` (Not a Number).

:::interactive_editor

```js
const now = new Date("2014-10-15");
const date = now.getDate();
console.log(date); // 15
```

:::

- **`getMonth()` Method**: This method is used to get the month. The month is zero-based, so January is 0, February is 1, and so on. In this example, the output is 9, which corresponds to October. If the month is invalid, it will return `NaN`.

:::interactive_editor

```js
const now = new Date("2014-10-15");
const month = now.getMonth();
console.log(month); // 9
```

:::

- **`getFullYear()` Method**: This method is used to get the full year. If the year is invalid, it will return `NaN`.

:::interactive_editor

```js
const now = new Date("2014-10-15");
const year = now.getFullYear();
console.log(year); // 2014
```

:::

## Different Ways to Format Dates

- **`toISOString()` Method**: This method is used to format the date in an extended `ISO` (ISO 8601) format. ISO 8601 is an international standard for representing dates and times. The format is `YYYY-MM-DDTHH:mm:ss.sssZ`.

:::interactive_editor

```js
const date = new Date("2014-10-15");
console.log(date.toISOString()); // "2014-10-15T00:00:00.000Z"
```

:::

- **`toLocaleDateString()` Method**: This method is used to format the date based on the user's locale.

:::interactive_editor

```js
const date = new Date("2014-10-15");
console.log(date.toLocaleDateString("en-US"));  // "10/15/2014"
```

:::

The `toLocaleDateString()` method accepts two optional parameters: locales and options.

The locales parameter is a string representing the locale to use. For example, you can pass in `"en-US"` for English (United States) or `"fr-FR"` for French (France). If you don't pass in a locales parameter, the default locale is used. The second optional parameter is the options parameter. This parameter is an object that allows you to specify the format of the date string.

:::interactive_editor

```js
const date = new Date("2014-10-15");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("en-GB", options)); // "Wednesday, 15 October 2014"
```

:::

# --assignment--

Review the JavaScript Dates topics and concepts.
