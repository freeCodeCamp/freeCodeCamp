---
id: 5e8f2f13c4cdbe86b5c72da2
title: '使用 RNN 進行自然語言處理：訓練模型'
challengeType: 11
videoId: hEUiK7j9UI8
bilibiliIds:
  aid: 250542136
  bvid: BV19v411w7Fi
  cid: 409138327
dashedName: natural-language-processing-with-rnns-training-the-model
---

# --question--

## --text--

填寫下面的空白以將你模型的檢查點保存在 `./checkpoints` 目錄中，並調用最新的檢查點進行訓練：

```py
checkpoint_dir = __A__
checkpoint_prefix = os.path.join(checkpoint_dir, 'ckpt_{epoch}')

checkpoint_callback = tf.keras.callbacks.__B__(
    filepath=checkpoint_prefix,
    save_weights_only=True
)

history = model.fit(data, epochs=2, callbacks=[__C__])
```

## --answers--

A: `'./training_checkpoints'`

B: `ModelCheckpoint`

C: `checkpoint_prefix`

---

A: `'./checkpoints'`

B: `ModelCheckpoint`

C: `checkpoint_callback`

---

A: `'./checkpoints'`

B: `BaseLogger`

C: `checkpoint_callback`

## --video-solution--

2

