---
id: 68e6fb98b9549d66fe846579
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

# --description--

In this audio, you will listen to a sequence of three vowels.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true or false: The audio contains the vowel `o`.

## --answers--

True

---

False

### --feedback--

Listen closely to the three sounds in the audio. Particularly, the first one.

## --video-solution--

1

# --explanation--

The audio mentions three vowels: **`o`**, **`i`**, **`u`**.

The vowel **`o`** is the first vowel that you can hear in the audio.

This vowel is found in the word `Hola`, which is a common greeting in Spanish.

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
      "filename": "ES_A1_vowels_oiu.mp3",
      "startTime": 1,
      "startTimestamp": 0.72,
      "finishTimestamp": 4.12
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
      "finishTime": 1.47,
      "dialogue": {
        "text": "o",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.44,
      "finishTime": 2.84,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.91,
      "finishTime": 4.4,
      "dialogue": {
        "text": "u",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.9
    }
  ]
}
```
