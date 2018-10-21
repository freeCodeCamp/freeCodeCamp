---
title: Restrict Possible Usernames
---
## Restrict Possible Usernames

## Solution:
```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
```
## Explain:
1. The only numbers in the username have to be at the end. `\d$`
   There can be zero or more of them at the end. `*`
```javascript
/\d*$/;
```
2. Username letters can be lowercase and uppercase. `i`
```javascript
/\d*$/i;
```
3. Usernames have to be at least two characters long. `{2,}`
   A two-letter username can only use alphabet letter characters. `^[a-z]`
```javascript
/^[a-z]{2,}\d*$/i;
```
