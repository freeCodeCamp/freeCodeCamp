---
id: 5e9a093a74c4063ca6f7c15f
title: Data Cleaning Duplicates
challengeType: 11
videoId: kj7QqjXhH6A
---

## Description

<section id='description'>
<em>Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.</em>

More resources:

- <a href="https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp" target="_blank" rel="noopener noreferrer">Notebooks on GitHub</a>
- <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer">How to open Notebooks from GitHub using Google Colab.</a>

</section>

## Tests

<section id='tests'>

```yml
question:
  text: |
    The Python method `.duplicated()` returns a boolean Series for your DataFrame. `True` is the return value for rows that:

  answers:
    - |
      contain a duplicate, where the value for the row contains the first occurrence of that value.
    - |
      contain a duplicate, where the value for the row is at least the second occurrence of that value.
    - |
      contain a duplicate, where the value for the row contains either the first or second occurrence.
  solution: 2
```

</section>
