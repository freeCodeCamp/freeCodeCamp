---
title: Date Object
---

# What is the Date Object?
The Date Object in JavaScript lets us work with dates. We can use it to get the current time and date, or create an object that stores a time a date of your choosing.

# How to Create a Date Object
There are four ways to create a Date Object:

1) To get the current time:
```js
    var currentDate = new Date();
```

2) To create a new date object with a specified date and time
```js
    var specifiedDate = new Date(2019, 4, 29, 15, 0, 0, 0);
```
This will return
```
    Wed May 29 2019 15:00:00 GMT-0400 (Eastern Daylight Time)
```
The structure is (year, month, day, hour, minute, second, millisecond).

NOTE: The months start from 0.

3) Creating object using milliseconds
```js
    var millisecondDate = new Date(0);
```

This returns the milliseconds passed into date, in this case 0, plus time zero. Time zero for the Date Object is January 1st, 1970.

In a day there's 86,400,000 milliseconds so:
```js
    var millisecondDate = new Date(86400000);
```
will return the day after date zero so January 2nd, 1970.

4) To create a Date Object from a string:
```js
    var stringDate = new Date("May 29, 2019 15:00:00");
```
this returns
```
    Wed May 29 2019 15:00:00 GMT-0400 (Eastern Daylight Time)
```
