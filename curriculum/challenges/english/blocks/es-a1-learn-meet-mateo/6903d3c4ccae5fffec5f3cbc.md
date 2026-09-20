---
id: 6903d3c4ccae5fffec5f3cbc
title: Task 4
challengeType: 19
dashedName: task-4
lang: es
---

<!-- (Audio) Mateo: Soy puertorriqueño. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Mateo's nationality?

## --answers--

`Chileno`

### --feedback--

This option refers to someone from Chile.

---

`Peruano`

### --feedback--

This word describes a person from Peru.

---

`Puertorriqueño`

---

`Colombiana`

### --feedback--

This refers to a woman from Colombia, and the ending `-a` indicates the feminine form, which does not match Mateo.

## --video-solution--

3

# --explanation--

`Soy` ("I am") comes from the verb `ser` and is used to express identity, nationality, or profession. For example:

- `Soy chilena.` – I'm Chilean. (feminine)

- `Soy chileno.` – I'm Chilean. (masculine)

- `Soy puertorriqueña` - I'm Puerto Rican. (feminine)

- `Soy puertorriqueño` - I'm Puerto Rican. (masculine)

- `Soy canadiense.` – I'm Canadian. (neutral)

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
      "startTimestamp": 5.81,
      "finishTimestamp": 7.13
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
      "finishTime": 2.32,
      "dialogue": {
        "text": "Soy puertorriqueño.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 2.82
    }
  ]
}
```
