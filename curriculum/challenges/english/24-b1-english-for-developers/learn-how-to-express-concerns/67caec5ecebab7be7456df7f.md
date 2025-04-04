---
id: 67caec5ecebab7be7456df7f
title: Task 130
challengeType: 19
dashedName: task-130
---

<!-- (Audio) Maria: They also said the communication isn't great because they often don't hear about changes until it's too late. -->

# --instructions--

Listen to the audio and answer the question below.  

# --questions--

## --text--

What other issue did the team raise?

## --answers--

That they receive updates too early.

### --feedback--

Maria mentions the exact opposite.

---

That they don't want to communicate as much.

### --feedback--

Maria doesn't mention the team's willingness to communicate.  

---

That they often don't hear about changes in time.

---

That they think too many people are involved in communication.

### --feedback--

Maria does not mention the number of people involved.

## --video-solution--

3  

# --explanation--

When you say something `isn't great`, you are softening a negative message (instead of saying `it is bad`, for instance). It makes criticism sound more polite or indirect. Take a look at the following sentences:

- `The design is bad.` - This is a strong negative statement, which often sounds impolite.

- `The design isn't great. Maybe we can improve it.` - Saying this sound less harsh and more constructive.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 34.9,
      "finishTimestamp": 40.12
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 3.18,
      "dialogue": {
        "text": "They also said the communication isn't great",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "startTime": 3.18,
      "finishTime": 6.22,
      "dialogue": {
        "text": "because they often don't hear about changes until it's too late.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 6.72
    }
  ]
}
```
