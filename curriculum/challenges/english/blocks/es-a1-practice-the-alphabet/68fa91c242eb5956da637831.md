---
id: 68fa91c242eb5956da637831
title: Task 6
challengeType: 22
dashedName: task-6
lang: es
---

# --instructions--

Complete the sequence of letters below based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`i BLANK p`

## --blanks--

`ñ`

### --feedback--

This letter is unique to the Spanish alphabet.

# --explanation--

The sequence of letters in the audio is **`i`**, **`ñ`**, **`p`**.

# --scene--

```json
{
  "setup": {
    "background": "living-room.png",
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
      "filename": "ES_A1_alphabet_practice.mp3",
      "startTime": 1,
      "startTimestamp": 33.26,
      "finishTimestamp": 37.72
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
      "finishTime": 1.53,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.99,
      "finishTime": 3.87,
      "dialogue": {
        "text": "ñ",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.98,
      "finishTime": 5.46,
      "dialogue": {
        "text": "p",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 5.96
    }
  ]
}
```

