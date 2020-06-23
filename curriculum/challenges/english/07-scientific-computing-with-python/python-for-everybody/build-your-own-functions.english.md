---
id: 5e7b9f060b6c005b0e76f05b
title: Build your own Functions
challengeType: 11
isHidden: false
isRequired: true
videoId: nLDychdBwUg
---

## Description
<section id='description'>
More resources:
- <a href="https://www.youtube.com/watch?v=ksvGhDsjtpw" target='_blank'>Exercise</a>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What will the following Python program print out?:
    ```python
    def fred():
        print("Zap")
    def jane():
        print("ABC")

    jane()
    fred()
    jane()
    ```
  answers:
    - |
        Zap

        ABC

        jane

        fred

        jane
    - |
        Zap

        ABC

        Zap
    - |
        ABC

        Zap

        jane
    - |
        ABC

        Zap

        ABC
    - |
        Zap

        Zap

        Zap
  solution: 4
```

</section>
