---
id: 68e7064f26de457d959ce43a
title: Task 9
challengeType: 22
dashedName: task-9
lang: es
---

# --description--

In this audio, you will listen to a sequence of vowels.

# --instructions--

Listen to the audio and write the sequence of vowels that you can hear. Write them consecutively in the blank provided below.

# --fillInTheBlank--

## --sentence--

`BLANK`

## --blanks--

`aei`

### --feedback--

This sequence contains the first three Spanish vowels.

# --explanation--

The vowel `a` is the first sound in the audio.

The vowel `e` is the second sound in the audio.

The vowel `i` is the third sound in the audio.

Therefore, the correct sequence is **`aei`**.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_vowels.mp3",
      "startTime": 1,
      "startTimestamp": 1.25,
      "finishTimestamp": 5.65
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 1.54,
      "dialogue": {
        "text": "a",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.92,
      "finishTime": 3.36,
      "dialogue": {
        "text": "e",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.92,
      "finishTime": 5.4,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 5.9
    }
  ]
}
```
