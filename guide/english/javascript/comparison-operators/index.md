---
title: Comparison Operators
---
JavaScript has both **strict** and **type–converting** comparisons.

*   A strict comparison (e.g. ===) is only true if the operands are of the same type.

*   The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison.

*   For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison.

*   Strings are compared based on standard lexicographical ordering, using Unicode values.

## Features of comparisons:

*   Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

*   Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.

*   Two Boolean operands are strictly equal if both are true or both are false.

*   Two distinct objects are never equal for either strict or abstract comparisons.

*   An expression comparing Objects is only true if the operands reference the same Object.

*   Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.

## Equality operators

### Equality (==)

The equality operator converts the operands if they are **not of the same type**, then applies strict comparison. If **both operands are objects**, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

#### Syntax

     x == y

#### Examples

     1   ==  1        // true
    "1"  ==  1        // true
     1   == '1'       // true
     0   == false     // true
     0   == null      // false

       0   == undefined   // false
     null  == undefined   // true

### Inequality (!=)

The inequality operator returns true if the operands are not equal. If the two operands are **not of the same type**, JavaScript attempts to convert the operands to an appropriate type for the comparison. If **both operands are objects**, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.

#### Syntax

    x != y

#### Examples

    1 !=   2     // true
    1 !=  "1"    // false
    1 !=  '1'    // false
    1 !=  true   // false
    0 !=  false  // false

### Identity / strict equality (===)

The identity operator returns true if the operands are strictly equal **with no type conversion**.

#### Syntax

    x === y

#### Examples

    3 === 3   // true
    3 === '3' // false

### Non-identity / strict inequality (!==)

The non-identity operator returns true if the operands **are not equal and/or not of the same type**.

#### Syntax

    x !== y

#### Examples

    3 !== '3' // true
    4 !== 3   // true

## Relational operators

### Greater than operator (>)

The greater than operator returns true if the left operand is greater than the right operand.

#### Syntax

    x > y

#### Examples

    4 > 3 // true

### Greater than or equal operator (>=)

The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.

#### Syntax

    x >= y

#### Examples

    4 >= 3 // true
    3 >= 3 // true

### Less than operator (<)

The less than operator returns true if the left operand is less than the right operand.

#### Syntax

    x < y

#### Examples

    3 < 4 // true

### Less than or equal operator (<=)

The less than or equal operator returns true if the left operand is less than or equal to the right operand.

#### Syntax

    x <= y

#### Examples

    3 <= 4 // true

_You can find more information at <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators' target='_blank' rel='nofollow'>MDN</a>._


## Comparing null and undefined

When we compare null and undefined we see different behaviour. Lets check different scenario through examples
#### Example - strict equality check (===)

```javascript
console.log( null === undefined ); // O/P - false
```

Otuput is false and that's correct because we know "null" and "undefined" are different types.

#### Example - non-strict equality check (==)

```javascript
console.log( null == undefined ); // O/P: - true
```

How? This is because there is a special rule for "null" and "undefined". Due to which they are equal in case of non-strict check (==) but are not equal to any other value.

If we use comparison operators like <, >, <=, >= etc., "null" and "undefined" are converted to number and in such cases "null" will become 0 and "undefined" will be NaN. Lets check some of those examples.

#### Example - compare null with 0 (zero)

```javascript
console.log( null > 0 ); // O/P - false
console.log( null >= 0 ); // O/P - true
console.log( null == 0 ); // O/P - false
```

Strange? As per the first statement null is not greater than 0 and from the second statement null is either greater than or equal to 0. So, if we think mathematically and compare both statements, will come to the result that null is equal to 0. But, as per third statement it's not true. Why?

The reason is "comparison" and "equality check" both works in different way. 
In comparison, "null/undefined" is first converted to number so, in first two cases "null" become 0 and hence case1) (null > 0) -> false and case2) (null >= 0) -> true.
But, in equality check (==), "null/undefined" works without any conversion and as explained above (special rule), in equality check "null/undefined" are only equal to each other and are not equal to anything else. Hence (null == 0) -> false. 

#### Example - compare undefined with 0 (zero)

```javascript
console.log( undefined  > 0 ); // O/P - false
console.log( undefined  >= 0 ); // O/P - false
console.log( undefined  == 0 ); // O/P - false
```

Here, we test the same cases as we did for null but again result is different. Why?

The reasons are as follow.
In first two cases, we are comparing undefined with 0 and as mentioned above in comparison undefined gets converted to NaN. NaN is a special value which always return false when compared with any number and that's why we got false as output in first two cases.
For third statement, reason is same as mentioned for "null". In equality check "null/undefined" are only equal to each other and not equal to anything else. Hence (undefined == 0) -> false. 


