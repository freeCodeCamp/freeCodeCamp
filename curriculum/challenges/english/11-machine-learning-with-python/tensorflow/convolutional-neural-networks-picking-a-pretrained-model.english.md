---
id: 5e8f2f13c4cdbe86b5c72d9a
title: 'Convolutional Neural Networks: Picking a Pretrained Model'
challengeType: 11
videoId: h1XUt1AgIOI
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks below to use Google's pre-trained MobileNet V2 model as a base for a convolutional neural network:

    ```py
    base_model = tf.__A__.applications.__B__(input_shape=(160, 160, 3),
                                                   include_top=__C__,
                                                   weights='imagenet'
                                                   )
    ```

  answers:
    - |
      A: `keras`

      B: `MobileNetV2`

      C: `False`
    - |
      A: `Keras`

      B: `MobileNetV2`

      C: `True`
    - |
      A: `keras`

      B: `mobile_net_v2`

      C: `False`
  solution: 1
```

</section>

