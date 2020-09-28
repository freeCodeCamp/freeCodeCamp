---
id: 5e7b9f0b0b6c005b0e76f06f
title: 'Regular Expressions: Matching and Extracting Data'
challengeType: 11
videoId: LaCZnTbQGkE
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
    import re
    s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
    lst = re.findall('\\S+@\\S+', s)
    print(lst)
    ```
  answers:
    - |
        ['csev@umich.edu', 'cwen@iupui.edu']
    - |
        ['csev@umich.edu']
    - |
        ['umich.edu', 'iupui.edu']
    - |
        ['csev@', 'cwen@']
  solution: 1
```

</section>
