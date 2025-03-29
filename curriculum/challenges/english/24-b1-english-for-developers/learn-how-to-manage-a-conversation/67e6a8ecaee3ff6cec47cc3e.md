---
id: 67e6a8ecaee3ff6cec47cc3e
title: Task 75
challengeType: 19
dashedName: task-75
---

<!-- (Audio) Jessica: I'll try to be quick so we can get back to the main agenda. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Why does Jessica want to explain the bug to the team quickly?

## --answers--

Because she wants to return to the main topic of the meeting.

---

Because she wants to leave the meeting early.

### --feedback--

Jessica doesn't mention leaving the meeting.

---

Because the team already knows about the bug.

### --feedback--

Jessica is explaining the bug because it might affect the team.

---

Because she doesn't think the bug is important.

### --feedback--

Jessica thinks the issue is important, but she also wants to respect the meeting agenda.

## --video-solution--

1

# --explanation--

`So we can` is used to show purpose — it means the next thing you mention is what you intend to do It explains why someone is doing something. For example:

`I'll finish this now so we can start the next task.` – This means the speaker wants to finish one thing to begin another soon.

`The main agenda` refers to the primary topics or plan of a meeting or event. For example:

`Let's stick to the main agenda and avoid side discussions.` – This means to stay focused on the most important items in the meeting.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
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
      "filename": "B1_15-2.mp3",
      "startTime": 1,
      "startTimestamp": 45.8,
      "finishTimestamp": 48.14
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
      "finishTime": 3.34,
      "dialogue": {
        "text": "I'll try to be quick so we can get back to the main agenda.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 3.84
    }
  ]
}
```
