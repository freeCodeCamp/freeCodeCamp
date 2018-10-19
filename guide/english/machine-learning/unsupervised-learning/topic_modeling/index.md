## Definition ##

> **DATA WITH INSIGHT LEADS YOU TO DECISIONS WITH CLARITY**

- With the growing amount of data in recent years, that too mostly unstructured, it’s difficult to obtain the relevant and desired information. But, technology has developed some powerful methods which can be used to mine through the data and fetch the information that we are looking for.

- A topic model is a type of statistical model for **discovering** the abstract **topics** that occur in a collection of **documents**. 
Topic models are a suite of algorithms that uncover the **hidden thematic structure** in document collections. These algorithms help us develop new ways to **search, browse** and summarize large archives of texts [2]
Topic models provide a simple way to analyze large volumes of **unlabeled** text. A "topic" consists of a **cluster** of words that **frequently** occur together[3]

## Example ##
![example](https://yanirs.github.io/talks/gensim-overview/img/lda-example.jpg)

## How it works!!! ##
![topic_modeling](http://chdoig.github.io/pygotham-topic-modeling/images/lda-3.png)

![python_processing](http://chdoig.github.io/pygotham-topic-modeling/images/pipeline-1.png)

## pre-requisites for the sample code
```
pip install nltk
pip install gensim
python -m nltk.downloader stopwords
python -m nltk.downloader wordnet
```

## Sample code ##
```
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
import string

import gensim
from gensim import corpora

doc1 = "3+ years of experience in software development includes Analysis, Design and Development of Web-based applications. Extensive experience in design and development of multi-tier applications using Java, J2EE, Hibernate, Springs, XML, HTML, JavaScript, Tag Libs, AJAX."
doc2 = "Over 6 years of experience in programming in Java/J2EE/J2SE; Profound experience in Java developing, database developing, system integration and administration of web and database servers;"
doc3 = "Certified Java Professional (SCJP) with 92 %. Completed a Java, J2ee Course with certification. Software Analysis, Design, Development and Testing knowledge"
doc4 = "I am a software developer with a goal to simplify. With a Bachelor’s degree in Physics, Master’s degree in Computer Science, and hands-on experience using Core Java, JEE, Spring MVC, Spring Data JPA, Spring Boot, Spring Security, Android, AngularJS etc languages to create and implement software applications, I am confident I will be an asset to a organization."

# compile documents
doc_complete = [doc1, doc2, doc3, doc4]

stop = set(stopwords.words('english'))
exclude = set(string.punctuation) 
lemma = WordNetLemmatizer()


def clean(doc):
    stop_free = " ".join([i for i in doc.lower().split() if i not in stop])
    punc_free = ''.join(ch for ch in stop_free if ch not in exclude)
    normalized = " ".join(lemma.lemmatize(word) for word in punc_free.split())
    return normalized


doc_clean = [clean(doc).split() for doc in doc_complete]

print(doc_clean)

# Creating the term dictionary of our courpus, where every unique term is assigned an index.

Dictionary = corpora.Dictionary(doc_clean)

# Converting list of documents (corpus) into Document Term Matrix using dictionary prepared above.
doc_term_matrix = [Dictionary.doc2bow(doc) for doc in doc_clean]

# Creating the object for LDA model using gensim library
Lda = gensim.models.ldamodel.LdaModel

# Running and Trainign LDA model on the document term matrix.
ldamodel = Lda(doc_term_matrix, num_topics=3, id2word = Dictionary, passes=50)


print(ldamodel.print_topics(num_topics=3, num_words=3))
```

## Resources ##
https://www.analyticsvidhya.com/blog/2016/08/beginners-guide-to-topic-modeling-in-python/

https://radimrehurek.com/gensim/

http://chdoig.github.io/pygotham-topic-modeling/#/7
