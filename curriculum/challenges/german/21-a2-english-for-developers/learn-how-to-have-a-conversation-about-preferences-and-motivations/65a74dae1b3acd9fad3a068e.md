---
id: 65a74dae1b3acd9fad3a068e
title: Task 128
challengeType: 22
dashedName: task-128
---

<!-- (Audio) Tom: For me, I like the idea of practicing my skills and getting recognition for my contributions. -->

# --description--

`To recognize` means to identify someone or something from before, or to acknowledge the existence or validity of something. For example, `I recognize your efforts in completing this project.`

`Recognition` is the noun form of `recognize` and refers to the act of acknowledging or giving credit to someone for their efforts or achievements. For example, `He received recognition for his innovative work.`

# --fillInTheBlank--

## --sentence--

`For me, I like the idea of _ my skills and getting _ for my contributions.`

## --blanks--

`practicing`

### --feedback--

This verb means to perform an activity or exercise repeatedly or regularly in order to improve or maintain one's proficiency.

---

`recognition`

### --feedback--

This noun refers to the action or process of acknowledging someone's efforts, achievements, or qualities.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.1-5.mp3",
      "startTime": 1,
      "startTimestamp": 41.5,
      "finishTimestamp": 47.12
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
      "finishTime": 6.62,
      "dialogue": {
        "text": "For me, I like the idea of practicing my skills and getting recognition for my contributions.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 7.12
    }
  ]
}
```
