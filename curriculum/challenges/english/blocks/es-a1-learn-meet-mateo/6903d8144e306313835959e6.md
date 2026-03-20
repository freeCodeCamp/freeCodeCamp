---
id: 6903d8144e306313835959e6
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (Audio) Mateo: Tengo 25 años. -->

# --description--

Mateo is mentioning how old he is in Spanish using the following structure, with the verb `tener` ("to have"):

`Tengo` + number in words + `años`.

Remember, numbers in Spanish from 21 to 29 start with `veinti-`, followed by the corresponding number. For example:

25 is `veinticinco`. This results from removing the `e` and adding `i` before the number `cinco`.

Numbers from 1 to 9 in Spanish are:

| Number | Spanish Word |
| :---: | :---: |
| 1 | `uno` |
| 2 | `dos` |
| 3 | `tres` |
| 4 | `cuatro` |
| 5 | `cinco` |
| 6 | `seis` |
| 7 | `siete` |
| 8 | `ocho` |
| 9 | `nueve` |

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How old is Mateo?

## --answers--

`Veinticinco años`

---

`Treinta años`

### --feedback--

This number does not match what Mateo said about his age.

---

`Veinte años`

### --feedback--

This age is lower than what Mateo indicated.

---

`Veintiocho años`

### --feedback--

This number sounds similar but is not the exact one Mateo said.

## --video-solution--

1

# --explanation--

The phrase `Tengo veinticinco años` means Mateo is 25 years old.

Remember that the letter `ñ` in `años` has a distinct sound.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_mateo.mp3",
      "startTime": 1,
      "startTimestamp": 7.65,
      "finishTimestamp": 9.27
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 2.62,
      "dialogue": {
        "text": "Tengo veinticinco años.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.12
    }
  ]
}
```
