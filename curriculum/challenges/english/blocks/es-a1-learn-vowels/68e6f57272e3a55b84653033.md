---
id: 68e6f57272e3a55b84653033
title: Task 1
challengeType: 24
dashedName: task-1
lang: es
---

# --description--

Are you ready to start learning the vowels in Spanish?

Vowels are sounds made with an open mouth, without blocking the airflow. 

In Spanish, there are five vowels: **`a`**, **`e`**, **`i`**, **`o`**, **`u`**.

These are the vowels in uppercase: **`A`**, **`E`**, **`I`**, **`O`**, **`U`**.

Vowels are pronounced consistently, always using the same sounds. That is great because they are easy to learn and practice. Every time you see a vowel in a Spanish word, you'll know that it will be pronounced exactly the same as you learned it.

Now it's time to start training your ear.

Listen to the five vowels and practice repeating them until you feel more familiar with their sounds.

# --assignment--

I've listened to the vowels and practiced repeating them.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_vowels.mp3",
      "startTime": 1,
      "startTimestamp": 1.25,
      "finishTimestamp": 9.52
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 1.54,
      "dialogue": {
        "text": "a",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.92,
      "finishTime": 3.36,
      "dialogue": {
        "text": "e",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.92,
      "finishTime": 5.4,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 6.78,
      "finishTime": 7.34,
      "dialogue": {
        "text": "o",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 8.82,
      "finishTime": 9.27,
      "dialogue": {
        "text": "u",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 9.77
    }
  ]
}
```
