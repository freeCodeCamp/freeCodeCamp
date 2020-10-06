---
id: 5e7b9f060b6c005b0e76f059
challengeType: 11
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

````yml
question:
  text: |
    Given the following code:
    ```python
    temp = "5 degrees"
    cel = 0
    fahr = float(temp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)
    ```
    Which line/lines should be surrounded by `try` block?

  answers:
    - |
      1
    - |
      3
    - |
      3,4
    - |
      4
    - |
      None
  solution: 3
````

</section>
