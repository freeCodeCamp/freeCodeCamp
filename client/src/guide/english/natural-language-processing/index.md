---
title: Introduction to NLP
---

## Outline
* Motivation
* Use cases
* Language Modelling
* Further readings

## Motivation
It has always been our dream to make machines understand our language. Ever since Chomsky came up with Context free grammars, linguists have been wanting to come up with solutions to understand context dependent grammars. It is therefore only natural that an academic disciple had evolved around this topic.

## Use cases
People have used this concept in a lot of interesting applications. Few of the exciting ones include Google Translate, Siri, or Gmail auto reply suggestions. People are however working on ways to improve these predictions, and state of the art research is being done on how to make machines answer questions more reliably. 

## How Natural Language Processing works
Earlier, NLP employed rule based approach, i.e. all the rules were hard coded(Eg writing grammar). However this wasn't very affective to the variations in the language models.
Currently, NLP processes are carried on using Artificial Intelligence. They rely mainly on Deep Learning, an AI that determines patterns in the data and uses it to train the model. This method is better than the earlier methods used because when learning through the huge data present, the machine can focus on most common cases, which is not easy with hand-written rules because it is not ovious as to where the efforts are to be put. Also, these models become more reliable with the increase in data, but in earlier approaches it an only be made accurate by increasing the complexity of the rules, which is a more difficult task. 
The model learns the rules of the language through the analysis of large corpora of typical real-world examples. This method requires enormous amount of labelled data , which is a big hurdle for NLP.

## Language Modelling
For those looking to get into this field, I intend to start you off with 2 concepts.

#### Tokenisation
Here the task sounds simple. Given a corpus (a dataset of sentences), generate individual tokens (meaningful words). We need to tokenise words and sentences. The first approach that comes to mind is to split by period and space. This however doesn't work. Consider Mr. John. Are "Mr" and "John" 2 sentences? Of course not. Now consider hyphen separated words. Would you want to split them as 2 words or as 1 word? These difficult questions make the task of tokenisation not so straightforward. Go ahead and pick a corpus from nltk, and buid your own regex for your very own tokeniser!

#### n-gram models
Next task is to build a language model. Here we consider an assumption that the nth word depends only on the previous n-1 words. 2-gram and 3-gram models are most commonly used. To build a 3-gram model, just group 3 tokens together and count their frequency in the corpus. You are now ready to predict the probability of a group of 3 words!

## Further readings
The field of NLP is huge. If you have read this far and have implemented the above, you have certainly loved this. Go ahead and read Jurafsky's book to learn some more new concepts. Remember, it's important to implement them as well.

