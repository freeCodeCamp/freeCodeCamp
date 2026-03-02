---
id: 68f5f1ba201072241c019db2
title: Task 2
challengeType: 22
dashedName: task-2
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- REVIEW -->

<!-- (Audio) whole audio Wang Hua -->

# --description--

This is a review of Wang Hua's introduction.

# --instructions--

Write the following words in the correct spot:

`我是 (wǒ shì)`, `开发者 (kāi fā zhě)`, `中国人 (zhōng guó rén)`, and `你好 (nǐ hǎo)`.

Remember that you can type Pinyin and a number to input characters.

# --fillInTheBlank--

## --sentence--

`BLANK，BLANK 王华 (wáng huá)。`

`我是 (wǒ shì) BLANK。`

`我是 (wǒ shì) BLANK。`

## --blanks--

`你好 (nǐ hǎo)`

### --feedback--

This word is a common greeting meaning "hello".

---

`我是 (wǒ shì)`

### --feedback--

This phrase means "I am" and introduces her name.

---

`中国人 (zhōng guó rén)`

### --feedback--

This phrase means "Chinese", showing nationality.

---

`开发者 (kāi fā zhě)`

### --feedback--

This means "developer", indicating her profession.

# --explanation--

Wang Hua first greets with `你好 (nǐ hǎo)`, then uses `我是 (wǒ shì)` to introduce her name. She also introduces her nationality as `中国人 (zhōng guó rén)` and her profession as `开发者 (kāi fā zhě)`.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ZH_A1_greetings_and_introductions_wanghua.mp3",
      "startTime": 1,
      "startTimestamp": 1.45,
      "finishTimestamp": 6.88
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
      "finishTime": 3.1,
      "dialogue": {
        "text": "你好 (nǐ hǎo)，我是王华 (wǒ shì wáng huá)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 3.59,
      "finishTime": 4.78,
      "dialogue": {
        "text": "我是中国人 (wǒ shì zhōng guó rén)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 5.31,
      "finishTime": 6.43,
      "dialogue": {
        "text": "我是开发者 (wǒ shì kāi fā zhě)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 6.93
    }
  ]
}
```
