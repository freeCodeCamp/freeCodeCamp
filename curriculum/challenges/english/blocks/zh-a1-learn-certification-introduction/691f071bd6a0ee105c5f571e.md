---
id: 691f071bd6a0ee105c5f571e
title: Pinyin-to-Hanzi Input
challengeType: 22
dashedName: pinyin-to-hanzi-input
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- (audio) Wang Hua: 你好 (nǐ hǎo)，世界 (shì jiè)。-->

# --description--

You've already learned how to input correct Pinyin. Now you're ready to input Chinese characters. This is where the Pinyin-to-Hanzi input comes in. Try typing `ni3 hao3` and `shi4 jie4` again to see how "Hello, world" is written in Chinese!

Again, if you make a mistake, just delete the incorrect part and re-enter it.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK，BLANK。`

## --blanks--

`你好 (nǐ hǎo)`

### --feedback--

This two-character word means "hello", created by typing `ni3 hao3`.

---

`世界 (shì jiè)`

### --feedback--

This two-character word means "world", created by typing `shi4 jie4`.

# --explanation--

With the Pinyin-to-Hanzi input, you can type the letters plus a tone number to automatically convert them into characters. For example, here, `ni3 hao3` becomes `你好`, and `shi4 jie4` becomes `世界`.

*Note: Both the Pinyin Tone input and the Pinyin-to-Hanzi input convert your letter and number input into either Pinyin or Chinese characters. The system automatically decides which conversion to apply, so you don't need to worry about the process.*

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_chinese_fundamentals_hello_world.mp3",
      "startTime": 1,
      "startTimestamp": 5.18,
      "finishTimestamp": 6.71
    }
  },
  "commands": [
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Wang Hua",
      "startTime": 1,
      "finishTime": 2.53,
      "dialogue": {
        "text": "你好 (nǐ hǎo)，世界 (shì jiè)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 3.03
    }
  ]
}
```
