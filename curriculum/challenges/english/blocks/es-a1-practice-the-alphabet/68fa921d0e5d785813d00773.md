---
id: 68fa921d0e5d785813d00773
title: Task 7
challengeType: 19
dashedName: task-7
lang: es
---

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is the **first** letter pronounced in the audio?

## --answers--

`o`

---

`j`

### --feedback--

This is the second letter pronounced in the audio, not the first one.

---

`n`

### --feedback--

This is the third letter pronounced in the audio, not the first one.

---

`u`

### --feedback--

This is a different vowel. It's not pronounced in the audio.

## --video-solution--

1

# --explanation--

The sequence of letters in the audio is: **`o`**, **`j`**, **`n`**.

The first letter is **`o`**. Therefore, this is the correct answer.

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
      "startTimestamp": 39.31,
      "finishTimestamp": 43.74
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
      "finishTime": 1.41,
      "dialogue": {
        "text": "o",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.82,
      "finishTime": 3.58,
      "dialogue": {
        "text": "j",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.75,
      "finishTime": 5.43,
      "dialogue": {
        "text": "n",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 5.93
    }
  ]
}
```
