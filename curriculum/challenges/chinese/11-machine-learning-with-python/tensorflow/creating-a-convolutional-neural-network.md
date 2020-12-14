---
id: 5e8f2f13c4cdbe86b5c72d98
challengeType: 11
videoId: kfv0K8MtkIc
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks below to complete the architecture for a convolutional neural network:

    ```py
    model = models.__A__()
    model.add(layers.__B__(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
    model.add(layers.__C__(2, 2))
    model.add(layers.__B__(64, (3, 3), activation='relu'))
    model.add(layers.__C__(2, 2))
    model.add(layers.__B__(32, (3, 3), activation='relu'))
    model.add(layers.__C__(2, 2))
    ```

  answers:
    - |
      A: `Sequential`

      B: `add`

      C: `Wrapper`
    - |
      A: `keras`

      B: `Cropping2D`

      C: `AlphaDropout`
    - |
      A: `Sequential`

      B: `Conv2D`

      C: `MaxPooling2D`
  solution: 3
```

</section>

