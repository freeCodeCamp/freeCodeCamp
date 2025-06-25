---
id: 6840ad915ebc0fbbb9daf0b4
title: Task 4
challengeType: 22
dashedName: task-4
---

<!-- (Audio) Marisol: Hola Mateo, estoy bien, gracias. Un poco cansada. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Hola Mateo, BLANK BLANK, gracias. Un poco cansada.`

## --blanks--

`estoy`

### --feedback--

This is the first person singular of the verb "estar" and means "I am".

---

`bien`

### --feedback--

This word means "well" and is often used to describe how someone feels.

# --explanation--

`estoy` comes from the verb `estar` and means "I am". It's used to talk about temporary states, like emotions or health. Example:

`Estoy cansado.` – I am tired.

`bien` means "well" and is commonly used in greetings.Example:

`Estoy bien, gracias.` – I am well, thank you.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Marisol",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A2_2.1.mp3",
      "startTime": 1,
      "startTimestamp": 2.8,
      "finishTimestamp": 6.98
    }
  },
  "commands": [
    {
      "character": "Marisol",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Marisol",
      "startTime": 1,
      "finishTime": 3.74,
      "dialogue": {
        "text": "Hola Mateo, estoy bien, gracias".,
        "align": "center"
      }
    },
    {
      "character": "Marisol",
      "startTime": 3.8,
      "finishTime": 5.18,
      "dialogue": {
        "text": "Un poco cansada,",
        "align": "center"
      }
    },
    {
      "character": "Marisol",
      "opacity": 0,
      "startTime": 5.68
    }
  ]
}
```
