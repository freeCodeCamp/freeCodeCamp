---
id: 68fa8eedb588aa4fb0d3f603
title: Task 5
challengeType: 22
dashedName: task-5
lang: es
---

# --instructions--

Complete the sequence of letters below based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`f BLANK BLANK`

## --blanks--

`q`

### --feedback--

This letter is often followed by the letter `u` in Spanish.

---

`r`

### --feedback--

This letter is a consonant. It's commonly referred to as `erre`.

# --explanation--

The sequence of letters in the audio is **`f`**, **`q`**, **`r`**.

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
      "startTimestamp": 27.16,
      "finishTimestamp": 32
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
      "finishTime": 1.83,
      "dialogue": {
        "text": "f",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.08,
      "finishTime": 3.58,
      "dialogue": {
        "text": "q",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.05,
      "finishTime": 5.84,
      "dialogue": {
        "text": "r",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.34
    }
  ]
}
```
