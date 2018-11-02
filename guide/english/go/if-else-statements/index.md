---
title: if else Statements
---
## Introduction

The `if` statement executes a statement if a specified condition is **true**. If the condition is **false**, another statement can be executed using the `else` statement..

**Note:** The `else` statement is optional.
```Go
  x := 7
  if x%2 == 0 {
    // This statement is executed if x is even
  } else {
    // This statement is executed if x is odd
  }
```


Multiple `if...else` statements can be nested to create an `else if` clause.
```go
  x := 7
  if x == 2 {
    // this statement is executed if x is 2
  } else if x == 4 {
    // this statement is executed if x is 4
  } else if x == 7 {
    // this statement is executed if x is 7
  } else {
    // this statement is executed if none of the aboves is true
  }
```


In Go you can precede an `if` condition with a statement. The containing variable definition is then valid for the complete `if` block.
```go
  if x := 3; x == 2 {
    // this statement is executed if x is 2
  } else if x == 3 {
    // this statement is executed if x is 3
  } else {
    // this statement is executed if none of the aboves is true
  }
```
