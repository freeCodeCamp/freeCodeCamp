---
title: Introduction to NLP
---

## Outline
* Motivation
* How Natural Language Processing works
* Use cases
* Language Modelling
* Applications
* Further readings

## Motivation
It has always been our dream to make machines understand our language. Ever since Chomsky came up with Context free grammars, linguists have been wanting to come up with solutions to understand context dependent grammars. It is therefore only natural that an academic discipline had to be evolved around this topic.

## Use cases
People have used this concept in a lot of interesting applications. A few of the exciting ones include Google Translate, Siri, or Gmail auto reply suggestions. People are however working on ways to improve these predictions, and state of the art research is being done on how to make machines answer questions more reliably. 

## How Natural Language Processing works

Early on, NLP employed a rule based approach, i.e. all the rules were hard coded (E.g. writing grammar). However this wasn't very effective due to the variations in the language models.
Currently, NLP processes are carried on using Artificial Intelligence. They rely mainly on Deep Learning, an AI that determines patterns in the data and uses them to train the model. This method is better than the earlier methods because when learning through the huge data sets, the machine can focus on the most common cases. This is not easy with hand-written rules because it is not obvious as to where the efforts are to be put. Also, these models become more reliable with the increase in data, but in earlier approaches it could only be made accurate by increasing the complexity of the rules, which is a more difficult task. 
The model learns the rules of the language through the analysis of large corpora of typical real-world examples. This method requires enormous amount of labelled data , which is a big hurdle for NLP.

## Use cases
People have used this concept in a lot of interesting applications. Few of the exciting ones include Google Translate, Siri, or Gmail auto reply suggestions. People are however working on ways to improve these predictions, and state of the art research is being done on how to make machines answer questions more reliably. 

## Language Modelling
For those looking to get into this field, I intend to start you off with 2 concepts.

#### Tokenisation
Here the task sounds simple. Given a corpus (a dataset of sentences), generate individual tokens (meaningful words). We need to tokenise words and sentences. The first approach that comes to mind is to split by period and space. This however doesn't work. Consider Mr. John. Are "Mr" and "John" 2 sentences? Of course not. Now consider hyphen separated words. Would you want to split them as 2 words or as 1 word? These difficult questions make the task of tokenisation not so straightforward. Go ahead and pick a corpus from nltk, and build your own regex for your very own tokeniser!

#### n-gram models
Next task is to build a language model. Here we consider an assumption that the nth word depends only on the previous n-1 words. 2-gram and 3-gram models are most commonly used. To build a 3-gram model, just group 3 tokens together and count their frequency in the corpus. You are now ready to predict the probability of a group of 3 words!

## Applications
- Spelling and grammar checking.
- Chatbots for particular services.
- Text summarization.
- Natural language interfaces to databases.
- Document clustering.

## Further readings
The field of NLP is huge. If you have read this far and have implemented the above, you have certainly loved this. Go ahead and read Jurafsky's book to learn some more new concepts. Remember, it's important to implement them as well.

#### Some useful online learning resources:
* [Stanford's course CS224n](http://web.stanford.edu/class/cs224n/)
* [Oxford's Course](https://www.cs.ox.ac.uk/teaching/courses/2016-2017/dl/)
* [CMU's course](http://www.phontron.com/class/nn4nlp2018/index.html)
* [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing/)
* [LSTM networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)
* [Attention](https://distill.pub/2016/augmented-rnns/)
