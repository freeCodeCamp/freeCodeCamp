---
title: Match Characters that Occur One or More Times
---
## Match Characters that Occur One or More Times
 
 ## the problem:
 You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.
 ## the solution

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);
