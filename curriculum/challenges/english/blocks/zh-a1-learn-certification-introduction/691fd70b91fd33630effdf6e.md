---
id: 691fd70b91fd33630effdf6e
title: Pinyin Tone Input
challengeType: 22
dashedName: pinyin-tone-input
lang: zh-CN
inputType: pinyin-tone
---

<!-- (audio) Wang Hua: 你好 (nǐ hǎo)，世界 (shì jiè)。-->

# --description--

Chinese is spoken in many regional varieties. In this curriculum, you will learn **Mandarin**, the most widely used standard form of spoken Chinese.

Chinese is written in two major forms: Simplified and Traditional Chinese. This curriculum will focus on **Simplified Chinese**.

Since Chinese characters are not phonetic, a system called **Pinyin**​ is used to represent their sounds. Pinyin is a romanization system that uses the Latin alphabet to indicate how Chinese characters are pronounced. It serves as an essential tool for beginners to learn the pronunciation of the language and to type Chinese on digital devices.

You're about to input your first two Chinese words, each made of two characters. Sounds unbelievable, right? freeCodeCamp has developed the **Pinyin Tone input** and **Pinyin-to-Hanzi input** to help you do this easily.

In this task, you'll practice writing Pinyin using the Pinyin Tone input.

In the audio, Wang Hua is saying "Hello, world" in Chinese. Try typing `ni3 hao3` and `shi4 jie4` to see what happens. If you make a mistake, just delete the incorrect part and type again.

Remember to expand the explanation section below to see what's happening behind the scenes.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK, BLANK.`

## --blanks--

`Nǐ hǎo`

### --feedback--

This is the Pinyin for the greeting meaning "hello", created by typing `ni3 hao3`.

---

`shì jiè`

### --feedback--

This is the Pinyin for "world", created by typing `shi4 jie4`.

# --explanation--
  
In most cases,​ each Chinese character is represented by a single Pinyin syllable, and each syllable includes an initial (consonant), a final (always with a vowel), and a tone mark that indicates the pitch contour.

In most built-in Chinese input methods on computers or mobile devices, as well as in third-party apps, people usually don't type tone marks. They type only the initial and final, and then select the correct character from a list.

However, typing and seeing tone marks helps beginners build and strengthen the memory of Chinese characters.

With the Pinyin Tone input, you can type the letters plus a tone number to automatically convert them into tone-marked Pinyin. For example, here, `ni3 hao3` becomes `nǐ hǎo`, and `shi4 jie4` becomes `shì jiè`.

You will use this input frequently when learning Pinyin in Chapter 2 of this curriculum.

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_chinese_fundamentals_hello_world.mp3",
      "startTime": 1,
      "startTimestamp": 5.18,
      "finishTimestamp": 6.71
    }
  },
  "commands": [
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Wang Hua",
      "startTime": 1,
      "finishTime": 2.53,
      "dialogue": {
        "text": "你好 (nǐ hǎo)，世界 (shì jiè)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 3.03
    }
  ]
}
```
