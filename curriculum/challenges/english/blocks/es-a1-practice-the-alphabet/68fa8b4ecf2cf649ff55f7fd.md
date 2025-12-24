---
id: 68fa8b4ecf2cf649ff55f7fd
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is the **second** letter pronounced in this audio?

## --answers--

`b`

### --feedback--

The letter `b` has a different sound.

---

`x`

---

`z`

### --feedback--

The letter `z` has a different sound.

---

`m`

### --feedback--

The letter `m` has a different sound.

## --video-solution--

2

# --explanation--

These are the three letters pronounced in the audio: `b`, `x`, `z`.

The letter `x` is the second one. Therefore, `x` is the correct answer.

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
      "startTimestamp": 8,
      "finishTimestamp": 12.96
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
        "text": "b",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.26,
      "finishTime": 4.05,
      "dialogue": {
        "text": "x",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.21,
      "finishTime": 5.96,
      "dialogue": {
        "text": "z",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.46
    }
  ]
}
```
