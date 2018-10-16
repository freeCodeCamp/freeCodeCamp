---	
title: Specify Exact Number of Matches	
---

## Specify Exact Number of Matches

## The Problem:

We need to change the regex ```timRegex``` to match the word ```"Timber"``` only when it has four letter ```m```'s.

 ## Solution:
 
 ```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

 ## Explanation:
 
With this regex (```/Tim{4}ber/```) we specify a certain number (```4```) of letter ```m```'s.
