---
id: 68249d79d4ddca45eff7fafd
title: Task 144
challengeType: 19
dashedName: task-144
---

<!-- (Audio) Jessica: Fantastic, James. I'll put all this information into a report and talk about it with the team tomorrow. This feedback should help us know what to do next. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Jessica plan to do with the information?

## --answers--

Ignore it for now and wait for more feedback.

### --feedback--

Jessica says she will organize the information and share it, not ignore it.

---

Organize it into a report and discuss it with others.

---

Ask users to test it again before making changes.

### --feedback--

She does not mention anything about retesting or user feedback.

---

Send it directly to the client without review.

### --feedback--

Jessica plans to talk with her team first, not send it straight to a client.

## --video-solution--

2

# --explanation--

Jessica says she will `put all this information into a report` and `talk about it with the team tomorrow`. This shows she plans to organize the details and have a discussion with her team.

She also says the feedback `should help`, meaning it will guide their next steps.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_19-3.mp3",
      "startTime": 1,
      "startTimestamp": 86.16,
      "finishTimestamp": 93.52
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 6.0,
      "dialogue": {
        "text": "Fantastic, James. I'll put all this information into a report and talk about it with the team tomorrow.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "startTime": 6.26,
      "finishTime": 7.86,
      "dialogue": {
        "text": "This feedback should help us know what to do next.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 8.86
    }
  ]
}
```
