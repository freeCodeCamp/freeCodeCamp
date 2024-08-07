---
id: 657e5fa49b69deff5e9bff8e
title: Task 104
challengeType: 22
dashedName: task-104
---

<!-- (audio) James: Absolutely. If you see any security breaches or incidents, you have to report them immediately. Reporting helps us address issues effectively. -->

# --description--

Listen to the audio to complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Absolutely. If you see any security breaches or incidents, you BLANK BLANK report them BLANK.`

## --blanks--

`have`

### --feedback--

Shows a requirement.

---

`to`

### --feedback--

Used with the previous word to express obligation.

---

`immediately`

### --feedback--

Means right away, without delay.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "James",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 43.56,
      "finishTimestamp": 49.64
    }
  },
  "commands": [
    {
      "character": "James",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "James",
      "startTime": 1,
      "finishTime": 7.08,
      "dialogue": {
        "text": "Absolutely. If you see any security breaches or incidents, you have to report them immediately.",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 7.58
    }
  ]
}
```
