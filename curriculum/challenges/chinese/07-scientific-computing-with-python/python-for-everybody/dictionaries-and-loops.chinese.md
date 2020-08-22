---
id: 5e7b9f0a0b6c005b0e76f069
title: Dictionaries and Loops
challengeType: 11
isHidden: false
isRequired: true
videoId: EEmekKiKG70
---

## Description
<section id='description'>
More resources:
- <a href="https://www.youtube.com/watch?v=PrhZ9qwBDD8" target='_blank'>Exercise</a>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What will the following code print?:
    ```python
    counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
    for key in counts:
        if counts[key] > 10:
            print(key, counts[key])
    ```
  answers:
    - |
        annie 42

        jan 100
    - |
        chuck 1

        annie 42

        jan 100
    - |
        chuck 1
    - |
        [Error]
  solution: 1
```

</section>
