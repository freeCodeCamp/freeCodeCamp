---
id: 67f0ee4cc8f7fe5fd534eff4
title: Task 87
challengeType: 22
dashedName: task-87
---

<!-- (Audio) Mark: Yeah, that sounds good. Thanks for your help, Lisa. I appreciate it. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Yeah, that BLANK. Thanks for your help, Lisa. I BLANK it.`

## --blanks--

`sounds good`

### --feedback--

This two-word phrase is used to show agreement or approval of an idea or suggestion. The first word ends with `-s`.

---

`appreciate`

### --feedback--

This word means to be grateful for something. It shows thanks for help, support, or something done for you.

# --explanation--

`Sounds good` means that the speaker agrees with or approves of what was said. For example:

`Your idea sounds good.` – This means the speaker thinks the idea is good and agrees with it.

`I appreciate` is a way of saying thank you or showing gratitude. For example:

`I appreciate your help with the project.` – This means you're grateful for the help you received.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Lisa",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 60,
      "finishTimestamp": 65.78
    }
  },
  "commands": [
    {
      "character": "Lisa",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Lisa",
      "startTime": 1,
      "finishTime": 1.92,
      "dialogue": {
        "text": "Yes, that's a good start.",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "startTime": 2.34,
      "finishTime": 5.96,
      "dialogue": {
        "text": "If it doesn't work, we might need to dig into the code or run some diagnostics.",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "startTime": 6.04,
      "finishTime": 6.78,
      "dialogue": {
        "text": "Does that sound OK?",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 7.28
    }
  ]
}
```
