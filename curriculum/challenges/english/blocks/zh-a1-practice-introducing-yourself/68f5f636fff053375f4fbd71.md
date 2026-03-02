---
id: 68f5f636fff053375f4fbd71
title: Task 4
challengeType: 22
dashedName: task-4
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- REVIEW -->

<!-- (Audio) whole audio Liu Ming -->

# --description--

This is a review of Liu Ming's introduction.

# --instructions--

Write the following words in the correct spot:

`您好 (nín hǎo)`, `设计师 (shè jì shī)`, `新加坡人 (xīn jiā pō rén)`, and `我是 (wǒ shì)`.

Remember that you can type Pinyin and a number to input characters with the right tones.

# --fillInTheBlank--

## --sentence--

`BLANK，BLANK 刘明 (liú míng)。`

`我是 (wǒ shì) BLANK。`

`我是 (wǒ shì) BLANK。`

## --blanks--

`您好 (nín hǎo)`

### --feedback--

This polite greeting means "hello" and is used in formal or respectful situations.

---

`我是 (wǒ shì)`

### --feedback--

This phrase means "I am" and introduces his name.

---

`新加坡人 (xīn jiā pō rén)`

### --feedback--

This phrase means "Singaporean", indicating Liu Ming's nationality.

---

`设计师 (shè jì shī)`

### --feedback--

This means "designer", which is Liu Ming's profession.

# --explanation--

Liu Ming first greets politely with `您好 (nín hǎo)`, then uses `我是 (wǒ shì)` to introduce his name. He also introduces his nationality as `新加坡人 (xīn jiā pō rén)` and his profession as `设计师 (shè jì shī)`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Liu Ming",
        "position": {
          "x": 50,
          "y": 17,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_liuming.mp3",
      "startTime": 1,
      "startTimestamp": 0.1,
      "finishTimestamp": 5.44
    }
  },
  "commands": [
    {
      "character": "Liu Ming",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Liu Ming",
      "startTime": 1,
      "finishTime": 2.68,
      "dialogue": {
        "text": "您好 (nín hǎo)，我是刘明 (wǒ shì liú míng)。",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 2.96,
      "finishTime": 4.32,
      "dialogue": {
        "text": "我是新加坡人 (wǒ shì xīn jiā pō rén)。",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 4.58,
      "finishTime": 5.66,
      "dialogue": {
        "text": "我是设计师 (wǒ shì shè jì shī)。",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "opacity": 0,
      "startTime": 6.16
    }
  ]
}
```
