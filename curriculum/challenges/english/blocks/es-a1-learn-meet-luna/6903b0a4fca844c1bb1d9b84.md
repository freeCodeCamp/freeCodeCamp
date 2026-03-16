---
id: 6903b0a4fca844c1bb1d9b84
title: Task 7
challengeType: 19
dashedName: task-7
lang: es
---

<!-- (audio) Luna: Tengo 28 años. -->

# --description--

The following is the structure to express age in Spanish:

`Tengo` + number in words + `años`.

In Spanish, the verb `tener` ("to have") is used to talk about age. For example:

`Tengo veinte años.` - I'm twenty years old.

The following numbers from 21 to 24 start with `veinti-`, followed by the corresponding number. The only exception is 21, which changes to `Veintiún` when it's followed by the word `años`. For example:

- `Veintiún años.` – Twenty-one years old.

- `Veintidós años.` – Twenty-two years old.

- `Veintitrés años.` – Twenty-three years old.

- `Veinticuatro años.` – Twenty-four years old.


# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How old is Luna?

## --answers--

`Veintiocho años`

---

`Veinticinco años`

### --feedback--

The number Luna says is a bit higher than twenty-five.

---

`Treinta años`

### --feedback--

That's too high. The number Luna says is in the twenties.

---

`Dieciocho años`

### --feedback--

That's much younger than what Luna said.

## --video-solution--

1

# --explanation--

In Spanish, the verb `tener` ("to have") is used to talk about age. For example:

- `Tengo veintiocho años.` - I'm twenty-eight years old.

- `Tengo quince años.` – I'm fifteen years old.

- `Tengo cuarenta años.` – I'm forty years old.

The word `años` means "years". Notice the letter `ñ`.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
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
      "filename": "ES_A1_spanish_meet_luna.mp3",
      "startTime": 1,
      "startTimestamp": 6.87,
      "finishTimestamp": 8.59
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
      "finishTime": 2.72,
      "dialogue": {
        "text": "Tengo veintiocho años.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 3.22
    }
  ]
}
```
