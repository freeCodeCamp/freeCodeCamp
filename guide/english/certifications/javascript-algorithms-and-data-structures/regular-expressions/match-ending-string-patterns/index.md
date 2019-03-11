---
title: Match Ending String Patterns
---
## Match Ending String Patterns


To finish this challenge, it's necessary to use __boundaries__. 

The __$__ Matches end of input. 

For example, /t$/ does not match the "t" in "eater", but does match it in "eat". 


__important:__ If the multiline flag is set to true, also matches immediately before a line break character.
 


### Spoiiler Alert: Solution ahead
```javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
