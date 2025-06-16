---
id: 680cad23e2d58a1ef7c2edfb
title: Task 19
challengeType: 22
dashedName: task-19
---

<!-- (Audio) Sarah: Those are the ones. But, we found something even better in your catalog, these high-capacity ones here. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Those are the ones. But, we found something even better in your catalog, BLANK BLANK ones here.`

## --blanks--

`these`

### --feedback--

This word is used to point to specific items that are close to the speaker.

---

`high-capacity`

### --feedback--

This compound word means something that can handle a large amount of work, storage, or energy. Remember to use `-`.

# --explanation--

`High-capacity` describes something designed to manage or hold a large amount compared to standard versions. For example:

`We installed high-capacity batteries in the new devices.` – This means the batteries can store more power and last longer, which is useful in tech equipment.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_19-1.mp3",
      "startTime": 1,
      "startTimestamp": 27.3,
      "finishTimestamp": 32.68
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 6.38,
      "dialogue": {
        "text": "Those are the ones, but we found something even better in your catalog, these high capacity ones here.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 6.88
    }
  ]
}
```
