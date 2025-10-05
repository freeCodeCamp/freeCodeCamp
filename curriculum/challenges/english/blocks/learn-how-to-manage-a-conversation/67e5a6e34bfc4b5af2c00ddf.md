---
id: 67e5a6e34bfc4b5af2c00ddf
title: Task 51
challengeType: 22
dashedName: task-51
---

<!-- (Audio) Jessica: Well, we've discovered a critical bug that might affect the user interface. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Well, we've discovered a BLANK bug that might BLANK the user interface.`

## --blanks--

`critical`

### --feedback--

This means very serious or important. It is often used when something needs immediate attention.

---

`affect`

### --feedback--

This means to change or influence something. It often describes how one thing causes a change in another.

# --explanation--

`Critical` means extremely important or serious. For example:

`We have a critical deadline tomorrow.` – This means the deadline is very important and cannot be missed.

`To affect` means to have an influence on something or cause a change. For example:

`The new policy may affect employee performance.` – This means the policy might change how employees perform.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-2.mp3",
      "startTime": 1,
      "startTimestamp": 10.12,
      "finishTimestamp": 13.52
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 2.72,
      "dialogue": {
        "text": "Well, we've discovered a critical bug",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "startTime": 2.72,
      "finishTime": 4.4,
      "dialogue": {
        "text": "that might affect the user interface.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 4.9
    }
  ]
}
```
