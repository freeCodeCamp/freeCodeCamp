---
id: 5e7b9f060b6c005b0e76f059
title: More Conditional Structures
challengeType: 11
isHidden: true
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
  text: |
    Given the following code:
    ```python
    temp = "5 degrees"
    cel = 0
    try:
        fahr = float(temp)
        cel = (fahr - 32.0) * 5.0 / 9.0
    except:
        print("temp should be a number")
    print(cel)
    ```
    Which line would cause the script to immediately stop because of an error?

  answers:
    - |
        1
    - |
        4
    - |
        6
    - |
        7
    - |
        None
  solution: 2
```

</section>
