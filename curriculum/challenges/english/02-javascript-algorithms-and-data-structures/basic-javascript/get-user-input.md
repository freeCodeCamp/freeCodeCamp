---
id: 6639bd2d8170d75242be99cb
videoId: lrCIETMrtNs
title: Get User Input
challengeType: 11
dashedName: get-user-input
---

# --description--

<br>
<br>
In JavaScript, to take input using readline-sync, you create a space called a "variable" to store the answer. Then, you use the question() function from the readline-sync module to ask a question and wait for the user to type an answer. Once they type the answer and press Enter, it's stored in the variable. It's like having a chat with the computer, where you ask it something, and it waits for you to respond.
We use this way of taking input in the text editor. On online IDE’s we use prompt() for taking input in Javascript. We will learn more about prompt() in the next challenge.
<h2>Hinglish</h2>
JavaScript mein, readline-sync ka istemal input lene ke liye, aap ek "variable" ke roop mein ek jagah banate hain jisme jawab ko store kiya jata hai. Fir, aap readline-sync module se question() function ka istemal karte hain ek sawal puchne ke liye aur user se jawab dene ke liye intezaar karte hain. Jab wo jawab likhte hain aur Enter dabate hain, to wo variable mein store ho jata hai. Ye computer ke sath baat karne jaisa hai, jahan aap kuch puchte hain aur wo aap se jawab dene ke liye intezaar karta hai.
Hum is tarah se input lene ka tareeka text editor mein istemal karte hain. Online IDEs mein hum prompt() ka istemal JavaScript mein input lene ke liye karte hain. Hum prompt() ke bare mein agle challenge mein aur bhi adhik jaanenge.

# --question--

## --text--

Which is the correct syntax for taking input in Javascript?


## --answers--

const input = require(“readline-sync”);<br>
let name = input.question();


---

const input = require(“input”);<br>
const name = input.question();

---

var input = require(“readline-sync”);<br>
let name = input().question()

## --video-solution--

1
