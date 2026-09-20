---
id: 699cc94ffc3ee628dfae74bf
title: Task 31
challengeType: 22
dashedName: task-31
lang: es
---
<!-- (Audio) Mateo: Es m-a-t-e-o punto d-e-l-g-a-d-o arroba s-a-n-j-u-a-n punto p-r. -->

# --description--

`Es` comes from the verb `ser` and is used to identify or present something. For example:

- `Es mi número.` - It is my number.
  
- `Es mi correo.` - It is my email. 

When spelling an email address, certain symbols are said aloud:

`Punto` is used for the symbol `.` For example: 

`ana.lopez` is read as `ana punto lopez`.

`Arroba` is used for the symbol `@`. For example: 

`ana.lopez@ejemplo.com` is read as `ana punto lopez arroba ejemplo punto com`.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK m a t e o BLANK d e l g a d o BLANK s a n j u a n BLANK p r.`

## --blanks--

`Es`

### --feedback--

This form of `ser` is used to present or identify something.

---

`punto`

### --feedback--

This word is used when saying the symbol `.` in an email address.

---

`arroba`

### --feedback--

This word is used when saying the symbol `@`.

---

`punto`

### --feedback--

This word appears again before the final letters `p r`.

# --explanation--

The complete sentence is:

`Es m-a-t-e-o punto d-e-l-g-a-d-o arroba s-a-n-j-u-a-n punto p-r.`

`Es` introduces the information.

`Punto` represents the symbol `.`

`Arroba` represents the symbol `@`

These words are commonly used when spelling an email address aloud.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
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
      "filename": "ES_A1_mateo_email_dialogue_with_camila.mp3",
      "startTime": 1,
      "startTimestamp": 17.02,
      "finishTimestamp": 35.09
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
      "finishTime": 19.07,
      "dialogue": {
        "text": "Es m-a-t-e-o punto d-e-l-g-a-d-o arroba s-a-n-j-u-a-n punto p-r.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 19.57
    }
  ]
}
```

