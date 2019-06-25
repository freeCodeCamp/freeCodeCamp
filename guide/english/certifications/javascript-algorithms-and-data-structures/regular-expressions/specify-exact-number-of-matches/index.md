---
title: Specify Exact Number of Matches
---
## Specify Exact Number of Matches

### Hint 1:
We see that the answer is simply finding 4 m's in a row. The first anwser would be to match EXACTLY 4 times the character so we shall implement as following:
````javascript
let timRegex = /m{4}/; 
````
This solution is incorrect because you wont pass the final test case ("Timber" with 30 m's in it) as there are multiple times mmmm in a row of 30 m.
You should try to get **no more than** ***(4 times m) mmmm***. 

### Hint 2:
Based on the above I will try to specify exactly the characters before and after 4 times m!
***Remember:***  e.g. /b/ is a string literal for the word b so what if before and after mmmm we add ALL missing letters?



### Solution
From hint 1 we defined how to find mmmm in the timStr. From hint 2 we observe that we need to find the word Timmmmber=Tim{4}ber.
We simpply add the exact word in our timRegex value and the final result is:
````javascript
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
````

