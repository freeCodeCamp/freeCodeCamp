---
id: 68fa88e167c0503ec7cd58e6
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

# --instructions--

Listen to the three letters pronounced in the audio and answer the question below.

# --questions--

## --text--

Is it true or false: The letter `e` is in the audio.

## --answers--

True

---

False

### --feedback--

Listen to the audio one more time. The letter `e` is pronounced in the sequence.

## --video-solution--

1

# --explanation--

Three letters are pronounced in the audio: `a`, `d`, `e`.

The letter `e` is the third one. Therefore, this is true.

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
      "startTimestamp": 0.82,
      "finishTimestamp": 6.08
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
        "text": "a",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.42,
      "finishTime": 3.99,
      "dialogue": {
        "text": "d",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.76,
      "finishTime": 6.26,
      "dialogue": {
        "text": "e",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.76
    }
  ]
}
```
