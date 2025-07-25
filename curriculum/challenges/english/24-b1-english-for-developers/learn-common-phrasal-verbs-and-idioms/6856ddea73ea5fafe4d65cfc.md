---
id: 6856ddea73ea5fafe4d65cfc
title: Task 95
challengeType: 19
dashedName: task-95
---

<!-- (Audio) Jake: We could incorporate an interactive quiz during the onboarding process. It could teach users how to recognize and handle potential phishing attempts. -->

<!-- SPEAKING -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How could Linda praise Jake's idea?

## --answers--

`That's an excellent suggestion.`

---

`Are you sure that would work?`

### --feedback--

This sounds doubtful, not supportive.

## --video-solution--

1

# --explanation--

`That's an excellent suggestion.` is a polite and positive way to praise someone's idea by showing strong agreement and approval. For example:

- Person 1: `Let's add more visuals to the report.` – The first person suggests that they incorporate more graphics and images to the report to make it more vivid.

- Person 2: `That's an excellent suggestion.` – This means the person thinks the idea is very good and helpful.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jake",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_24-2.mp3",
      "startTime": 1,
      "startTimestamp": 74.74,
      "finishTimestamp": 82.58
    }
  },
  "commands": [
    {
      "character": "Jake",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jake",
      "startTime": 1,
      "finishTime": 3.06,
      "dialogue": {
        "text": "We could incorporate an interactive quiz",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "startTime": 3.06,
      "finishTime": 4.3,
      "dialogue": {
        "text": "during the onboarding process.",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "startTime": 4.6,
      "finishTime": 6.36,
      "dialogue": {
        "text": "It could teach users how to recognize",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "startTime": 6.36,
      "finishTime": 8.84,
      "dialogue": {
        "text": "and handle potential phishing attempts.",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "opacity": 0,
      "startTime": 9.34
    }
  ]
}
```
