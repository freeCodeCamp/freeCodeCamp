---
id: 5e8f2f13c4cdbe86b5c72d95
title: 'Reti neurali: creare un modello'
challengeType: 11
videoId: K8bz1bmOCTw
bilibiliIds:
  aid: 848109040
  bvid: BV1EL4y1878f
  cid: 409130886
dashedName: neural-networks-creating-a-model
---

# --question--

## --text--

Riempi gli spazi vuoti qui sotto per costruire un modello sequenziale di livelli densi:

```py
model = __A__.__B__([
    __A__.layers.Flatten(input_shape=(28, 28)),
    __A__.layers.__C__(128, activation='relu'),
    __A__.layers.__C__(10, activation='softmax')
])
```

## --answers--

A: `keras`

B: `Sequential`

C: `Dense`

---

A: `tf`

B: `Sequential`

C: `Categorical`

---

A: `keras`

B: `sequential`

C: `dense`

## --video-solution--

1

