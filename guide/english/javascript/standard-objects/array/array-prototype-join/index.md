---
title: Array.prototype.join
---
The JavaScript array method `.join()` will combine all elements of an array into a single string.

**Syntax**
```javascript
  var array = ["Lorem", "Ipsum", "Dolor", "Sit"];
  var str = array.join([separator]);
```

## Parameters

**separator**

Optional. Specifies the string to use to separate each element of the original array. If the separator is not a string, it will be converted to a string. If separator parameter is not provided, array elements are separated with a comma by default. If separator is an empty string `""`, all array elements are joined without a separator character between them.

## Description

`.join()` joins all elements of an array into a single string. If any of the array elements are `undefined` or `null`, that element is converted to the empty string `""`.

## Examples

**Using `.join()` four different ways**
```javascript
  var array = ["Lorem", "Ipsum", "Dolor" ,"Sit"];

  var join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable
                                         (because no separator was provided .join()
                                         defaulted to using a comma) */
  var join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable
  var join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable
  var join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable
```

Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank' rel='nofollow'>MDN</a>
