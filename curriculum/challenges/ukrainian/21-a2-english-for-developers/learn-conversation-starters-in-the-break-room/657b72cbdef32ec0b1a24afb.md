---
id: 657b72cbdef32ec0b1a24afb
title: Завдання 29
challengeType: 19
dashedName: task-29
---

<!-- (audio) Tom: Wow! Electric or acoustic? Sophie: Electric, for sure! -->

# --description--

Можна виокремити два види гітар: `electric` та `acoustic`. Для `electric guitars` зазвичай потрібен підсилювач, щоб звук був гучнішим. Для `acoustic guitars` не потрібне додаткове обладнання.

# --question--

## --text--

Послухайте діалог та виберіть вид гітари, якому надає перевагу Софі.

## --answers--

Електрична гітара

---

Акустична гітара

### --feedback--

Софі чітко пояснює, який вид гітари їй подобається. Пам’ятайте, цій гітарі потрібен підсилювач.

## --video-solution--

1

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Tom",
        "position": { "x": 50, "y": 15, "z": 1.2 },
        "opacity": 0
      },
      {
        "character": "Sophie",
        "position": { "x": 50, "y": 0, "z": 1.4 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.4,
      "finishTimestamp": 19.52
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
      "startTime": 1.1,
      "finishTime": 3.1,
      "dialogue": {
        "text": "Wow! Electric or acoustic?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 3.2
    },
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 3.3
    },
    {
      "character": "Sophie",
      "startTime": 3.3,
      "finishTime": 5.12,
      "dialogue": {
        "text": "Electric for sure.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.62
    }
  ]
}
```
