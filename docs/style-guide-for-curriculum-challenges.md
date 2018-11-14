# A guide to designing freeCodeCamp coding challenges

> "Talk is cheap. Show me the code." — Linus Torvalds

freeCodeCamp offers 1,200 hours of interactive coding challenges. These are 100% focused on the practical skill of building software. You code the entire time. You learn to code by coding.

You can learn theory through free online university courses. freeCodeCamp will focus instead on helping you learn to code and practice by building apps.

With that practical focus in mind, let’s talk about the requirements for our coding challenges. (Note that these requirements do not apply to our algorithm challenges, checkpoint challenges, or projects.)

**Table of Contents**

- [Proper nouns](#proper-nouns)
- [The 2-minute rule](#the-2-minute-rule)
- [Modularity](#modularity)
- [Naming challenges](#naming-challenges)
- [Writing tests](#writing-tests)
- [Writing instructions](#writing-instructions)
- [Formatting challenge text](#formatting-challenge-text)
- [Formatting seed code](#formatting-seed-code)
- [Why do we have all these rules?](#why-do-we-have-all-these-rules)

## Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js

Front-end development (adjective form with a dash) is when you're working on the front end (noun form with no dash). The same goes with "back end", "full stack", and many other compound terms.

## The 2-minute rule

Each challenge should be solvable within 120 seconds  by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions, understand the seeded code, write their own code, and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:
- simplify the challenge, or
- split the challenge into two challenges.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We have JavaScript events that track how long it takes for campers to solve challenges and we can use them to identify challenges that need to be simplified or split.

## Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

## Naming challenges

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

[verb] [object clause]

Here are some example challenge names:

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String

## Numbering Challenges

Every challenge needs an `id`. If you don't specify one, then MongoDB will create a new random one when it saves the data; however, we don't want it to do that, since we want the challenge ids to be consistent across different environments (staging, production, lots of different developers, etc.).

To generate a new one in a shell (assuming MongoDB is running separately):

1. Run `mongo` command
2. Run `ObjectId()` command

For example:

```sh
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
```

The result is a new id, for example `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```
  

## Writing tests

Challenges should have the minimum number of tests necessary to verify that a camper understands a concept.

Our goal is to communicate the single point that the challenge is trying to teach, and test that they have understood that point.

Challenge tests can make use of the Node.js and Chai.js assertion libraries. Also, if needed, user-generated code can be accessed in the `code` variable.

## Writing instructions

Challenges should be written with short, clear sentences, and use as little jargon as necessary. All jargon should be defined immediately in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way, the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. And campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's wiki article on the forum.

You can add diagrams if absolutely necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

## Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Language keywords go in `<code>` tags. For example, HTML tag names or CSS property names
- The first instance of a keyword when it's being defined, or general keywords (i.e. "object" or "immutable") go in `<dfn>` tags
- Single line code examples go in `<code>` tags
- Multi-line code examples go in `<blockquote>` tags, and use the `<br>` tag to separate lines. For HTML examples, remember to use escape characters to represent the angle brackets
- A single horizontal rules (`<hr>` tag) should separate the text discussing the challenge concept and the challenge instructions
- Additional information in the form of a note should be formatted `<strong>Note</strong><br>Rest of note text...`
- Use double quotes where applicable

## Formatting seed code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable
- Comments made should have a space between the comment characters and the comment themselves

    `// Fix this line`

## Why do we have all these rules?

Our goal is to have a fun, clear interactive learning experience.

Designing interactive coding challenges is hard. It would be so much easier to write a lengthy explanation, or to create a video tutorial. There's a place for those on Medium and YouTube. But for our core curriculum, we're sticking with what works best for most people - a fully interactive, video game-like experience.

We want campers to achieve a flow state. We want them to build momentum and blast through our curriculum with as few snags as possible. We want them to go into the projects with confidence and a wide exposure to programming concepts.

Creating these challenges requires immense creativity and attention to detail. But you'll have plenty of help. You have support from a whole team of contributors, whom you can bounce ideas off of and demo your challenges to. Stay active in the [contributors room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

With your help, we can design an interactive coding curriculum that will help millions of people learn to code for years to come.
