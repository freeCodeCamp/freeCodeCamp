---
id: 5e9a093a74c4063ca6f7c154
title: Numpy Arrays
challengeType: 11
videoId: VDYVFHBL1AM
---

## Description

<section id='description'>
<em>Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.</em>

More resources:

- <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-numpy" target="_blank" rel="noopener noreferrer">Notebooks on GitHub</a>
- <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer">How to open Notebooks from GitHub using Google Colab.</a>

</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What will the following code print out?

    ```py
    A = np.array([
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ])

    print(A[:, :2])
    ```

  answers:
    - |
      ```python
      [['a' 'b']]
      ```
    - |
      ```py
      [['b' 'c']
      ['e' 'f']
      ['h' 'i']]
      ```
    - |
      ```py
      [['a' 'b']
      ['d' 'e']
      ['g' 'h']]
      ```
  solution: 3
````

</section>
