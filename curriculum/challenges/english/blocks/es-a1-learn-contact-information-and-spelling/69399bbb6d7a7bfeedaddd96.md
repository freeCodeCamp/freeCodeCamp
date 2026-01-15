---
id: 69399bbb6d7a7bfeedaddd96
title: Task 9
challengeType: 22
dashedName: task-9
lang: es
---

<!-- (Audio) Basti: Me llamo Sebastián Ávila Gómez. -->

# --description--

In this task, Basti introduces himself using a common Spanish phrase. This structure is widely used when giving your name in both formal and informal settings.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK Sebastián Ávila Gómez.`

## --blanks--

`Me llamo`

### --feedback--

This is the standard way to say "My name is" in Spanish. Make sure to include both words.

# --explanation--

`Me llamo` means "I call myself" and is used to introduce your name in Spanish.

It combines the **reflexive pronoun** `me` (myself) with the **verb** `llamar` (to call). For example:

- `Me llamo Ana.` – My name is Ana.

- `Me llamo Juan Pérez.` – My name is Juan Pérez.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 3.00,
      "finishTimestamp": 6.06
    }
  },
  "commands": [
    {
      "character": "Sebastián",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sebastián",
      "startTime": 1,
      "finishTime": 3.93,
      "dialogue": {
        "text": "Me llamo Sebastián Ávila Gómez.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 4.43
    }
  ]
}
```
