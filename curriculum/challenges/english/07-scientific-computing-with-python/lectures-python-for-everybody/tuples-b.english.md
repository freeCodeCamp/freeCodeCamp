---
id: 5e7b9f0b0b6c005b0e76f06d
title: Tuples B
challengeType: 11
isRequired: true
videoId: dZXzBXUxxCs
---

## Description
<section id='description'>
More resources:
- <a href="https://www.youtube.com/watch?v=EhQxwzyT16E" target='_blank'>Exercise</a>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: 'Which does the same thing as the following code:
<pre>lst = []<br>for key, val in counts.items():<br>    newtup = (val, key)<br>    lst.append(newtup)<br><br>lst = sorted(lst, reverse=True)<br>print(lst)<pre>'
  answers:
    - 'print( sorted( [ (k,v) for k,v in counts.items() ] ) )'
    - 'print( [ (k,v) for k,v in counts.items().sorted() ] )'
    - 'print( sorted( [ (k,v) for k,v in counts.keys() ] ) )'
    - 'print( [ (k,v) for k,v in counts.values().sort() ] )'
  solution: 1
```

</section>
