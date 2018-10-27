---
title: Array destructuring
---
## Variable assignment


### Basic assignment

It's quite simple to extract data from arrays using array destructuring.

```javascript
const address = ['Rue Cler', 'Paris', 'France'];
const [street, city, country] = address;

console.log(steet);   //'Rue Cler'
console.log(city);    //'Paris'
console.log(country); //'France'

```

### Skipping values 

You can skip some values by putting comma

```javascript
const address = ['Rue Cler', 'Paris', 'France'];
const [street, , country] = address;
or
const [street] = address;
```

### Default value

A variable can be assigned a default, in the case that the value unpacked from the array is undefined.

```javascript
const address = ['Rue Cler', 'Paris'];
[street, city, country = 'France'] = address;
console.log(country); // 'France'
```

### Other resources

- <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring' target='_blank' rel='nofollow'>JavaScript | MDN</a>
