---
id: 5e7b9f090b6c005b0e76f067
title: Python Dictionaries
challengeType: 11
videoId: dnzvfimrRMg
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What does dict equal after running this code?:
    ```python
    dict = {"Fri": 20, "Thu": 6, "Sat": 1}
    dict["Thu"] = 13
    dict["Sat"] = 2
    dict["Sun"] = 9
    ```
  answers:
    - |
        ```python
        {'Fri': 20, 'Thu': 6, 'Sat': 1}
        ```
    - |
        ```python
        {'Fri': 20, 'Thu': 6, 'Sat': 1, 'Thu': 13, 'Sat': 2, 'Sun': 9}
        ```
    - |
        ```python
        {'Sun': 9}
        ```
    - |
        ```python
        {'Thu': 13, 'Sat': 2, 'Sun': 9}
        ```
    - |
        ```python
        {'Fri': 20, 'Thu': 13, 'Sat': 2, 'Sun': 9}
        ```
  solution: 5
```

</section>
