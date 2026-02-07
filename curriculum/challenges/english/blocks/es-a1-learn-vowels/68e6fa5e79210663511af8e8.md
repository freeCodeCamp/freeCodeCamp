---
id: 68e6fa5e79210663511af8e8
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---

# --description--

In this audio, you will listen to the sound of a vowel.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which of the following vowels do you hear in the audio?

## --answers--

The vowel `a`

### --feedback--

The vowel `a` has a different sound.

---

The vowel `e`

---

The vowel `i`

### --feedback--

The vowel `i` has a different sound.

---

The vowel `o`

### --feedback--

The vowel `o` has a different sound.

## --video-solution--

2

# --explanation--

The vowel that you can hear in the audio is `e`.

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
      "filename": "ES_A1_vowels.mp3",
      "startTime": 1,
      "startTimestamp": 3.17,
      "finishTimestamp": 3.61
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
        "text": "e",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 1.94
    }
  ]
}
```

