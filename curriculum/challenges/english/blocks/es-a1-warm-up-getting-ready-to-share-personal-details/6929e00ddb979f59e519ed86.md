---
id: 6929e00ddb979f59e519ed86
title: Task 6
challengeType: 19
dashedName: task-6
lang: es
---

<!-- (Audio) Luna: Nacionalidad -->

# --description--

In this task, you will hear Luna say the Spanish word for "nationality". This word is often used when filling out forms or when sharing where you're from.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What word does Luna use to say "nationality"?

## --answers--

`Nacimiento`

### --feedback--

This word means "birth", not "nationality".

---

`Nacional`

### --feedback--

This means "national", but it's not the word Luna says.

---

`Nacionalidad`

---

`Nación`

### --feedback--

This means "nation", which is related but not the word in the audio.

## --video-solution--

3

# --explanation--

The phrase `Nacionalidad` means "nationality".

# --scene--

```json
{
  "setup": {
    "background": "company2-roof.png",
    "characters": [
      {
        "character": "Luna",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_luna_personal_data_form.mp3",
      "startTime": 1,
      "startTimestamp": 9.95,
      "finishTimestamp": 11.22
    }
  },
  "commands": [
    {
      "character": "Luna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Luna",
      "startTime": 1,
      "finishTime": 2.27,
      "dialogue": {
        "text": "Nacionalidad.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 2.77
    }
  ]
}
```
