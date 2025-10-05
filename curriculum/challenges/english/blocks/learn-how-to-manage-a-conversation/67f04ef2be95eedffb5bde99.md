---
id: 67f04ef2be95eedffb5bde99
title: Task 103
challengeType: 22
dashedName: task-103
---

<!-- (Audio) Brian: Is there anything else slowing you down? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Is there anything else BLANK you down?`

## --blanks--

`slowing`

### --feedback--

Followed by `down`, this means making something move or happen more slowly than normal. Use the `-ing` form.

# --explanation--

`To slow down` means to reduce speed or to make something happen more slowly. In work or project contexts, it can refer to anything that delays progress. For example:

`Traffic is slowing down the delivery.` – This means the delivery is taking longer because of traffic.  

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-3.mp3",
      "startTime": 1,
      "startTimestamp": 23.16,
      "finishTimestamp": 25.38
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 3.22,
      "dialogue": {
        "text": "Is there anything else slowing you down?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.72
    }
  ]
}
```
