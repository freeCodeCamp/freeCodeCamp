---
id: 68fa938257d3055aea0cb298
title: Task 9
challengeType: 22
dashedName: task-9
lang: es
---

# --instructions--

Complete the sequence of letters below based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`BLANK BLANK BLANK`

## --blanks--

`s`

### --feedback--

This letter is a consonant. It's followed by the letter `t` in the alphabet.

---

`w`

### --feedback--

This letter is a consonant. It's followed by the letter `x` in the alphabet.

---

`y`

### --feedback--

This letter is almost at the end of the Spanish alphabet.

# --explanation--

The sequence of letters in the audio is **`s`**, **`w`**, **`y`**.

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
      "startTimestamp": 51.28,
      "finishTimestamp": 55.59
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
      "finishTime": 1.71,
      "dialogue": {
        "text": "s",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.78,
      "finishTime": 3.65,
      "dialogue": {
        "text": "w",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.77,
      "finishTime": 5.31,
      "dialogue": {
        "text": "y",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 5.81
    }
  ]
}
```
