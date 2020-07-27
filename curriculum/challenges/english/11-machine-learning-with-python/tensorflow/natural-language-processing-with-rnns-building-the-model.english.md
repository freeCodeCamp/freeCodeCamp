---
id: 5e8f2f13c4cdbe86b5c72da1
title: 'Natural Language Processing With RNNs: Building the Model'
challengeType: 11
isHidden: false
videoId: 32WBFS7lfsw
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks below to complete the `build_model` function:

    ```py
    def build_mode(vocab_size, embedding_dim, rnn_units, batch_size):
        model = tf.keras.Sequential([
            tf.keras.layers.Embedding(vocab_size,
                                      embedding_dim,
                                      batch_input_shape=[batch_size, None]),
            tf.keras.layers.__A__(rnn_units,
                                  return_sequences=__B__,
                                  recurrent_initializer='glorot_uniform),
            tf.keras.layers.Dense(__C__)
        ])
        __D__
    ```

  answers:
    - |
      A: `ELU`

      B: `True`

      C: `vocab_size`

      D: `return model`
    - |
      A: `LSTM`

      B: `False`

      C: `batch_size`

      D: `return model`
    - |
      A: `LSTM`

      B: `True`

      C: `vocab_size`

      D: `return model`
  solution: 3
```

</section>

