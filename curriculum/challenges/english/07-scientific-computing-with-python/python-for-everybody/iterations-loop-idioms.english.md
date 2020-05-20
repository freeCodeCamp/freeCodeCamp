---
id: 5e7b9f070b6c005b0e76f05e
title: 'Iterations: Loop Idioms'
challengeType: 11
isHidden: true
isRequired: true
videoId: AelGAcoMXbI
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: 'Below is code to find the smallest value from a list of values. One line has an error that will cause the code to not work as expected. Which line is it?:
<pre>
1|smallest = None<br>
2|print("Before:", smallest)<br>
3|for itervar in [3, 41, 12, 9, 74, 15]:<br>
4|    if smallest is None or itervar < smallest:<br>
5|        smallest = itervar<br>
6|        break<br>
7|    print("Loop:", itervar, smallest)<br>
8|print("Smallest:", smallest)<br>
</pre>'
  answers:
    - '3'
    - '4'
    - '6'
    - '7'
  solution: 3
```

</section>
