---
title: Introduction to NLP
---

## What is Natural Language processing
The application of computational techniques to process and to identify and recognise the speech of human voice.



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
The model learns the rules of the language through the analysis of large corpora of typical real-world examples. This method requires enormous amount of labelled data, which is a big hurdle for NLP.

Processes involved in NLP:
- MORPHOLOGICAL ANALYSIS: Individual words are analysed into their components, and nonword tokens, such as punctuation are separated from the words.
- SYNTATIC ANALYSIS: Linear sequence of words are transformed into structures and show how the words relate to each other.
- SEMANTIC ANALYSIS:A mapping is made between syntatic structures and  objects in task domain
- DISCOURSE INTEGRATION: Meaning of a sentence may depend on the sentence that precede it and may influence the meaning of the sentence that follow it.
- PRAGMATIC ANALYSIS: The structure representing what was said is reinterpreted to determine what was actually meant.

## Use cases
People have used this concept in a lot of interesting applications. Few of the exciting ones include Google Translate, Siri, or Gmail auto reply suggestions. People are however working on ways to improve these predictions, and state of the art research is being done on how to make machines answer questions more reliably. 

## Language Modelling
For those looking to get into this field, I intend to start you off with 3 concepts.

### Tokenisation
Here the task sounds simple. Given a corpus (a dataset of sentences), generate individual tokens (meaningful words). We need to tokenise words and sentences. The first approach that comes to mind is to split by period and space. This however doesn't work. Consider Mr. John. Are "Mr" and "John" 2 sentences? Of course not. Now consider hyphen separated words. Would you want to split them as 2 words or as 1 word? These difficult questions make the task of tokenisation not so straightforward. Go ahead and pick a corpus from nltk, and build your own regex for your very own tokeniser!

### n-gram models
Next task is to build a language model. Here we consider an assumption that the nth word depends only on the previous n-1 words. 2-gram and 3-gram models are most commonly used. To build a 3-gram model, just group 3 tokens together and count their frequency in the corpus. You are now ready to predict the probability of a group of 3 words!

### Word2vec
Word2vec is a group of related models that  produce word embeddings. These models are shallow, two-layer neural networks. They are trained to reconstruct linguistic contexts of words. Word2vec takes as its input a large corpus of text and produces a vector space. It can take several hundred dimensions, with each unique word in the corpus being assigned a corresponding vector in the space. Word vectors are positioned in the vector space. Words that share common contexts in the corpus are located near to one another in the space.

## Using Neural networks for Language modelling
For knowledge representation, the knowledge represented by neural network language models is the approximate probabilistic distribution of word sequences from a certain training data set rather than the knowledge of a language itself or the information conveyed by word sequences in a natural language. Statistical Language Modeling. Statistical Language Modeling, or Language Modeling and LM for short, is the development of probabilistic models that are able to predict the next word in the sequence given the words that precede it

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

#### Some popular Open Source Tool-kits
* [CMUSphinx](https://cmusphinx.github.io/)
* [Kaldi](https://github.com/kaldi-asr/kaldi)
* [DeepSpeech](https://github.com/mozilla/DeepSpeech)
