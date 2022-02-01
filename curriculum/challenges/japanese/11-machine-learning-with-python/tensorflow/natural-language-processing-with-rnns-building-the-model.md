---
id: 5e8f2f13c4cdbe86b5c72da1
title: 'RNN を使用した自然言語処理: モデルの構築'
challengeType: 11
videoId: 32WBFS7lfsw
bilibiliIds:
  aid: 848015573
  bvid: BV1YL4y1a7WS
  cid: 409138016
dashedName: natural-language-processing-with-rnns-building-the-model
---

# --question--

## --text--

次の空欄を埋めて `build_model` 関数を完成させてください。

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

## --answers--

A: `ELU`

B: `True`

C: `vocab_size`

D: `return model`

---

A: `LSTM`

B: `False`

C: `batch_size`

D: `return model`

---

A: `LSTM`

B: `True`

C: `vocab_size`

D: `return model`

## --video-solution--

3

