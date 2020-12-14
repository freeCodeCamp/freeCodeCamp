---
id: 5e8f2f13c4cdbe86b5c72da2
challengeType: 11
videoId: hEUiK7j9UI8
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks below to save your model's checkpoints in the `./checkpoints` directory and call the latest checkpoint for training:

    ```py
    checkpoint_dir = __A__
    checkpoint_prefix = os.path.join(checkpoint_dir, 'ckpt_{epoch}')

    checkpoint_callback = tf.keras.callbacks.__B__(
        filepath=checkpoint_prefix,
        save_weights_only=True
    )

    history = model.fit(data, epochs=2, callbacks=[__C__])
    ```

  answers:
    - |
      A: `'./training_checkpoints'`

      B: `ModelCheckpoint`

      C: `checkpoint_prefix`
    - |
      A: `'./checkpoints'`

      B: `ModelCheckpoint`

      C: `checkpoint_callback`
    - |
      A: `'./checkpoints'`

      B: `BaseLogger`

      C: `checkpoint_callback`
  solution: 2
```

</section>

