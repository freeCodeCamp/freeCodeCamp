---
id: 6913abe637aaab0eb8926231
title: Task 8
challengeType: 22
dashedName: task-8
lang: es
---

<!-- (Audio) Luna: Tengo veintiocho años. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK veintiocho años.`

## --blanks--

`Tengo`

### --feedback--

This verb is used to express age in Spanish.

# --explanation--

The verb `tener` means "to have". Its first-person singular form is `tengo`.

To express your age you should say `tengo` + number + `años`. For example:

- `Tengo veinte años` – I'm 20 years old.

- `Tengo veintidós años` – I'm 22 years old.  

So, when someone says `Tengo veintiocho años`, that means that the person is 28 years old.

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
        "text": "Tengo 28 años.",
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

