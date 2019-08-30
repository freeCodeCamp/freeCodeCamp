# How to work on Guide topics

With your help, we can create a comprehensive reference tool that will help millions of people who are learning to code, for years to come. Guide topics are located in [our forum](https://www.freecodecamp.org/forum/c/guide) under the `Guide` category.

You can [help us by Creating and Editing Guide Topics](#creating-and-editing-guide-topics).

## Creating and editing Guide topics

Use the [forum search feature](https://www.freecodecamp.org/forum/search?expanded=true&q=%23guide) to find existing topics you want to [edit](#editing-an-existing-guide-topic) or to make sure the topic you want to create does not already exist. Whether editing or adding a new Guide topic, you should read about [styling best practices for Guide topics](#style-guide-for-creating-and-editing-guide-topics) to make your topic stand out.

### Editing an existing Guide topic

The Guide topics on the forum are wikis which can be edited by users.  Only users with Level 1 status can edit the wikis. 
1. Click the `Edit` button located at the bottom right of the post an
2. Make your desired changes using the editor.
3. Click `Save Edit`.

### Creating a new Guide topic

1. Click the `+ New Topic` button at top of the forum.
2. Add a Topic Title.
3. Select `Guide` in the category dropdown.
3. Add your new content using the editor.
4. Click `+ Create Topic`.

### When do we edit or remove topics

We may change or remove a topic:

- if the topic title is not relevant
- if there is zero/little effort in it (e.g: copy-pasting from another source like Wikipedia)
- if it includes text copied from a copyrighted source
- if it does not respect the [Style guide for writing topics](#style-guide-for-creating-and-editing-guide-topics)
- if it does not respect the [Academic Honesty policy](https://www.freecodecamp.org/academic-honesty)
- if any of the content violates the [freeCodeCamp Code of Conduct](https://www.freecodecamp.org/news/code-of-conduct)
- if a new Guide topic wiki contains only links and no other relevant content

### Getting Help

There's a community of support from a whole team of contributors, whom you can bounce ideas off of and ask for input on your writing.

Stay active in the [contributors' chat room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

### Style guide for creating and editing Guide topics

We recommend the following guidelines for writing Guide topics to help you get started with contributing and creating helpful topics.

#### Title

Topic titles should be as short, concise, and to-the-point as possible.

We want campers to quickly find the information they're looking for, and the title should reflect the main theme of the topic.

#### Modularity

Each topic should explain exactly one concept, and that concept should be apparent from the topic's title.

We can reference other topics by linking to them inline, or in an "Other Resources" section at the end of the topic.

Our goal is to have thousands of topics that cover a broad range of technical concepts.

#### Code Blocks

Campers will likely use Guide topics as a quick reference to look up syntax. Topics should have simple real-world examples that show common use-cases of that syntax.

GitHub-flavored markdown supports [syntax highlighting in code blocks](https://help.github.com/topics/creating-and-highlighting-code-blocks/#syntax-highlighting) for many programming languages.

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

- To ensure correct rendering, each code block must have a language label. You can find a list of supported languages [here](http://prismjs.com/#languages-list ).
- For codeblocks with no appropriate language, use a code fence (3 backticks) like ` ``` `.

Finally, here are some suggested formatting guidelines when writing code blocks:

- JavaScript statements should end with a `;` semicolon
- Comments made should have a space between the comment characters and the comment themselves

    ```javascript
    // Like this
    ```

#### Links

Use Markdown style links in your topics to link to other websites.

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

#### Lists

You can make an unordered list by preceding one or more lines of text with - or *
To order your list, precede each line with a number.

```markdown
    - Hello user!
    * Hey there!

```

#### Images

We do not recommend adding images to a topic unless necessary. Images hurt Web Accessibility, they are difficult to maintain and may get outdated. They are also slow to load on poor connections, thus, hurt web performance.

For including images in a topic under compelling reasons, if they aren't already hosted somewhere else on the web, you will need to put them online yourself using a platform like [Imgur](https://imgur.com/) or [Flickr](https://www.flickr.com). You can also host images by committing them to a git repository and pushing it to GitHub. Then you can right-click the image and copy its URL.

We don't allow hosting images directly in the git repository because it would make it far too big (people pulling it to their local system to make changes would end up downloading all the images), and because it is easier to change an image by just changing the URL in a topic than by putting the new image in the repository.

To include the image in your topic, use the appropriate markdown syntax:

```markdown
![Image Title](https://url-to-image)
```

Then the images should show up when you click the <kcd>Preview</kcd> tab.

You can also add diagrams, graphics, or visualizations as necessary.

You can even embed relevant YouTube videos.

Don't use emojis or emoticons in the Guide. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

#### Attributions

To minimize the potential for plagiarism and maintain integrity in this guide, it is important to give credit where necessary.

Any material quoted, or used directly and unchanged, from source material should be wrapped in quotation marks and be adequately cited. Material that is not a direct quote but is still paraphrased from a different resource should also be cited.

You can create superscript numerals to mark content that is cited using `<sup></sup>` tags.

Like so: <sup>1</sup>

1. freeCodeCamp - Attributions

Then, at the bottom of your topic, place a

```markdown
### Sources
```

heading and include all of your citations numbered to correspond with your sources.

An example is highlighted below.

```markdown
Here is some content that should be cited.<sup>1</sup>

And here is even more that should be cited from another source.<sup>2</sup>

#### Sources

1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: October 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
```

You can check out the [Purdue link referenced above](https://owl.english.purdue.edu/owl/resource/747/08/) to see how to properly cite web sources (they even show how to cite tweets!).

Typically, an attribution has a structure like the following:

> Author Last Name, Author First Name. "topic Title." *Publication.* Publisher. Date Published. Date Accessed.

If you cannot find an author or a publication date, which is common, simply omit these.

Use of proper citations will not only keep the guide reputable but these citations and links will also provide valuable resources should the reader want to learn more about the topic.

Also note that instances of blatant plagiarism will be either removed or have their pull requests declined, and the user will receive a warning.

Please refer to and review freeCodeCamp's [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty) before contributing.

#### Resources

If there are other Guide resources you think campers would benefit from, add them at the bottom in a "Resources" section with a bulleted list.

```markdown
### Resources

- [A New Resource](#link)
```

#### Formatting

Use double quotes where applicable.

Format language keywords as code - this is done with the backtick key (located to the left of the "1" key on a US keyboard) in GitHub-flavored markdown. For example, put backticks around HTML tag names or CSS property names.

Use the Oxford Comma when possible (it is a comma used after the penultimate item in a list of three or more items, before ‘and’ or ‘or’ e.g. an Italian painter, sculptor, and architect). It makes things easier, clearer, and prettier to read.

#### Technical Writing

Technical writing, or the literature of science and technology, is hard.

You'll need to take a technical (usually abstract) topic and explain it in a clear, accurate, and objective manner.

You'll likely go through several rounds of proofreading and editing before you're happy with the result.

##### Outline

Before you begin writing, create an outline of the topic and think about any coding examples you'll use (if applicable).

This helps to organize your thoughts and make the writing process easier.

##### Intro

The introduction paragraph should only be 1-2 sentences long and be a simple explanation of the main topic. It should limit the use of any links to other Guide topics, as they can be distracting.

##### Content

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

##### Clarity

Topics should be written in short, clear sentences, and use as little jargon as necessary.

All jargon should be defined immediately in plain English.

##### Voice

Use active voice instead of passive voice. Generally, it's a stronger and more straightforward way to communicate a subject. For example:

##### Passive

The `for` loop in JavaScript is used by programmers to...

##### Active

Programmers use the `for` loop in JavaScript to...

##### Point of View

Text should use the second person ("you") to help to give it a conversational tone.

This way, the text and instructions seem to speak directly to the camper reading it.

Try to avoid using the first person ("I", "we", "let's", and "us").

##### Abbreviations

If you want to abbreviate a term in your topic, write it out fully first, then put the abbreviation in parentheses.

For example, `"In computer science, an abstract syntax tree (AST) is ..."`

##### Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in Guide topics.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js

Front-end development (an adjective form with a dash) is when you're working on the front end (noun form with no dash). The same goes for the back end, full-stack, and many other compound terms.

#### Third-Party Tools

To check for grammar and spelling, we recommend using an app like [Grammarly](https://grammarly.com) or a built-in extension/plugin that checks for this within your text editor.

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


### Curriculum Challenge Hints and Solutions

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the comments below the main wiki post.  Select moderators will review the comments and decide whether or not to include the changes in the existing topic.

#### Adding New Challenge Related Topics

Only moderators should add new hints and solutions topics when new challenges are added to the curriculum.  

Take the following steps when adding a new challenge hints/solutions related topic.

1. Start by following the same steps for [creating a new topic](creating-a-new-guide-topic) but review the next for creating the title.
2. The title of the topic should start with "freeCodeCamp Challenge Guide: " concatenated with the actual title of the curriculum challenge. For example, if the challenge is named "Chunky Monkey", the topic title would be "freeCodeCamp Challenge Guide: Chunky Monkey".
3. `camperbot` should be the owner of these topics/posts, so you will need to request an admin to change the ownership of the main post to `camperbot`.
4. Once the new topic is created, a forum topic id is created.  It is located at the end of the forum topic URL.  This id must be added to the frontmatter of the curriculum challenge file via the normal pull request process for the `Get a Hint` button to link to the topic.

#### Guidelines for content of hints and solutions topics

When proposing a solution for a curriculum challenge related Guide topic, the full code should be given. This includes all the original seed code plus any changes needed to pass all the challenge tests.
