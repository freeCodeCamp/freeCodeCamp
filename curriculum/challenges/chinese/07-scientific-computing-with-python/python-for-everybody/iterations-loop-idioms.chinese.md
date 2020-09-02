---
id: 5e7b9f070b6c005b0e76f05e
title: 'Iterations: Loop Idioms'
challengeType: 11
isHidden: false
isRequired: true
videoId: AelGAcoMXbI
---

## Description

<section id='description'>

</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    Below is code to find the smallest value from a list of values. One line has an error that will cause the code to not work as expected. Which line is it?:
    ```python
    smallest = None
    print("Before:", smallest)
    for itervar in [3, 41, 12, 9, 74, 15]:
        if smallest is None or itervar < smallest:
            smallest = itervar
            break
        print("Loop:", itervar, smallest)
    print("Smallest:", smallest)
    ```
  answers:
    - |
      3
    - |
      4
    - |
      6
    - |
      7
  solution: 3
````

</section>
