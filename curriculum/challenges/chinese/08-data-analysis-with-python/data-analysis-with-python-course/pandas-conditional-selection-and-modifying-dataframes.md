---
id: 5e9a093a74c4063ca6f7c15b
challengeType: 11
videoId: BFlH0fN5xRQ
---

## Description

<section id='description'>
More resources:
- <a href="https://notebooks.ai/rmotr-curriculum/freecodecamp-intro-to-pandas-902ae59b" target='_blank'>Notebook</a>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What will the following code print out?

    ```py
    import pandas as pd

    certificates_earned = pd.DataFrame({
        'Certificates': [8, 2, 5, 6],
        'Time (in months)': [16, 5, 9, 12]
    })
    names = ['Tom', 'Kris', 'Ahmad', 'Beau']

    certificates_earned.index = names
    longest_streak = pd.Series([13, 11, 9, 7], index=names)
    certificates_earned['Longest streak'] = longest_streak

    print(certificates_earned)
    ```

  answers:
    - |
      ```
      Tom      13
      Kris     11
      Ahmad     9
      Beau      7
      Name: Longest streak, dtype: int64
      ```
    - |
      ```
            Certificates  Time (in months)  Longest streak
      Tom               8                16              13
      Kris              2                 5              11
      Ahmad             5                 9               9
      Beau              6                12               7
      ```
    - |
      ```
            Certificates   Longest streak
      Tom               8               13
      Kris              2               11
      Ahmad             5                9
      Beau              6                7
      ```
  solution: 2
````

</section>
