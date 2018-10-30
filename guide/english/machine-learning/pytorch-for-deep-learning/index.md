---
title: Deep Learning using PyTorch
---


#### What is PyTorch?
"PyTorch is open source deep learning platform primarily developed by Facebook's artificial-intelligence research group,that provides a seamless path from research prototyping to production deployment which has been adopted by many (if not most) of the researchers that we most respect."


* In PyTorch things are way more imperative and dynamic: you can define, change and execute nodes as you go, no special session interfaces or placeholders like in Tensorflow. Overall, the framework is more tightly integrated with Python language and feels more native most of the times.

* Since computation graph in PyTorch is defined at runtime you can use our favorite Python debugging tools such as pdb, ipdb, PyCharm debugger or old trusty print statements.


* One of the biggest features is declarative data parallelism: you can use **torch.nn.DataParallel** to wrap any module and it will be (almost magically) parallelized over batch dimension. This way you can leverage multiple GPUs with almost no effort.


* Recently PyTorch 1.0 introduces lots of amazing features, including native C++ API, JIT compilation and ONNX integration. This means that you will be able to write production-ready services and do what TensorFlow Serving does. This is a big step to PyTorch and surely will empower its position as a fully featured framework for both research and production purposes.



#### More Information:
* [PyTorch official wensite](https://pytorch.org/)
* [PyTorch GitHub Repository](https://github.com/pytorch/pytorch)
* [Wikipedia—PyTorch](https://en.wikipedia.org/wiki/PyTorch)