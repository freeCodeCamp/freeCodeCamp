---
id: 5e8f2f13c4cdbe86b5c72d9e
challengeType: 11
videoId: lYeLtu8Nq7c
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks below to create the model for the RNN:

    ```py
    model = __A__.keras.Sequential([
        __A__.keras.layers.__B__(88584, 32),
        __A__.keras.layers.__C__(32),
        __A__.keras.layers.DENSE(1, activation='sigmoid')
    ])
    ```

  answers:
    - |
      A: `tensor_flow`

      B: `embedding`

      C: `LSTM`
    - |
      A: `tf`

      B: `Embedding`

      C: `AlphaDropout`
    - |
      A: `tf`

      B: `Embedding`

      C: `LSTM`
  solution: 3
```

</section>

