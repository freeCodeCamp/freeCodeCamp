---
title: goto as a powerful utility
---

# Intro to the use of goto and labels

goto is one of the most powerful, yet highly underrated piece of logic in C++. Crazy amount of optimization can be achieved using goto, provided it is used properly.
It does exactly what it is named as. It goes to the mentioned occurence of the next label, wherever may it be.

# Terminology

	goto - The keyword used to go to the particular label.
	label - this can be named anything.
# syntax

goto <label>;

(without the <> );

//This takes the exe to the next appearance of label.

goto is something that transcends all loops. To be clearer on this point, here is an example.

https://code.sololearn.com/cI4qqQA8W2q3

However, care must be taken to use goto very carefully, especially in the early days of coding as it can lead to crazy issues, if not understood well enough.
