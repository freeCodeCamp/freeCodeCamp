---
id: 5e9a093a74c4063ca6f7c15d
title: Data Cleaning Introduction
challengeType: 11
isHidden: false
videoId: ovYNhnltVxY
---

## Description

<section id='description'>
More resources:
- <a href="https://notebooks.ai/rmotr-curriculum/data-cleaning-rmotr-freecodecamp-fd76fa59" target='_blank'>Notebook</a>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What will the following code print out?

    ```py
    import pandas as pd
    import numpy as np

    s = pd.Series(['a', 3, np.nan, 1, np.nan])

    print(s.notnull().sum())
    ```

  answers:
    - |
      3
    - |
      ```
      0     True
      1     True
      2    False
      3     True
      4    False
      dtype: bool
      ```
    - |
      ```
      0    False
      1    False
      2     True
      3    False
      4     True
      dtype: bool
      ```
  solution: 1
````

</section>
