---
id: 699eff4a6eefcef5c1d1059a
title: Task 24
challengeType: 22
dashedName: task-24
lang: es
---
<!-- (Audio) Basti: El dominio es q-u-e-t-z-a-l punto g-t. -->

# --description--

The word `dominio` refers to the main part of a web address, usually the section that comes after the `@` in an email or after `www` in a website.

It is commonly used when giving or confirming email addresses and URLs. For example:

`El dominio es gmail punto com.` – The domain is gmail.com.

`¿Cuál es el dominio?` – What is the domain?

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`El BLANK es q-u-e-t-z-a-l punto g-t.`

## --blanks--

`dominio`

### --feedback--

This noun refers to the main part of a web or email address.

# --explanation--

`Dominio` is a noun used to name the domain portion of an email address or website.

It commonly appears when people spell or confirm digital contact information.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 54.95,
      "finishTimestamp": 64.01
    }
  },
  "commands": [
    {
      "character": "Sebastián",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sebastián",
      "startTime": 1,
      "finishTime": 10.06,
      "dialogue": {
        "text": "El dominio es q-u-e-t-z-a-l punto g-t.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 10.56
    }
  ]
}
```
