# Style guide for creating and editing Guide Articles

We recommend the following guidelines to writing Guide articles to help you get started contributing and creating helpful articles.

## Title

Article titles should be as short, concise, and to-the-point as possible.

We want campers to quickly find the information they're looking for, and the title should reflect the main theme of the article.

Folder name is used in the URL, so only use dashes (-), numbers (0-9), and lowercase letters (a-z) for it.

However, you can include special characters in the article title.

Here are some examples of properly named titles:

> [`src/pages/html/tables/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/html/tables/index.md)

```markdown
---
title: Tables
---
```

> [`src/pages/css/borders/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/css/borders/index.md)

```markdown
---
title: Borders
---
```

> [`src/pages/javascript/loops/for-loop/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/javascript/loops/for-loop/index.md)

```markdown
---
title: For Loop
---
```

## Modularity

Each article should explain exactly one concept, and that concept should be apparent from the article's title.

We can reference other articles by linking to them inline, or in an "Other Resources" section at the end of the article.

Our goal is to have thousands of articles that cover a broad range of technical topics.

## Code Blocks

Campers will likely use Guide articles as a quick reference to look up syntax. Articles should have simple real-world examples that show common-use cases of that syntax.

GitHub-flavored markdown supports [syntax highlighting in code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) for many programming languages.

To use it, indicate the language after ```.

For example, the following Markdown

```markdown
    ```html
    <div class='awesome' id='more-awesome'>
      <p>This is text in html</p>
    </div>
    ```
```

will output the following code block with `HTML` syntax highlighting since we indicated the language `html` after the ```.

```html
<div class='awesome' id='more-awesome'>
  <p>This is text in html</p>
</div>
```

The following represents two other examples using JavaScript and CSS syntax highlighting.

```markdown
    ```javascript
    function logTheThings(stuff) {
      console.log(stuff);
    }
    ```

    ```css
    .awesome {
      background-color: #FCCFCC;
    }
    ```
```

Please keep the following recommendations in mind:

- To ensure correct rendering, each codeblock must have a language label. You can find a list of supported languages [here](http://prismjs.com/#languages-list ).
- For codeblocks with no appropriate language, use generic labels like ` ```text `, or ` ```code `.
- You may know about markdown's four-space indentation syntax for writing codeblocks. However, this is currently __not__ supported by our rendering system.

Finally, here are some suggested formatting guidelines when writing code blocks:

- JavaScript statements should end with a `;` semicolon
- Comments made should have a space between the comment characters and the comment themselves
    ```javascript
    // Like this
    ```

## Links

Use Markdown style links in your articles to link to other websites.

```markdown
[freeCodeCamp](https://www.freecodecamp.org/)
```

> **Important**
> Make sure that you are using HTTPS links. This is very important to avoid insecure content warnings.
>
> Also, do not use short links like `bit.ly` or `amzn.to` links. This is a security risk. Short links are [vulnerable to redirection based attacks](https://security.stackexchange.com/questions/59517/are-url-shorteners-vulnerable-due-to-open-redirects).
>
> Instead, simply use the long version of the links, removing any query parameters.
> Ex:
> `https://example.com/a-long/url/to-a-webpage/?queryParam=something&queryParam=somethingelse`
> becomes
> `https://example.com/a-long/url/to-a-webpage/`

## List

You can make an unordered list by preceding one or more lines of text with - or *
To order your list, precede each line with a number.

```markdown
    - Hello user!
    * Hey there!

```

## Images

For including images, if they aren't already hosted somewhere else on the web, you will need to put them online yourself using a platform like [Imgur](https://imgur.com/) or [Flickr](https://www.flickr.com). You can also host images by committing them to a git repository and pushing it to GitHub. Then you can right-click the image and copy its URL.

We don't allow hosting images directly in the git repository because it would make it far too big (people pulling it to their local system to make changes would end up downloading all the images), and because it is easier to change an image by just changing the URL in an article than by putting the new image in the repository.

To include the image in your article, use the appropriate markdown syntax:

```markdown
![Image Title](https://url-to-image)
```

Then the images should show up when you click the <kcd>Preview</kcd> tab.

You can also add diagrams, graphics, or visualizations as necessary.

You can even embed relevant YouTube videos and interactive [REPL.it](https://repl.it/) code editors.

Don't use emojis or emoticons in the Guide. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

## Attributions

To minimize the potential for plagiarism and maintain integrity in this guide, it is important to give credit where necessary.

Any material quoted, or used directly and unchanged, from source material should be wrapped in quotation marks and be adequately cited. Material that is not a direct quote but is still paraphrased from a different resource should also be cited.

You can create superscript numerals to mark content that is cited using `<sup></sup>` tags.

Like so: <sup>1</sup>

1. freeCodeCamp - Attributions

Then, at the bottom of your article, place a

```markdown
### Sources
```

heading and include all of your citations numbered to correspond with your sources.

An example is highlighted below.

```markdown
Here is some content that should be cited.<sup>1</sup>

And here is even more that should be cited from another source.<sup>2</sup>

### Sources

1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: October 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
```

You can check out the [Purdue link referenced above](https://owl.english.purdue.edu/owl/resource/747/08/) to see how to properly cite web sources (they even show how to cite tweets!).

Typically, an attribution has a structure like the following:

> Author Last Name, Author First Name. "Article Title." *Publication.* Publisher. Date Published. Date Accessed.

If you cannot find an author or published date, which is common, simply omit these.

Use of proper citations will not only keep the guide reputable, but these citations and links will also provide valuable resources should the reader want to learn more about the topic.

Also note that instances of blatant plagiarism will be either removed or have their pull requests declined, and the user will receive a warning.

Please refer to and review freeCodeCamp's [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty) before contributing.

## Resources

If there are other Guide resources you think campers would benefit from, add them at the bottom in a "Resources" section with a bulleted list.

```markdown
### Resources

- [A New Resource](#link)
```

## Formatting

Use double quotes where applicable.

Format language keywords as code - this is done with the backtick key (located to the left of the "1" key on a US keyboard) in GitHub-flavored markdown. For example, put back ticks around HTML tag names or CSS property names.

Use the Oxford Comma when possible (it is a comma used after the penultimate item in a list of three or more items, before ‘and’ or ‘or’ e.g. an Italian painter, sculptor, and architect). It makes things easier, clearer, and prettier to read.

## Technical Writing

Technical writing, or the literature of science and technology, is hard.

You'll need to take a technical (usually abstract) topic and explain it in a clear, accurate, and objective manner.

You'll likely go through several rounds of proofreading and editing before you're happy with the result.

## Outline

Before you begin writing, create an outline of the topic and think about any coding examples you'll use (if applicable).

This helps to organize your thoughts and make the writing process easier.

## Intro

The introduction paragraph should only be 1-2 sentences long and be a simple explanation of the main topic. It should limit the use of any links to other Guide articles, as they can be distracting.

## Content

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

## Clarity

Articles should be written with short, clear sentences, and use as little jargon as necessary.

All jargon should be defined immediately in plain English.

## Voice

Use active voice instead of passive voice. Generally, it's a stronger and more straightforward way to communicate a subject. For example:

### Passive

The `for` loop in JavaScript is used by programmers to...

### Active

Programmers use the `for` loop in JavaScript to...

## Point of View

Text should use the second person ("you") to help to give it a conversational tone.

This way, the text and instructions seem to speak directly to the camper reading it.

Try to avoid using the first person ("I", "we", "let's", and "us").

## Abbreviations

If you want to abbreviate a term in your article, write it out fully first, then put the abbreviation in parentheses.

For example, `"In computer science, an abstract syntax tree (AST) is ..."`

## Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in Guide articles.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js

Front-end development (adjective form with a dash) is when you're working on the front end (noun form with no dash). The same goes for the back end, full stack, and many other compound terms.

## Third-Party Tools

To check for grammar and spelling, we recommend using an app like [Grammarly](https://grammarly.com) or a built in extension/plugin that checks for this within your text editor.

- [VS Code](https://code.visualstudio.com/) - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Sublime Text 3](https://www.sublimetext.com/docs/3/spell_checking.html)

To check your writing style, we recommend the  [Hemingway App](http://www.hemingwayapp.com/).

There’s nothing magical about this simple tool, but it will automatically detect widely agreed-upon style issues:

- passive voice
- unnecessary adverbs
- words that have more common equivalents

The Hemingway App will assign a "grade level" for your writing.

You should aim for a grade level of 6.

Another tool available is the [De-Jargonizer](http://scienceandpublic.com/), originally designed for scientific communication but might help avoid overspecialized wording.
