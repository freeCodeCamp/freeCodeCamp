---
id: 5e9a0a8e09c5df3cc3600eda
title: Loading Data and Advanced Indexing
challengeType: 11
isHidden: false
videoId: tUdBZ7pF8Jg
---

## Description

<section id='description'>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    Given a file named `data.txt` with these contents:

    ```
    29,97,32,100,45
    15,88,5,75,22
    ```

    What code would produce the following array?

    ```py
    [29. 32. 45. 15.  5. 22.]
    ```

  answers:
    - |
      ```py
      filedata = np.genfromtxt('data.txt', delimiter=',')
      output = np.any(filedata < 50)

      print(output)
      ```
    - |
      ```py
      filedata = np.genfromtxt('data.txt', delimiter=',')
      output = np.all(filedata < 50, axis=1)

      print(output)
      ```
    - |
      ```py
      filedata = np.genfromtxt('data.txt', delimiter=',')
      output = filedata[filedata < 50]

      print(output)
      ```
  solution: 3
````

</section>
