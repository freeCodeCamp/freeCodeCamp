---
id: 5e8f2f13c4cdbe86b5c72d9a
title: 'Згорткові нейронні мережі: вибір попередньо підготовленої моделі'
challengeType: 11
videoId: h1XUt1AgIOI
bilibiliIds:
  aid: 463063633
  bvid: BV1qL411x73q
  cid: 409132626
dashedName: convolutional-neural-networks-picking-a-pretrained-model
---

# --question--

## --text--

Заповніть пропуски нижче, щоб використати попередньо підготовлену модель Google MobileNet V2 як основу для згорткової нейронної мережі:

```py
base_model = tf.__A__.applications.__B__(input_shape=(160, 160, 3),
                                               include_top=__C__,
                                               weights='imagenet'
                                               )
```

## --answers--

A: `keras`

B: `MobileNetV2`

C: `False`

---

A: `Keras`

B: `MobileNetV2`

C: `True`

---

A: `keras`

B: `mobile_net_v2`

C: `False`

## --video-solution--

1

