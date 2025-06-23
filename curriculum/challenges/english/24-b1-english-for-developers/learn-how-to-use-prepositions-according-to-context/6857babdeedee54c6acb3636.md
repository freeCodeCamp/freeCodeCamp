---
id: 6857babdeedee54c6acb3636
title: Task 135
challengeType: 19
dashedName: task-135
---

<!-- (Audio) Sarah: If you head straight down this corridor and turn left at the break area, you'll see them stored right across from the coffee machine. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Where are the monitors stored now?

## --answers--

At the end of the parking lot.

### --feedback--

Sarah doesn't mention the parking lot.

---

Inside the IT room.

### --feedback--

They were moved out of the IT room earlier.

---

Next to the security desk.

### --feedback--

There is no mention of a security desk.

---

Right near the coffee machine.

## --video-solution--

4

# --explanation--

Sarah gives clear directions ending with a reference point: `the coffee machine`.

She explains that after going down the corridor and turning left, the monitors can be found positioned across from it, making the coffee machine the closest visible landmark for finding them.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
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
      "filename": "B1_22-3.mp3",
      "startTime": 1,
      "startTimestamp": 12.68,
      "finishTimestamp": 17.92
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
      "finishTime": 6.24,
      "dialogue": {
        "text": "If you head straight down this corridor and turn left at the break area, you'll see them stored right across from the coffee machine.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 6.74
    }
  ]
}
```
