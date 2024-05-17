---
id: 656bbfaf6cbc3f1418acca3c
title: Task 12
challengeType: 22
dashedName: task-12
---

<!--
AUDIO REFERENCE: 
Sarah: "Sure, Bob. What’s the problem?"
-->

# --description--

Listen to the audio and complete the sentence.

# --fillInTheBlank--

## --sentence--

`Sure, Bob. _ the problem?`

## --blanks--

`What's`

### --feedback--

`What`and `is` are in abbreviated form. Remember to capitalize `What`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "6.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 7.5,
      "finishTimestamp": 8.74
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
      "finishTime": 2.24,
      "dialogue": {
        "text": "Sure, Bob. What's the problem?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 2.74
    }
  ]
}
```
