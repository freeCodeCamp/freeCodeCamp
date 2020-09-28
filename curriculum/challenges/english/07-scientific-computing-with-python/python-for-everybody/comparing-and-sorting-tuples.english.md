---
id: 5e7b9f0b0b6c005b0e76f06d
title: Comparing and Sorting Tuples
challengeType: 11
videoId: dZXzBXUxxCs
---

## Description
<section id='description'>
More resources:
- <a href="https://www.youtube.com/watch?v=EhQxwzyT16E" target='_blank'>Exercise</a>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Which does the same thing as the following code?:
    ```python
    lst = []
    for key, val in counts.items():
        newtup = (val, key)
        lst.append(newtup)
    lst = sorted(lst, reverse=True)
    print(lst)
    ```
  answers:
    - |
        ```python
        print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
        ```
    - |
        ```python
        print( [ (k,v) for k,v in counts.items().sorted() ] )
        ```
    - |
        ```python
        print( sorted( [ (v,k) for k,v in counts.keys() ] ) )
        ```
    - |
        ```python
        print( [ (k,v) for k,v in counts.values().sort() ] )
        ```
  solution: 1
```

</section>
