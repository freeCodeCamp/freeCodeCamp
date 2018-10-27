---
title: Introduction to NLP
---

## Outline
* Motivation
* Use cases
* Language Modelling
* Further readings

## Motivation
It has always been our dream to make machines understand human language. Ever since Chomsky came up with context-free grammars, linguists have wanted to come up with solutions to understand context-dependent grammars. It is therefore only natural that an academic discipline has evolved around this topic.

## Use cases
People have used this concept in a lot of interesting applications. Some of the most exciting ones include Google Translate, Siri, and GMail auto reply suggestions. These predictive applications of NLP are still being improved, however, and state of the art research is being done on how to make machines answer questions in natural language more reliably. 

## How Natural Language Processing works
Earlier approaches to NLP were rule-based, i.e. all the rules were hard coded (e.g. writing grammar). However, this wasn't very effective with respect to the variations in the language models.

More recent approaches to NLP tend to utilize Artificial Intelligence. They rely mainly on Deep Learning, an approach to AI that determines patterns in data and uses it to train predictive models. This method is better than the earlier methods used because, when learning with large datasets, the machine can focus on the most common cases, which is not easy with hand-written rules because it is not obvious as to where the efforts are to be allocated. Furthermore, these models can become more reliable with an increase in data, whereas in earlier approaches they were only made more accurate by increasing the complexity of the rules, which is a more difficult task. 

However, since a deep-learning model learns the rules of language through the analysis of a large corpora of typical real-world textual examples, this method requires an enormous amount of labelled data. This presents a big hurdle for NLP.

## Language Modelling
For those looking to get involved in this field, I intend to start you off with 2 tasks that illustrate some key introductory concepts in NLP.

#### Tokenisation
Here the task sounds simple: given a corpus (a dataset of sentences), generate individual tokens (meaningful words). We need to tokenise words and sentences. The first approach that comes to mind is to split by periods and spaces. This, however, doesn't work. 

Consider "Mr. John". Are "Mr" and "John" 2 sentences? Of course not. Now consider hyphen separated words. Would you want to split them as 2 words or as 1 word? These difficult questions make the task of tokenisation not so straightforward. Go ahead and pick a corpus from nltk, and build your own regex for your very own tokeniser!

#### n-gram models
The next task is to build a language model. Here we consider an assumption that the nth word depends only on the previous n-1 words. 2-gram and 3-gram models are most commonly used. To build a 3-gram model, just group 3 tokens together and count their frequency in the corpus. You are now ready to predict the probability of a group of 3 words!

## Further readings
The field of NLP is huge. If you have read this far and have implemented the above, you certainly have a love for the topic. To learn some more new concepts, a good place to start is the introductory NLP textbook [Speech and Language Processing by Jurafsky and Martin](http://www.deepsky.com/~merovech/voynich/voynich_manchu_reference_materials/PDFs/jurafsky_martin.pdf). Remember, it's important to implement the concepts if you can in order to really understand them.

#### Some useful online learning resources:

* [LSTM networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)
* [Attention](https://distill.pub/2016/augmented-rnns/)

