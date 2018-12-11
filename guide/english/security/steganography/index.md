---
title: Steganography
---
## Steganography

Steganography is the concept of conceling text, images, files, or videos within other text, images, files or videos. An offline example of this is using "invisible ink" to conceal a message between the lines of a letter. Lemon juice is a popular candidate for invisible ink: 
[lemon juice invisible ink](https://www.youtube.com/embed/poCnU_crpjQ)

The following formula provides a very generic description of the pieces of the steganographic process:

cover_medium + hidden_data + steganography_key = stegonography_medium

In this context, the cover_medium is the file that obscures the hidden_data, which may also be encrypted using the steganography_key. The resultant file is the steganography_medium. The cover_medium (and, thus, the steganography_medium) are usually image or audio files.

### Steganography in images
On computers, images are stored as binary files. They contain a binary representation of the color or light intensity of each picture element (pixel) comprising the image. For example, this image of a dog: 

![american eskimo dog](https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg)

might start out with something like: 

```
10010101   00001101   11001001
10010110   00001111   11001010
10011111   00010000   11001011
...
```

The simplest approach to hiding data within an image file is called least significant bit (LSB) insertion. In this method, we can take the binary representation of the hidden_data and overwrite the LSB of each byte within the cover_image. If we are using 24-bit color, the amount of change will be minimal and indistinguishable to the human eye.

While JPEG can be used for stego applications, it is more common to embed data in GIF or BMP files. GIF and 8-bit BMP files employ what is known as lossless compression, a scheme that allows the software to exactly reconstruct the original image. JPEG, on the other hand, uses lossy compression, which means that the expanded image is very nearly the same as the original but not an exact duplicate.
 
This short demo will get you set up with encoding text in an image! https://github.com/edwdryer/steganography-demo
You can read more about steganography in images here: http://www.garykessler.net/library/steganography.html

### Steganography in audio
Audio steganography is a technique used to transmit hidden information by modifying an audio signal in an imperceptible manner.

This blogpost provides an example of concealing an image in an audio file (wow)! https://solusipse.net/blog/post/basic-methods-of-audio-steganography-spectrograms/
