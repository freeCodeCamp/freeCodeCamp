---
id: 5e8f2f13c4cdbe86b5c72d9e
title: '使用 RNN 進行自然語言處理：情感分析'
challengeType: 11
videoId: lYeLtu8Nq7c
bilibiliIds:
  aid: 933111408
  bvid: BV1TM4y137VB
  cid: 409135996
dashedName: natural-language-processing-with-rnns-sentiment-analysis
---

# --question--

## --text--

填寫下面的空白來創建 RNN 模型：

```py
model = __A__.keras.Sequential([
    __A__.keras.layers.__B__(88584, 32),
    __A__.keras.layers.__C__(32),
    __A__.keras.layers.Dense(1, activation='sigmoid')
])
```

## --answers--

A: `tensor_flow`

B: `embedding`

C: `LSTM`

---

A: `tf`

B: `Embedding`

C: `AlphaDropout`

---

A: `tf`

B: `Embedding`

C: `LSTM`

## --video-solution--

3

