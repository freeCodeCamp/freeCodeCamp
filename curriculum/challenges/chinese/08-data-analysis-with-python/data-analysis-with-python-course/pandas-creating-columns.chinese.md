---
id: 5e9a093a74c4063ca6f7c15c
title: Pandas Creating Columns
challengeType: 11
isHidden: false
videoId: _sSo2XZoB3E
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
    What code would add a "Certificates per month" column to the `certificates_earned` DataFrame like the one below?

    ```
          Certificates  Time (in months)  Certificates per month
    Tom               8                16                    0.50
    Kris              2                 5                    0.40
    Ahmad             5                 9                    0.56
    Beau              6                12                    0.50
    ```

  answers:
    - |
      ```py
      certificates_earned['Certificates'] /
      certificates_earned['Time (in months)']
      ```
    - |
      ```py
      certificates_earned['Certificates per month'] = round(
          certificates_earned['Certificates'] /
          certificates_earned['Time (in months)']
      )
      ```
    - |
      ```py
      certificates_earned['Certificates per month'] = round(
          certificates_earned['Certificates'] /
          certificates_earned['Time (in months)'], 2
      )
      ```
  solution: 3
````

</section>
