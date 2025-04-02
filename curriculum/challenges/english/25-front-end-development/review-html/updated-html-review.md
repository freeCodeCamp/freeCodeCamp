---
id: 671a883163d5ab5d47145880
title: HTML Review
challengeType: 24
dashedName: review-html
---

# --description--

Review the concepts below to prepare for the upcoming prep exam.

## HTML Basics

- **Role of HTML**: Foundation of web structure.
- **HTML Elements**: Used to represent content on the page. Most of them are made by an opening and a closing tag (e.g., `<h1></h1>`, `<p></p>`).
- **`div` elements**: The `div` element is a generic HTML element that does not hold any semantic meaning. It is used as a generic container to hold other HTML elements.
- **Void Elements**: Do not have a closing tag (e.g., `<img>`).
- **Attributes**: Adding metadata and behavior to elements.

## Identifiers and Grouping

- **IDs**: Unique element identifiers.
- **Classes**: Grouping elements for styling and behavior.

## Special Characters and Linking

- **HTML entities**: Using special characters like `&amp;` and `&lt;`.
- **`link` element**: Linking to external stylesheets.
- **`script` element**: Embedding external JavaScript files.

## Boilerplate and Encoding

- **HTML boilerplate**: Basic structure of a webpage, which includes the `DOCTYPE`, `html`, `head`, and `body` elements. It should be used as the starting point for an HTML document.
- **UTF-8 character encoding**: Ensuring universal character display.

## SEO and Social Sharing

- **Meta tags (`description`)**: Providing a short description for the web page and impacting SEO.
- **Open Graph tags**: Enhancing social media sharing.

## Media Elements and Optimization

- **Replaced elements**: Embedded content (e.g., images, iframes).
- **Optimizing media**: Techniques to improve media performance.
- **Image formats and licenses**: Understanding usage rights and types.
- **SVGs**: Scalable vector graphics for sharp visuals.

## Multimedia Integration

- **HTML audio and video elements**: Embedding multimedia.
- **Embedding with `<iframe>`**: Integrating external video content.

## Paths and Link Behavior

- **Target attribute types**: Controlling link behavior.
- **Absolute vs. relative paths**: Navigating directories.
- **Path syntax**: Understanding `/`, `./`, `../` for file navigation.
- **Link states**: Managing different link interactions (hover, active).

## Importance of Semantic HTML

- **Structural hierarchy for heading elements**: It is important to use the correct heading element to maintain the structural hierarchy of the content. The `h1` element is the highest level of heading and the `h6` element is the lowest level of heading.
- **Presentational HTML elements**: Elements that define the appearance of content. Ex. the deprecated `center`, `big` and `font` elements.
- **Semantic HTML elements**: Elements that hold meaning and structure. Ex. `header`, `nav`, `figure`.

## Semantic HTML Elements

- **Header element**: used to define the header of a document or section.
- **Main element**: used to contain the main content of the web page.
- **Navigation Section (`nav`) element**: represents a section with navigation links.
- **Figure element**: used to contain illustrations and diagrams.
- **Emphasis (`em`) element**: Marks text that has stress emphasis.

```html
<p>
  Never give up on <em>your</em> dreams.
</p>
```

- **Idiomatic Text (`i`) element**: Used for highlighting alternative voice or mood, idiomatic terms from another language, technical terms, and thoughts.

```html
<p>
  There is a certain <i lang="fr">je ne sais quoi</i> in the air.
</p>
```

The `lang` attribute inside the open `i` tag is used to specify the language of the content. In this case, the language would be French. The `i` element does not indicate if the text is important or not, it only shows that it's somehow different from the surrounding text.

- **Strong Importance (`strong`) element**: Marks text that has strong importance.

```html
<p>
  <strong>Warning:</strong> This product may cause allergic reactions.
</p>
```

- **Bring Attention To (`b`) element**: Used to bring attention to text that is not important for the meaning of the content. It's commonly used to highlight keywords in summaries or product names in reviews.

```html
<p>
  We tested several products, including the <b>SuperSound 3000</b> for audio quality, the <b>QuickCharge Pro</b> for fast charging, and the <b>Ecoclean Vacuum</b> for cleaning. The first two performed well, but the <b>Ecoclean Vacuum</b> did not meet expectations.
</p>
```

- **Description List (`dl`) element**: Used to represent a list of term-description groupings.
- **Description Term (`dt`) element**: Used to represent the term being defined.
- **Description Details (`dd`) element**: Used to represent the description of the term.

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

- **Block Quotation (`blockquote`) element**: Used to represent a section that is quoted from another source. This element has a `cite` attribute. The value of the `cite` attribute is the URL of the source.

```html
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
</blockquote>
```

- **Citation (`cite`) element**: Used to attribute the source of the referenced work visually. Marks up the title of the reference.

```html
<div>
  <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
  </blockquote>
  <p>
    -Quincy Larson, <cite>How to learn to Code and Get a Developer Job [Full Book].</cite>
  </p>
</div>
```

- **Inline Quotation (`q`) element**: Used to represent a short inline quotation.

```html
<p>
  As Quincy Larson said,
  <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Momentum is everything.
  </q>
</p>
```

- **Abbreviation (`abbr`) element**: Used to represent an abbreviation or acronym. To help users understand what the abbreviation or acronym is, you can show its full form, a human readable description, with the `title` attribute.

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.
</p>
```

- **Contact Address (`address`) element**: Used to represent the contact information. 
- **(Date) Time (`time`) element**: Used to represent a date and/or time. The `datetime` attribute is used to translate dates and times into a machine-readable format.

```html
<p>
  The reservations are for the <time datetime="20:00">20:00 </time>
</p>
```

- **ISO 8601 Date (`datetime`) attribute**: Used to represent dates and times in a machine-readable format. The standard format is `YYYY-MM-DDThh:mm:ss`, with the capital `T` being a separator between the date and time.
- **Superscript (`sup`) element**: Used to represent superscript text. Common use cases for the `sup` element would include exponents, superior lettering and ordinal numbers.

```html
<p>
  2<sup>2</sup> (2 squared) is 4.
</p>
```

- **Subscript (`sub`) element**: Used to represent subscript text. Common uses cases for the subscript element include chemical formulas, foot notes, and variable subscripts.

```html
<p>
  CO<sub>2</sub>
</p>
```

- **Inline Code (`code`) element**: Used to represent a fragment of computer code.
- **Preformatted Text (`pre`) element**: Represents preformatted text

```html
<pre>
  <code>
    body {
      color: red;
    }
  </code>
</pre>
```

- **Unarticulated Annotation (`u`) element**: Used to represent a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.

```html
<p>
  You can use the unarticulated annotation element to highlight
  <u>inccccort</u> <u>spling</u> <u>issses</u>.
</p>
```

- **Ruby Annotation (`ruby`) element**: Used for annotating text with pronunciation or meaning explanations. An example usage is for East Asian typography.
- **Ruby fallback parenthesis (`rp`) element**: Used as a fallback for browsers lacking support for displaying ruby annotations.
- **Ruby text (`rt`) element**: Used to indicate text for the ruby annotation. Usually used for pronunciation, or translation details in East Asian typography.

```html
<ruby>
  明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
```

- **Strikethrough (`s`) element**: Used to represent content that is no longer accurate or relevant.

```html
<p>
  <s>Tomorrow's hike will be meeting at noon.</s>
</p>
<p>
  Due to unforeseen weather conditions, the hike has been cancelled.
</p>
```

## HTML Form Elements and Attributes

- **`form` element**: used to create an HTML form for user input.
- **`action` attribute**: used to specify the URL where the form data should be sent.
- **`method` attribute**: used to specify the HTTP method to use when sending the form data. The most common methods are `GET` and `POST`.

```html
<form method="value-goes-here" action="url-goes-here">
  <!-- inputs go inside here -->
</form>
```

- **`input` element**: used to create an input field for user input.
- **`type` attribute**: used to specify the type of input field. Ex. `text`, `email`, `number`, `radio`, `checkbox`, etc.
- **`placeholder` attribute**: used to show a hint to the user to show them what to enter in the input field.
- **`value` attribute**: used to specify the value of the input. If the input has a `button` type, the `value` attribute can be used to set the button text.
- **`size` attribute**: used to define the number of characters that should be visible as the user types into the input.
- **`min` attribute**: can be used input types such as `number` to specify the minimum value allowed in the input field.
- **`max` attribute**: can be used input types such as `number` to specify the maximum value allowed in the input field.
- **`minlength` attribute**: used to specify the minimum number of characters required in an input field.
- **`maxlength` attribute**: used to specify the maximum number of characters allowed in an input field.
- **`required` attribute**: used to specify that an input field must be filled out before submitting the form.
- **`disabled` attribute**: used to specify that an input field should be disabled.
- **`readonly` attribute**: used to specify that an input field is read-only.

```html
<!-- Text input -->
<input 
  type="text"
  id="name"
  name="name"
  placeholder="e.g. Quincy Larson" 
  size="20"
  minlength="5"
  maxlength="30"
  required
/>

<!-- Number input -->
<input 
  type="number"
  id="quantity"
  name="quantity"
  min="2"
  max="10"
  disabled
/>

<!-- Button -->
<input type="button" value="Show Alert" />
```

- **`label` element**: used to create a label for an input field.
- **`for` attribute**: used to specify which input field the label is for.
- **Implicit form association**: inputs can be associated with labels by wrapping the input field inside the `label` element.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

- **Explicit form association**: inputs can be associated with labels by using the `for` attribute on the `label` element.

```html
<form action="">
  <label for="email">Email Address: </label>
  <input type="email" id="email" />
</form>
```

- **`button` element**: used to create a clickable button. A button can also have a `type` attribute, which is used to control the behavior of the button when it is activated. Ex. `submit`, `reset`, `button`.

```html
<button type="button">Show Form</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
```

- **`fieldset` element**: used to group related inputs together.
- **`legend` element**: used to add a caption to describe the group of inputs.

```html
<!-- Radio group -->
<fieldset>
  <legend>Was this your first time at our hotel?</legend>

  <label for="yes-option">Yes</label>
  <input id="yes-option" type="radio" name="hotel-stay" />

  <label for="no-option">No</label>
  <input id="no-option" type="radio" name="hotel-stay" />
</fieldset>

<!-- Checkbox group -->
<fieldset>
  <legend>
    Why did you choose to stay at our hotel? (Check all that apply)
  </legend>

  <label for="location">Location</label>
  <input type="checkbox" id="location" name="location" value="location" />

  <label for="price">Price</label>
  <input type="checkbox" id="price" name="price" value="price" />
</fieldset>
```

- **Focused state**: this is the state of an input field when it is selected by the user.

## Working with HTML Table Elements and Attributes

- **Table element**: used to create an HTML table.
- **Table Head (`thead`) element**: used to group the header content in an HTML table.
- **Table Row (`tr`) element**: used to create a row in an HTML table.
- **Table Header (`th`) element**: used to create a header cell in an HTML table.
- **Table body (`tbody`) element**: used to group the body content in an HTML table.
- **Table Data Cell (`td`) element**: used to create a data cell in an HTML table.
- **Table Foot (`tfoot`) element**: used to group the footer content in an HTML table.
- **`caption` element**: used to add a title of an HTML table.
- **`colspan` attribute**: used to specify the number of columns a table cell should span.

```html
<table>
  <caption>Exam Grades</caption>

  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Davis</td>
      <td>Alex</td>
      <td>54</td>
    </tr>

    <tr>
      <td>Doe</td>
      <td>Samantha</td>
      <td>92</td>
    </tr>

    <tr>
      <td>Rodriguez</td>
      <td>Marcus</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Average Grade</td>
      <td>78</td>
    </tr>
  </tfoot>
</table>
```

## HTML Tools

- **HTML validator**: A tool that checks the syntax of HTML code to ensure it is valid.
- **DOM inspector**: A tool that allows you to inspect and modify the HTML structure of a web page.
- **Devtools**: A set of web developer tools built directly into the browser that helps you debug, profile, and analyze web pages.

## Introduction to Accessibility

- **Web Content Accessibility Guidelines**: The Web Content Accessibility Guidelines (WCAG) are a set of guidelines for making web content more accessible to people with disabilities. The four principles of WCAG are POUR which stands for Perceivable, Operable, Understandable, and Robust.

## Assistive Technology for Accessibility

- **Screen readers**: Software programs that read the content of a computer screen out loud. They are used by people who are blind or visually impaired to access the web.
- **Large text or braille keyboards**: Used by people with visual impairments to access the web.
- **Screen magnifiers**: Software programs that enlarge the content of a computer screen. They are used by people with low vision to access the web.
- **Alternative pointing devices**: Used by people with mobility impairments to access the web. This includes devices such as joysticks, trackballs, and touchpads.
- **Voice recognition**: Used by people with mobility impairments to access the web. It allows users to control a computer using their voice.

## Accessibility Auditing Tools

- **Common Accessibility Tools**: Google Lighthouse, Wave, IBM Equal Accessibility Checker, and axe DevTools are some of the common accessibility tools used to audit the accessibility of a website.

## Accessibility Best Practices

- **Proper heading level structure**: You should use proper heading levels to create a logical structure for your content. This helps people using assistive technologies understand the content of your website.
- **Accessibility and Tables**: When using tables, you should use the `th` element to define header cells and the `td` element to define data cells. This helps people using assistive technologies understand the structure of the table. With the `caption` element, you can write the caption (or title) of a table, so users, especially those who use assistive technologies, can quickly understand the table's purpose and content. You should place the `caption` element immediately after the opening tag of the `table` element. This way, screen readers and other assistive technologies can provide more context by announcing the caption before reading the content.
- **Importance for inputs to have an associated label**: You should use the `label` element to associate labels with form inputs. This helps people using assistive technologies understand the purpose of the input.
- **Importance of good `alt` text**: You should use the `alt` attribute to provide a text alternative for images. This helps people using assistive technologies understand the content of the image.
- **Importance of good link text**: You should use descriptive link text to help users understand the purpose of the link. This helps people using assistive technologies understand the purpose of the link.
- **Best practices for making audio and video content accessible**: You should provide captions and transcripts for audio and video content to make it accessible to people with hearing impairments. You should also provide audio descriptions for video content to make it accessible to people with visual impairments.
- **`tabindex` attribute**: Used to make elements focusable and define the relative order in which they should be navigated using the keyboard. It is important to never use the `tabindex` attribute with a value greater than 0. Instead, you should either use a value of 0 or -1. For more information, review the prior lecture video on keyboard accessibility.

```html
<p tabindex="-1">Sorry, there was an error with your submission.</p>
```

- **`accesskey` attribute**: Used to define a keyboard shortcut for an element. This can help users with mobility impairments navigate the website more easily.

```html
<button accesskey="s">Save</button>
<button accesskey="c">Cancel</button>
<a href="index.html" accesskey="h">Home</a>
```

## WAI-ARIA, Roles, and Attributes

- **WAI-ARIA**: It stands for Web Accessibility Initiative - Accessible Rich Internet Applications. It is a set of attributes that can be added to HTML elements to improve accessibility. It provides additional information to assistive technologies about the purpose and structure of the content.
- **Aria roles**: A set of predefined roles that can be added to HTML elements to define their purpose. This helps people using assistive technologies understand the content of the website. Examples include `role="tab"`, `role="menu"`, and `role="alert"`.

There are six main categories of ARIA roles:

- **Document structure roles**: These roles define the overall structure of the web page. With these roles, assistive technologies can understand the relationships between different sections and help users navigate the content.
- **Widget roles**: These roles define the purpose and functionality of interactive elements, like scrollbars.
- **Landmark roles**: These roles classify and label the primary sections of a web page. Screen readers use them to provide convenient navigation to important sections of a page.
- **Live region roles**: These roles define elements with content that will change dynamically. This way, screen readers and other assistive technologies can announce changes to users with visual disabilities.
- **Window roles**: These roles define sub-windows, like pop up modal dialogues. These roles include `alertdialog` and `dialog`. 
- **Abstract roles**: These roles help organize the document. They're only meant to be used internally by the browser, not by developers, so you should know that they exist but you shouldn't use them on your websites or web applications.

- **`aria-label` and `aria-labelledby` attributes**: These attributes are used to give an element a programmatic (or accessible) name, which helps people using assistive technology (such as screen readers) understand the purpose of the element. They are often used when the visual label for an element is an image or symbol rather than text. `aria-label` allows you to define the name directly in the attribute while `aria-labelledby` allows you to reference existing text on the page.

```html
<button aria-label="Search">
    <i class="fas fa-search"></i>
</button>
```

```html
<input type="text" aria-labelledby="search-btn">
<button type="button" id="search-btn">Search</button>
```

- **`aria-hidden` attribute**: Used to hide an element from people using assistive technology such as screen readers. For example, this can be used to hide decorative images that do not provide any meaningful content.

```html
<button>
    <i class="fa-solid fa-gear" aria-hidden="true"></i>
    <span class="label">Settings</span>
</button>
```

- **`aria-expanded` attribute**: Used to convey the state of a toggle (or disclosure) feature to screen reader users.

```html
<button aria-expanded="true">Menu</button>
```

- **`aria-live` attribute**: Used to indicate that an element's content is important enough to require that any changes to the content should be announced immediately to screen reader users. This can include status messages like updating the number of results returned from a search, or an error message displayed after an unsuccessful form submission.

```html
<div aria-live="assertive">
    <p>Your session will expire in 30 seconds.</p>
</div>
```

```html
<div aria-live="polite">
    <p>File successfully uploaded</p>
</div>
```

- **Common Aria states**: Common Aria states include `aria-haspopup`, `aria-checked`, `aria-disabled`, and `aria-selected`. These attributes can be used to indicate the state of an element and help people using assistive technologies understand the content of the website.
- **`aria-haspopup` attribute**: This state is used to indicate that an interactive element will trigger a pop-up element when activated. You can only use the `aria-haspopup` attribute when the pop-up has one of the following roles: `menu`, `listbox`, `tree`, `grid`, or `dialog`. The value of `aria-haspopup` must be either one of these roles or `true`, which is the same as `menu`.
 
```html
<button id="menubutton" aria-haspopup="menu" aria-controls="filemenu" aria-expanded="false">File</button>
<ul id="filemenu" role="menu" aria-labelledby="menubutton" hidden>
  <li role="menuitem" tabindex="-1">Open</li>
  <li role="menuitem" tabindex="-1">New</li>
  <li role="menuitem" tabindex="-1">Save</li>
  <li role="menuitem" tabindex="-1">Delete</li>
</ul>
```

- **`aria-checked` attribute**: This attribute is used to indicate whether an element is in the checked state. It is most commonly used when creating custom checkboxes, radio buttons, switches, and listboxes.

```html
<div role="checkbox" aria-checked="true" tabindex="0">Checkbox</div>
```

- **`aria-disabled` attribute**: This state is used to indicate that an element is disabled only to people using assistive technologies, such as screen readers.

```html
<div role="button" tabindex="-1" aria-disabled="true">Edit</div>
```

- **`aria-selected` attribute**: This state is used to indicate that an element is selected. You can use this state on custom controls like a tabbed interface, a listbox, or a grid.

```html
<div role="tablist">
    <button role="tab" aria-selected="true">Tab 1</button>
    <button role="tab" aria-selected="false">Tab 2</button>
    <button role="tab" aria-selected="false">Tab 3</button>
</div>
```

- **`aria-controls` attribute**: Used to associate an element with another element that it controls. This helps people using assistive technologies understand the relationship between the elements.

```html
<div role="tablist">
    <button role="tab" id="tab1" aria-controls="section1" aria-selected="true">
        Tab 1
    </button>
    <button role="tab" id="tab2" aria-controls="section2" aria-selected="false">
        Tab 2
    </button>
    <button role="tab" id="tab3" aria-controls="section3" aria-selected="false">
        Tab 3
    </button>
</div>
```

- **`aria-describedby` attribute**: Used to provide additional information about an element by associating it with another element that contains the information. This gives people using screen readers immediate access to the additional information when they navigate to the element. Common usage would include associating formatting instructions to a text input or an error message to an input after an invalid form submission.

```html
<form>
    <label for="password">Password:</label>
    <input type="password" id="password" aria-describedby="password-help" />
    <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```

# --assignment--

Review the HTML topics and concepts.
