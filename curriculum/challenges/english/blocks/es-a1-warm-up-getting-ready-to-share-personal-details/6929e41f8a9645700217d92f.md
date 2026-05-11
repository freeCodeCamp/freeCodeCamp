---
id: 6929e41f8a9645700217d92f
title: Task 8
challengeType: 19
dashedName: task-8
lang: es
---

<!-- (Audio) Luna: Correo electrónico. -->

# --description--

In this task, you will hear Luna say the Spanish phrase for "email". This is a common term used in personal and professional communication.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What word does Luna use to say "email"?

## --answers--

`Correo postal`

### --feedback--

This means "postal mail".

---

`Número de teléfono`

### --feedback--

This means "phone number".

---

`Correo electrónico`

---

`Dirección`

### --feedback--

This means "address".

## --video-solution--

3

# --explanation--

The phrase `Correo electrónico` means "email".

While `correo` means "mail", adding `electrónico` specifies it's digital.  
 
# --scene--

```json
{
  "setup": {
    "background": "company2-roof.png",
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
      "filename": "ES_A1_luna_personal_data_form.mp3",
      "startTime": 1,
      "startTimestamp": 17.51,
      "finishTimestamp": 18.83
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
      "finishTime": 2.32,
      "dialogue": {
        "text": "Correo electrónico.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 2.82
    }
  ]
}
```
