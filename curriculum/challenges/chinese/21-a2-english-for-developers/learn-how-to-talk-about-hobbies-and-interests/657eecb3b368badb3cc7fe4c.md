---
id: 657eecb3b368badb3cc7fe4c
title: Task 60
challengeType: 22
dashedName: task-60
---

<!-- (Audio) Sarah: I go to at least one convention every year. It's the best moment of the year for me. -->

# --description--

The expression `at least` is used when you want to say the smallest amount or number of something is okay or enough. It's like saying "no less than this amount".

For example, if you say, `I study English for at least 30 minutes every day`, it means you spend 30 minutes or more studying English daily, but never less than 30 minutes.

# --fillInTheBlank--

## --sentence--

`I go to _ _ one convention every year. It's the best moment of the year for me.`

## --blanks--

`at`

### --feedback--

This word is a preposition commonly used in expressions indicating a minimum amount.

---

`least`

### --feedback--

This word often follows the previous word to form a phrase meaning "the minimum amount or degree".

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-3.mp3",
      "startTime": 1,
      "startTimestamp": 30.46,
      "finishTimestamp": 34.22
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 4.76,
      "dialogue": {
        "text": "I go to at least one convention every year. It's the best moment of the year for me.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 5.26
    }
  ]
}
```
