---
id: 5e8f2f13c4cdbe86b5c72da0
challengeType: 11
videoId: j5xsxjq_Xk8
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks below to create the training examples for the RNN:

    ```py
    char_dataset = tf.data.__A__.__B__(text_as_int)
    ```

  answers:
    - |
      A: `DataSet`

      B: `from_tensor_slices`
    - |
      A: `data`

      B: `from_tensors`
    - |
      A: `DataSet`

      B: `from_generator`
  solution: 1
```

</section>

