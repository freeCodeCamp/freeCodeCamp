---
id: 691740419e56e024c83ad7c9
title: Task 4
challengeType: 22
dashedName: task-4
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- (audio) part of the dialogue -->

# --description--

This is a review of the conversation between Wang Hua and Liu Ming.

# --instructions--

Write the following words in the correct spot:

`是的 (shì de)`, `你是 (nǐ shì)`, and `你呢 (nǐ ne)`.

# --fillInTheBlank--

## --sentence--

`我是中国人 (wǒ shì zhōng guó rén)。BLANK 设计师 (nǐ shì shè jì shī) 吗 (ma)？`

`BLANK，我是 (wǒ shì) UI 设计师 (shè jì shī)，BLANK？`

`我是 (wǒ shì) Web 开发者 (kāi fā zhě)。`

## --blanks--

`你是 (nǐ shì)`

### --feedback--

This phrase means "you are" and is used before a profession to ask about someone's job.

---

`是的 (shì de)`

### --feedback--

This word means "yes" and is used to confirm a statement. Don't forget to type 5 at the end for neutral tone syllables.

---

`你呢 (nǐ ne)`

### --feedback--

This phrase means "and you?" and is used to return a question back to the other person. Don't forget to type 5 at the end for neutral tone syllables.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      },
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
      "filename": "ZH_A1_greetings_and_introductions_dialogue.mp3",
      "startTime": 1,
      "startTimestamp": 15.12,
      "finishTimestamp": 25.09
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
      "finishTime": 4.29,
      "dialogue": {
        "text": "我是中国人 (wǒ shì zhōng guó rén)。你是设计师吗 (nǐ shì shè jì shī ma)？",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 4.8
    },
    {
      "character": "Liu Ming",
      "opacity": 1,
      "startTime": 4.8
    },
    {
      "character": "Liu Ming",
      "startTime": 5.31,
      "finishTime": 8.19,
      "dialogue": {
        "text": "是的 (shì de)，我是 (wǒ shì) UI 设计师 (shè jì shī)。你呢 (nǐ ne)？",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "opacity": 0,
      "startTime": 8.93
    },
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 8.93
    },
    {
      "character": "Wang Hua",
      "startTime": 9.66,
      "finishTime": 10.97,
      "dialogue": {
        "text": "我是 (wǒ shì) Web 开发者 (kāi fā zhě)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 11.47
    }
  ]
}
```
