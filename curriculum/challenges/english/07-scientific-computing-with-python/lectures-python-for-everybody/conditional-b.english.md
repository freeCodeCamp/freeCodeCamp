---
id: 5e7b9f060b6c005b0e76f059
title: Conditional B
challengeType: 11
isRequired: true
videoId: HdL82tAZR20
---

## Description
<section id='description'>
More resources:
- <a href="https://www.youtube.com/watch?v=crLerB4ZxMI" target='_blank'>Exercise 1</a>
- <a href="https://www.youtube.com/watch?v=KJN3-7HH6yk" target='_blank'>Exercise 2</a>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: 'Given the following code:<pre>
1 |temp = "5 degrees"<br>
2 |cel = 0<br>
3 |try:<br>
4 |    fahr = float(temp)<br>
5 |    cel = (fahr - 32.0) * 5.0 / 9.0<br>
6 |except:<br>
7 |    print("temp should be a number")<br>
8 |print(cel)<br>
</pre>
Which line would cause the script to immediately stop because of an error?'
  answers:
    - '1'
    - '4'
    - '6'
    - '7'
    - 'None'
  solution: 2
```

</section>
