---
id: 68fa8c06a9cb054b5b1fe121
title: Task 3
challengeType: 22
dashedName: task-3
lang: es
---

# --instructions--

Write the missing letter below based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`BLANK h l`

## --blanks--

`c`

### --feedback--

This letter is a consonant. It's the third letter of the Spanish alphabet.

# --explanation--

The sequence of letters in the audio is **`c`**, **`h`**, **`l`**. Therefore, the missing letter is `c`.

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
      "startTimestamp": 14.35,
      "finishTimestamp": 19.2
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
      "finishTime": 1.65,
      "dialogue": {
        "text": "c",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.03,
      "finishTime": 3.84,
      "dialogue": {
        "text": "h",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.22,
      "finishTime": 5.85,
      "dialogue": {
        "text": "l",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.35
    }
  ]
}
```
