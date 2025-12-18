---
id: 6923644f41365a8fe354d904
title: Task 11
challengeType: 22
dashedName: task-11
lang: es
---

<!-- (AUDIO) Camila: Doce, Once, Dieciocho, Veinte -->

# --description--

Camila is practicing numbers in a random order.

# --instructions--

Listen to the audio and complete the sequence of numbers below.

# --fillInTheBlank--

## --sentence--

`Doce - BLANK - Dieciocho - BLANK`

## --blanks--

`Once`

### --feedback--

This is the number 11.

---

`Veinte`

### --feedback--

This is the number 20.

# --explanation--

The sequence of numbers in the audio is: `Doce - Once - Dieciocho - Veinte`.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Camila",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basic_personal_details_numbers_mixed.mp3",
      "startTime": 1,
      "startTimestamp": 9.8,
      "finishTimestamp": 15.35
    }
  },
  "commands": [
    {
      "character": "Camila",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Camila",
      "startTime": 1,
      "finishTime": 1.86,
      "dialogue": {
        "text": "Doce",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 2.3,
      "finishTime": 3.16,
      "dialogue": {
        "text": "Once",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 3.75,
      "finishTime": 5.06,
      "dialogue": {
        "text": "Dieciocho",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 5.71,
      "finishTime": 6.55,
      "dialogue": {
        "text": "Veinte",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 7.05
    }
  ]
}
```
