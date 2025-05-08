---
id: 67efd8debbd3992137adbf7f
title: Task 91
challengeType: 22
dashedName: task-91
---

<!-- (Audio) Brian: How's everything going on your end? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`How's everything going on your BLANK?`

## --blanks--

`end`

### --feedback--

Preceded by `on your`, this refers to a specific person's situation, side, or location.

# --explanation--

`On your end` is used to refer to someone's situation or what is happening with them, often in a conversation or work context. For example:

`Let me know if you need any help on your end.` – This means the speaker wants to know if the other person needs help on their work or situation.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-3.mp3",
      "startTime": 1,
      "startTimestamp": 5.56,
      "finishTimestamp": 7.28
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 2.72,
      "dialogue": {
        "text": "How's everything going on your end?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.22
    }
  ]
}
```
