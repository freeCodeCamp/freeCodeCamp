---
title: Use Destructuring Assignment to Assign Variables from Arrays
---
## Use Destructuring Assignment to Assign Variables from Arrays

We have to take some precaution in this case.

1. No need of const [b,a] as it will keep the effect of assignment local.

2. const [b,a] = [a,b] will result in the value of a,b as undefined(simple assignment rule left to right).

Hence the solution to this problem is 
[b,a] = [a,b]