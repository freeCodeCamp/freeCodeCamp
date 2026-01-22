---
id: 672995d673bd3237200b9e7c
title: How Do You Display Abbreviations in HTML?
challengeType: 19
dashedName: how-do-you-display-abbreviations-and-acronyms-in-html
---

# --interactive--

An abbreviation is a shortened form of a word or phrase. For example, "Dr" followed by a period, is an abbreviation for the word "doctor".

There are two common forms of abbreviations: acronyms and initialisms.

An acronym is a word formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase.

GUI is an example of an acronym. It stands for Graphical User Interface. By taking the first letters of each word G, U, and I, you get the acronym GUI.

An initialism is formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase.

For example, HTML is an initialism; it stands for HyperText Markup Language and is pronounced by spelling out each letter H, T, M, L.

Both acronyms and initialisms are types of abbreviations. The distinction is acronyms are pronounced as words and initialisms are pronounced as individual letters.

They are very helpful for writing more concise text, especially when they are well-known and easy to understand in a given context. 

If you need to display abbreviations such as acronyms or initialisms in HTML, the abbreviation element is exactly what you're looking for. You should always explain their full meaning when you use them for the first time. Then you can use the abbreviation element to highlight them and provide more details. 

Here's an example where you can see a paragraph with the sentence `HTML is the foundation of the web`: 

:::interactive_editor

```html
<p><abbr>HTML</abbr> is the foundation of the web.</p>
```

:::

The initialism HTML is within an abbreviation element. In the browser, you'll see that nothing has really changed. It still looks like normal text. The abbreviation element is providing helpful context behind the scenes, but users will still see the initialism as normal text. 

If you want to help users understand what this initialism means, you can show its full form with the `title` attribute.

The `title` attribute is optional, but if you decide to include it, it must be a human readable description of the abbreviation, acronym, or initialism.

Let's take the same example as before, but add the `title` attribute. It will be `HyperText Markup Language`, the expanded form of the initialism:

:::interactive_editor

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>
```

:::

Usually, the style of the abbreviation element will change when you add this attribute. The specific style will depend on the browser. Some browsers may display a dotted underline, while others may convert the contents to small caps. When the user hovers over the abbreviation, the full form is displayed as a tooltip.

While you don't necessarily need to use the abbreviation element for every abbreviation on your web page, it's recommended for those that might be unclear and those that might need additional context.

You should use your best judgment to find the right balance between information and presentation to avoid cluttering the text while being clear and concise.

# --questions--

## --text--

Which HTML element is used to indicate an abbreviation or acronym?

## --answers--

`abbr`

---

`acronym`

### --feedback--

Think about an element that is specifically designed for shortened words.

---

`abbrev`

### --feedback--

Think about an element that is specifically designed for shortened words.

---

`acron`

### --feedback--

Think about an element that is specifically designed for shortened words.

## --video-solution--

1

## --text--

What is the primary purpose of the `abbr` element?

## --answers--

To style text as an abbreviation.

### --feedback--

Think about how the abbreviation element can help users.

---

To indicate an abbreviation or acronym and provide additional information.

---

To shorten the content of a webpage.

### --feedback--

Think about how the abbreviation element can help users.

---

To improve search engine rankings.

### --feedback--

Think about how the abbreviation element can help users.

## --video-solution--

2

## --text--

What attribute can be used within the `abbr` element to provide the full form of an acronym or abbreviation?

## --answers--

`explain`

### --feedback--

Think about the attribute that displays more information about the abbreviation or acronym. When the user hovers over the `abbr` element with the mouse, this information is displayed.

---

`description`

### --feedback--

Think about the attribute that displays more information about the abbreviation or acronym. When the user hovers over the `abbr` element with the mouse, this information is displayed.

---

`title`

---

`fullform`

### --feedback--

Think about the attribute that displays more information about the abbreviation or acronym. When the user hovers over the `abbr` element with the mouse, this information is displayed.

## --video-solution--

3
