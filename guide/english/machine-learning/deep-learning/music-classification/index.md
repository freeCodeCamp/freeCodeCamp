---
title: Music Classification
---
## Music Classification

Music classification is yet another field where deep learning strategies could be applied in order to attain higher classfication accuracies than traditional machine learning methods. Deep Neural Networks which were originally being used for image recognition and computer vision tasks could be employed for music classification through the use of spectrograms. A spectrogram is nothing but a visual representation of the spectrum of frequencies present in the music over a period of time. In other words, a music signal which is a resultant frequency, could be separated into its spectrum of frequencies and the loudness in terms of dB could be visually represented for each frequency. This image could be used for training a neural net that classifies such spectrograms. A great use-case is genre recognition.
### The follwing are examples of various spectrograms:
![Spectrogram1](http://deepsound.io/images/new_blues_00.png)

The above spectrogram is of a song from the blues genre. Frequencies are along the y-axis, and time on x-axis. The brighter colors represent that the sound of that frequency is loud whereas darker colors represents they are soft at those particular points in time. Such an image containing so much data could be used to train a neural network. We generally use a mel-scaled spectrogram for the purpose of genre recognition, which is a scale of pitches judged by listeners, i.e., how we perceive such frequencies to distinguish between components of various genres. 

**Fourier transforms**

An important detail to know is that such spectrograms are created with the help of a mathematical concept known as Fourier transforms. The Fourier transform decomposes a function of time into the frequencies that make it up. 

#### More information
If you are using python, there are many libraries for signal processing. [Librosa](https://librosa.github.io/librosa/) is a famous one, another is [scipy](https://scipy.org/) which could also be used for other scientific purposes. mel-spectrograms could be created be leveraging these libraries.
##### Please take a look at the following links for more info on the above topic:
- [Finding Genre](https://hackernoon.com/finding-the-genre-of-a-song-with-deep-learning-da8f59a61194)
- [Deepsound](http://deepsound.io/music_genre_recognition.html)
