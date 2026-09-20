---
id: 68fa92e5cf564859a1fa89e7
title: Task 8
challengeType: 22
dashedName: task-8
lang: es
---

# --instructions--

Complete the sequence of letters below based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`BLANK v BLANK`

## --blanks--

`k`

### --feedback--

This letter is a consonant located between the letters `j` and `l` in the alphabet.

---

`u`

### --feedback--

This letter is a vowel located between the letters `t` and `v` in the alphabet.

# --explanation--

The sequence of letters in the audio is **`k`**, **`v`**, **`u`**.

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
      "startTimestamp": 45.17,
      "finishTimestamp": 49.72
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
      "finishTime": 1.67,
      "dialogue": {
        "text": "k",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.02,
      "finishTime": 3.6,
      "dialogue": {
        "text": "v",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.08,
      "finishTime": 5.55,
      "dialogue": {
        "text": "u",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.05
    }
  ]
}
```
