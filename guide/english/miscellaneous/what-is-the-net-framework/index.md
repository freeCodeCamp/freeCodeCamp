 - > The .Net framework is a software development platform developed by Microsoft. The framework was meant to create applications, which would run on the Windows Platform. The first version of the .Net framework was released in the year 2002.

 - > The version was called .Net framework 1.0. The .Net framework has come a long way since then, and the current version is 4.7.1.

 - > The .Net framework can be used to create both - Form-based and Web-based applications. Web services can also be developed using the .Net framework.

 - > The framework also supports various programming languages such as Visual Basic and C#. So developers can choose and select the language to develop the required application. In this chapter, you will learn some basics of the .Net framework.

 - > The basic architecture of the .Net framework is as shown below.
(https://www.guru99.com/images/c-sharp-net/052416_1343_WhatisNETFr1.png ".net framework architecture diagram")


 - > What is .NET Framework

    #**.NET Components**
The architecture of the .Net framework is based on the following key components;

##1. Common Language Runtime
The "Common Language Infrastructure" or CLI is a platform on which the .Net programs are executed.

The CLI has the following key features:

 -- Exception Handling - Exceptions are errors which occur when the application is executed.

Examples of exceptions are:

   > If an application tries to open a file on the local machine, but the file is not present.
   > If the application tries to fetch some records from a database, but the connection to the database is not valid.

 -- Garbage Collection - Garbage collection is the process of removing unwanted resources when they are no longer required.

Examples of garbage collection are

  > A File handle which is no longer required. If the application has finished all operations on a file, then the file handle may no longer be required.
  > The database connection is no longer required. If the application has finished all operations on a database, then the database connection may no longer be required.
  
 -- Working with Various programming languages –

As noted in an earlier section, a developer can develop an application in a variety of .Net programming languages.

 a. Language - The first level is the programming language itself, the most common ones are VB.Net and C#.
 b. Compiler – There is a compiler which will be separate for each programming language. So underlying the VB.Net language, there will be a separate VB.Net compiler. Similarly, for C#, you will have another compiler.
 c. Common Language Interpreter – This is the final layer in .Net which would be used to run a .net program developed in any programming language. So the subsequent compiler will send the program to the CLI layer to run the .Net application.
(https://www.guru99.com/images/c-sharp-net/052416_1343_WhatisNETFr2.png "What is .NET Framework")

##2. Class Library
The .NET Framework includes a set of standard class libraries. A class library is a collection of methods and functions that can be used for the core purpose.

For example, there is a class library with methods to handle all file-level operations. So there is a method which can be used to read the text from a file. Similarly, there is a method to write text to a file.

Most of the methods are split into either the System.* or Microsoft.* namespaces. (The asterisk * just means a reference to all of the methods that fall under the System or Microsoft namespace)

A namespace is a logical separation of methods. We will learn these namespaces more in detail in the subsequent chapters.

##3. Languages
The types of applications that can be built in the .Net framework is classified broadly into the following categories.

 * WinForms – This is used for developing Forms-based applications, which would run on an end user machine. Notepad is an example of a client-based application.
 * ASP.Net – This is used for developing web-based applications, which are made to run on any browser such as Internet Explorer, Chrome or Firefox.
   - The Web application would be processed on a server, which would have Internet Information Services Installed.
   - Internet Information Services or IIS is a Microsoft component which is used to execute an Asp.Net application.
   - The result of the execution is then sent to the client machines, and the output is shown in the browser.
 * ADO.Net – This technology is used to develop applications to interact with Databases such as Oracle or Microsoft SQL Server.

Microsoft always ensures that .Net frameworks are in compliance with all the supported Windows operating systems.

#**.Net Framework Design Principle**

The following design principles of the .Net framework is what makes it very relevant to create .Net based applications.

1. Interoperability - The .Net framework provides a lot of backward support. Suppose if you had an application built on an older version of the .Net framework, say 2.0. And if you tried to run the same application on a machine which had the higher version of the .Net framework, say 3.5. The application would still work. This is because with every release, Microsoft ensures that older framework versions gel well with the latest version.

2. Portability- Applications built on the .Net framework can be made to work on any Windows platform. And now in recent times, Microsoft is also envisioning to make Microsoft products work on other platforms, such as iOS and Linux.

3. Security - The .NET Framework has a good security mechanism. The inbuilt security mechanism helps in both validation and verification of applications. Every application can explicitly define their security mechanism. Each security mechanism is used to grant the user access to the code or to the running program.

4. Memory management - The Common Language runtime does all the work or memory management. The .Net framework has all the capability to see those resources, which are not used by a running program. It would then release those resources accordingly. This is done via a program called the "Garbage Collector" which runs as part of the .Net framework.
The garbage collector runs at regular intervals and keeps on checking which system resources are not utilized, and frees them accordingly.

5. Simplified deployment - The .Net framework also have tools, which can be used to package applications built on the .Net framework. These packages can then be distributed to client machines. The packages would then automatically install the application.

#**Summary**

 1. .Net is a programming language developed by Microsoft. It was designed to build applications which could run on the Windows platform.
2. The .Net programming language can be used to develop Forms based applications, Web based applications, and Web services.
3. Developers can choose from a variety of programming languages available on the .Net platform. The most common ones are VB.Net and C#.
