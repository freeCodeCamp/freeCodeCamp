---
id: 6939b0e1fac80c2b4fdf8ded
title: Task 13
challengeType: 22
dashedName: task-13
lang: es
---

<!-- (Audio) Basti: Se escribe b-a-s-t-i. -->

# --description--

In this task, Basti spells out his nickname letter by letter.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Se escribe BLANK - a - s - BLANK - BLANK.`

## --blanks--

`b`

### --feedback--

This is the first letter Basti uses to start spelling his nickname.

---

`t`

### --feedback--

This letter comes after the "s" in "Basti."

---

`i`

### --feedback--

This is the final letter in "Basti". Listen for the vowel sound at the end.

# --explanation--

Basti spells his nickname as `b-a-s-t-i`.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 22.6,
      "finishTimestamp": 26.74
    }
  },
  "commands": [
    {
      "character": "Sebastián",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sebastián",
      "startTime": 1,
      "finishTime": 5.14,
      "dialogue": {
        "text": "Se escribe b-a-s-t-i.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 5.64
    }
  ]
}
```
