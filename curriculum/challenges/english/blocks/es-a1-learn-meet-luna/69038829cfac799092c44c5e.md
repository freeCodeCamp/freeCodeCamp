---
id: 69038829cfac799092c44c5e
title: Task 2
challengeType: 22
dashedName: task-2
lang: es
---

<!-- (Audio) Luna: Me llamo Luna. -->

# --description--

In this task, you'll hear how Luna introduces herself in Spanish using the following structure:

`Me llamo` + name.

This is a common way to say your name in Spanish.  

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK BLANK Luna.`

## --blanks--

`Me`

### --feedback--

This is the reflexive pronoun used when someone says their name in Spanish.

---

`llamo`

### --feedback--

This is the first-person form of the verb `llamar`, used when talking about your own name.

# --explanation--

`Me` is a first person reflexive pronoun. 

`Llamo` is the first person conjugation of the verb `llamar`.

Together, `Me llamo` is how you say your name in Spanish. For example:

`Me llamo Luna` means that the speaker's name is Luna.

Remember, the structure uses a **reflexive pronoun** (`me`) and the **verb** `llamar` in the first person form `llamo`.

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
      "startTimestamp": 2.4,
      "finishTimestamp": 3.49
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
      "finishTime": 2.09,
      "dialogue": {
        "text": "Me llamo Luna.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 2.59
    }
  ]
}
```
