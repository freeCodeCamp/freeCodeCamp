---
id: 675ecedbb04f6ca6dd620f0e
title: Task 76
challengeType: 22
dashedName: task-76
---

<!-- (Audio) Anna: Hi Brian, I've heard about these Man-in-the-Middle attacks. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Hi Brian, I've heard about these BLANK BLANK.`

## --blanks--

`Man-in-the-Middle`

### --feedback--

This is a type of cyberattack where a hacker secretly gets in the middle of two people or systems talking to each other. The hacker can see, change, or steal information being shared without anyone knowing. This is a compound word, remember to use `-`. The first letters of the first and the forth word are capitalized.

---

`attacks`

### --feedback--

This word in the plural form means actions by hackers or criminals to harm a computer system, steal information, or cause problems.

# --explanation--

`Man-in-the-Middle` (or `MITM`) is a type of attack where a hacker secretly gets between two people or systems that are communicating. The hacker listens to or changes the information being shared without anyone knowing. For example:

`A Man-in-the-Middle attack (MITM) happened when a hacker intercepted the data sent between a user's computer and their bank.` - The hacker pretended to be the bank, intercepted the information, and stole the user's login credentials. This allowed the hacker to access the bank account without the user knowing.

`Attacks` are actions by hackers to harm computer systems, steal information, or cause problems. For example:

`The website was unavailable for hours because of a cyber attack that overloaded its server.` - It indicates the hacker sent too much fake traffic to the website, making it crash or slow down. This stopped real users from accessing it, causing disruption.

# --scene--

```json
{
  "setup": {
    "background": "interview-room1.png",
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
      "filename": "B1_6-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.8
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
      "finishTime": 3.8,
      "dialogue": {
        "text": "Hi, Brian. I've heard about these man in the middle attacks.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 4.3
    }
  ]
}
```
