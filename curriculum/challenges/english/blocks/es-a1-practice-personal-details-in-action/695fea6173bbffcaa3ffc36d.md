---
id: 695fea6173bbffcaa3ffc36d
title: Task 10
challengeType: 19
dashedName: task-10
lang: es
---

<!-- (Audio) Esteban: ¿Cómo te llamas? -->

# --description--

 There are two common ways to ask for someone’s name in Spanish.

Both are used in everyday Spanish and mean the same thing — they're just structured differently.

# --instructions--

Listen to the audio and answer the question below. There's just one correct answer.

# --questions--

## --text--

Which of the following questions is similar to what you hear in the audio?

## --answers--

`¿Cuál es tu nombre?`

---

`¿Dónde vives?`

### --feedback--

This question asks where someone lives, not their name.

---

`¿Cuál es tu apellido?`

### --feedback--

This asks for someone’s last name — not their first name.

---

`¿Tienes apodo?`

### --feedback--

This asks if someone has a nickname — not their full name.

## --video-solution--

1

# --explanation--

`¿Cómo te llamas?` means "What is your name?"

This is one of the most common ways to ask someone their name.  
It literally means “How do you call yourself?” but it's understood as **“What’s your name?”**

A more formal or neutral alternative is: `¿Cuál es tu nombre?` Both are asking for the same information.

# --scene--

```json
{
  "setup": {
    "background": "interview-room1.png",
    "characters": [
      {
        "character": "Esteban",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_personal_details_just_questions.mp3",
      "startTime": 1,
      "startTimestamp": 43.02,
      "finishTimestamp": 44.53
    }
  },
  "commands": [
    {
      "character": "Esteban",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Esteban",
      "startTime": 1,
      "finishTime": 2.51,
      "dialogue": {
        "text": "¿Cómo te llamas?",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.61
    }
  ]
}
```
