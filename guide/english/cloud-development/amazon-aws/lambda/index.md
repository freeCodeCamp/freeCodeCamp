---
title: AWS Lambda
--- 
## AWS Lambda
AWS Lambda is a Function as a Service (FaaS) compute service offering by Amazon Web Services.  

It's an event based system for running code in the cloud. You don’t worry about servers, only the code you write. It scales automatically and only charges you for the time it's actually running the code, the _compute time_.

The key takeaway is that **you don't care about the infrastructure, only the code you write**.

> AWS Lambda is a compute service that lets you run code without provisioning or managing servers.
— AWS Documentation

### Function as a Service (FaaS)
Think about only using functions. No more managing servers. You only care about the code. Sounds rather cool.

This is called Function as a Service. The concept is based on Serverless computing. It gives you the ability to deploy any individual piece of code, or function. 

This code runs and returns a value, in turn ending the process. All the services and endpoints you would usually keep in one place are now sliced up into a bunch of tiny snippets, microservices. The goal is to completely abstract away servers from the developer and only bill based on the amount of time the functions have been running and how many times they've been invoked. Meaning services such as these are easy to scale.

### How AWS Lambda works

- Upload code to AWS Lambda or write code in the online code editor.
- Set up event triggers from other AWS services, or HTTP endpoints, to run your code.
- AWS Lambda runs your code when triggered, using only the resources it needs.
- Only pay for compute time.

### Benefits

- No servers to manage

  AWS Lambda automatically runs your code without requiring you to provision or manage servers. Just write the code and upload it to Lambda.

- Continuous scaling

  AWS Lambda automatically scales your application by running code in response to each trigger. Your code runs in parallel and processes each trigger individually, scaling precisely with the size of the workload.

- Subsecond metering

  With AWS Lambda, you are charged for every 100ms your code executes and the number of times your code is triggered. You don't pay anything when your code isn't running.




### Resources:

- [Lambda overview on AWS](https://aws.amazon.com/lambda/)
- [A crash course on serverless with Node.js](https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44)

### More Information:

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
