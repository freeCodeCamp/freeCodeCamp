---
id: 690a2ca5e5cfb078be515fc7
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (Audio) Julieta: Tengo 36 años. -->

# --description--

You learned that numbers in Spanish from 21 to 29 start with `veinti-`, followed by the corresponding number. Now Julieta will mention an age in the thirties.

`Treinta años` - Thirty years old.

For numbers in the thirties, you say `treinta y` followed by the unit number. For example:

- `treinta y uno años` – Thirty-one years old.

- `treinta y dos años` – Thirty-two years old.


# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How old is Julieta?

## --answers--

`Treinta y seis años`

---

`Veinticinco años`

### --feedback--

This number does not match what Julieta said.

---

`Veintinueve años`

### --feedback--

Julieta is older than this age.

---

`Cuarenta años`

### --feedback--

This is not the age that Julieta mentions.

## --video-solution--

1

# --explanation--

`Tengo treinta y seis años` means Julieta is 36 years old.

Remember that the word `años` has the letter `ñ` (eñe).

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_meet_julieta.mp3",
      "startTime": 1,
      "startTimestamp": 7.39,
      "finishTimestamp": 9.16
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
      "finishTime": 2.77,
      "dialogue": {
        "text": "Tengo treinta y seis años.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 3.27
    }
  ]
}
```
