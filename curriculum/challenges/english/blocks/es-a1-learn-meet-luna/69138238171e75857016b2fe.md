---
id: 69138238171e75857016b2fe
title: Task 4
challengeType: 22
dashedName: task-4
lang: es
---

<!-- (Audio) Luna: Soy científica de datos. -->

# --description--

Luna is mentioning her profession in Spanish using the following structure:

`Soy` + profession.

The verb `ser` is one of the most important verbs in Spanish. It is used to express **identity**, **profession**, and/or **nationality**. For example:

- `Soy amable.` - I'm kind.

- `Soy mexicana.` - I'm Mexican.

- `Soy profesor.` - I'm a teacher.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK científica de datos.`

## --blanks--

`Soy`

### --feedback--

This verb is used when talking about profession or identity.

# --explanation--
 
`Soy` is the first-person singular form of the verb `ser`, which is used when talking about identity, profession or nationality. 

`Soy científica de datos` means the person works as a data scientist. Here are some more examples:

- `Soy ingeniero de software.` - I'm a software engineer. (masculine)

- `Soy uruguaya.` - I'm Uruguayan. (feminine)

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
      "startTimestamp": 3.73,
      "finishTimestamp": 5.48
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
      "finishTime": 2.75,
      "dialogue": {
        "text": "Soy científica de datos.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 3.25
    }
  ]
}
```
