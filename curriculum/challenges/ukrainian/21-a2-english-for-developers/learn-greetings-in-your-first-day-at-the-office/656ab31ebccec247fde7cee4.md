---
id: 656ab31ebccec247fde7cee4
title: Завдання 63
challengeType: 22
dashedName: task-63
---

<!--
AUDIO REFERENCE:
Tom: Oh, awesome. My computer and drawing tablet are great, too. 
-->

# --description--

Люди використовують `awesome`, коли говорять про щось, що їм дійсно подобається. Це те ж саме, що й `very good!`. Це неофіційний спосіб показати згоду або захоплення.

# --fillInTheBlank--

## --sentence--

`_. My computer and drawing tablet are great, too.`

## --blanks--

`Awesome`

### --feedback--

Уважно послухайте, щоб почути слово, яке означає `very good` або `I really like it.`

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": { "x": 50, "y": 15, "z": 1.2 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 32.3,
      "finishTimestamp": 36
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 4.25,
      "dialogue": {
        "text": "Awesome. My computer and drawing tablet are great too.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.75
    }
  ]
}
```
