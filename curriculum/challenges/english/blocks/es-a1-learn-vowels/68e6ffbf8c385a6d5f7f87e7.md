---
id: 68e6ffbf8c385a6d5f7f87e7
title: Task 7
challengeType: 22
dashedName: task-7
lang: es
---

# --description--

In this audio, you will listen to a sequence of three vowels.

# --instructions--

Listen to the audio and complete the sequence of vowels.

# --fillInTheBlank--

## --sentence--

`BLANK   a   BLANK`

## --blanks--

`u`

### --feedback--

The vowel `u` has a different sound.

---

`e`

### --feedback--

The vowel `e` has a different sound.

# --explanation--

The sequence of vowels that you can hear in the audio is **`u`**, **`a`**, **`e`**.

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
      "filename": "ES_A1_vowels_uae.mp3",
      "startTime": 1,
      "startTimestamp": 0.51,
      "finishTimestamp": 3.97
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
      "finishTime": 1.44,
      "dialogue": {
        "text": "u",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.52,
      "finishTime": 3,
      "dialogue": {
        "text": "a",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.07,
      "finishTime": 4.46,
      "dialogue": {
        "text": "e",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.96
    }
  ]
}
```

