---
id: 5e8f2f13c4cdbe86b5c72d98
title: Створення згорткової нейронної мережі
challengeType: 11
videoId: kfv0K8MtkIc
bilibiliIds:
  aid: 420605824
  bvid: BV1p341127wW
  cid: 409131869
dashedName: creating-a-convolutional-neural-network
---

# --question--

## --text--

Заповніть пропуски нижче, щоб завершити архітектуру згорткової нейронної мережі:

```py
model = models.__A__()
model.add(layers.__B__(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.__C__(2, 2))
model.add(layers.__B__(64, (3, 3), activation='relu'))
model.add(layers.__C__(2, 2))
model.add(layers.__B__(32, (3, 3), activation='relu'))
model.add(layers.__C__(2, 2))
```

## --answers--

A: `Sequential`

B: `add`

C: `Wrapper`

---

A: `keras`

B: `Cropping2D`

C: `AlphaDropout`

---

A: `Sequential`

B: `Conv2D`

C: `MaxPooling2D`

## --video-solution--

3

