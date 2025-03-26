---
id: 67c03f86bccfec0be6de656b
title: Task 113
challengeType: 19
dashedName: task-113
---

<!-- (audio) Anna: I see your point, but flexibility might be better. Think about it. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Anna communicating?

## --answers--

She completely disagrees with Bob and rejects his concern.

### --feedback--

Anna acknowledges Bob's point before giving her own opinion.

---

She understands Bob's concern but still thinks flexibility is a better option.

---

She does not understand Bob's concern.

### --feedback--

Anna understands Bob's argument.

---

She agrees with Bob and changes her mind.

### --feedback--

Anna does not fully agree with Bob.

## --video-solution--

2

# --explanation--

Anna uses `I see your point, but` to show that she understands Bob's concern while presenting a different opinion.

She believes that flexibility is a better solution than sticking with one category.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Anna",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-3.mp3",
      "startTime": 1,
      "startTimestamp": 31.78,
      "finishTimestamp": 34.88
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 4.1,
      "dialogue": {
        "text": "I see your point, but flexibility might be better. Think about it.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 4.7
    }
  ]
}
```
