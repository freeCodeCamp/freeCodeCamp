---
id: 5e7b9f0a0b6c005b0e76f06c
title: The Tuples Collection
challengeType: 11
isHidden: false
isRequired: true
videoId: 3Lxpladfh2k
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What will the following code print?:
    ```python
    d = dict()
    d['quincy'] = 1
    d['beau'] = 5
    d['kris'] = 9
    for (k,i) in d.items():
        print(k, i)
    ```
  answers:
    - |
        k i

        k i

        k i
    - |
        quincy 0

        beau 1

        kris 2
    - |
        quincy 1

        beau 5

        kris 9
    - |
        1 quincy

        5 beau

        9 kris
  solution: 3
```

</section>
