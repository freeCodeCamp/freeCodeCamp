---
id: 68c58b24ac7964e7776fea16
title: Task 10
challengeType: 19
dashedName: task-10
lang: es
---
<!-- (Audio) Esteban: desarrollador -->
# --description--

Esteban is mentioning a profession. He uses a common word for someone who builds software.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What profession is Esteban mentioning?

## --answers--

`Desarrollador`

---

`Diseñador`

### --feedback--

This means "designer", not the profession mentioned in the audio.

---

`Ingeniero`

### --feedback--

This means "engineer", which is a different profession.

---

`Programador`

### --feedback--

This means "programmer", which is similar but not the exact word used.

## --video-solution--

1

# --explanation--

`Desarrollador` means "developer". It refers to someone who builds or creates software, websites, or applications. For example: 

`Soy desarrollador de software.` – I am a software developer.

# --scene--

```json
{
  "setup": {
    "background": "company3-boardmeeting.png",
    "characters": [
      {
        "character": "Esteban",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_greetings_in_the_evening.mp3",
      "startTime": 1,
      "startTimestamp": 3.9,
      "finishTimestamp": 4.97
    }
  },
  "commands": [
    {
      "character": "Esteban",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Esteban",
      "startTime": 1,
      "finishTime": 2.07,
      "dialogue": {
        "text": "Desarrollador.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.57
    }
  ]
}
```
