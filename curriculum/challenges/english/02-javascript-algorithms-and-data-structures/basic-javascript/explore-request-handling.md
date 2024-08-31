---
id: 66353f23dddff50f6c78b932
videoId: LAUi8pPlcUM
title: Explore Request Handling in Node.js
challengeType: 11
dashedName: explore-request-handling
---

# --description--

<br>
<br>

- Node.js uses asynchronous programming!
- A common task for a web server can be to open a file on the server and return the content to the client.
- Here is how PHP or ASP handles a file request:
- Sends the task to the computer's file system.
- Waits while the file system opens and reads the file.
- Returns the content to the client.
- Ready to handle the next request.
- Here is how Node.js handles a file request:
- Sends the task to the computer's file system.
- Ready to handle the next request.
- When the file system has opened and read the file, the server returns the content to the client.
- Node.js eliminates the waiting and simply continues with the next request.
- Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

<h2>Hinglish</h2>

- Node.js uses asynchronous programming!
- Ek common task ek web server ke liye ho sakta hai ki server par ek file ko kholna aur client ko content wapas bhejna.
- Yahaan PHP ya ASP ek file request ko kaise handle karte hain:
- Computer ki file system ko task bhejta hai.
- Jab tak file system file ko khol kar padhta hai, tab tak intezar karta hai.
- Content ko client ko wapas bhejta hai.
- Agla request handle karne ke liye taiyar hota hai.
- Yahaan Node.js ek file request ko kaise handle karta hai:
- Computer ki file system ko task bhejta hai.
- Agla request handle karne ke liye taiyar hota hai.
- Jab file system file ko khol kar padh leta hai, server content ko client ko wapas bhej deta hai.
- Node.js intezar ko khatam karta hai aur bas agle request ke saath jaari rehta hai.
- Node.js single-threaded, non-blocking, asynchronous programming chalata hai, jo ki bahut hi memory efficient hai.

# --question--

## --text--

Fill in the blanks according to how Node.js handles the request 

Sends the task to the computer’s file system->_ _ _ _ _ _ _ _ _ _ _ ->When the file system has opened and read the file, the server returns the content to the client.

## --answers--

Handle previous request first.

---

Ready to handle the next request.

---

Unable to handle the request.

## --video-solution--

2
