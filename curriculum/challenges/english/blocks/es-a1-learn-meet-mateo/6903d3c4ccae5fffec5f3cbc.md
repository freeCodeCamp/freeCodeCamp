---
id: 6903d3c4ccae5fffec5f3cbc
title: Task 3
challengeType: 19
dashedName: task-3
---

<!-- (Audio) Mateo: Soy puertorriqueño. -->

# --description--

Mateo shared his nationality in Spanish.

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

The word `soy` (I am) comes from the verb `ser` and is used to express **identity, nationality, or profession**. For example:

- `Soy puertorriqueño` - I am Puerto Rican (masculine).

- `Soy puertorriqueña` - I am Puerto Rican (feminine).

- `Soy mexicano.` – I am Mexican (masculine).

- `Soy mexicana.` – I am Mexican (feminine).

- `Soy chileno.` – I am Chilean (masculine).

- `Soy chilena.` – I am Chilean (feminine).


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
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_2.2.mp3",
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
