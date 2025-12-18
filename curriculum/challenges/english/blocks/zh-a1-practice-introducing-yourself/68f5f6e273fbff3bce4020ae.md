---
id: 68f5f6e273fbff3bce4020ae
title: Task 5
challengeType: 19
dashedName: task-5
lang: zh-CN
---

<!-- (Audio) whole audio Chen Na -->

# --description--

Chen Na is speaking at an international tech conference. Let's hear how she introduces herself.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

After hearing Chen Na's introduction, what's the most relevant question you could ask her?

## --answers--

Do you like to cook?

### --feedback--

This is a friendly question, but it's not related to what she says about herself.

---

Are you from Singapore?

### --feedback--

She says she is from Canada, so this question does not fit.

---

What kind of data do you analyze?

---

What kind of designs do you create?

### --feedback--

That would fit if she were a designer, but she says she is a data analyst.

## --video-solution--

3

# --explanation--

Chen Na uses the phrase `我是 (wǒ shì)` to introduce her name, nationality and profession.

`我是加拿大人 (wǒ shì jiā ná dà rén)` means "I am Canadian", and `我是数据分析师 (wǒ shì shù jù fēn xī shī)` means "I am a data analyst". Asking about the kind of data she analyzes is the most relevant question based on her introduction.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Chen Na",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_chenna.mp3",
      "startTime": 1,
      "startTimestamp": 0.75,
      "finishTimestamp": 6.93
    }
  },
  "commands": [
    {
      "character": "Chen Na",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Chen Na",
      "startTime": 1,
      "finishTime": 3.03,
      "dialogue": {
        "text": "你们好 (nǐ men hǎo)，我是陈娜 (wǒ shì chén nà)。",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 3.57,
      "finishTime": 4.83,
      "dialogue": {
        "text": "我是加拿大人 (wǒ shì jiā ná dà rén)。",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 5.59,
      "finishTime": 7.18,
      "dialogue": {
        "text": "我是数据分析师 (wǒ shì shù jù fēn xī shī)。",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "opacity": 0,
      "startTime": 7.68
    }
  ]
}
```
