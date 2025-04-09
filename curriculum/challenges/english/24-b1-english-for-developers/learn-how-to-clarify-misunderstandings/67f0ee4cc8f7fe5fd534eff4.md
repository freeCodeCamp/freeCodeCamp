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
        "character": "Mark",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 66.06,
      "finishTimestamp": 69.26
    }
  },
  "commands": [
    {
      "character": "Mark",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mark",
      "startTime": 1,
      "finishTime": 4.2,
      "dialogue": {
        "text": "Yeah, that sounds good. Thanks for your help, Lisa. I appreciate it.",
        "align": "center"
      }
    },
    {
      "character": "Mark",
      "opacity": 0,
      "startTime": 4.7
    }
  ]
}
```
