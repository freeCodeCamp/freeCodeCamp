---
id: 67ee4cbb541a7a0ae61bcc9f
title: Task 4
challengeType: 19
dashedName: task-4
---

<!-- (audio) Sophie: It's not a big deal, but we should fix it before it causes problems. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is this small error serious?

## --answers--

No, and they don't need to do anything about it.

### --feedback--

Sophie doesn't say it's a major issue, but they should fix it.

---

Yes, it will break the whole system.

### --feedback--

Sophie doesn't say it's a major issue, just something they should fix.

---

Yes, Sophie is very worried about it.

### --feedback--

Sophie is not very worried, but she still thinks they should fix it.

---

No, but it should still be fixed.

## --video-solution--

4

# --explanation--

`It's not a big deal` means the problem is not serious. For example:

- Person 1: `I can't join the meeting today.`

- Person 2: `It's not a big deal. I'll take notes for you.` - Missing the meeting is okay, and this person can help.

Sophie also says `we should fix it before it causes problems`, meaning it's better to fix it now before it becomes serious.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_17-1.mp3",
      "startTime": 1,
      "startTimestamp": 5.72,
      "finishTimestamp": 8.5
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 3.78,
      "dialogue": {
        "text": "It's not a big deal, but we should fix it before it causes problems.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.28
    }
  ]
}
```
