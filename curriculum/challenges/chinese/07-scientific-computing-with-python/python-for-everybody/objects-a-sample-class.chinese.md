---
id: 5e7b9f160b6c005b0e76f086
title: 'Objects: A Sample Class'
challengeType: 11
isHidden: false
isRequired: true
videoId: FiABKEuaSJ8
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What will the following program print?:
    ```python
    class PartyAnimal:
        x = 0
        def party(self):
            self.x = self.x + 2
            print(self.x)

    an = PartyAnimal()
    an.party()
    an.party()
    ```
  answers:
    - |
        So far 1

        So far 2
    - |
        0

        0
    - |
        2

        2
    - |
        2

        4
  solution: 4
```

</section>
